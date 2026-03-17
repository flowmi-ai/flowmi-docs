---
title: auth login
description: Authenticate with your Flowmi account.
---

## Synopsis

```
flowmi auth login [flags]
```

## Description

Authenticate with your Flowmi account. By default, this opens your web browser to complete the login flow. Once authenticated, credentials are stored locally so subsequent commands can access the API.

For headless environments, use `--no-browser` to print the login URL instead of opening a browser, or pass `--email` and `--password` to log in directly without a browser.

## Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--email` | | Email address for direct login (skips browser) | |
| `--password` | | Password for direct login (used with `--email`) | |
| `--no-browser` | | Print login URL instead of opening browser | |

## Inherited Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--config` | | Path to config file | `~/.config/flowmi/config.toml` |
| `--output` | `-o` | Output format: `text`, `json`, `table` | `text` |
| `--format` | | Help format: `text`, `json` | `text` |
| `--help` | `-h` | Show help | |

## Examples

```bash
# Browser login (default)
flowmi auth login

# Print URL instead of opening browser
flowmi auth login --no-browser

# Direct login with email and password
flowmi auth login --email user@example.com --password "$FLOWMI_PASSWORD"
```

## See Also

- [auth status](/docs/commands/auth/status/)
