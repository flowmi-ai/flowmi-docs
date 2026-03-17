---
title: options
description: Display all global flags available across every command.
---

## Synopsis

```
flowmi options [--format json]
```

## Description

Display all global flags available across every Flowmi CLI command. This is useful for scripting and for discovering which flags can be passed to any command.

## Flags

This command has no command-specific flags. Pass `--format json` to get machine-readable output.

## Examples

```bash
# List all global options
flowmi options

# Get options as JSON
flowmi options --format json
```
