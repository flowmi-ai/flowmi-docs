---
title: "email send"
description: Send an email.
---

## Synopsis

```
flowmi email send [flags]
```

## Description

Send an email. At least one of `--text` or `--html` is required.

## Flags

| Flag | Short | Description | Required |
| --- | --- | --- | --- |
| `--mailbox` | `-m` | Mailbox ID to send from | Yes |
| `--to` | `-t` | Recipient address (repeatable) | Yes |
| `--cc` | | CC address (repeatable) | No |
| `--bcc` | | BCC address (repeatable) | No |
| `--reply-to` | | Reply-to address | No |
| `--subject` | `-s` | Email subject | Yes |
| `--text` | | Plain text body | No* |
| `--html` | | HTML body | No* |

\*At least one of `--text` or `--html` is required.

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
flowmi email send -m mid123 -t user@example.com -s "Hello" --text "Hi there"
flowmi email send -m mid123 -t user@example.com -s "Report" --html "<h1>Q3 Report</h1>"
flowmi email send -m mid123 -t a@example.com -t b@example.com -s "Team Update" --text "Update"
flowmi email send -m mid123 -t user@example.com --cc boss@example.com -s "FYI" --text "See attached"
```

## See Also

- [email list](/docs/commands/email/list/)
- [email mailbox list](/docs/commands/email/mailbox/list/)
