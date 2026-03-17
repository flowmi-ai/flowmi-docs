// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://flowmi.ai",
  redirects: {
    "/": "/docs/",
  },
  integrations: [
    starlight({
      title: "Flowmi CLI",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/flowmi-ai/flowmi",
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Introduction",
              slug: "docs/getting-started/introduction",
            },
            {
              label: "Installation",
              slug: "docs/getting-started/installation",
            },
            {
              label: "Authentication",
              slug: "docs/getting-started/authentication",
            },
            { label: "Quickstart", slug: "docs/getting-started/quickstart" },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Working with Notes",
              slug: "docs/guides/working-with-notes",
            },
            { label: "Managing Files", slug: "docs/guides/managing-files" },
            { label: "Using Tables", slug: "docs/guides/using-tables" },
            { label: "Sending Emails", slug: "docs/guides/sending-emails" },
            {
              label: "Web Search & Scrape",
              slug: "docs/guides/web-search-and-scrape",
            },
          ],
        },
        {
          label: "Commands",
          items: [
            { label: "Overview", slug: "docs/commands/overview" },
            {
              label: "auth",
              collapsed: true,
              items: [
                { label: "auth login", slug: "docs/commands/auth/login" },
                { label: "auth status", slug: "docs/commands/auth/status" },
              ],
            },
            {
              label: "note",
              collapsed: true,
              items: [
                { label: "note list", slug: "docs/commands/note/list" },
                { label: "note create", slug: "docs/commands/note/create" },
                { label: "note view", slug: "docs/commands/note/view" },
                { label: "note edit", slug: "docs/commands/note/edit" },
                { label: "note delete", slug: "docs/commands/note/delete" },
                {
                  label: "note restore",
                  slug: "docs/commands/note/restore",
                },
                { label: "note trash", slug: "docs/commands/note/trash" },
              ],
            },
            {
              label: "drive",
              collapsed: true,
              items: [
                { label: "drive list", slug: "docs/commands/drive/list" },
                { label: "drive upload", slug: "docs/commands/drive/upload" },
                {
                  label: "drive download",
                  slug: "docs/commands/drive/download",
                },
                { label: "drive view", slug: "docs/commands/drive/view" },
                { label: "drive delete", slug: "docs/commands/drive/delete" },
                {
                  label: "drive restore",
                  slug: "docs/commands/drive/restore",
                },
                { label: "drive trash", slug: "docs/commands/drive/trash" },
              ],
            },
            {
              label: "table",
              collapsed: true,
              items: [
                { label: "table list", slug: "docs/commands/table/list" },
                { label: "table create", slug: "docs/commands/table/create" },
                { label: "table view", slug: "docs/commands/table/view" },
                { label: "table edit", slug: "docs/commands/table/edit" },
                { label: "table delete", slug: "docs/commands/table/delete" },
                {
                  label: "table restore",
                  slug: "docs/commands/table/restore",
                },
                { label: "table trash", slug: "docs/commands/table/trash" },
                {
                  label: "table field",
                  collapsed: true,
                  items: [
                    {
                      label: "table field add",
                      slug: "docs/commands/table/field/add",
                    },
                    {
                      label: "table field edit",
                      slug: "docs/commands/table/field/edit",
                    },
                    {
                      label: "table field delete",
                      slug: "docs/commands/table/field/delete",
                    },
                  ],
                },
                {
                  label: "table row",
                  collapsed: true,
                  items: [
                    {
                      label: "table row list",
                      slug: "docs/commands/table/row/list",
                    },
                    {
                      label: "table row create",
                      slug: "docs/commands/table/row/create",
                    },
                    {
                      label: "table row view",
                      slug: "docs/commands/table/row/view",
                    },
                    {
                      label: "table row edit",
                      slug: "docs/commands/table/row/edit",
                    },
                    {
                      label: "table row delete",
                      slug: "docs/commands/table/row/delete",
                    },
                    {
                      label: "table row restore",
                      slug: "docs/commands/table/row/restore",
                    },
                    {
                      label: "table row query",
                      slug: "docs/commands/table/row/query",
                    },
                    {
                      label: "table row trash",
                      slug: "docs/commands/table/row/trash",
                    },
                  ],
                },
              ],
            },
            {
              label: "email",
              collapsed: true,
              items: [
                { label: "email list", slug: "docs/commands/email/list" },
                { label: "email view", slug: "docs/commands/email/view" },
                { label: "email send", slug: "docs/commands/email/send" },
                { label: "email delete", slug: "docs/commands/email/delete" },
                {
                  label: "email restore",
                  slug: "docs/commands/email/restore",
                },
                { label: "email trash", slug: "docs/commands/email/trash" },
                {
                  label: "email mailbox",
                  collapsed: true,
                  items: [
                    {
                      label: "email mailbox list",
                      slug: "docs/commands/email/mailbox/list",
                    },
                    {
                      label: "email mailbox create",
                      slug: "docs/commands/email/mailbox/create",
                    },
                    {
                      label: "email mailbox edit",
                      slug: "docs/commands/email/mailbox/edit",
                    },
                    {
                      label: "email mailbox delete",
                      slug: "docs/commands/email/mailbox/delete",
                    },
                  ],
                },
              ],
            },
            {
              label: "search",
              collapsed: true,
              items: [
                { label: "search web", slug: "docs/commands/search/web" },
                {
                  label: "search images",
                  slug: "docs/commands/search/images",
                },
                { label: "search news", slug: "docs/commands/search/news" },
              ],
            },
            { label: "scrape", slug: "docs/commands/scrape" },
            {
              label: "image",
              collapsed: true,
              items: [
                {
                  label: "image generate",
                  slug: "docs/commands/image/generate",
                },
              ],
            },
            {
              label: "video",
              collapsed: true,
              items: [
                {
                  label: "video generate",
                  slug: "docs/commands/video/generate",
                },
              ],
            },
            { label: "config", slug: "docs/commands/config" },
            { label: "version", slug: "docs/commands/version" },
            { label: "update", slug: "docs/commands/update" },
            { label: "completion", slug: "docs/commands/completion" },
            { label: "options", slug: "docs/commands/options" },
          ],
        },
        {
          label: "Configuration",
          items: [
            {
              label: "Config Files",
              slug: "docs/configuration/config-files",
            },
            {
              label: "Environment Variables",
              slug: "docs/configuration/environment-variables",
            },
            {
              label: "Output Formats",
              slug: "docs/configuration/output-formats",
            },
          ],
        },
      ],
    }),
  ],
});
