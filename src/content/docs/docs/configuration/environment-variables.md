---
title: Environment Variables
description: Configure Flowmi CLI with environment variables.
---

All Flowmi CLI environment variables use the `FLOWMI_` prefix. They map directly to keys in the config file.

## Variable reference

| Variable | Config Key | Description |
|----------|-----------|-------------|
| `FLOWMI_API_KEY` | `api_key` | API key for authentication |
| `FLOWMI_API_SERVER_URL` | `api_server_url` | API server URL |
| `FLOWMI_AUTH_SERVER_URL` | `auth_server_url` | Auth server URL |
| `FLOWMI_ACCESS_TOKEN` | `access_token` | OAuth2 access token |
| `FLOWMI_REFRESH_TOKEN` | `refresh_token` | OAuth2 refresh token |

## Precedence

When the same setting is defined in multiple places, Flowmi resolves it in this order (highest priority first):

1. **Environment variables** — e.g. `FLOWMI_API_SERVER_URL`
2. **Config file** — values in `config.toml`
3. **Defaults** — built-in defaults

