---
title: "table trash"
description: Manage trashed tables.
---

## Synopsis

```
flowmi table trash [subcommand] [flags]
```

## Description

Manage trashed tables. Running without a subcommand lists trashed tables. Subcommands are available for viewing, restoring, and permanently deleting trashed tables.

---

### table trash list

List trashed tables.

```
flowmi table trash list [flags]
```

**Alias:** `ls`

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of tables to return | `30` |

---

### table trash view

View a single trashed table.

```
flowmi table trash view <table-id>
```

No subcommand-specific flags.

---

### table trash restore

Restore a trashed table.

```
flowmi table trash restore <table-id>
```

No subcommand-specific flags.

---

### table trash delete

Permanently delete a trashed table. This action is irreversible.

```
flowmi table trash delete <table-id>
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
flowmi table trash list
flowmi table trash list -L 5
flowmi table trash view abc123
flowmi table trash restore abc123
flowmi table trash delete abc123
```

## See Also

- [table delete](/docs/commands/table/delete/)
- [table restore](/docs/commands/table/restore/)
