# WebStarter Kit

An AI-agent-readable knowledge base that guides complete beginners from "I have an idea" to a deployed, tested, secure website.

## For AI Agents

- Point your AI agent at this repo's [CLAUDE.md](CLAUDE.md)
- Works with: Claude Code, Cursor, ChatGPT, and any LLM that can read markdown
- The agent will guide you through every decision

## For Humans

- Browse the handbook: [docs/](docs/)
- Or read the prompts directly: [prompts/](prompts/)

## What You Get

- A working website foundation with `npm run dev`
- Pre-configured tests (Vitest)
- Security basics (env vars, .gitignore, input validation guidance)
- Deployment ready (GitHub Pages or Railway)
- Professional README auto-generated
- Design guidance via [make-it-look-good](https://github.com/jdeworks/make-it-look-good)

## Quick Start

```bash
# Option 1: Tell your AI agent
"Read https://raw.githubusercontent.com/jdeworks/make-a-website/main/CLAUDE.md and help me build a website"

# Option 2: Manual
cp -r template/ my-project/
cd my-project
npm install
npm run dev
```

## Tech Stack

- Vanilla HTML/CSS/JS (with React upgrade path)
- Tailwind CSS v4
- Vite
- Vitest
- Express + better-sqlite3 (server path)

## Project Structure

```
make-a-website/
  CLAUDE.md              # AI agent entry point
  .cursor/rules/         # Cursor IDE entry point
  prompts/               # AI-readable guidance files
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
