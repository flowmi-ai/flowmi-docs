---
title: "email unarchive"
description: Unarchive an email.
---

## Synopsis

```
flowmi email unarchive <id>
```

## Description

Unarchive an email, moving it back to the inbox.

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
flowmi email unarchive abc123
```

## See Also

- [email archive](/docs/commands/email/archive/)
- [email list](/docs/commands/email/list/)
