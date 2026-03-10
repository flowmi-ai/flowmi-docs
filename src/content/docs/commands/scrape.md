---
title: scrape
description: Fetch and extract content from a web page.
---

## Synopsis

```
flowmi scrape <url>
```

## Description

Fetch and extract content from a web page. The command downloads the page, strips navigation and boilerplate, and returns the main content as Markdown. If Markdown extraction fails, it falls back to plain text. Requests have a 60-second timeout.

## Flags

This command has no command-specific flags.

## Inherited Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--config` | | Path to config file | `~/.config/flowmi/config.toml` |
| `--output` | `-o` | Output format: `text`, `json` | `text` |
| `--format` | | Help format: `text`, `json` | `text` |
| `--help` | `-h` | Show help | |

## Examples

```bash
# Scrape a web page
flowmi scrape https://example.com

# Get scraped content as JSON
flowmi scrape https://example.com -o json
```

## See Also

- [search web](/docs/commands/search/web/)
