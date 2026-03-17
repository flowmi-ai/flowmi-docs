---
title: "email delete"
description: Move an email to trash.
---

## Synopsis

```
flowmi email delete <id>
```

## Description

Move an email to trash. This is a soft delete -- the email can be restored later with `email restore`. Use `email trash delete` for permanent deletion.

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
flowmi email delete abc123
```

## See Also

- [email restore](/docs/commands/email/restore/)
- [email trash](/docs/commands/email/trash/)
