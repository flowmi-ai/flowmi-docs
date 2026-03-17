---
title: drive upload
description: Upload a file to drive.
---

## Synopsis

```
flowmi drive upload [<file>] [flags]
```

## Description

Upload a file or pipe content from stdin. When reading from stdin, `--path` is required. MIME type is auto-detected from file extension but can be overridden.

## Flags

| Flag | Short | Description | Required |
|------|-------|-------------|----------|
| `--path` | | Destination path (required for stdin) | Conditional |
| `--mime-type` | | Override MIME type | No |

## Inherited Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format |
| `--format` | | Format string |
| `--help` | `-h` | Show help |

## Examples

```sh
flowmi drive upload ./report.pdf
flowmi drive upload ./photo.jpg --path /photos/vacation.jpg
echo "hello" | flowmi drive upload --path /notes/hello.txt
cat data.csv | flowmi drive upload --path /data/export.csv --mime-type text/csv
```

## See Also

- [drive download](/docs/commands/drive/download/)
- [drive list](/docs/commands/drive/list/)
