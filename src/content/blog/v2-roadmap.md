---
title: "Flowmi CLI v2 Roadmap"
description: "A look at what's coming next for Flowmi CLI — including offline mode, plugins, and team collaboration."
date: 2026-03-10
author: "Flowmi Team"
tags: ["announcement", "roadmap"]
---

Flowmi CLI v1 gave you a solid set of tools for managing notes, files, tables, and emails from the terminal. With v2, we're expanding into areas that many of you have been requesting.

## Offline mode

The most requested feature. v2 will support a local cache layer so you can create notes, draft emails, and query tables even without an internet connection. Changes sync automatically when you reconnect.

## Plugin system

We're designing a plugin API that lets you extend Flowmi with custom commands. Think `flowmi jira list` or `flowmi slack send` — powered by community plugins with a simple install command:

```bash
flowmi plugin install flowmi-jira
```

Plugins will be distributed as single Go binaries and follow the same CLI conventions as built-in commands.

## Team collaboration

v2 introduces workspaces and shared resources. Create a shared table, invite team members, and collaborate in real time:

```bash
flowmi workspace create --name "engineering"
flowmi table create --name "sprint-board" --workspace "engineering"
```

Access control and audit logging are included out of the box.

## CI/CD integration

We'll add first-class support for non-interactive authentication, making it easy to use Flowmi in CI/CD pipelines:

```bash
flowmi auth login --token $FLOWMI_API_TOKEN
flowmi table row create deployments --data "version=$CI_TAG,status=deployed"
```

## Timeline

We're targeting a phased rollout:

- **Q2 2026** — Offline mode (beta)
- **Q3 2026** — Plugin system + CI/CD auth
- **Q4 2026** — Team workspaces

We'll share more details as each milestone approaches. Follow the [GitHub repo](https://github.com/flowmi-ai/flowmi) for updates, or subscribe to this blog's RSS feed.
