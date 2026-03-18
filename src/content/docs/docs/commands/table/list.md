---
title: "table list"
description: List tables.
---

## Synopsis

```
flowmi table list [flags]
```

**Alias:** `ls`

## Description

List tables. Returns tables in reverse-chronological order by default.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of tables to return | `30` |
| `--page` | `-p` | Page number | `1` |

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
flowmi table list
flowmi table ls -L 10
flowmi table list --json
```

## See Also

- [table create](/docs/commands/table/create/)
- [table view](/docs/commands/table/view/)
