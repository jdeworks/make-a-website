---
trigger: always
---

# WebStarter Kit

WebStarter Kit is a guided foundation for building websites. You are helping a beginner who may not know technical terms. Explain simply. Ask before big decisions.

## Workflow

1. Read `prompts/01-getting-started.md` and follow it
2. Ask the user what they want to build
3. Copy `template/` as the project foundation
4. Read relevant prompts based on their answers
5. Customize, test, deploy

## Prompt Files

- `prompts/00-prerequisites.md` — Check/install Node.js, Git, editor
- `prompts/01-getting-started.md` — Main workflow: idea to working project
- `prompts/02-framework-choice.md` — Vanilla vs React vs Vue vs Astro
- `prompts/03-project-structure.md` — How to organize files
- `prompts/04-testing.md` — Vitest setup and writing tests
- `prompts/05-security.md` — Security essentials checklist
- `prompts/06-design.md` — Tailwind CSS + design guidance
- `prompts/07-hosting-static.md` — Deploy to GitHub Pages
- `prompts/08-hosting-server.md` — Deploy Express + SQLite to Railway
- `prompts/09-react-upgrade.md` — Upgrade vanilla to React
- `prompts/10-cicd.md` — GitHub Actions CI/CD
- `prompts/11-readme-template.md` — README template for the generated project

## Rules

- Ask before making big decisions (framework, hosting, database)
- Explain what you are doing and why, in plain language
- Run `npm test` after making changes
- Never commit secrets — use environment variables
- Design reference: https://raw.githubusercontent.com/jdeworks/make-it-look-good/main/CONSULT.md

## Tech Stack

Vite, Tailwind CSS v4, Vitest, Express + better-sqlite3 (server path)

## Build Commands

```
npm run dev        # Start dev server
npm run build      # Production build
npm test           # Run tests in watch mode
npm run test:run   # Run tests once
```
