---
title: drive list
description: List files in drive.
---

## Synopsis

```
flowmi drive list [flags]
```

**Alias:** `ls`

## Description

List files in drive.

## Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--limit` | `-L` | Maximum number of files | `30` |
| `--page` | `-p` | Page number | `1` |
| `--prefix` | | Filter by path prefix | |

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
flowmi drive list
flowmi drive ls -L 10
flowmi drive list --prefix /docs
flowmi drive list --json
```

## See Also

- [drive upload](/docs/commands/drive/upload/)
- [drive download](/docs/commands/drive/download/)
