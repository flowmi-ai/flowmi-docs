---
title: drive trash
description: Manage trashed files.
---

## Synopsis

```
flowmi drive trash [subcommand] [flags]
```

## Description

Manage trashed files. Running without a subcommand lists trashed files.

### drive trash list

List trashed files.

```
flowmi drive trash list [flags]
```

**Alias:** `ls`

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--limit` | `-L` | Maximum number of files | `30` |

### drive trash view

View metadata for a trashed file.

```
flowmi drive trash view <id>
```

### drive trash download

Download a trashed file.

```
flowmi drive trash download <id> [flags]
```

| Flag | Short | Description |
|------|-------|-------------|
| `--dest` | `-D` | Save to file path |

### drive trash restore

Restore a trashed file.

```
flowmi drive trash restore <id>
```

### drive trash delete

Permanently delete a trashed file.

```
flowmi drive trash delete <id>
```

## Inherited Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--config` | | Path to configuration file |
| `--json` | | Output as JSON |
| `--debug` | | Enable debug logging |
| `--format` | | Format string |
| `--help` | `-h` | Show help |

## Examples

```sh
flowmi drive trash list
flowmi drive trash view abc123
flowmi drive trash download abc123 -D ./recovered.pdf
flowmi drive trash restore abc123
flowmi drive trash delete abc123
```

## See Also

- [drive delete](/docs/commands/drive/delete/)
- [drive restore](/docs/commands/drive/restore/)
