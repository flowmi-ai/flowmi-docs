# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for the Flowmi CLI (`/Users/ys/Developer/flowmi-ai/cli`) — a Go-based CLI tool. Built with **Astro 5.6** and **Starlight 0.37**. Uses **pnpm** as the package manager. Deployed to **Cloudflare Workers** via wrangler.

## Commands

```sh
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Production build (outputs to dist/)
pnpm preview    # Preview production build
pnpm deploy     # Build + deploy to Cloudflare Workers
```

No linter, formatter, or test runner is configured. Always run `pnpm build` to verify changes — it catches broken MDX, missing imports, and Starlight config errors.

## Architecture

- `astro.config.mjs` — Starlight config with full sidebar definition. **All sidebar entries are explicit** (no autogenerate). Adding a new page requires updating both the content file and the sidebar config.
- `src/content/docs/` — Documentation content (Markdown/MDX). Starlight uses file-based routing.
- `src/content/blog/` — Blog posts (Markdown/MDX). Uses a custom Astro collection with its own schema (title, description, date, author, tags, draft, coverImage).
- `src/content.config.ts` — Defines two content collections: `docs` (Starlight loader/schema) and `blog` (custom glob loader with Zod schema). Draft posts are hidden in production.
- `src/pages/blogs/` — Custom Astro pages for blog listing, pagination, individual posts, and tag filtering. These are **not** Starlight pages.
- `src/layouts/BlogLayout.astro` — Blog-specific layout (separate from Starlight's doc layout).
- `src/components/blog/` — Custom Astro components for the blog (PostCard, Pagination, TagList, Header, Footer). These are the **only** custom components in the project.
- `src/styles/custom.css` — Minimal Starlight theme overrides (accent colors only).
- `wrangler.toml` — Cloudflare Workers config. Routes serve `/docs*`, `/blogs*`, `/_astro/*`, `/pagefind/*`, and `/sitemap*` on `flowmi.ai`.

## Content Structure

| Directory | Purpose |
|-----------|---------|
| `getting-started/` | Onboarding: introduction, installation, auth, quickstart |
| `guides/` | Workflow tutorials (notes, files, tables, emails, search) |
| `commands/` | Per-subcommand reference pages (auth, note, drive, table, email, search, + standalone) |
| `configuration/` | Config files, env vars, output formats |

Command reference pages follow a consistent template: **Synopsis → Description → Flags table → Inherited Flags → Examples → See Also**.

## Conventions

- **`.md` vs `.mdx`** — Use `.mdx` only when importing Starlight components (Tabs, Steps, Cards, Aside, FileTree, etc.). Pure reference pages use `.md`. Remove unused component imports when simplifying a page.
- **No custom Astro components in docs** — Only built-in Starlight components are used in documentation pages. Custom components exist only for the blog (`src/components/blog/`).
- **CLI source of truth** — Command flags, descriptions, and examples must match the Go source at `/Users/ys/Developer/flowmi-ai/cli/cmd/`. Run `flowmi <cmd> --help` to verify before writing or editing any command page.
- **Trash commands consolidated** — Each command group (note, drive, table, email, table row) has a single `trash.md` covering all trash subcommands (list, view, restore, delete).
- The CLI binary is `flowmi` with `fm` as an alias. Examples use the full `flowmi` name.
- **`--json` vs `--format`** — `--json` is a global flag that switches command output to JSON (replaces the old `--output`/`-o` flag). `--format` controls help output format (`text`, `json`). They are **not** related.
- **CI/CD pipelines** — Not currently supported. Do not document `--email`/`--password` login flags or CI/CD patterns until this feature is added.
