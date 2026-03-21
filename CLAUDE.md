# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Documentation site for the Flowmi CLI (`/Users/ys/Developer/flowmi-ai/cli`) — a Go-based CLI tool. Built with **Astro 5.6** and **Starlight 0.37**. Uses **pnpm** as the package manager.

## Commands

```sh
pnpm dev        # Start dev server at localhost:4321
pnpm build      # Production build (outputs to dist/)
pnpm preview    # Preview production build
```

No linter, formatter, or test runner is configured. Always run `pnpm build` to verify changes — it catches broken MDX, missing imports, and Starlight config errors.

## Architecture

- `astro.config.mjs` — Starlight config with full sidebar definition. **All sidebar entries are explicit** (no autogenerate). Adding a new page requires updating both the content file and the sidebar config.
- `src/content/docs/` — All documentation content (Markdown/MDX). Starlight uses file-based routing.
- `src/content.config.ts` — Astro content collection config (single `docs` collection using Starlight's loader/schema).
- `src/styles/custom.css` — Minimal Starlight theme overrides (accent colors only).

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
- **Prefer Starlight components** — Use built-in Starlight components where possible. Custom Astro components live in `src/components/` and should only be created when Starlight doesn't cover the use case (e.g., `LinkCard` for clickable cards).
- **CLI source of truth** — Command flags, descriptions, and examples must match the Go source at `/Users/ys/Developer/flowmi-ai/cli/cmd/`. Run `flowmi <cmd> --help` to verify before writing or editing any command page.
- **Trash commands consolidated** — Each command group (note, drive, table, email, table row) has a single `trash.md` covering all trash subcommands (list, view, restore, delete).
- The CLI binary is `flowmi` with `fm` as an alias. Examples use the full `flowmi` name.
- **`--format` vs `--output`** — `--output` (`-o`) controls command result format (`text`, `json`, `table`). `--format` controls help output format (`text`, `json`). They are **not** aliases. Not every command supports all `--output` values (e.g., `scrape` only supports `text` and `json`).
- **CI/CD pipelines** — Not currently supported. Do not document `--email`/`--password` login flags or CI/CD patterns until this feature is added.
