---
title: "table row view"
description: View a single row.
---

## Synopsis

```
flowmi table row view <table-id> <row-id>
```

## Description

View a single row.

## Flags

This command has no command-specific flags.

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
flowmi table row view abc123 row456
flowmi table row view abc123 row456 --json
```

## See Also

- [table row list](/docs/commands/table/row/list/)
- [table row edit](/docs/commands/table/row/edit/)
