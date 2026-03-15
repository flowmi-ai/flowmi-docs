---
title: "table create"
description: Create a new table.
---

## Synopsis

```
flowmi table create [flags]
```

## Description

Create a new table. You can optionally define columns at creation time using the `--columns` flag with a JSON array of column definitions.

Supported column types: `text`, `number`, `boolean`, `datetime`, `enum`, `url`, `email`, `json`, `array`.

## Flags

| Flag | Short | Description | Required |
| --- | --- | --- | --- |
| `--name` | `-n` | Table name | Yes |
| `--description` | `-d` | Table description | No |
| `--columns` | `-c` | Column definitions as JSON array | No |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
flowmi table create -n "Tasks"
flowmi table create -n "Tasks" -d "Project task tracker"
flowmi table create -n "Tasks" -c '[{"name":"status","type":"enum","options":{"values":["todo","done"]}},{"name":"priority","type":"number"}]'
```

## See Also

- [table list](/docs/commands/table/list/)
- [table view](/docs/commands/table/view/)
- [table field add](/docs/commands/table/field/add/)
