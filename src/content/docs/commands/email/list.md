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

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi email list
flowmi email ls -L 10
flowmi email list --direction inbound
flowmi email list -d outbound -o json
```

## See Also

- [email view](/docs/commands/email/view/)
- [email send](/docs/commands/email/send/)
