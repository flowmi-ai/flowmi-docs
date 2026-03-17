---
title: "table row query"
description: Query rows with filters, sorting, and aggregation.
---

## Synopsis

```
flowmi table row query <table-id> [flags]
```

## Description

Query rows with filters, sorting, and aggregation. This is the most powerful command for retrieving row data from a table.

**Filter operators:** `eq`, `neq`, `gt`, `gte`, `lt`, `lte`, `contains`, `not_contains`, `starts_with`, `ends_with`, `is_null`, `is_not_null`

**Aggregate functions:** `count`, `sum`, `avg`, `min`, `max`

## Flags

| Flag | Short | Description | Default |
| --- | --- | --- | --- |
| `--filter` | `-f` | Filter as `column:op:value` (repeatable, AND logic) | |
| `--sort` | `-s` | Sort as `column:direction` (repeatable) | |
| `--aggregate` | `-a` | Aggregate as `fn:column:alias` | |
| `--group-by` | `-g` | Group by column (repeatable, requires aggregates) | |
| `--limit` | `-L` | Maximum number of rows to return | `30` |
| `--page` | `-p` | Page number | `1` |

## Inherited Flags

| Flag | Short | Description |
| --- | --- | --- |
| `--config` | | Path to configuration file |
| `--output` | `-o` | Output format (`text`, `json`, `table`) |
| `--format` | | Help format: `text`, `json` |
| `--help` | `-h` | Show help for the command |

## Examples

```sh
# Simple filter
flowmi table row query abc123 --filter status:eq:todo

# Multiple filters (AND)
flowmi table row query abc123 -f status:eq:active -f priority:gt:3

# Sort
flowmi table row query abc123 --sort priority:desc

# Filter + sort
flowmi table row query abc123 -f priority:gt:3 --sort priority:desc

# Count all rows
flowmi table row query abc123 -a count::total

# Group by with aggregation
flowmi table row query abc123 -g status -a count::total -a sum:revenue:total_revenue

# Complex query
flowmi table row query abc123 -g status -a sum:revenue:total_revenue -s total_revenue:desc
```

## See Also

- [table row list](/docs/commands/table/row/list/)
- [table row create](/docs/commands/table/row/create/)
