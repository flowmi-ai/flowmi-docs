---
title: "table field edit"
description: Edit a table column.
---

## Synopsis

```
flowmi table field edit <table-id> <column-id> [flags]
```

## Description

Edit a table column.

## Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--name` | `-n` | New column name |
| `--type` | `-t` | New column type |
| `--required` | `-r` | Mark column as required |
| `--options` | | Type-specific options as JSON |

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
flowmi table field edit abc123 col456 --name "new_name"
flowmi table field edit abc123 col456 --type number
flowmi table field edit abc123 col456 --required
```

## See Also

- [table field add](/docs/commands/table/field/add/)
- [table field delete](/docs/commands/table/field/delete/)
