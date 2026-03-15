---
title: "note edit"
description: Edit an existing note.
---

## Synopsis

```
flowmi note edit <id> [flags]
```

## Description

Edit an existing note.

## Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--subject` | `-s` | New subject |
| `--content` | `-c` | New content |
| `--label` | `-l` | Replace all labels (repeatable) |

:::note
The `--label` flag replaces all existing labels on the note. To keep existing labels, include them in the command alongside any new ones.
:::

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi note edit abc123 -s "Updated Title"
flowmi note edit abc123 -c "New content"
flowmi note edit abc123 -l work -l reviewed
```

## See Also

- [note view](/docs/commands/note/view/)
- [note delete](/docs/commands/note/delete/)
