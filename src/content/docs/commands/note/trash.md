---
title: "note trash"
description: Manage trashed notes.
---

## Synopsis

```
flowmi note trash [subcommand] [flags]
```

## Description

Manage trashed notes. Running without a subcommand lists trashed notes. Subcommands are available for viewing, restoring, and permanently deleting trashed notes.

---

### note trash list

List trashed notes.

```
flowmi note trash list [flags]
```

**Alias:** `ls`

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of notes to return | `30` |

---

### note trash view

View a single trashed note.

```
flowmi note trash view <id>
```

No subcommand-specific flags.

---

### note trash restore

Restore a trashed note.

```
flowmi note trash restore <id>
```

No subcommand-specific flags.

---

### note trash delete

Permanently delete a trashed note. This action is irreversible.

```
flowmi note trash delete <id>
```

No subcommand-specific flags.

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi note trash list
flowmi note trash list -L 5
flowmi note trash view abc123
flowmi note trash restore abc123
flowmi note trash delete abc123
```

## See Also

- [note delete](/docs/commands/note/delete/)
- [note restore](/docs/commands/note/restore/)
