---
title: "email trash"
description: Manage trashed emails.
---

## Synopsis

```
flowmi email trash [subcommand] [flags]
```

## Description

Manage trashed emails. Running without a subcommand lists trashed emails. Subcommands are available for viewing, restoring, and permanently deleting trashed emails.

---

### email trash list

List trashed emails.

```
flowmi email trash list [flags]
```

**Alias:** `ls`

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of emails to return | `30` |
| `--direction` | `-d` | Filter by direction (`inbound`, `outbound`) | |

---

### email trash view

View a single trashed email.

```
flowmi email trash view <id>
```

No subcommand-specific flags.

---

### email trash restore

Restore a trashed email.

```
flowmi email trash restore <id>
```

No subcommand-specific flags.

---

### email trash delete

Permanently delete a trashed email. This action is irreversible.

```
flowmi email trash delete <id>
```

No subcommand-specific flags.

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
flowmi email trash list
flowmi email trash list -L 5
flowmi email trash list -d inbound
flowmi email trash view abc123
flowmi email trash restore abc123
flowmi email trash delete abc123
```

## See Also

- [email delete](/docs/commands/email/delete/)
- [email restore](/docs/commands/email/restore/)
