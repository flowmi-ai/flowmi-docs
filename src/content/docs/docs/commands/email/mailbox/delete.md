---
title: "email mailbox delete"
description: Delete a mailbox.
---

## Synopsis

```
flowmi email mailbox delete <id>
```

## Description

Delete a mailbox. This permanently deletes the mailbox.

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
flowmi email mailbox delete mid123
```

## See Also

- [email mailbox list](/docs/commands/email/mailbox/list/)
- [email mailbox create](/docs/commands/email/mailbox/create/)
