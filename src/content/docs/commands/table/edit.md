---
title: "table edit"
description: Edit a table.
---

## Synopsis

```
flowmi table edit <table-id> [flags]
```

## Description

Edit a table.

## Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--name` | `-n` | New table name |
| `--description` | `-d` | New table description |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi table edit abc123 -n "Updated Name"
flowmi table edit abc123 -d "New description"
```

## See Also

- [table view](/docs/commands/table/view/)
- [table delete](/docs/commands/table/delete/)
