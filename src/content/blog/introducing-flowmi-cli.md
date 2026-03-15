---
title: "Introducing Flowmi CLI"
description: "Meet Flowmi CLI — a unified command-line tool to manage notes, files, tables, emails, and more from your terminal."
date: 2026-02-15
author: "Flowmi Team"
tags: ["announcement", "release"]
---

We're excited to introduce **Flowmi CLI** — a single command-line tool that brings your entire productivity stack to the terminal.

## Why we built this

Developers live in the terminal. Switching to a browser to jot a quick note, check an email, or look up a file breaks your flow. Flowmi CLI keeps you in context by bringing these tools to where you already work.

## What you can do

With a single `flowmi` binary (or the short alias `fm`), you can:

- **Notes** — Create, edit, search, and organize notes with labels.
- **Drive** — Upload and download files. Pipe content from stdin or stream to stdout.
- **Tables** — Build structured datasets with typed columns, then query with filters and aggregation.
- **Email** — Manage mailboxes, read your inbox, and send emails.
- **Search** — Search the web, images, and news without leaving the terminal.
- **Scrape** — Extract clean Markdown from any URL.

## Quick taste

```bash
# Create a note
flowmi note create --title "Meeting Notes" --body "Discussed roadmap..."

# Upload a file
flowmi drive upload ./report.pdf

# Query a table
flowmi table row query my-table --where "status=active" --sort "created_at:desc"

# Send an email
flowmi email send --to user@example.com --subject "Hello" --body "Hi there!"
```

## Get started

Head over to the [installation guide](/docs/getting-started/installation/) to set up Flowmi CLI in under a minute. If you're already installed, the [quickstart](/docs/getting-started/quickstart/) will walk you through the basics.

We'd love your feedback — open an issue on [GitHub](https://github.com/flowmi-ai/flowmi) or just tell us what you think.
