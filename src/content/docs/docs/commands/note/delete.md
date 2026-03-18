---
title: "note delete"
description: Move a note to trash.
---

## Synopsis

```
flowmi note delete <id>
```

## Description

Move a note to trash. This is a soft delete -- the note can be restored later with `note restore`. Use `note trash delete` for permanent deletion.

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
flowmi note delete abc123
```

## See Also

- [note restore](/docs/commands/note/restore/)
- [note trash](/docs/commands/note/trash/)
