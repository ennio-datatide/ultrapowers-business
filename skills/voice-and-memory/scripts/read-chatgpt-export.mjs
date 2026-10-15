#!/usr/bin/env node
// Reads a ChatGPT data export (the .zip, its folder, or conversations.json) and writes what the
// voice-and-memory skill works from, all on this computer:
//
//   index.tsv           one line per conversation: date, title, turns, words the person wrote
//   conversations/      each conversation as Markdown, the branch that was kept, oldest first
//   signals.md          the person's reactions to a draft: corrections ("más corto", "no uses...")
//                       and approvals ("así sí", "perfect"), each with the draft it answered
//   kept.md             drafts the person approved, the best examples of the voice they want
//
// Usage: node read-chatgpt-export.mjs <export.zip | folder | conversations.json> [out-dir]
//          [--since YYYY-MM-DD] [--only "launch,email,instagram"]
// --only keeps conversations whose title or first message mentions one of the words.
// Needs Node 18 or later and nothing else. A .zip is opened with the system's tar or unzip.
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";

// Words that mark a reply as a correction or an approval of the draft before it. Spanish and English.
const CORRECTION = [
  "más corto", "mas corto", "más largo", "más cercano", "mas cercano", "menos formal", "más formal",
  "más natural", "más directo", "menos", "no uses", "no pongas", "quita", "cambia", "cámbialo", "reescribe",
  "demasiado", "suena", "no suena", "tono", "no me gusta", "no es mi", "yo no diría", "evita", "sin emojis",
  "shorter", "longer", "less formal", "more casual", "too ", "don't use", "do not use", "remove", "rewrite",
  "sounds", "tone", "i wouldn't say", "not my", "avoid", "make it",
];
const APPROVAL = [
  "perfecto", "así sí", "asi si", "me encanta", "me gusta", "genial", "brutal", "eso es", "justo eso",
  "lo uso", "lo usaré", "me lo quedo", "buenísimo", "buenisimo", "great", "perfect", "love it", "that's it",
  "exactly", "i'll use", "nailed it", "this is good",
];



/** The conversations files of an export: conversations.json, or conversations-000.json and so on. */
export function conversationFiles(source) {
  const full = path.resolve(source);
  if (!existsSync(full)) throw new Error(`Not found: ${full}`);
  if (statSync(full).isFile() && full.endsWith(".json")) return [full];
  let dir = full;
  if (statSync(full).isFile()) {
    dir = mkdtempSync(path.join(tmpdir(), "chatgpt-export-"));
    try {
      execFileSync("tar", ["-xf", full, "-C", dir], { stdio: "ignore" });
    } catch {
      execFileSync("unzip", ["-q", full, "-d", dir], { stdio: "ignore" });
    }
  }
  const found = [];
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const p = path.join(d, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (/^conversations(-\d+)?\.json$/.test(name)) found.push(p);
    }
  };
  walk(dir);
  if (!found.length) throw new Error("No conversations.json in the export");
  return found.sort();
}

/** The text of one message: its string parts joined; images and files are noted, not copied. */
function textOf(message) {
  const content = message?.content;
  if (!content) return "";
  if (Array.isArray(content.parts)) {
    return content.parts
      .map((p) => (typeof p === "string" ? p : p?.content_type?.includes("image") ? "[imagen]" : typeof p?.text === "string" ? p.text : ""))
      .join("\n")
      .trim();
  }
  if (typeof content.text === "string") return content.text.trim();
  return "";
}

/** The messages of the branch the conversation ended on, oldest first, user and assistant only. */
export function turnsOf(conversation) {
  const mapping = conversation.mapping ?? {};
  let id = conversation.current_node;
  if (!id || !mapping[id]) {
    // No current node: take the last message by time.
    id = Object.values(mapping)
      .filter((n) => n.message?.create_time)
      .sort((a, b) => b.message.create_time - a.message.create_time)[0]?.id;
  }
  const chain = [];
  const seen = new Set();
  while (id && mapping[id] && !seen.has(id)) {
    seen.add(id);
    chain.push(mapping[id]);
    id = mapping[id].parent;
  }
  return chain
    .reverse()
    .map((n) => ({ role: n.message?.author?.role, text: textOf(n.message), at: n.message?.create_time ?? null }))
    .filter((t) => (t.role === "user" || t.role === "assistant") && t.text);
}

const has = (text, words) => {
  const lower = ` ${text.toLowerCase()} `;
  return words.some((w) => lower.includes(w));
};

/** A reply to a draft that corrects it or approves it. Long replies are new requests, not reactions. */
export function classify(reply) {
  if (reply.length > 600) return null;
  if (has(reply, CORRECTION)) return "correction";
  if (has(reply, APPROVAL)) return "approval";
  return null;
}

