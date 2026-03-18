---
name: Technical Writing
category: Content & Communication
attribution: Original -- Datatide MIT
---

# Technical Writing

Write clear, accurate, and maintainable technical documentation. Cover API docs, READMEs, changelogs, and architecture decision records.

## API Documentation

### Endpoint Documentation
For each endpoint, document:

- **Method and path** -- `GET /api/users/:id`
- **Description** -- One sentence explaining what it does.
- **Authentication** -- Required auth method (Bearer token, API key, etc.).
- **Parameters** -- Path, query, and body parameters with types, constraints, and examples.
- **Response** -- Status codes, response body schema, and example responses for success and common errors.
- **Rate limits** -- If applicable, document limits and headers.

### Best Practices
- Provide runnable examples (curl, SDK snippets) that users can copy and test.
- Keep examples up to date -- stale examples erode trust faster than missing docs.
- Document error responses as thoroughly as success responses.
- Group endpoints logically (by resource, not alphabetically).

## README Structure

A good README answers five questions in order:

1. **What is this?** -- One paragraph explaining the project's purpose.
2. **How do I install it?** -- Step-by-step setup instructions with prerequisites.
3. **How do I use it?** -- Quick-start example showing the most common use case.
4. **How do I configure it?** -- Environment variables, config files, and options.
5. **How do I contribute?** -- Link to contributing guide, development setup, and test instructions.

Keep the README concise. Link to detailed docs rather than putting everything in one file.

## Changelog

Follow [Keep a Changelog](https://keepachangelog.com/) conventions:

- **Added** -- New features.
- **Changed** -- Changes to existing functionality.
- **Deprecated** -- Features that will be removed.
- **Removed** -- Features that were removed.
- **Fixed** -- Bug fixes.
- **Security** -- Vulnerability fixes.

Use semantic versioning. Write entries from the user's perspective ("Added CSV export" not "Implemented exportToCsv function").

## Architecture Decision Records (ADRs)

Document significant technical decisions using this template:

- **Title** -- Short descriptive name (e.g., "Use PostgreSQL for primary datastore").
- **Status** -- Proposed, Accepted, Deprecated, or Superseded.
- **Context** -- What situation or problem prompted this decision?
- **Decision** -- What was decided and why.
- **Consequences** -- What are the trade-offs? What becomes easier or harder?

Store ADRs in a `docs/adr/` directory, numbered sequentially (`0001-use-postgresql.md`). Never delete ADRs -- mark them as superseded and link to the replacement.

## General Principles

- Write for the reader's skill level, not your own.
- Use active voice and direct instructions ("Run `npm install`" not "The dependencies can be installed by running...").
- Define acronyms on first use.
- Keep sentences short. One idea per sentence.
- Use consistent terminology -- create a glossary if the project has domain-specific terms.
