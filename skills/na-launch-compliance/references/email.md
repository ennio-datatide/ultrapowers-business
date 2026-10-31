# Email and Consent

Checked against sources on 2026-11-01 unless marked. CASL details come from the integration brief and were not re-read against CRTC text in this pass.

**E1. Express consent for Canada.** FAIL on a pre-checked consent box, or consent bundled into terms. The box starts unchecked, and the form says who is asking and what they will send. Basis: CASL. A checkbox shown only in a description rather than markup: check what was described.

**E2. Consent record.** Keep the date, source, wording and IP or form ID for each consent. No record: NEEDS EVIDENCE. Under CASL the sender carries the burden of proof.

**E3. Identification and postal address.** FAIL on a commercial email with no valid physical postal address or no sender identification. Basis: CAN-SPAM and CASL.

**E4. Working unsubscribe.** FAIL on a commercial email with no clear unsubscribe. Honor it at once. CAN-SPAM allows 10 business days and CASL 10 business days, and bulk mailbox rules expect about two days, so apply the shortest.

**E5. No deceptive headers or subjects.** FAIL on a false "Re:" or "Fwd:", or a subject line that misstates the content.

**E6. Bulk sender setup.** SPF, DKIM and DMARC in place, and RFC 8058 one-click unsubscribe headers on marketing mail. Gmail treats 0.3% spam complaints as the limit and recommends staying under 0.1%. Use 0.1% as the budget. Microsoft thresholds were not confirmed from its own documentation. Not visible in copy: NEEDS EVIDENCE.
