# CometChat × Replit Template

**A blank React + Vite Repl with CometChat AI-coding skills pre-installed.** Fork this Template, open Replit Agent, and ask "add chat to my app" — the Agent walks you through signup, app creation, and writes a working chat integration into your project. No CometChat account required up front.

## Use this Template

1. Click **Use this template** on the Replit Template page (or fork the public Repl).
2. Open the **Agent** panel.
3. Ask: `add chat to my app`
4. Answer 4–5 setup questions (account, app name, region, intent, placement).
5. Watch the Agent write the integration into `src/`.

That's it. The Agent reads `.agents/skills/cometchat/SKILL.md`, detects this is a React + Vite app, runs `cometchat detect`, then writes the provider, the routes, and the env vars.

## What's pre-installed

```
.agents/skills/
├── cometchat/                    Dispatcher — detects framework, gathers requirements, writes code
├── cometchat-core/               Init / login / provider / env vars / SSR safety
├── cometchat-components/         60+ component catalog with props and slot views
├── cometchat-placement/          Where to put chat (route, modal, drawer, widget)
├── cometchat-react-patterns/     React + Vite integration patterns
├── cometchat-nextjs-patterns/    Next.js patterns (if you switch frameworks)
├── cometchat-react-router-patterns/
├── cometchat-astro-patterns/
├── cometchat-theming/            5 presets (Slack / WhatsApp / iMessage / Discord / Notion) + brand colors
├── cometchat-features/           40+ features — calls, polls, AI, reactions, file sharing
├── cometchat-customization/      Custom message bubbles, headers, composer actions
├── cometchat-production/         Server-minted auth tokens, user management
└── cometchat-troubleshooting/    Diagnostics — verify, drift, doctor
```

## What you can build with this

- **Marketplace chat** (buyer ↔ seller drawer + inbox page)
- **SaaS productivity chat** (modal from navbar + full messages page)
- **Social / community** (full messenger with Chats / Calls / Users / Groups tabs)
- **Customer support** (floating widget bubble in the bottom-right)
- **Just messaging** (dedicated /messages page with two-pane layout)

The Agent picks the placement based on what you say you're building.

## After the first integration

Re-run `/cometchat` (or just ask the Agent "add reactions" / "switch to dark mode" / "set up production auth") to pick from the iteration menu:

- **Customize look & feel** — theme presets or your own brand color
- **Add a feature** — calls, reactions, polls, AI smart replies, file sharing
- **Customize a component** — custom message bubbles, headers, composer actions
- **Add another placement** — floating widget on a different page
- **Set up production auth** — replace the dev Auth Key with a server-minted token endpoint

## Recommended: CometChat Docs MCP

For deeper component customization (custom views, SDK events, request builders), the docs MCP gives the Agent access to live CometChat docs:

In Replit's Agent settings → MCP → add:

```
https://www.cometchat.com/docs/mcp
```

No authentication required. Not needed for the first integration — the pre-installed skills handle that without it.

## How this Template stays current

The skills directory in this Template is bundled at template-publish time. To pull the latest skills from the canonical [cometchat-skills](https://github.com/cometchat/cometchat-skills) repo:

```bash
npx -y @cometchat/skills add --ide replit
```

This rewrites `.agents/skills/` with the latest published skill set. Run it whenever CometChat ships a new minor.

## Source

- Skills: [github.com/cometchat/cometchat-skills](https://github.com/cometchat/cometchat-skills)
- UI Kit: [@cometchat/chat-uikit-react](https://www.npmjs.com/package/@cometchat/chat-uikit-react)
- Docs: [cometchat.com/docs](https://www.cometchat.com/docs)

## License

MIT
