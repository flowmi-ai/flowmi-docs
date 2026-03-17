---
title: auth login
description: Authenticate with your Flowmi account.
---

## Synopsis

```
flowmi auth login [flags]
```

## Description

Authenticate with your Flowmi account. By default, this opens your web browser for OAuth2 login (supports social login). Once authenticated, credentials are stored locally so subsequent commands can access the API.

Use `--with-token` to provide a setup token (`fst_`) or API key (`flk_`) directly. If no value is given, the token is read from stdin.

Use `--no-browser` to print the login URL instead of opening the browser automatically.

## Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--with-token` | | Setup token (`fst_`) or API key (`flk_`); reads from stdin if no value given | |
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
# Browser login (default, supports social login)
flowmi auth login

# Print URL instead of opening browser
flowmi auth login --no-browser

# Login with a setup token
flowmi auth login --with-token fst_...

# Login with an API key
flowmi auth login --with-token flk_...

# Pipe a token from stdin
echo "fst_..." | flowmi auth login --with-token
```

## See Also

- [auth status](/docs/commands/auth/status/)
