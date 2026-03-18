---
title: auth status
description: Display current authentication status.
---

## Synopsis

```
flowmi auth status
```

## Description

Display information about the currently authenticated user. Shows email, user ID, account creation date, credit balance, and credentials file path. Use this command to verify that you are logged in and to check your account details.

## Flags

This command has no command-specific flags.

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
# Show auth status
flowmi auth status

# Get status as JSON (useful for scripting)
flowmi auth status --json
```

## See Also

- [auth login](/docs/commands/auth/login/)
