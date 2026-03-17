---
title: video generate
description: Generate a video from a text prompt using AI.
---

## Synopsis

```
flowmi video generate [flags]
```

## Description

Generate a video from a text prompt using AI. Supports text-to-video, image-to-video (with `--image`), and video editing (with `--video-url`). Video generation is asynchronous — the CLI polls until the video is ready, then downloads it.

When using `--video-url` for video editing, the source video duration is capped at 8.7 seconds.

## Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--prompt` | `-p` | Text description of the desired video (required) | |
| `--duration` | `-d` | Video length in seconds: 1–15 (required) | |
| `--image` | `-i` | Source image path for image-to-video | |
| `--video-url` | | Source video URL for video editing (duration capped at 8.7s) | |
| `--model` | `-m` | Model: `grok-imagine-video` | `grok-imagine-video` |
| `--aspect-ratio` | `-a` | Output aspect ratio: `auto`, `1:1`, `16:9`, `9:16`, `4:3`, `3:4`, `3:2`, `2:3` | `auto` |
| `--resolution` | `-r` | Output resolution: `480p`, `720p` | `480p` |
| `--output-file` | `-f` | Output file path | `generated_<timestamp>.mp4` |

## Inherited Flags

| Flag | Short | Description | Default |
|------|-------|-------------|---------|
| `--config` | | Path to config file | `~/.config/flowmi/config.toml` |
| `--output` | `-o` | Output format: `text`, `json` | `text` |
| `--format` | | Help format: `text`, `json` | `text` |
| `--help` | `-h` | Show help | |

## Examples

```bash
# Text-to-video
flowmi video generate -p "A rocket launching from Mars" -d 10

# Custom aspect ratio and resolution
flowmi video generate -p "A sunset timelapse" -d 10 -a 16:9 -r 720p

# Image-to-video: animate a still image
flowmi video generate -p "Animate this scene" -i photo.jpg -d 5

# Video editing: transform an existing video
flowmi video generate -p "Change the car color to red" --video-url https://example.com/video.mp4 -d 5

# Save to a specific file
flowmi video generate -p "Ocean waves" -d 8 -f waves.mp4
```

## See Also

- [image generate](/docs/commands/image/generate/)
