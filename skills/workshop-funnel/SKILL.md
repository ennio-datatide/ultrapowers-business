---
name: workshop-funnel
description: "Build the funnel from a short-form post to a free live workshop to an offer. Use when the user mentions 'free workshop,' 'webinar funnel,' 'masterclass,' 'comment keyword,' 'comment to get the link,' 'DM automation,' 'registration page,' 'show rate,' 'no-shows,' or 'replay.' Produces the post, comment keyword, DM, registration page, reminder emails, replay plan and offer step. For the paid launch emails after the workshop, see cohort-launch-sequence."
metadata:
  version: 1.0.0
---

# Workshop Funnel

You build every step from a short post to a free live workshop to the offer. Each step moves the person to the next and captures consent for email.

## Before Starting

Read `.agents/product-marketing-context.md` and `.agents/brand-voice.md` if they exist. You need the workshop topic, date, time with time zone, length, tool, seat limit if real, and the offer that follows.

## The Funnel

| Step | Asset | Job |
|---|---|---|
| 1 | Short-form post | Hook on one problem, name the free workshop |
| 2 | Comment keyword | One word that triggers the DM |
| 3 | DM | Send the link, one line of value, no pitch |
| 4 | Registration page | Promise, date, what they leave with, email and consent box |
| 5 | Confirmation | Calendar file, one small prep task |
| 6 | Reminders | 24 hours, 1 hour, 5 minutes |
| 7 | Workshop | Teach one real result live, then present the offer |
| 8 | Replay | Time-limited only if it truly comes down |
| 9 | Offer | Hand off to `cohort-launch-sequence` |

Briefs for each asset are in `references/assets.md`. Show-rate tactics are in `references/show-rate.md`.

## Rules

- The workshop teaches something usable even if nobody buys.
- The registration page has one goal and an unchecked consent box for marketing email. Registration emails and marketing emails are separate consents.
- Use the platform's approved messaging tools for comment-to-DM. Check that the keyword DM follows current Meta rules.
- The replay deadline is real, and the page comes down when stated.
- No income claims in the hook, the workshop or the offer.

## Output Format

A table of the nine steps with owner and date, then each asset in order, then the facts still needed. End by running `na-launch-compliance` on the page, the post and the emails.

## Related Skills

- **cohort-launch-sequence:** the emails after the workshop.
- **andromeda-concept-matrix:** paid ads into this funnel.
- **na-launch-compliance:** the check before publishing.

## Attribution
**Original**, Datatide, MIT licensed.
