---
title: "table field add"
description: Add a column to a table.
---

## Synopsis

```
flowmi table field add <table-id> [flags]
```

**Aliases:** `col add`, `column add`

## Description

Add a column to a table.

Supported column types: `text`, `number`, `boolean`, `datetime`, `enum`, `url`, `email`, `json`, `array`.

## Flags

| Flag | Short | Description | Required |
| --- | --- | --- | --- |
| `--name` | `-n` | Column name | Yes |
| `--type` | `-t` | Column type | Yes |
| `--required` | `-r` | Mark column as required | No |
| `--options` | | Type-specific options as JSON | No |

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
flowmi table field add abc123 --name status --type text
flowmi table field add abc123 --name priority --type number --required
flowmi table field add abc123 --name category --type enum --options '{"values":["a","b","c"]}'
```

## See Also

- [table field edit](/docs/commands/table/field/edit/)
- [table field delete](/docs/commands/table/field/delete/)
