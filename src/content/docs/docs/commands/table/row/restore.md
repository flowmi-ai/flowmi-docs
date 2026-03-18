---
title: "table row restore"
description: Restore a row from trash.
---

## Synopsis

```
flowmi table row restore <table-id> <row-id>
```

## Description

Restore a row from trash.

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
flowmi table row restore abc123 row456
```

## See Also

- [table row delete](/docs/commands/table/row/delete/)
- [table row trash](/docs/commands/table/row/trash/)
