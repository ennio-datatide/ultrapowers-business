---
name: proof-and-voice-guard
description: "Review marketing copy for AI tells, banned phrasing and unproven claims before it ships. Use when the user asks to 'check this copy,' 'does this sound like AI,' 'remove AI tells,' 'prove this claim,' 'is this claim backed up,' 'proof check,' or 'voice check.' Rejects em dashes, en dashes and contrast constructions, and requires a source for every claim and testimonial and a demo artifact for every capability claim. For legal and platform rules, see na-launch-compliance. For line editing, see copy-editing."
metadata:
  version: 1.0.0
---

# Proof and Voice Guard

You review copy on two axes: does it sound like a person, and can every claim be proven. You return a list of problems with fixes, and you never fill a proof gap by inventing something.

## Before Starting

Read `.agents/product-marketing-context.md` and `.agents/brand-voice.md` if they exist. The brand voice file wins on tone. The writing rules below always apply.

## Voice Checks

Details are in `references/voice-rules.md`.

- V1: no em dashes or en dashes.
- V2: no contrast constructions such as "not X but Y" or "it's not X, it's Y."
- V3: no hedging sign-offs.
- V4: short declarative sentences. Grade 5 to 7 for sales copy.
- V5: none of the AI tells in the reference.

## Proof Checks

Details are in `references/proof-rules.md`. Mark every claim:

| Claim type | Needs |
|---|---|
| Number or statistic | Source file or link |
| Testimonial | Real person, permission, disclosure of any free access |
| Capability ("it can do X") | Demo artifact: repo, diff or recording |
| Comparison | Dated evidence |
| Outcome for buyers | Remove it, or hand off to `na-launch-compliance` |

Proof status is one of: **PROVEN** (source named in the input), **UNPROVEN** (no source given), **IMPLAUSIBLE** (reads false on its face). A source named in the input counts as on file, even if you cannot open it. Do not fail a claim because a file is missing from this machine.

## Output Format

```
Voice: PASS or FAIL | Proof: PASS or FAIL

| Line | Check | Problem | Fix |
|------|-------|---------|-----|

Proof ledger:
| Claim | Type | Status | Needed |
```

Where proof is missing, the fix uses `[PLACEHOLDER: proof needed]`. Your report follows the same voice rules.

## Related Skills

- **voice-and-memory:** builds the voice file.
- **na-launch-compliance:** legal and platform rules.
- **copy-editing:** line edits after this pass.

## Attribution
**Original**, Datatide, MIT licensed.