const day = (seconds) => (seconds ? new Date(seconds * 1000).toISOString().slice(0, 10) : "");
const words = (text) => text.split(/\s+/).filter(Boolean).length;
const slug = (s) =>
  (s || "sin-titulo")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 60) || "sin-titulo";
const clip = (text, n) => (text.length > n ? text.slice(0, n) + " [...]" : text);
const quote = (text) => text.split("\n").map((l) => `> ${l}`).join("\n");

function main() {
  const args = process.argv.slice(2);
  const flag = (name) => {
    const i = args.indexOf(name);
    if (i === -1) return null;
    const value = args[i + 1];
    args.splice(i, 2);
    return value;
  };
  const since = flag("--since");
  const only = (flag("--only") ?? "").split(",").map((w) => w.trim().toLowerCase()).filter(Boolean);
  const [input, outArg] = args;
  if (!input) {
    console.error("Usage: node read-chatgpt-export.mjs <export.zip | folder | conversations.json> [out-dir] [--since YYYY-MM-DD] [--only words]");
    process.exit(1);
  }
  const out = path.resolve(outArg ?? "voice-work");
  const all = conversationFiles(input).flatMap((f) => JSON.parse(readFileSync(f, "utf8")));
  const kept = all
    .map((c) => ({ c, turns: turnsOf(c), date: day(c.create_time) }))
    .filter(({ turns }) => turns.length > 0)
    .filter(({ date }) => !since || date >= since)
    .filter(({ c, turns }) => {
      if (!only.length) return true;
      const head = `${c.title ?? ""} ${turns[0]?.text ?? ""}`.toLowerCase();
      return only.some((w) => head.includes(w));
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  mkdirSync(path.join(out, "conversations"), { recursive: true });
  const index = ["date\ttitle\tturns\tuser_words\tfile"];
  const signals = [];
  const approved = [];

  for (const { c, turns, date } of kept) {
    const file = `${date}-${slug(c.title)}-${String(c.id ?? c.conversation_id ?? "").slice(0, 6)}.md`;
    const userWords = turns.filter((t) => t.role === "user").reduce((n, t) => n + words(t.text), 0);
    index.push([date, (c.title ?? "").replace(/\t/g, " "), turns.length, userWords, file].join("\t"));
    const body = turns.map((t) => `### ${t.role === "user" ? "Yo" : "ChatGPT"}\n\n${t.text}`).join("\n\n");
    writeFileSync(path.join(out, "conversations", file), `# ${c.title ?? "Sin título"}\n\n${date}\n\n${body}\n`);

    turns.forEach((t, i) => {
      const draft = turns[i - 1];
      if (t.role !== "user" || draft?.role !== "assistant") return;
      const kind = classify(t.text);
      if (!kind) return;
      const after = turns[i + 1]?.role === "assistant" ? turns[i + 1].text : null;
      signals.push({ kind, date, title: c.title ?? "", file, reply: t.text, draft: draft.text, after });
      if (kind === "approval") approved.push({ date, title: c.title ?? "", file, text: draft.text });
    });
  }

  writeFileSync(path.join(out, "index.tsv"), index.join("\n") + "\n");
  const signalText = signals
    .map(
      (s) =>
        `## ${s.kind === "correction" ? "Corrección" : "Aprobación"} · ${s.date} · ${s.title}\n\nArchivo: conversations/${s.file}\n\n` +
        `**Lo que dije:**\n\n${quote(s.reply)}\n\n**Sobre este borrador:**\n\n${quote(clip(s.draft, 1500))}\n` +
        (s.kind === "correction" && s.after ? `\n**La versión que vino después:**\n\n${quote(clip(s.after, 1500))}\n` : ""),
    )
    .join("\n---\n\n");
  writeFileSync(
    path.join(out, "signals.md"),
    `# Correcciones y aprobaciones\n\n${signals.filter((s) => s.kind === "correction").length} correcciones, ` +
      `${signals.filter((s) => s.kind === "approval").length} aprobaciones.\n\n${signalText}\n`,
  );
  writeFileSync(
    path.join(out, "kept.md"),
    `# Borradores aprobados\n\n${approved.map((a) => `## ${a.date} · ${a.title}\n\nArchivo: conversations/${a.file}\n\n${quote(clip(a.text, 2500))}`).join("\n\n---\n\n")}\n`,
  );
  console.log(
    `${kept.length} conversations of ${all.length} → ${out}\n` +
      `${signals.filter((s) => s.kind === "correction").length} corrections, ${approved.length} approved drafts`,
  );
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1]?.endsWith("read-chatgpt-export.mjs")) main();
