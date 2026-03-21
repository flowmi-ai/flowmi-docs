---
title: "email archive"
description: Archive an email.
---

## Synopsis

```
flowmi email archive <id>
```

## Description

Archive an email. Archived emails no longer appear in the default `email list` output but can be viewed with `email list --archived`. Use `email unarchive` to move an email back to the inbox.

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
flowmi email archive abc123
```

## See Also

- [email unarchive](/docs/commands/email/unarchive/)
- [email list](/docs/commands/email/list/)
