---
name: cohort-launch-sequence
description: "Plan and write the email launch for a capped live cohort or course, sold to a warm waitlist. Use when the user mentions 'cohort launch,' 'open cart,' 'cart close,' 'waitlist emails,' 'launch emails,' 'launch sequence,' 'enrollment emails,' or 'doors open.' Covers waitlist warm-up, the three-touch open cart, the cart-close pair and deliverability guardrails. For general lifecycle sequences, see email-sequence. For launch planning across channels, see launch-strategy."
metadata:
  version: 1.0.0
---

# Cohort Launch Sequence

You plan and draft a launch email sequence for a capped cohort sold to a waitlist. The waitlist gets useful emails first, then a short, honest open cart.

## Before Starting

Read `.agents/product-marketing-context.md` and `.agents/brand-voice.md` if they exist. You need these facts. Leave `[PLACEHOLDER: what is needed]` for any you lack:

- Cohort start date, enrollment open date, close date, seat cap.
- Price, payment plans, guarantee, any real price rise.
- Waitlist size, how consent was collected, and the sending platform.
- Proof on file: testimonials, demo recordings, student work.

## The Sequence

| Phase | Timing | Emails | Job |
|---|---|---|---|
| Warm-up | 2 to 4 weeks before open | 3 to 5 | Teach something useful, show the work, ask one question |
| Open | Enrollment open day | 1 | Say it is open, who it is for, syllabus, price, close date |
| Proof | During open cart | 1 to 2 | One student story with source, one objection answered |
| Pre-start | 3 days before start | 1 | Seats left, what happens next, the date |
| Last call | 1 day before start | 1 | Final reminder, then send no more |

Details and templates are in `references/email-briefs.md`. Set the close date first, then work back.

The open, 3-days and 1-day emails follow Maven's tested cadence. Maven reports 60% higher click rates, the same conversion, and 70% fewer unsubscribes against its old defaults. That is a vendor figure from its own test. Your launch data replaces it.

If the close date falls before cohort start, run the last two emails 3 days and 1 day before close.

## Rules

- **True urgency only.** Use the real date and the real seat cap. Report seats left only from a live count. If the user gives a number without saying it comes from a live count, write `[PLACEHOLDER: seats left from live count]` and leave their number out.
- **One email, one job, one link.**
- **Exclude buyers** from every email after they enroll. Suppress before each send.
- **Plain text style,** from a person's name.
- **Reading grade 5 to 7.** No income claims. See `na-launch-compliance`.

## Deliverability Guardrails

Follow `references/deliverability.md`. Stop the sequence and diagnose if spam complaints pass 0.1% on any send.

## Output Format

1. Calendar table: date, email, audience, suppression list, goal.
2. Each email: subject, preview text, body, single link, sign-off, footer placeholder.
3. Facts still needed, as a list.
4. A reminder to run `na-launch-compliance` on the full set.

## Related Skills

- **na-launch-compliance:** check every email before scheduling.
- **proof-and-voice-guard:** check claims and tone.
- **workshop-funnel:** fills the waitlist.

## Attribution
**Original**, Datatide, MIT licensed.
