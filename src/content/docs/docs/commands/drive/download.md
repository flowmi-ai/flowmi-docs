---
title: drive download
description: Download a file from drive.
---

## Synopsis

```
flowmi drive download <path-or-id> [flags]
```

## Description

Download a file by its path or UUID. By default writes to stdout. Use `--dest` to save to a file.

## Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--dest` | `-D` | Save to file path |

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
flowmi drive download /docs/readme.txt
flowmi drive download /docs/readme.txt -D ./readme.txt
flowmi drive download abc-123-uuid -D ./file.pdf
flowmi drive download /data/export.csv | head -5
```

## See Also

- [drive upload](/docs/commands/drive/upload/)
- [drive view](/docs/commands/drive/view/)
