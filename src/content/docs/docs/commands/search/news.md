---
title: "search news"
description: Search news articles.
---

## Synopsis

```
flowmi search news <query> [flags]
```

## Description

Search news articles.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Number of results | `10` |
| `--page` | `-p` | Page number | `1` |
| `--country` | | Country code (e.g. `us`, `cn`) | |
| `--language` | | Language code (e.g. `en`, `zh-cn`) | |
| `--time` | `-t` | Time filter: `day`, `week`, `month` | |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--json` | | Output in JSON format |
| `--debug` | | Enable debug logging |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi search news "go release"
flowmi search news "ai breakthroughs" --time week
flowmi search news "tech layoffs" --time month -L 20
```

## See Also

- [search web](/docs/commands/search/web/)
- [search images](/docs/commands/search/images/)
