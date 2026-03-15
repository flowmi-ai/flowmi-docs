---
title: "table row create"
description: Create a new row.
---

## Synopsis

```
flowmi table row create <table-id> [flags]
```

## Description

Create a new row. Row data can be provided as a JSON object with `--data` or as individual key-value pairs with `--set`.

Value coercion for `--set`: `true`/`false` are converted to booleans, `null` to null, integers and floats to numbers, and everything else is treated as a string.

## Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--data` | | Row data as JSON object |
| `--set` | | Set field value as `key=value` (repeatable) |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi table row create abc123 --data '{"status":"todo","priority":1}'
flowmi table row create abc123 --set status=todo --set priority=3
echo '{"status":"done"}' | flowmi table row create abc123 --data -
```

## See Also

- [table row list](/docs/commands/table/row/list/)
- [table row edit](/docs/commands/table/row/edit/)
