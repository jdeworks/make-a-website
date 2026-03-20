# WebStarter Kit

An AI-agent-readable knowledge base that guides complete beginners from "I have an idea" to a deployed, tested, secure website.

## For AI Agents

If you are an AI agent, start here:

1. Read [`CLAUDE.md`](CLAUDE.md) (Claude Code) or [`AGENTS.md`](AGENTS.md) (all other agents)
2. Follow [`prompts/01-getting-started.md`](prompts/01-getting-started.md) — it walks you through the full flow
3. Read additional prompts on-demand based on what the user needs

Entry points for specific tools:
- **Claude Code** — `CLAUDE.md` (auto-loaded)
- **Cursor** — `.cursor/rules/webstarter-kit.mdc` (auto-loaded)
- **GitHub Copilot** — `.github/copilot-instructions.md` (auto-loaded)
- **Windsurf** — `.windsurf/rules/webstarter-kit.md` (auto-loaded)
- **ChatGPT / other** — read `AGENTS.md` directly

## For Humans

Copy-paste one of these prompts to your AI agent and you're off:

**Claude Code:**
```
I want to build a website. Use https://github.com/jdeworks/make-a-website to get us started.
```

**Cursor / ChatGPT / other:**
```
I want to build a website. Read https://raw.githubusercontent.com/jdeworks/make-a-website/main/AGENTS.md and guide me through it.
```

That's it. The agent will ask you what you want to build and handle the rest.

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

## Project Structure

```
make-a-website/
  CLAUDE.md              # Claude Code entry point
  AGENTS.md              # Universal agent entry point
  .cursor/rules/         # Cursor entry point
  .github/               # Copilot entry point
  .windsurf/rules/       # Windsurf entry point
  prompts/               # AI-readable guidance (12 files)
  template/              # Copyable starter project
  docs/                  # Human-readable handbook
```

## Prompts

| File | Description |
|------|-------------|
| [00-prerequisites.md](prompts/00-prerequisites.md) | Check/install Node.js, Git, editor |
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
