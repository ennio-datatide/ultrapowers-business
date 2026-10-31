# Deliverability

Checked 2026-11-01. Gmail treats a 0.3% spam rate as the limit and recommends under 0.1%. Microsoft thresholds were not confirmed from its own documentation.

- SPF, DKIM and DMARC set up on the sending domain before warm-up starts.
- RFC 8058 one-click unsubscribe header on all marketing mail.
- Complaint budget: under 0.1% per send. Watch Google Postmaster Tools.
- Warm up new domains with the most engaged contacts first.
- Non-opener sunset: after the warm-up, move contacts with no open or click in 90 days to a single re-permission email. Then stop mailing them. Treat the 90 days as a default to adjust.
- Apple Mail privacy inflates opens. Prefer clicks and replies as the engagement signal.
- Canadian contacts need a consent record. See `na-launch-compliance`.
- Postal address and sender name in every footer.
