---
name: voice-and-memory
description: "When the user wants the agent to write like them, to bring their tone or their history from ChatGPT (or another AI) into Claude, or to set up a memory of their business that every task can use. Also use when the user says 'write in my voice,' 'my tone,' 'it doesn't sound like me,' 'it sounds like AI,' 'import from ChatGPT,' 'my ChatGPT history,' 'export my chats,' 'que suene a mí,' 'mi tono,' 'se nota que es IA,' 'traer mi historial de ChatGPT,' or 'memoria de mi negocio.' Builds `.agents/brand-voice.md` and `.agents/business-memory.md` from the person's own corrections, the drafts they approved and what they already published. Every writing skill reads them afterwards."
metadata:
  version: 1.0.0
---

# Voice and Memory

You build two files that make every later piece of writing sound like this person and know their business:

- `.agents/brand-voice.md`: how they write. Traits, what they are and are not, their words, the phrases they never use, one section per channel, and real examples.
- `.agents/business-memory.md`: what is true about their business. Offer, prices, clients and how those clients talk, past launches and what worked.

Both live in a private local folder (their business repository), under version control, and never in a public repository. Write both files in the language the person writes their business in.

## Why it works this way

A voice is not a list of adjectives. "Cercano y profesional" describes half the businesses in the world. What pins down a voice is evidence:

1. **Their corrections.** Every "más corto", "yo no diría eso", "sin emojis" they ever gave an AI is a rule about their voice.
2. **What they approved.** The drafts they answered with "perfecto, así sí" are examples of the voice they want.
3. **What they published.** Their posts, emails and pages are the voice in the wild.

The rules come from 1, the examples from 2 and 3. Examples beat descriptions: keep the real ones.

## Workflow

### Step 1: Check what exists

Read `.agents/brand-voice.md` and `.agents/business-memory.md` if they exist, and `.agents/product-marketing-context.md` (its Brand Voice and Customer Language sections are a start). If the voice file exists, ask whether to refine it with new material or start again.

### Step 2: Gather the material

Ask for whichever of these they have. Each one is optional; two are enough to start.

- **Their ChatGPT export.** In ChatGPT: Settings → Data controls → Export data. A link arrives by email, valid for 24 hours; the download is a .zip. Ask for its path.
- **What ChatGPT remembers.** Settings → Personalization → Memory → Manage, and their custom instructions. They can copy both, or paste this into ChatGPT: "List everything you remember about me and my business, and my preferences for how you write for me, as bullet points. Include my custom instructions word for word." Then paste the answer here.
- **Published texts.** 10 to 20 pieces they are proud of: Instagram captions, newsletters, a sales page, emails to clients, transcripts of their voice notes. Paste them or point to files and links.
- **Other assistants.** Claude Projects, Gemini or Grok: the same "list everything you remember about me" prompt works there.

Tell them before they share the export: it holds every conversation they ever had with ChatGPT, personal ones included. It stays on this computer. You will only read the business ones.

### Step 3: Read the export

Run the reader, from this skill's folder, on their export. It needs only Node:

```bash
node <skill-dir>/scripts/read-chatgpt-export.mjs <path/to/export.zip> voice-work
```

It writes, inside `voice-work/` (add it to `.gitignore`; it is raw material, not the result):

- `index.tsv`: every conversation with its date, title, number of turns and how much the person wrote.
- `conversations/`: each conversation as Markdown, the branch they kept.
- `signals.md`: their corrections and approvals, each with the draft it answered and, for a correction, the version that came after.
- `kept.md`: the drafts they approved.

Options: `--since 2025-01-01` leaves older conversations out; `--only "lanzamiento,email,instagram"` keeps the ones whose title or first message mentions those words.

Then:

1. Read `index.tsv`. Pick the business conversations (copy, emails, posts, offers, clients, launches) and leave out the personal ones. Show the person the list of titles you picked, in a few lines, and let them remove any.
2. Read `signals.md` for those conversations. Group the corrections into rules: the same correction three times is a rule; once is a note. Write each rule the way they said it.
3. Read `kept.md` and the conversations behind the best approvals. These are candidate examples.
4. For the memory: read the business conversations for facts (what they sell, at what price, to whom, what they launched, how it went, what clients asked). Facts only, each with the date it was true. When two conversations disagree, the newer one wins; note the change.

Some exports are large. Read the index first and the conversations second, a few at a time. Never paste a whole conversation back to the person.

### Step 4: Write the voice file

Use [references/voice-template.md](references/voice-template.md). Fill it from evidence only. Next to each rule, in a short comment, say where it came from (a correction on 12 Mar, three approved posts, their custom instructions). If a section has no evidence, leave it out rather than invent it.

The examples section matters most: 5 to 10 real pieces, their own published texts first and approved drafts second, each labelled by channel. Copy them exactly, including their quirks.

Add their AI tells to the "never" list: the phrases and habits they corrected, plus the ones in [references/ai-tells.md](references/ai-tells.md) for their language.

### Step 5: Write the memory file

Use [references/memory-template.md](references/memory-template.md). Dated facts, short. Keep their clients' own words in "How clients talk": those words are the best copy they will ever have.

### Step 6: The blind test

Before calling it done:

1. Write three short pieces in their voice (a post, an email, a landing headline with its subheadline) about something real from the memory.
2. Show them mixed with three of their own published pieces on similar topics, unlabelled.
3. Ask which ones they wrote.

If they spot yours, ask what gave them away, add it to the file as a rule, and try once more. Two rounds are usually enough.

### Step 7: Connect it

Add to the repository's `CLAUDE.md` (create it if missing):

```markdown
## Voice and memory
Before writing anything for the business, read `.agents/brand-voice.md` and `.agents/business-memory.md`.
When I correct a text, add the correction to `.agents/brand-voice.md` as a rule or note.
```

Commit both files. Remind them the repository must stay private.

## Keeping it alive

The voice file is never finished. Every correction the person makes later is a new rule: add it the moment it happens, with the date, and commit. When a rule turns out wrong, delete it. Review the whole file every few months, and when the business changes (new offer, new audience) update the memory first.

## Using it

Every writing task (copywriting, email-sequence, social-content, copy-editing, cold-email, ad-creative) reads both files first. Apply the general voice, then the channel section. When the voice file and a skill's general advice disagree, the voice file wins: it is this person's evidence, the skill is a default.

## Related skills

- **product-marketing-context**: positioning, audience and offer. Voice-and-memory is how they say it and what has happened; the context is what they sell and to whom.
- **copywriting**, **email-sequence**, **social-content**, **copy-editing**: use these files.

## Attribution
**Original**, Datatide, MIT licensed.
