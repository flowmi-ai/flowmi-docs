---
title: "table row trash"
description: Manage trashed rows.
---

## Synopsis

```
flowmi table row trash [subcommand] <table-id> [flags]
```

## Description

Manage trashed rows. Running without a subcommand lists trashed rows. Subcommands are available for viewing, restoring, and permanently deleting trashed rows.

---

### table row trash list

List trashed rows.

```
flowmi table row trash list <table-id> [flags]
```

**Alias:** `ls`

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of rows to return | `30` |

---

### table row trash view

View a single trashed row.

```
flowmi table row trash view <table-id> <row-id>
```

No subcommand-specific flags.

---

### table row trash restore

Restore a trashed row.

```
flowmi table row trash restore <table-id> <row-id>
```

No subcommand-specific flags.

---

### table row trash delete

Permanently delete a trashed row. This action is irreversible.

```
flowmi table row trash delete <table-id> <row-id>
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
flowmi table row trash list abc123
flowmi table row trash list abc123 -L 5
flowmi table row trash view abc123 row456
flowmi table row trash restore abc123 row456
flowmi table row trash delete abc123 row456
```

## See Also

- [table row delete](/docs/commands/table/row/delete/)
- [table row restore](/docs/commands/table/row/restore/)
