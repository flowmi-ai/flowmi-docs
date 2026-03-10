---
title: "email view"
description: View an email.
---

## Synopsis

```
flowmi email view <id>
```

## Description

View an email.

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
flowmi email view abc123
flowmi email view abc123 -o json
```

## See Also

- [email list](/docs/commands/email/list/)
- [email delete](/docs/commands/email/delete/)
