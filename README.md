<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset=".github/assets/logo-dark.png">
    <img src=".github/assets/logo.png" alt="Ultrapowers Business" width="140" />
  </picture>
</p>

<h1 align="center">Ultrapowers Business</h1>

<p align="center">
  <strong>46 business skills for your coding agents.</strong><br/>
  Marketing, SEO, copywriting, conversion optimization, compliance, finance, and sales enablement.<br/>
  Companion plugin to <a href="https://github.com/ennio-datatide/ultrapowers">Ultrapowers</a>.
</p>

<p align="center">
  <a href="https://github.com/ennio-datatide/ultrapowers-business/releases"><img alt="Version" src="https://img.shields.io/badge/plugin-v1.0.0-6d28d9?style=flat-square"></a>
  <a href="LICENSE"><img alt="License" src="https://img.shields.io/github/license/ennio-datatide/ultrapowers-business?color=6d28d9&style=flat-square"></a>
  <a href="https://github.com/ennio-datatide/ultrapowers-business/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/ennio-datatide/ultrapowers-business?color=6d28d9&style=flat-square"></a>
  <a href="https://github.com/ennio-datatide/ultrapowers-business/pulls"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-6d28d9?style=flat-square"></a>
  <a href="https://docs.claude.com/en/docs/claude-code"><img alt="Claude Code" src="https://img.shields.io/badge/Claude%20Code-plugin-6d28d9?style=flat-square"></a>
</p>

<p align="center">
  <a href="https://datatide.io/ultrapowers"><strong>Documentation</strong></a> ·
  <a href="https://github.com/ennio-datatide/ultrapowers-business"><strong>GitHub</strong></a> ·
  <a href="https://github.com/ennio-datatide/ultrapowers-business/issues"><strong>Issues</strong></a>
</p>

---

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

### Marketing & Growth (14 skills)

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
| `voice-and-memory` | Your voice and your business memory, built from your ChatGPT history, your corrections and what you published, so every text sounds like you |
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

### Compliance & Legal (3 skills)

| Skill | What it covers |
|-------|---------------|
| `gdpr-compliance` | Data subject rights, consent, DPO, DPIA, breach notification |
| `soc2-compliance` | Trust service criteria, Type I vs Type II, evidence collection |
| `na-launch-compliance` | US and Canada launch lint: FTC, CASL, CAN-SPAM, pricing, urgency, Meta and TikTok rules |

### Course Launch (6 skills)

| Skill | What it covers |
|-------|---------------|
| `cohort-launch-sequence` | Waitlist warm-up, three-touch open cart, deliverability guardrails |
| `workshop-funnel` | Post, comment keyword, DM, registration page, reminders, replay, offer |
| `andromeda-concept-matrix` | 6 to 10 distinct Meta concepts, near-duplicate check, test plan |
| `proof-and-voice-guard` | AI tells, banned phrasing, a source for every claim |
| `build-in-public-clips` | One session recording into a tutorial, Shorts and a carousel |
| `pricing-display-na` | USD and CAD display, tax wording, payment plan disclosure |

### Content & Communication (1 skill)

| Skill | What it covers |
|-------|---------------|
| `technical-writing` | API docs, READMEs, changelogs, architecture decision records |

## Attribution

We believe in giving credit where it's due.

- **Forked from [source]** — Modified version, original attribution and license preserved
- **Original** — Written by Datatide, MIT licensed

### Credits

