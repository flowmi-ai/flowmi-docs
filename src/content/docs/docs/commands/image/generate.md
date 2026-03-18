---
title: image generate
description: Generate an image from a text prompt using AI.
---

## Synopsis

```
flowmi image generate [flags]
```

## Description

Generate an image from a text prompt using AI. Optionally provide reference images for editing or transformation. The generated image is saved to a file by default (`generated_<timestamp>.<ext>`).

## Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--prompt` | `-p` | Text description of the desired image (required) | |
| `--image` | `-i` | Reference image path (repeatable, max 14) | |
| `--model` | `-m` | Model: `gemini-3.1-flash-image-preview`, `gemini-3-pro-image-preview`, `grok-imagine-image`, `grok-imagine-image-pro` | `gemini-3.1-flash-image-preview` |
| `--aspect-ratio` | `-a` | Output aspect ratio: `auto`, `1:1`, `2:3`, `3:2`, `3:4`, `4:3`, `4:5`, `5:4`, `9:16`, `16:9`, `21:9`, `1:4`, `4:1`, `1:8`, `8:1`, `2:1`, `1:2`, `19.5:9`, `9:19.5`, `20:9`, `9:20` | `auto` |
| `--size` | `-s` | Output resolution: `512`, `1K`, `2K`, `4K` | `1K` |
| `--output` | `-o` | Output file path | `generated_<timestamp>.<ext>` |

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
# Generate an image from a prompt
flowmi image generate -p "A cat wearing a top hat, oil painting"

# Edit an image with a reference
flowmi image generate -p "Remove the background" -i photo.jpg

# Blend two reference images
flowmi image generate -p "Blend these two" -i a.jpg -i b.jpg --aspect-ratio 16:9

# High-resolution with a specific model
flowmi image generate -p "Hi-res landscape" --size 4K --model gemini-3-pro-image-preview

# Save to a specific file
flowmi image generate -p "A logo" -o logo.png
```

## See Also

- [video generate](/docs/commands/video/generate/)
