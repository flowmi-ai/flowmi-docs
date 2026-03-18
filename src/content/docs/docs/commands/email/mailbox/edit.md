---
title: "email mailbox edit"
description: Edit a mailbox.
---

## Synopsis

```
flowmi email mailbox edit <id> [flags]
```

## Description

Edit a mailbox. At least one of `--display-name` or `--active` must be provided.

## Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--display-name` | `-n` | New display name |
| `--active` | | Set active status (`true`/`false`) |

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
flowmi email mailbox edit mid123 --display-name "New Name"
flowmi email mailbox edit mid123 --active=false
```

## See Also

- [email mailbox list](/docs/commands/email/mailbox/list/)
- [email mailbox delete](/docs/commands/email/mailbox/delete/)
