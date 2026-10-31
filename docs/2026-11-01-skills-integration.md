# Skills Integration Report

Date: 2026-11-01. Source: the Skills Integration Brief of 2026-10-31. Upstream checked: coreyhaines31/marketingskills at commit 88c79f6 (2026-10-30), MIT.

Nothing here is committed. No skill was deleted, renamed or rebased.

## 1. Inventory

46 skills now: 33 forks, 6 older originals (financial-modeling, pitch-deck, gdpr-compliance, soc2-compliance, technical-writing, voice-and-memory) and 7 new originals. Before this work there were 39, because voice-and-memory sits on this branch and is missing from the brief.

Frontmatter differs: four older originals use title-case names and no version, and the forks use `metadata.version`.

## 2 and 3. Upstream diff and update plan

Local edits are small. Six forks add one "voice and memory" paragraph (2 diff lines). The other 27 match upstream exactly at the commit shown, apart from the Attribution section. All 33 forked in March 2026.

"Same as upstream today" is a line match ratio. Lower means more drift.

Renames: none proposed. Keeping local names avoids breaking anyone who installed the plugin. Rebases bring in upstream text with em dashes, which needs a cleanup pass to meet the writing rules.

| Fork | Upstream | Tracks | Upstream now | Same as upstream today | Local edits | Plan | Note |
|---|---|---|---|---|---|---|---|
| copywriting | copywriting | 1.1.0 (68f5eaf) | 2.3.2 | 79% | 2 lines | Rebase, keep local edits, priority 1 | Upstream adds No AI Tells and supportable claims. Keep the voice line. |
| social-content | social | 1.1.0 (e4283c6) | 2.4.1 | 71% | 2 lines | Rebase, keep local edits, priority 2 | Upstream adds Reels scripts, carousels, calendar. Keep the voice line. |
| ad-creative | ad-creative | 1.1.0 (68f5eaf) | 2.12.2 | 82% | 2 lines | Rebase, keep local edits, priority 3 | Keep the voice line. |
| paid-ads | ads | 1.1.0 (68f5eaf) | 2.7.0 | 70% | 0 lines | Rebase, keep local edits, priority 4 | Upstream 477 lines against 315. |
| email-sequence | emails | 1.1.0 (1c32ad3) | 2.1.4 | 91% | 2 lines | Rebase, keep local edits, priority 5 | Keep the voice line. |
| launch-strategy | launch | 1.1.0 (e4283c6) | 2.2.0 | 94% | 0 lines | Rebase, keep local edits, priority 6 |  |
| pricing-strategy | pricing | 1.1.0 (e4283c6) | 2.1.4 | 85% | 0 lines | Rebase, keep local edits, priority 7 |  |
| page-cro | cro | 1.1.0 (e4283c6) | 2.0.3 | 91% | 0 lines | Rebase, keep local edits, priority 8 | Rebase on cro. |
| product-marketing-context | product-marketing | 1.1.0 (68f5eaf) | 2.2.0 | 80% | 0 lines | Rebase, keep local edits, priority 9 | Rebase first: upstream moved the file to .agents/product-marketing.md and every skill reads it. |
| lead-magnets | lead-magnets | 1.0.0 (1c32ad3) | 2.1.1 | 94% | 0 lines | Rebase, keep local edits, priority 10 |  |
| ab-test-setup | ab-testing | 1.1.0 (68f5eaf) | 2.0.4 | 80% | 0 lines | Rebase later, not launch critical |  |
| ai-seo | ai-seo | 1.1.0 (68f5eaf) | 2.12.0 | 63% | 0 lines | Rebase later, not launch critical | Large upstream change, outside this launch. |
| analytics-tracking | analytics | 1.1.0 (e4283c6) | 2.2.2 | 85% | 0 lines | Rebase later, not launch critical |  |
| churn-prevention | churn-prevention | 1.1.0 (68f5eaf) | 2.0.3 | 96% | 0 lines | Keep local, small drift |  |
| cold-email | cold-email | 1.1.0 (68f5eaf) | 2.2.1 | 78% | 2 lines | Rebase later, not launch critical | Keep the voice line. |
| competitor-alternatives | competitors | 1.1.0 (e4283c6) | 2.3.0 | 92% | 0 lines | Rebase later, not launch critical |  |
| content-strategy | content-strategy | 1.1.0 (51146da) | 2.1.5 | 89% | 0 lines | Rebase later, not launch critical |  |
| copy-editing | copy-editing | 1.1.0 (e4283c6) | 2.2.1 | 81% | 2 lines | Rebase later, not launch critical | Keep the voice line. |
| form-cro | cro | 1.1.0 (68f5eaf) | 2.0.3 | 19% | 0 lines | Keep local, question for user | Upstream folded this into cro/references/form.md. Needs the user's decision. |
| free-tool-strategy | free-tools | 1.1.0 (1c32ad3) | 2.0.3 | 94% | 0 lines | Keep local, small drift |  |
| marketing-ideas | marketing-ideas | 1.1.0 (e4283c6) | 2.0.2 | 94% | 0 lines | Keep local, small drift |  |
| marketing-psychology | marketing-psychology | 1.1.0 (e4283c6) | 2.0.0 | 98% | 0 lines | Keep local, small drift |  |
| onboarding-cro | onboarding | 1.1.0 (e4283c6) | 2.0.2 | 85% | 0 lines | Rebase later, not launch critical |  |
| paywall-upgrade-cro | paywalls | 1.1.0 (e4283c6) | 2.1.1 | 96% | 0 lines | Keep local, small drift |  |
| popup-cro | popups | 1.1.0 (1c32ad3) | 2.0.1 | 98% | 0 lines | Keep local, small drift |  |
| programmatic-seo | programmatic-seo | 1.1.0 (68f5eaf) | 2.1.1 | 97% | 0 lines | Keep local, small drift |  |
| referral-program | referrals | 1.1.0 (e4283c6) | 2.2.1 | 90% | 0 lines | Rebase later, not launch critical |  |
| revops | revops | 1.1.0 (68f5eaf) | 2.2.2 | 93% | 0 lines | Rebase later, not launch critical |  |
| sales-enablement | sales-enablement | 1.1.0 (68f5eaf) | 2.4.0 | 88% | 0 lines | Rebase later, not launch critical |  |
| schema-markup | schema | 1.1.0 (e4283c6) | 2.0.2 | 92% | 0 lines | Rebase later, not launch critical |  |
| seo-audit | seo-audit | 1.1.0 (68f5eaf) | 2.2.2 | 87% | 0 lines | Rebase later, not launch critical |  |
| signup-flow-cro | signup | 1.1.0 (68f5eaf) | 2.0.1 | 97% | 0 lines | Keep local, small drift |  |
| site-architecture | site-architecture | 1.1.0 (68f5eaf) | 2.1.0 | 98% | 0 lines | Keep local, small drift |  |


