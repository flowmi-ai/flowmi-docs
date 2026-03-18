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
| `--json` | | Output in JSON format |
| `--debug` | | Enable debug logging |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi table view abc123
flowmi table view abc123 --json
```

## See Also

- [table list](/docs/commands/table/list/)
- [table edit](/docs/commands/table/edit/)
