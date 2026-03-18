---
title: "table row list"
description: List rows in a table.
---

## Synopsis

```
flowmi table row list <table-id> [flags]
```

## Description

List rows in a table. Returns rows in reverse-chronological order by default.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of rows to return | `30` |
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
flowmi table row list abc123
flowmi table row list abc123 -L 50 -p 2
flowmi table row list abc123 --json
```

## See Also

- [table row create](/docs/commands/table/row/create/)
- [table row query](/docs/commands/table/row/query/)
