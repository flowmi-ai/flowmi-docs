---
title: "table row edit"
description: Edit a row.
---

## Synopsis

```
flowmi table row edit <table-id> <row-id> [flags]
```

## Description

Edit a row. Patches the existing row with the provided data. Row data can be provided as a JSON object with `--data` or as individual key-value pairs with `--set`.

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
| `--json` | | Output in JSON format |
| `--debug` | | Enable debug logging |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi table row edit abc123 row456 --set status=done
flowmi table row edit abc123 row456 --data '{"priority":5}'
```

## See Also

- [table row view](/docs/commands/table/row/view/)
- [table row delete](/docs/commands/table/row/delete/)
