---
title: "Deep Dive: Tables in Flowmi CLI"
description: "Learn how to use Flowmi's table commands to build, query, and manage structured data — all from the terminal."
date: 2026-03-01
author: "Flowmi Team"
tags: ["guide", "tables"]
---

Tables are one of the most powerful features in Flowmi CLI. Think of them as a lightweight database you can spin up and query without any infrastructure.

## Creating a table

Every table starts with a schema. Define your columns (fields) when you create the table, or add them later:

```bash
flowmi table create --name "tasks" --fields "title:text,status:select,due:date"
```

Supported field types include `text`, `number`, `select`, `date`, `boolean`, and more.

## Adding rows

Once your table exists, add data:

```bash
flowmi table row create tasks --data "title=Ship v2,status=in-progress,due=2026-04-01"
```

## Querying

The real power is in querying. Filter, sort, and aggregate your data:

```bash
# Filter by status
flowmi table row query tasks --where "status=in-progress"

# Sort by due date
flowmi table row query tasks --sort "due:asc"

# Combine filters
flowmi table row query tasks --where "status=in-progress" --sort "due:asc" --limit 10
```

## Output formats

Tables support multiple output formats. Use `--output table` for a human-readable table, or `--output json` for programmatic use:

```bash
flowmi table row query tasks --output json | jq '.[].title'
```

## Managing fields

You can evolve your schema over time:

```bash
# Add a new field
flowmi table field add tasks --name "priority" --type "select"

# Edit a field
flowmi table field edit tasks --field "priority" --options "low,medium,high"
```

## What's next

We're working on computed fields, cross-table references, and CSV import/export. Stay tuned for updates.

Check out the full [tables guide](/docs/guides/using-tables/) for more details, or browse the [table command reference](/docs/commands/table/list/) for every flag and option.
