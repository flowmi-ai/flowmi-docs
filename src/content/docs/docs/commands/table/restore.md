---
title: "table restore"
description: Restore a table from trash.
---

## Synopsis

```
flowmi table restore <table-id>
```

## Description

Restore a table from trash.

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
flowmi table restore abc123
```

## See Also

- [table delete](/docs/commands/table/delete/)
- [table trash](/docs/commands/table/trash/)
