---
title: "email restore"
description: Restore an email from trash.
---

## Synopsis

```
flowmi email restore <id>
```

## Description

Restore an email from trash.

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
flowmi email restore abc123
```

## See Also

- [email delete](/docs/commands/email/delete/)
- [email trash](/docs/commands/email/trash/)
