---
title: Introduction
description: What is Flowmi CLI and what can it do.
---

## What is Flowmi CLI

Flowmi CLI is a command-line tool for the [Flowmi](https://flowmi.ai) platform. It lets you manage notes, files, tables, emails, and more directly from your terminal without ever opening a browser.

Both `flowmi` and `fm` work as the command name. They are interchangeable aliases:

```bash
flowmi note list
fm note list       # same thing
```

## Features

- **Notes** — Create, read, update, and delete notes. Organize them with labels and find them with full-text search.
- **Drive** — Upload and download files. Pipe content from stdin or stream output to disk.
- **Tables** — Build structured data with typed columns. Query rows using filter, sort, aggregate, and group-by operations.
- **Email** — Create mailboxes, send emails, and manage your inbox.
- **Search** — Search the web, images, and news directly from the terminal.
- **Scrape** — Extract content from any URL as clean Markdown.

## Output formats

By default, commands produce human-readable text. Add `--json` to get machine-readable JSON output for scripting and piping:

```bash
flowmi note list                  # plain text (default)
flowmi note list --json           # JSON output
```

## Configuration

Flowmi CLI follows the [XDG Base Directory Specification](https://specifications.freedesktop.org/basedir-spec/latest/). Configuration files are stored at:

```
~/.config/flowmi/
```

This directory contains your configuration, credentials, and any local state the CLI needs to operate. You rarely need to edit these files directly — use `flowmi config` commands instead.
