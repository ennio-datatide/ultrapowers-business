import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtempSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { classify, turnsOf } from "../read-chatgpt-export.mjs";
import { conversations } from "./fixture.mjs";

const script = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "read-chatgpt-export.mjs");

test("follows the branch the conversation ended on, user and assistant only", () => {
  const turns = turnsOf(conversations[0]);
  assert.deepEqual(turns.map((t) => t.role), ["user", "assistant", "user", "assistant", "user", "assistant"]);
  assert.ok(!turns.some((t) => t.text === "rama abandonada"));
  assert.equal(turns.at(-1).text, "Me alegro.\n[imagen]");
});

test("tells corrections from approvals, and ignores long new requests", () => {
  assert.equal(classify("Demasiado formal, más cercano"), "correction");
  assert.equal(classify("No me gusta el final"), "correction");
  assert.equal(classify("Perfecto, así sí"), "approval");
  assert.equal(classify("Make it shorter please"), "correction");
  assert.equal(classify("Ahora escríbeme otro email"), null);
  assert.equal(classify("x".repeat(700) + " perfecto"), null);
});

test("writes the index, the conversations, the signals and the approved drafts, from a zip too", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "voice-test-"));
  writeFileSync(path.join(dir, "conversations.json"), JSON.stringify(conversations));
  execFileSync("zip", ["-qj", path.join(dir, "export.zip"), path.join(dir, "conversations.json")]);
  const out = path.join(dir, "out");
  const log = execFileSync("node", [script, path.join(dir, "export.zip"), out, "--only", "lanzamiento"]).toString();
  assert.match(log, /1 conversations of 2/);
  const index = readFileSync(path.join(out, "index.tsv"), "utf8");
  assert.match(index, /Lanzamiento curso nutrición/);
  assert.doesNotMatch(index, /lentejas/);
  const signals = readFileSync(path.join(out, "signals.md"), "utf8");
  assert.match(signals, /1 correcciones, 1 aprobaciones/);
  assert.match(signals, /La versión que vino después/);
  assert.match(readFileSync(path.join(out, "kept.md"), "utf8"), /Abro plazas hoy/);
  assert.ok(existsSync(path.join(out, "conversations")));
});

test("--since leaves older conversations out", () => {
  const dir = mkdtempSync(path.join(tmpdir(), "voice-test-"));
  writeFileSync(path.join(dir, "conversations.json"), JSON.stringify(conversations));
  const log = execFileSync("node", [script, path.join(dir, "conversations.json"), path.join(dir, "out"), "--since", "2025-01-01"]).toString();
  assert.match(log, /1 conversations of 2/);
});
