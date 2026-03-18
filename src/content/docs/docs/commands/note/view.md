---
title: "note view"
description: View a single note.
---

## Synopsis

```
flowmi note view <id>
```

## Description

View a single note.

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
flowmi note view abc123
flowmi note view abc123 --json
```

## See Also

- [note list](/docs/commands/note/list/)
- [note edit](/docs/commands/note/edit/)
