---
title: "search web"
description: Search the web.
---

## Synopsis

```
flowmi search [web] <query> [flags]
```

## Description

Search the web. `web` is the default subcommand -- `flowmi search "query"` is equivalent to `flowmi search web "query"`.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Number of results | `10` |
| `--page` | `-p` | Page number | `1` |
| `--country` | | Country code (e.g. `us`, `cn`) | |
| `--language` | | Language code (e.g. `en`, `zh-cn`) | |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi search "golang context"
flowmi search web "golang context" -L 5
flowmi search "rust vs go" --country us --language en
flowmi search "latest news" -o json
```

## See Also

- [search images](/docs/commands/search/images/)
- [search news](/docs/commands/search/news/)
- [scrape](/docs/commands/scrape/)
