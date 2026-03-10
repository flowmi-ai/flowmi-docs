---
title: config
description: Manage Flowmi CLI configuration.
---

## Synopsis

```
flowmi config <subcommand> [arguments]
```

## Description

Manage Flowmi CLI configuration. Configuration values are stored in a TOML file (by default at `~/.config/flowmi/config.toml`). The `config` command has three subcommands: `set`, `get`, and `list`.

### Known configuration keys

| Key | Description | Notes |
|-----|-------------|-------|
| `api_key` | API key for authentication | Credential — masked in output |
| `auth_server_url` | Authentication server URL | |
| `api_server_url` | API server URL | |

---

## config set

Set a configuration value.

### Synopsis

```
flowmi config set <key> <value>
```

### Examples

```bash
# Set the API server URL
flowmi config set api_server_url https://api.flowmi.ai

# Set an API key
flowmi config set api_key sk-abc123
```

---

## config get

Get a configuration value by key.

### Synopsis

```
flowmi config get <key>
```

### Examples

```bash
# Get the current API server URL
flowmi config get api_server_url

# Get the API key (prints the raw value — avoid in recorded sessions)
flowmi config get api_key
```

---

## config list

List all configuration values. Alias: `ls`.

### Synopsis

```
flowmi config list
```

### Examples

```bash
# List all configuration values
flowmi config list

# Using the alias
flowmi config ls

# Output as JSON
flowmi config list -o json
```

## Inherited Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--config` | | Path to config file | `~/.config/flowmi/config.toml` |
| `--output` | `-o` | Output format: `text`, `json`, `table` | `text` |
| `--format` | | Help format: `text`, `json` | `text` |
| `--help` | `-h` | Show help | |
