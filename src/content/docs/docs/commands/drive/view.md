---
title: drive view
description: View file metadata.
---

## Synopsis

```
flowmi drive view <path-or-id>
```

## Description

Display metadata for a file including name, path, size, MIME type, and timestamps. Accepts both file path and UUID.

## Inherited Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format |
| `--format` | | Format string |
| `--help` | `-h` | Show help |

## Examples

```sh
flowmi drive view /docs/readme.txt
flowmi drive view abc-123-uuid
flowmi drive view /docs/readme.txt -o json
```

## See Also

- [drive download](/docs/commands/drive/download/)
- [drive list](/docs/commands/drive/list/)