## 4. New upstream skills

| Skill | Version | Recommendation | Reason |
|---|---|---|---|
| offers | 1.0.3 | Fork | Offer design is the top launch gap. Review its urgency guidance against the true urgency rule |
| customer-research | 2.0.5 | Fork | Voice-of-customer research is one of the two frameworks with controlled evidence |
| influencer-marketing | 1.4.0 | Fork | Creator sponsorships are channel 4, and it covers disclosure |
| events | 1.0.0 | Ideas only | workshop-funnel covers the need, and the rest targets conferences |
| community-marketing | 2.0.2 | Skip for now | Useful after launch if a community is planned |
| video | 2.4.0 | Skip | Built around AI video and avatars, and the launch sells raw founder footage |
| marketing-plan | 1.2.2 | Skip | A fractional CMO deliverable for clients |

## 5. Other external skills

Licenses read from each LICENSE file on 2026-11-01. Nothing was copied.

| Rank | Source | License | Recommendation | Reason |
|---|---|---|---|---|
| 2 | anthropics/knowledge-work-plugins, marketing | Apache 2.0 confirmed | Ideas only | brand-review severity format is useful. Other skills overlap forks |
| 3 | AgriciDaniel/claude-ads | MIT confirmed for original code; third-party notices apply | Skip until after launch | Audits live accounts, and none exist yet |
| 4 | adam-dziuk/hormozi-skill | MIT confirmed | Ideas only | Good guarantee rules. `offers` covers the rest |
| 5 | whoiscarlo/agent-skills | No root LICENSE, and the three target skills have no license field | Ideas only, no text | Treat as all rights reserved. Placeholder habit confirmed in conversion-copy |
| 6 | alexsmedile/hormozi-skills | MIT confirmed | Skip | Overlaps `offers`. Its pitch lists fast-action urgency tactics |
| 7 | charlie947/social-media-skills | MIT confirmed | Ideas only for now | hook-generator and pinned-comment are worth a look after social-content is rebased. reels-scripting depends on Apify |
| 8 | Will Francis free pack | No license on the page; pack not downloaded | Skip copying | Terms unknown |

## 6. Gap skills

Written: na-launch-compliance, cohort-launch-sequence, workshop-funnel, andromeda-concept-matrix, proof-and-voice-guard, build-in-public-clips, pricing-display-na. Left out: quebec-fr-localization, because Quebec is excluded.

## 7. Context file

`.agents/product-marketing-context.md`. Ignored by git through a new `.gitignore`, because the repository is public and the file holds channel strategy.

## 8. Attribution

Each fork now states its tracked version and commit. The README table has a row and a tracking column for every skill. The upstream MIT text is in `licenses/marketingskills-MIT.txt`; before this, the repository kept only a one-line credit.
