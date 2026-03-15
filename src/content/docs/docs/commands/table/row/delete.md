---
title: "table row delete"
description: Move a row to trash.
---

## Synopsis

```
flowmi table row delete <table-id> <row-id>
```

## Description

Move a row to trash. This is a soft delete -- the row can be restored later with `table row restore`. Use `table row trash delete` for permanent deletion.

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
flowmi table row delete abc123 row456
```

## See Also

- [table row restore](/docs/commands/table/row/restore/)
- [table row trash](/docs/commands/table/row/trash/)
