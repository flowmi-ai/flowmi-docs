---
title: "email list"
description: List emails.
---

## Synopsis

```
flowmi email list [flags]
```

**Alias:** `ls`

## Description

List emails. Returns emails in reverse-chronological order by default.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of emails to return | `30` |
| `--page` | `-p` | Page number | `1` |
| `--direction` | `-d` | Filter by direction (`inbound`, `outbound`) | |
| `--archived` | | Show only archived emails | |
| `--read` | | Show only read emails | |
| `--unread` | | Show only unread emails | |

`--read` and `--unread` are mutually exclusive.

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
flowmi email list
flowmi email ls -L 10
flowmi email list --direction inbound
flowmi email list -d outbound --json
flowmi email list --unread
flowmi email list --read
flowmi email list --archived
```

## See Also

- [email view](/docs/commands/email/view/)
- [email send](/docs/commands/email/send/)
- [email archive](/docs/commands/email/archive/)
- [email read](/docs/commands/email/read/)