- **[Corey Haines](https://github.com/coreyhaines31/marketingskills)** (MIT) — 33 of 46 skills: all marketing, SEO, CRO, outbound, sales, and most business skills

### Skill Attribution

| Skill | Attribution | Tracks upstream |
|-------|-------------|-----------------|
| `seo-audit` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | seo-audit 1.1.0, commit 68f5eaf, 2026-03-04. Now `seo-audit` 2.2.2 |
| `ai-seo` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | ai-seo 1.1.0, commit 68f5eaf, 2026-03-04. Now `ai-seo` 2.12.0 |
| `programmatic-seo` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | programmatic-seo 1.1.0, commit 68f5eaf, 2026-03-04. Now `programmatic-seo` 2.1.1 |
| `site-architecture` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | site-architecture 1.1.0, commit 68f5eaf, 2026-03-04. Now `site-architecture` 2.1.0 |
| `schema-markup` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | schema-markup 1.1.0, commit e4283c6, 2026-03-04. Now `schema` 2.0.2 |
| `content-strategy` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | content-strategy 1.1.0, commit 51146da, 2026-03-09. Now `content-strategy` 2.1.5 |
| `social-content` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | social-content 1.1.0, commit e4283c6, 2026-03-04. Now `social` 2.4.1 |
| `copywriting` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | copywriting 1.1.0, commit 68f5eaf, 2026-03-04. Now `copywriting` 2.3.2 |
| `copy-editing` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | copy-editing 1.1.0, commit e4283c6, 2026-03-04. Now `copy-editing` 2.2.1 |
| `marketing-ideas` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | marketing-ideas 1.1.0, commit e4283c6, 2026-03-04. Now `marketing-ideas` 2.0.2 |
| `marketing-psychology` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | marketing-psychology 1.1.0, commit e4283c6, 2026-03-04. Now `marketing-psychology` 2.0.0 |
| `paid-ads` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | paid-ads 1.1.0, commit 68f5eaf, 2026-03-04. Now `ads` 2.7.0 |
| `ad-creative` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | ad-creative 1.1.0, commit 68f5eaf, 2026-03-04. Now `ad-creative` 2.12.2 |
| `page-cro` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | page-cro 1.1.0, commit e4283c6, 2026-03-04. Now `cro` 2.0.3 |
| `form-cro` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | form-cro 1.1.0, commit 68f5eaf, 2026-03-04. Now `cro` 2.0.3 |
| `signup-flow-cro` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | signup-flow-cro 1.1.0, commit 68f5eaf, 2026-03-04. Now `signup` 2.0.1 |
| `onboarding-cro` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | onboarding-cro 1.1.0, commit e4283c6, 2026-03-04. Now `onboarding` 2.0.2 |
| `popup-cro` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | popup-cro 1.1.0, commit 1c32ad3, 2026-03-13. Now `popups` 2.0.1 |
| `paywall-upgrade-cro` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | paywall-upgrade-cro 1.1.0, commit e4283c6, 2026-03-04. Now `paywalls` 2.1.1 |
| `ab-test-setup` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | ab-test-setup 1.1.0, commit 68f5eaf, 2026-03-04. Now `ab-testing` 2.0.4 |
| `analytics-tracking` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | analytics-tracking 1.1.0, commit e4283c6, 2026-03-04. Now `analytics` 2.2.2 |
| `cold-email` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | cold-email 1.1.0, commit 68f5eaf, 2026-03-04. Now `cold-email` 2.2.1 |
| `email-sequence` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | email-sequence 1.1.0, commit 1c32ad3, 2026-03-13. Now `emails` 2.1.4 |
| `lead-magnets` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | lead-magnets 1.0.0, commit 1c32ad3, 2026-03-13. Now `lead-magnets` 2.1.1 |
| `free-tool-strategy` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | free-tool-strategy 1.1.0, commit 1c32ad3, 2026-03-13. Now `free-tools` 2.0.3 |
| `referral-program` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | referral-program 1.1.0, commit e4283c6, 2026-03-04. Now `referrals` 2.2.1 |
| `launch-strategy` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | launch-strategy 1.1.0, commit e4283c6, 2026-03-04. Now `launch` 2.2.0 |
| `competitor-alternatives` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | competitor-alternatives 1.1.0, commit e4283c6, 2026-03-04. Now `competitors` 2.3.0 |
| `sales-enablement` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | sales-enablement 1.1.0, commit 68f5eaf, 2026-03-04. Now `sales-enablement` 2.4.0 |
| `product-marketing-context` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | product-marketing-context 1.1.0, commit 68f5eaf, 2026-03-04. Now `product-marketing` 2.2.0 |
| `pricing-strategy` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | pricing-strategy 1.1.0, commit e4283c6, 2026-03-04. Now `pricing` 2.1.4 |
| `churn-prevention` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | churn-prevention 1.1.0, commit 68f5eaf, 2026-03-04. Now `churn-prevention` 2.0.3 |
| `revops` | Forked from [coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) (MIT) | revops 1.1.0, commit 68f5eaf, 2026-03-04. Now `revops` 2.2.2 |
| `financial-modeling` | Original, Datatide (MIT) | None |
| `pitch-deck` | Original, Datatide (MIT) | None |
| `gdpr-compliance` | Original, Datatide (MIT) | None |
| `soc2-compliance` | Original, Datatide (MIT) | None |
| `technical-writing` | Original, Datatide (MIT) | None |
| `voice-and-memory` | Original, Datatide (MIT) | None |
| `na-launch-compliance` | Original, Datatide (MIT) | None |
| `cohort-launch-sequence` | Original, Datatide (MIT) | None |
| `workshop-funnel` | Original, Datatide (MIT) | None |
| `andromeda-concept-matrix` | Original, Datatide (MIT) | None |
| `proof-and-voice-guard` | Original, Datatide (MIT) | None |
| `build-in-public-clips` | Original, Datatide (MIT) | None |
| `pricing-display-na` | Original, Datatide (MIT) | None |

Forks keep their upstream license notice in `licenses/marketingskills-MIT.txt`. Upstream versions were checked on 2026-11-01 at commit 88c79f6.

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

Built by [Ennio Maldonado](https://www.enniomaldonado.com) at [DataTide](https://datatide.io).

- **Docs**: https://datatide.io/ultrapowers
- **Issues**: https://github.com/ennio-datatide/ultrapowers-business/issues
- **Course**: https://ultrapowers.dev
