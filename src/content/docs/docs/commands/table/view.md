---
title: "table view"
description: View table details.
---

## Synopsis

```
flowmi table view <table-id>
```

## Description

View table details.

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
flowmi table view abc123
flowmi table view abc123 -o json
```

## See Also

- [table list](/docs/commands/table/list/)
- [table edit](/docs/commands/table/edit/)
