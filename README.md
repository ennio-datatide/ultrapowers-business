# Ultrapowers Business

38 business skills for your coding agents — marketing, SEO, copywriting, conversion optimization, compliance, finance, and sales enablement. A companion plugin to [Ultrapowers](https://github.com/ennio-datatide/ultrapowers).

**[Documentation](https://www.datatide.com/ultrapowers)** · **[GitHub](https://github.com/ennio-datatide/ultrapowers-business)** · **[Issues](https://github.com/ennio-datatide/ultrapowers-business/issues)**

## How it works

These skills give your coding agent domain expertise beyond software engineering. Need a landing page with conversion-optimized copy? A GDPR-compliant data flow? A financial model for your pitch deck? Your agent knows how.

Each skill is self-contained and triggers automatically when relevant. No special commands needed — your agent just has business superpowers.

## Example

> "Create a landing page for our SaaS launch."

The agent applies copywriting skills for conversion-optimized headlines and CTAs, page-cro for layout and A/B test hypotheses, schema-markup for rich snippets, and analytics-tracking for funnel events — all in a single session without you needing to invoke anything manually.

## Installation

### Claude Code (via Ultrapowers Marketplace)

Register the marketplace first (one time):

```bash
/plugin marketplace add ennio-datatide/ultrapowers
```

Then install:

```bash
/plugin install ultrapowers-business@ultrapowers
```

### From Source

```bash
git clone https://github.com/ennio-datatide/ultrapowers-business.git
```

### Verify Installation

Start a new session and ask for something that should trigger a skill (for example, "write me a cold email sequence" or "audit this page for SEO"). The agent should automatically invoke the relevant skill.

## What's Inside

### Marketing & Growth (13 skills)

| Skill | What it covers |
|-------|---------------|
| `seo-audit` | Site-wide SEO analysis, technical issues, content gaps |
| `ai-seo` | AI search optimization, LLM visibility, answer engine strategy |
| `programmatic-seo` | Template-driven pages at scale, dynamic content generation |
| `site-architecture` | Information architecture, URL structure, internal linking |
| `schema-markup` | Structured data, rich snippets, JSON-LD implementation |
| `content-strategy` | Editorial planning, content pillars, distribution channels |
| `social-content` | Platform-native content, engagement patterns, scheduling |
| `copywriting` | Headlines, CTAs, AIDA framework, tone of voice, conversion copy |
| `copy-editing` | Style consistency, clarity, grammar, brand voice alignment |
| `marketing-ideas` | Campaign ideation, channel strategy, creative briefs |
| `marketing-psychology` | Behavioral triggers, persuasion patterns, cognitive biases |
| `paid-ads` | PPC campaigns, ad copy, targeting, budget allocation |
| `ad-creative` | Visual and copy direction for ad campaigns |

### Conversion & Growth (8 skills)

| Skill | What it covers |
|-------|---------------|
| `page-cro` | Landing page optimization, A/B test hypotheses, layout |
| `form-cro` | Form design, field optimization, friction reduction |
| `signup-flow-cro` | Registration flow optimization, progressive profiling |
| `onboarding-cro` | User activation, first-run experience, time-to-value |
| `popup-cro` | Exit intent, scroll triggers, timing, frequency capping |
| `paywall-upgrade-cro` | Free-to-paid conversion, plan comparison, upgrade triggers |
| `ab-test-setup` | Experiment design, statistical significance, test duration |
| `analytics-tracking` | Event tracking, funnel analysis, attribution |

### Outbound & Sales (9 skills)

| Skill | What it covers |
|-------|---------------|
| `cold-email` | Outbound sequences, personalization, deliverability |
| `email-sequence` | Drip campaigns, nurture flows, lifecycle messaging |
| `lead-magnets` | Gated content strategy, value exchange, capture forms |
| `free-tool-strategy` | Free tool as acquisition channel, viral loops |
| `referral-program` | Referral mechanics, incentives, tracking |
| `launch-strategy` | Go-to-market planning, launch sequences, PR |
| `competitor-alternatives` | Competitive positioning, comparison pages, switching guides |
| `sales-enablement` | Sales collateral, battle cards, objection handling |
| `product-marketing-context` | Positioning, messaging, value propositions |

### Finance & Business (5 skills)

| Skill | What it covers |
|-------|---------------|
| `financial-modeling` | Revenue projections, unit economics, burn rate, runway |
| `pitch-deck` | Slide structure, storytelling, metrics, investor Q&A prep |
| `pricing-strategy` | Pricing models, willingness-to-pay, packaging |
| `churn-prevention` | Retention analysis, intervention triggers, win-back |
| `revops` | Revenue operations, pipeline metrics, forecasting |

### Compliance & Legal (2 skills)

| Skill | What it covers |
|-------|---------------|
| `gdpr-compliance` | Data subject rights, consent, DPO, DPIA, breach notification |
| `soc2-compliance` | Trust service criteria, Type I vs Type II, evidence collection |

### Content & Communication (1 skill)

| Skill | What it covers |
|-------|---------------|
| `technical-writing` | API docs, READMEs, changelogs, architecture decision records |

## Companion Plugins

- **[ultrapowers](https://github.com/ennio-datatide/ultrapowers)** — Core workflow engine (brainstorming → research → planning → implementation)
- **[ultrapowers-dev](https://github.com/ennio-datatide/ultrapowers-dev)** — 52 development skills (languages, frameworks, architecture, agentic patterns)

## Updating

```bash
/plugin update ultrapowers-business
```

## Contributing

Skills live directly in this repository. To contribute:

1. Fork the repository
2. Create a branch for your skill
3. Submit a PR

## License

MIT License — Copyright (c) 2026 Datatide. See LICENSE file for details.

## Community

Built by [Ennio Maldonado](https://www.enniomaldonado.com) at [Datatide](https://www.datatide.com).

- **Docs**: https://www.datatide.com/ultrapowers
- **Issues**: https://github.com/ennio-datatide/ultrapowers-business/issues
