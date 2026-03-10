---
title: "table delete"
description: Move a table to trash.
---

## Synopsis

```
flowmi table delete <table-id>
```

## Description

Move a table to trash. This is a soft delete -- the table can be restored later with `table restore`. Use `table trash delete` for permanent deletion.

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
flowmi table delete abc123
```

## See Also

- [table restore](/docs/commands/table/restore/)
- [table trash](/docs/commands/table/trash/)
