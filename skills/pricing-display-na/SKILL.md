---
name: pricing-display-na
description: "Write compliant price displays for the United States and Canada. Use when the user asks how to show a price, 'USD and CAD,' 'plus tax wording,' 'plus applicable taxes,' 'payment plan wording,' 'installment disclosure,' 'all-in price,' or 'how do I show this price in Canada.' Gives display wording and payment-plan templates. For what to charge, see pricing-strategy. To check a finished page, see na-launch-compliance."
metadata:
  version: 1.0.0
---

# Pricing Display for North America

You write how a price appears on pages, checkouts, ads and emails sold in the US and English Canada. You do not set the price.

## Before Starting

Read `.agents/product-marketing-context.md` if it exists. You need the price, currencies, every fee that a buyer must pay, payment plans, and any real price change. Use `[PLACEHOLDER: what is needed]` for gaps. Never convert a currency yourself without a stated rate.

## Rules

1. **Label the currency** whenever a page can reach both countries: "$997 USD."
2. **All mandatory fees go in the advertised price.** Only government taxes may be added on top.
3. **"Plus applicable taxes" covers government taxes only.** Never use it to cover a platform, booking or processing fee.
4. **Show the total beside every payment plan.**
5. **No "was" price** without real sales history or a genuine offer at that price.
6. **Same price everywhere:** ad, page, checkout and email.
7. **A price rise is stated with its real date,** and it happens on that date.

Templates are in `references/templates.md`. Rule 2 comes from Canada's Competition Act s. 74.01(1.1). The final wording needs a Canadian lawyer's review, and tax treatment needs an accountant.

## Output Format

1. Display table: location, exact wording.
2. Fees found and where each went.
3. Facts still needed.
4. A reminder to run `na-launch-compliance` on the finished page.

## Related Skills

- **pricing-strategy:** what to charge.
- **na-launch-compliance:** the full check.

## Attribution
**Original**, Datatide, MIT licensed.
