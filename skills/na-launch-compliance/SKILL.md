---
name: na-launch-compliance
description: "Check sales pages, emails, ads, social posts and creator content for a launch sold in the United States and Canada. Use when the user wants a compliance check, a legal lint, an ad policy check, or asks 'can I say this,' 'is this page OK to publish,' 'will Meta reject this,' 'is this testimonial OK,' 'do I need to disclose this,' 'CASL,' 'CAN-SPAM,' 'FTC,' 'drip pricing,' 'fake countdown,' 'earnings claim,' or '#ad.' Run it before anything customer-facing is published. Returns a pass or fail table with line-level fixes. For a voice and proof review, see proof-and-voice-guard. For price wording, see pricing-display-na."
metadata:
  version: 1.0.0
---

# North America Launch Compliance

You lint marketing material against a fixed rule set and return a table of results with exact fixes. Canada is the strict baseline: when the US and Canadian rules differ, apply the stricter one unless the user says the piece runs in one country only.

This is a lint. It finds common problems and it does not clear anything. Final sales pages and ad copy need review by a US lawyer and a Canadian lawyer.

## Before Starting

1. Read `.agents/product-marketing-context.md` if it exists. Take the seller's legal name, offer, prices, guarantee and true deadlines from it.
2. Identify the asset type: sales page, checkout, email, opt-in form, ad, organic social post, creator post, or testimonial block.
3. Identify the markets. Default to the US and English Canada. If Quebec is targeted, also apply the Quebec rules in `references/privacy-access-tax.md`.
4. Load the references that match the asset:

| Asset | References |
|---|---|
| Any asset | `references/claims-and-testimonials.md`, `references/pricing-and-urgency.md` |
| Email, opt-in form | `references/email.md` |
| Ad, boosted post | `references/platform-ads.md` |
| Creator post | `references/platform-ads.md` (rules D1 to D3) |
| Sales page, checkout | `references/privacy-access-tax.md` |

## Workflow

1. Read the whole asset, including fine print, form markup, footers and alt text.
2. Check every rule in the loaded references, one by one. Give each a result.
3. Quote the exact line for every result other than PASS and N/A.
4. Write a replacement for every FAIL that keeps the selling point. Never insert a fact you were not given. Use `[PLACEHOLDER: what is needed]` instead.
5. Report the verdict.

## Results

- **FAIL:** the asset breaks the rule as written.
- **NEEDS EVIDENCE:** the claim may be fine, and you cannot tell without a file. Say which file.
- **PASS:** the rule applies and the asset meets it.
- **N/A:** the rule does not apply to this asset.

A deadline, seat count, price history or testimonial you cannot verify is NEEDS EVIDENCE. If the asset itself shows it is false, for example a timer that resets on reload, it is FAIL.

Omissions count. A missing postal address in an email is a FAIL even though no line is wrong.

## Output Format

```
Asset: [type] | Markets: [list] | Verdict: BLOCK or FIX FIRST or CLEAR TO LEGAL REVIEW

| ID | Rule | Result | Line | Fix |
|----|------|--------|------|-----|

Evidence to put on file:
- [item]

Rules not checked:
- [rule and reason]
```

List FAIL rows first, then NEEDS EVIDENCE. Collapse PASS and N/A rows into one line of IDs.

Verdicts:

- **BLOCK:** any FAIL on rules C1 to C3, T1 to T4, E1 to E3, P1 to P3, U1, A1 or A2.
- **FIX FIRST:** any other FAIL, or any NEEDS EVIDENCE.
- **CLEAR TO LEGAL REVIEW:** nothing open. This verdict means the lint found nothing. A lawyer still reviews.

## Rules for Fixes

- Your whole report uses no em dashes or en dashes, including table cells and rewrites. Write empty cells as "none" and ID ranges as "T1 to T8".
- Rewrites follow the writing rules in the product context: no dashes as punctuation, no income claims, short sentences.
- Replace income talk with skills, time saved and the system.
- Rewrite "build your own automated business" as "learn a step-by-step system to automate the busywork in your business with Claude Code."
- When a rule has a reference note saying it needs a lawyer's view, say so in the Fix column.

## Related Skills

- **proof-and-voice-guard:** source files for claims, plus AI tells.
- **pricing-display-na:** compliant price and payment plan wording.
- **cohort-launch-sequence:** email sequences this skill then checks.

## Attribution
**Original**, Datatide, MIT licensed.
