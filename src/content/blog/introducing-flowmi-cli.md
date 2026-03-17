---
title: "Introducing Flowmi CLI: 7 Tools Your AI Agent Has Been Waiting For"
description: "A CLI toolkit with 7 powerful tools — search, email, scrape, notes, drive, tables, and images. Structured JSON output that AI agents can actually use."
date: 2026-02-15
author: "Flowmi Team"
tags: ["announcement", "release"]
---

AI agents are getting smarter every month. They can reason, plan, write code, and hold a conversation. But ask one to search the web, send an email, or save a file, and suddenly you're knee-deep in API keys, OAuth flows, and fragile glue code.

We built Flowmi CLI to fix that.

## One binary, seven tools

Flowmi is a single Go binary (or `fm` for short) that gives any AI agent — or any developer — instant access to seven real-world capabilities:

- **Search** — query the web, images, and news
- **Scrape** — extract clean Markdown from any URL
- **Email** — create mailboxes, send and receive emails
- **Notes** — create, organize, and full-text search notes
- **Drive** — upload and download files, pipe from stdin
- **Tables** — structured data with typed columns, filters, and aggregation
- **Images** — generate and edit images with AI models

Every command supports `--output json`. That's the whole point: structured, parseable output that an agent can actually work with — no screen-scraping, no regex, no guessing.

## The problem we kept hitting

If you've built an AI agent that needs to interact with the outside world, you know the pain. You need a search API (sign up, get a key, handle rate limits). You need an email provider (SMTP config, authentication). You need file storage (S3 buckets, IAM policies). Each tool is a separate integration, a separate failure mode, and a separate set of credentials.

We wanted one tool that handles all of it. Install it, authenticate once, and hand your agent seven capabilities behind a consistent interface.

## Show me

Here's what it looks like in practice. Every example below is a real command with real output.

### Search the web and get JSON back

```bash
$ flowmi search "best practices for LLM tool use" -L 3 -o json
```

Your agent gets back a clean JSON array — title, URL, snippet — ready to feed into the next step of its reasoning chain. No HTML parsing. No browser automation.

### Scrape a page into Markdown

```bash
$ flowmi scrape https://example.com/article
```

Returns the article as clean Markdown, stripped of nav bars, ads, and boilerplate. Save it as a note in one line:

```bash
$ flowmi note create -s "Research" \
    -c "$(flowmi scrape https://example.com/article)"
```

Command substitution feeds the scraped content straight into a new note. Two tools, zero friction.

### Send an email

```bash
$ flowmi email send -m <mailbox-id> \
    -t alice@example.com \
    -s "Weekly Report" \
    --text "Here's the summary for this week..."
```

Your agent can now send emails as part of a workflow — no SMTP setup, no third-party API keys.

### Build a structured dataset on the fly

```bash
$ flowmi table create -n "leads" \
    -c '[{"name":"company","type":"text"},{"name":"score","type":"number"},{"name":"status","type":"enum"}]'
```

Then query it:

```bash
$ flowmi table row query <table-id> \
    -f status:eq:qualified \
    -f score:gt:80 \
    --sort score:desc \
    -o json
```

Tables support nine column types (`text`, `number`, `boolean`, `datetime`, `enum`, `array`, `url`, `email`, `json`), filtering with operators like `eq`, `gt`, `contains`, `startsWith`, and aggregation with `count`, `sum`, `avg`, `min`, `max`. It's a queryable database your agent can spin up in one command.

### Generate images from a prompt

```bash
$ flowmi image generate -p "A minimal logo for a developer tool, flat design" \
    --size 2K --aspect-ratio 1:1 -f logo.png
```

Or edit an existing image with a reference:

```bash
$ flowmi image generate -p "Remove the background" -i photo.jpg
```

With `-o json`, you get back base64-encoded image data — perfect for agents that need to process images programmatically.

## Why JSON output matters

This is the design decision that makes everything else work. Every Flowmi command supports `--output json` (`-o json`). Most commands also support `--output table` for quick scanning in the terminal. The default is always human-readable text.

When an AI agent calls `flowmi search "query" -o json`, it gets back data it can parse, reason about, and act on. No ambiguity, no brittle text extraction. The agent decides what to do next based on structured data, not string matching.

This is what makes Flowmi different from cobbling together five different CLI tools: **one consistent interface, one authentication, one output format**.

## A real workflow: research agent

Here's a realistic example of what an agent can do by chaining Flowmi commands:

```bash
# 1. Search for recent articles on a topic
flowmi search "AI agent frameworks 2026" -L 5 -o json

# 2. Scrape the top result for full content
flowmi scrape https://example.com/top-result

# 3. Save the research as a note
flowmi note create -s "AI Agent Frameworks Research" \
    -c "$(flowmi scrape https://example.com/top-result)" \
    -l research -l ai


# 4. Log the finding to a tracking table
flowmi table row create <table-id> \
    --set source="example.com" \
    --set topic="AI frameworks" \
    --set status=reviewed

# 5. Email a summary to the team
flowmi email send -m <mailbox-id> \
    -t team@company.com \
    -s "Research Update: AI Agent Frameworks" \
    --text "Found 5 relevant articles. Key finding: ..."
```

Five tools, one pipeline, zero context switching. That's the kind of workflow that used to take an afternoon of integration work.

## Get started

Install Flowmi and authenticate in under a minute:

```bash
brew install flowmi-ai/tap/flowmi
flowmi auth login
```

Then try it:

```bash
flowmi search "hello world" -o json
```

If JSON comes back, you're ready. Head over to the [quickstart guide](/docs/getting-started/quickstart/) to explore all seven tools, or browse the [command reference](/docs/commands/overview/) for every flag and option.

---

We built Flowmi because we kept wishing it existed. If you're building AI agents that need to touch the real world, we hope it saves you the same integration headaches it saved us.

We'd love your feedback — open an issue on [GitHub](https://github.com/flowmi-ai/flowmi) or just tell us what you think.
