# WebStarter Kit

An AI-guided foundation that takes complete beginners from "I have an idea" to a deployed, tested, secure website.

## Get Started

Copy-paste one of the prompts below into your AI agent and you're off.

### Option 1: Online chat (Claude.ai, ChatGPT, Gemini, etc.)

Paste this into your chat:

```
I want to build a website. Fetch this context bundle and use it as your guide:
https://raw.githubusercontent.com/jdeworks/make-a-website/dev/bundle.xml

Start by reading the AGENTS.md content inside the bundle, then walk me through the process.
```

### Option 2: Local AI agent (Claude Code, Cursor, Windsurf, Codex, etc.)

First clone the repo:

```bash
git clone -b dev https://github.com/jdeworks/make-a-website.git
cd make-a-website
```

Then tell your agent:

```
I want to build a website. Read AGENTS.md and guide me through the process.
```

That's it. The agent will check your setup, ask what you want to build, and handle the rest.

**Want to browse the guides yourself?** Check out the [handbook](docs/).

## What You Get

- A working website foundation with `npm run dev`
- Pre-configured tests (Vitest) that pass out of the box
- Security basics (env vars, .gitignore, input validation guidance)
- Deployment ready (GitHub Pages or Railway)
- Professional README auto-generated for your project
- Design guidance via [make-it-look-good](https://github.com/jdeworks/make-it-look-good)

## Tech Stack

- Vanilla HTML/CSS/JS (with React upgrade path)
- Tailwind CSS v4
- Vite
- Vitest
- Express + better-sqlite3 (server path)

## How It Works

All AI agents (Claude Code, Cursor, Copilot, Windsurf, ChatGPT) read the same instructions from `AGENTS.md`. Tool-specific entry points (CLAUDE.md, .cursor/rules, etc.) just redirect there.

The guided flow:

1. `prompts/00-prerequisites.md` — Check setup (Node.js, editor, optionally Git)
2. `prompts/01-getting-started.md` — Understand your idea, set up the project
3. Additional prompts as needed (framework, design, testing, hosting, CI/CD)

## Project Structure

```
make-a-website/
  AGENTS.md              # AI agent instructions (single source of truth)
  CLAUDE.md              # Redirects to AGENTS.md
  .cursor/rules/         # Redirects to AGENTS.md
  .github/               # Redirects to AGENTS.md
  .windsurf/rules/       # Redirects to AGENTS.md
  prompts/               # AI-readable guidance (12 files)
  template/              # Copyable starter project
  docs/                  # Human-readable handbook
  bundle.xml             # Repomix bundle for online AI chat
  repomix.config.json    # Repomix configuration
```

## Prompts

| File | Description |
|------|-------------|
| [00-prerequisites.md](prompts/00-prerequisites.md) | Check/install Node.js, editor; Git is optional |
| [01-getting-started.md](prompts/01-getting-started.md) | Main workflow: idea to working project |
| [02-framework-choice.md](prompts/02-framework-choice.md) | Vanilla vs React vs Vue vs Astro |
| [03-project-structure.md](prompts/03-project-structure.md) | How to organize files |
| [04-testing.md](prompts/04-testing.md) | Vitest setup and writing tests |
| [05-security.md](prompts/05-security.md) | Security essentials checklist |
| [06-design.md](prompts/06-design.md) | Tailwind CSS + make-it-look-good design guidance |
| [07-hosting-static.md](prompts/07-hosting-static.md) | Deploy to GitHub Pages |
| [08-hosting-server.md](prompts/08-hosting-server.md) | Deploy Express + SQLite to Railway |
| [09-react-upgrade.md](prompts/09-react-upgrade.md) | Upgrade vanilla to React |
| [10-cicd.md](prompts/10-cicd.md) | GitHub Actions CI/CD |
| [11-readme-template.md](prompts/11-readme-template.md) | README template for generated projects |

## Contributing

Issues and PRs welcome.

## License

[MIT](LICENSE)
