---
title: "note create"
description: Create a new note.
---

## Synopsis

```
flowmi note create [flags]
```

**Alias:** `new`

## Description

Create a new note.

## Flags

| Flag | Short | Description | Required |
| --- | --- | --- | --- |
| `--subject` | `-s` | Note subject | No |
| `--content` | `-c` | Note content | Yes |
| `--label` | `-l` | Add label (repeatable) | No |

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
flowmi note create -c "Quick thought"
flowmi note create -s "Meeting Notes" -c "Discussed Q3 roadmap"
flowmi note create -s "Tagged" -c "Content" -l work -l urgent
```

## See Also

- [note list](/docs/commands/note/list/)
- [note edit](/docs/commands/note/edit/)
