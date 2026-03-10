// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://flowmi.ai",
  base: "/docs",
  outDir: "./dist/docs",
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
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Installation", slug: "getting-started/installation" },
            {
              label: "Authentication",
              slug: "getting-started/authentication",
            },
            { label: "Quickstart", slug: "getting-started/quickstart" },
          ],
        },
        {
          label: "Guides",
          items: [
            {
              label: "Working with Notes",
              slug: "guides/working-with-notes",
            },
            { label: "Managing Files", slug: "guides/managing-files" },
            { label: "Using Tables", slug: "guides/using-tables" },
            { label: "Sending Emails", slug: "guides/sending-emails" },
            {
              label: "Web Search & Scrape",
              slug: "guides/web-search-and-scrape",
            },
          ],
        },
        {
          label: "Commands",
          items: [
            { label: "Overview", slug: "commands/overview" },
            {
              label: "auth",
              collapsed: true,
              items: [
                { label: "auth login", slug: "commands/auth/login" },
                { label: "auth status", slug: "commands/auth/status" },
              ],
            },
            {
              label: "note",
              collapsed: true,
              items: [
                { label: "note list", slug: "commands/note/list" },
                { label: "note create", slug: "commands/note/create" },
                { label: "note view", slug: "commands/note/view" },
                { label: "note edit", slug: "commands/note/edit" },
                { label: "note delete", slug: "commands/note/delete" },
                { label: "note restore", slug: "commands/note/restore" },
                { label: "note trash", slug: "commands/note/trash" },
              ],
            },
            {
              label: "drive",
              collapsed: true,
              items: [
                { label: "drive list", slug: "commands/drive/list" },
                { label: "drive upload", slug: "commands/drive/upload" },
                { label: "drive download", slug: "commands/drive/download" },
                { label: "drive view", slug: "commands/drive/view" },
                { label: "drive delete", slug: "commands/drive/delete" },
                { label: "drive restore", slug: "commands/drive/restore" },
                { label: "drive trash", slug: "commands/drive/trash" },
              ],
            },
            {
              label: "table",
              collapsed: true,
              items: [
                { label: "table list", slug: "commands/table/list" },
                { label: "table create", slug: "commands/table/create" },
                { label: "table view", slug: "commands/table/view" },
                { label: "table edit", slug: "commands/table/edit" },
                { label: "table delete", slug: "commands/table/delete" },
                { label: "table restore", slug: "commands/table/restore" },
                { label: "table trash", slug: "commands/table/trash" },
                {
                  label: "table field",
                  collapsed: true,
                  items: [
                    {
                      label: "table field add",
                      slug: "commands/table/field/add",
                    },
                    {
                      label: "table field edit",
                      slug: "commands/table/field/edit",
                    },
                    {
                      label: "table field delete",
                      slug: "commands/table/field/delete",
                    },
                  ],
                },
                {
                  label: "table row",
                  collapsed: true,
                  items: [
                    {
                      label: "table row list",
                      slug: "commands/table/row/list",
                    },
                    {
                      label: "table row create",
                      slug: "commands/table/row/create",
                    },
                    {
                      label: "table row view",
                      slug: "commands/table/row/view",
                    },
                    {
                      label: "table row edit",
                      slug: "commands/table/row/edit",
                    },
                    {
                      label: "table row delete",
                      slug: "commands/table/row/delete",
                    },
                    {
                      label: "table row restore",
                      slug: "commands/table/row/restore",
                    },
                    {
                      label: "table row query",
                      slug: "commands/table/row/query",
                    },
                    {
                      label: "table row trash",
                      slug: "commands/table/row/trash",
                    },
                  ],
                },
              ],
            },
            {
              label: "email",
              collapsed: true,
              items: [
                { label: "email list", slug: "commands/email/list" },
                { label: "email view", slug: "commands/email/view" },
                { label: "email send", slug: "commands/email/send" },
                { label: "email delete", slug: "commands/email/delete" },
                { label: "email restore", slug: "commands/email/restore" },
                { label: "email trash", slug: "commands/email/trash" },
                {
                  label: "email mailbox",
                  collapsed: true,
                  items: [
                    {
                      label: "email mailbox list",
                      slug: "commands/email/mailbox/list",
                    },
                    {
                      label: "email mailbox create",
                      slug: "commands/email/mailbox/create",
                    },
                    {
                      label: "email mailbox edit",
                      slug: "commands/email/mailbox/edit",
                    },
                    {
                      label: "email mailbox delete",
                      slug: "commands/email/mailbox/delete",
                    },
                  ],
                },
              ],
            },
            {
              label: "search",
              collapsed: true,
              items: [
                { label: "search web", slug: "commands/search/web" },
                { label: "search images", slug: "commands/search/images" },
                { label: "search news", slug: "commands/search/news" },
              ],
            },
            { label: "scrape", slug: "commands/scrape" },
            { label: "config", slug: "commands/config" },
            { label: "version", slug: "commands/version" },
            { label: "update", slug: "commands/update" },
            { label: "completion", slug: "commands/completion" },
            { label: "options", slug: "commands/options" },
          ],
        },
        {
          label: "Configuration",
          items: [
            { label: "Config Files", slug: "configuration/config-files" },
            {
              label: "Environment Variables",
              slug: "configuration/environment-variables",
            },
            { label: "Output Formats", slug: "configuration/output-formats" },
          ],
        },
      ],
    }),
  ],
});
