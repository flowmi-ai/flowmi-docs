---
title: "email read"
description: Mark an email as read.
---

## Synopsis

```
flowmi email read <id>
```

## Description

Mark an email as read. Use `email list --unread` to list only unread emails.

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
flowmi email read abc123
```

## See Also

- [email unread](/docs/commands/email/unread/)
- [email list](/docs/commands/email/list/)
