---
title: "email mailbox list"
description: List mailboxes.
---

## Synopsis

```
flowmi email mailbox list
```

**Alias:** `ls`

## Description

List mailboxes.

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
flowmi email mailbox list
flowmi email mailbox list -o json
flowmi email mailbox ls
```

## See Also

- [email mailbox create](/docs/commands/email/mailbox/create/)
- [email send](/docs/commands/email/send/)
