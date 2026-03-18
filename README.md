# Ultrapowers Misc

Non-development skills for [ultrapowers](https://github.com/ennio-datatide/ultrapowers) -- marketing, compliance, legal, finance, and business operations.

See also:
- [ultrapowers](https://github.com/ennio-datatide/ultrapowers) -- core skill framework
- [ultrapowers-dev](https://github.com/ennio-datatide/ultrapowers-dev) -- development and engineering skills

## Categories

### Marketing & Growth
- **seo-fundamentals** -- On-page SEO, meta tags, structured data, site speed, mobile-first indexing
- **copywriting** -- Headlines, CTAs, AIDA framework, tone of voice, conversion copy
- **email-marketing** -- Subject lines, segmentation, drip campaigns, A/B testing, deliverability

### Compliance & Legal
- **gdpr-compliance** -- Data subject rights, consent, DPO, DPIA, breach notification, lawful bases
- **soc2-compliance** -- Trust service criteria, Type I vs Type II, evidence collection, controls

### Finance & Business
- **financial-modeling** -- Revenue projections, unit economics, burn rate, runway, fundraising metrics
- **pitch-deck** -- Slide structure, storytelling, metrics that matter, investor Q&A prep

### Content & Communication
- **technical-writing** -- API docs, README structure, changelog, architecture decision records

## Installation

Add skills to your project's `.claude/settings.json`:

```json
{
  "skills": [
    "/path/to/ultrapowers-business/skills/seo-fundamentals/SKILL.md",
    "/path/to/ultrapowers-business/skills/copywriting/SKILL.md"
  ]
}
```

Or reference individual skill files directly in your Claude Code configuration.

## License

MIT -- Datatide
