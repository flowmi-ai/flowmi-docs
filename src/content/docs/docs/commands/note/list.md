---
title: "note list"
description: List notes.
---

## Synopsis

```
flowmi note list [flags]
```

**Alias:** `ls`

## Description

List notes. Returns notes in reverse-chronological order by default.

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--limit` | `-L` | Maximum number of notes to return | `30` |
| `--label` | `-l` | Filter by label | |
| `--search` | `-S` | Search notes by content | |

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
flowmi note list
flowmi note ls -L 10
flowmi note list --label important
flowmi note list --search "meeting notes"
flowmi note list --json
```

## See Also

- [note create](/docs/commands/note/create/)
- [note view](/docs/commands/note/view/)
