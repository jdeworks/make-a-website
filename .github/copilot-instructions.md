# WebStarter Kit

This is the WebStarter Kit — a guided foundation for building websites. Read [AGENTS.md](../AGENTS.md) for full instructions.

## Workflow

1. Read `prompts/01-getting-started.md` and follow it
2. Ask the user what they want to build
3. Copy `template/` contents into the current folder (don't create a subfolder)
4. Read relevant prompts based on their answers
5. Customize, test, deploy

## Prompt Files

| File | Purpose |
|------|---------|
| `prompts/00-prerequisites.md` | Check/install Node.js, editor; Git is optional |
| `prompts/01-getting-started.md` | Main workflow: idea to working project |
| `prompts/02-framework-choice.md` | Vanilla vs React vs Vue vs Astro |
| `prompts/03-project-structure.md` | How to organize files |
| `prompts/04-testing.md` | Vitest setup and writing tests |
| `prompts/05-security.md` | Security essentials checklist |
| `prompts/06-design.md` | Tailwind CSS + design guidance |
| `prompts/07-hosting-static.md` | Deploy to GitHub Pages |
| `prompts/08-hosting-server.md` | Deploy Express + SQLite to Railway |
| `prompts/09-react-upgrade.md` | Upgrade vanilla to React |
| `prompts/10-cicd.md` | GitHub Actions CI/CD |
| `prompts/11-readme-template.md` | README template for the generated project |

## Build Commands

```
npm run dev        # Start dev server
npm run build      # Production build
npm test           # Run tests in watch mode
npm run test:run   # Run tests once
```
