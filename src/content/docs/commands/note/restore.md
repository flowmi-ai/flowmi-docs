---
title: "note restore"
description: Restore a note from trash.
---

## Synopsis

```
flowmi note restore <id>
```

## Description

Restore a note from trash.

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
flowmi note restore abc123
```

## See Also

- [note delete](/docs/commands/note/delete/)
- [note trash](/docs/commands/note/trash/)
