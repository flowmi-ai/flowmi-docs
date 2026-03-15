---
title: "email mailbox create"
description: Create a mailbox.
---

## Synopsis

```
flowmi email mailbox create [flags]
```

## Description

Create a mailbox.

## Flags

| Flag | Short | Description | Required |
| --- | --- | --- | --- |
| `--address` | `-a` | Email address for the mailbox | Yes |
| `--display-name` | `-n` | Display name | No |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi email mailbox create --address hello@example.com
flowmi email mailbox create -a support@example.com -n "Support Inbox"
```

## See Also

- [email mailbox list](/docs/commands/email/mailbox/list/)
- [email mailbox edit](/docs/commands/email/mailbox/edit/)
