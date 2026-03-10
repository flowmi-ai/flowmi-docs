---
title: drive delete
description: Move a file to trash.
---

## Synopsis

```
flowmi drive delete <path-or-id>
```

## Description

Move a file to trash (soft delete). Use `drive trash delete` for permanent deletion.

## Inherited Flags

| Flag | Short | Description |
|------|-------|-------------|
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format |
| `--format` | | Format string |
| `--help` | `-h` | Show help |

## Examples

```sh
flowmi drive delete /docs/old-file.txt
flowmi drive delete abc-123-uuid
```

## See Also

- [drive restore](/docs/commands/drive/restore/)
- [drive trash](/docs/commands/drive/trash/)
