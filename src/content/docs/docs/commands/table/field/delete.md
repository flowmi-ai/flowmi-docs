---
title: "table field delete"
description: Delete a table column.
---

## Synopsis

```
flowmi table field delete <table-id> <column-id>
```

## Description

Delete a table column. This permanently deletes the column and all its data.

## Flags

This command has no command-specific flags.

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi table field delete abc123 col456
```

## See Also

- [table field add](/docs/commands/table/field/add/)
- [table field edit](/docs/commands/table/field/edit/)
