---
name: Financial Modeling
category: Finance & Business
attribution: Original -- Datatide MIT
---

# Financial Modeling

Build and review financial models for startups and growth-stage companies. Focus on revenue projections, unit economics, burn rate, runway, and fundraising metrics.

## Revenue Projections

### Bottom-Up Approach
Start with concrete inputs rather than top-down market sizing:

- **Users/customers** -- Current count, growth rate, conversion funnel metrics.
- **Pricing** -- ARPU (average revenue per user), pricing tiers, expansion revenue.
- **Revenue = Users x ARPU** -- Project monthly, aggregate to annual.
- Model at least three scenarios: conservative, base case, and optimistic.

### Cohort-Based Modeling
- Track revenue by acquisition cohort to capture retention and expansion patterns.
- Apply observed churn rates to each cohort over time.
- Layer new cohort acquisitions on top to build the revenue waterfall.

## Unit Economics

### Key Metrics
- **CAC (Customer Acquisition Cost)** -- Total sales and marketing spend / new customers acquired.
- **LTV (Lifetime Value)** -- ARPU x Gross Margin x (1 / Churn Rate).
- **LTV:CAC Ratio** -- Target 3:1 or higher for a sustainable business.
- **CAC Payback Period** -- Months to recover the cost of acquiring a customer. Target under 12 months.
- **Gross Margin** -- (Revenue - COGS) / Revenue. Track what counts as COGS carefully (hosting, support, payment processing).

### Improving Unit Economics
- Reduce CAC through organic channels, referrals, or better conversion rates.
- Increase LTV through upselling, reducing churn, or increasing ARPU.
- Watch for CAC rising as you scale beyond early adopters.

## Burn Rate and Runway

- **Gross Burn** -- Total monthly operating expenses.
- **Net Burn** -- Gross Burn minus monthly revenue.
- **Runway** -- Cash on hand / Net Burn = months until cash runs out.
- Maintain at least 12-18 months of runway. Start fundraising when you have 6-9 months left.
- Model runway under different growth and spending scenarios.

## Fundraising Metrics

Investors evaluate these signals:

- **MRR/ARR** -- Monthly/Annual Recurring Revenue and its growth rate.
- **MoM Growth** -- Month-over-month revenue growth. 15-20% MoM is strong for early stage.
- **Net Revenue Retention (NRR)** -- Revenue from existing customers including expansion minus churn. Above 100% means customers grow over time.
- **Gross Margin** -- SaaS businesses should target 70%+ gross margins.
- **Rule of 40** -- Growth rate + profit margin should exceed 40% for mature SaaS.

## Model Hygiene

- Separate assumptions from calculations -- put all inputs in a clearly labeled assumptions section.
- Use monthly granularity for the next 12-18 months, quarterly or annual beyond that.
- Color-code cells: blue for inputs, black for formulas, green for linked references.
- Include a summary dashboard with key metrics and charts.
- Version-control your model and document changes.
