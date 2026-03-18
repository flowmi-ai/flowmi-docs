---
title: "search images"
description: Search for images.
---

## Synopsis

```
flowmi search images <query> [flags]
```

## Description

Search for images.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Number of results | `10` |
| `--page` | `-p` | Page number | `1` |
| `--country` | | Country code (e.g. `us`, `cn`) | |
| `--language` | | Language code (e.g. `en`, `zh-cn`) | |
| `--size` | `-s` | Image size filter: `large`, `medium`, `icon` | |

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
flowmi search images "gopher mascot"
flowmi search images "gopher mascot" --size large
flowmi search images "sunset landscape" -L 20 --json
```

## See Also

- [search web](/docs/commands/search/web/)
- [search news](/docs/commands/search/news/)
