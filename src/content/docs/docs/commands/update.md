---
title: update
description: Update the Flowmi CLI to the latest version.
---

## Synopsis

```
flowmi update [flags]
```

## Description

Update the Flowmi CLI to the latest version. The command downloads the latest release from GitHub, validates the checksum, and replaces the current binary. Development builds (those without a version tag) will refuse to update — use `go install` or build from source instead.

## Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--yes` | `-y` | Skip confirmation prompt | |
| `--dry-run` | | Check for updates without installing | |
| `--version` | | Update to a specific version | latest |

## Inherited Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--config` | | Path to config file | `~/.config/flowmi/config.toml` |
| `--json` | | Output in JSON format | |
| `--debug` | | Enable debug logging | |
| `--format` | | Help format: `text`, `json` | `text` |
| `--help` | `-h` | Show help | |

## Examples

```bash
# Update to the latest version (prompts for confirmation)
flowmi update

# Skip the confirmation prompt
flowmi update --yes

# Check for updates without installing
flowmi update --dry-run

# Update to a specific version
flowmi update --version v1.2.0
```
