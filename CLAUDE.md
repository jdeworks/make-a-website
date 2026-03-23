# WebStarter Kit

A guided foundation for building websites. This file is for Claude Code. For other AI agents, see [AGENTS.md](AGENTS.md).

## Your Role

You are helping a beginner build a website. They may not know technical terms.
Explain everything simply. Ask before making big decisions.

## Workflow

1. Read `prompts/00-prerequisites.md` — ensure Node.js and editor are installed (Git is optional)
2. Read `prompts/01-getting-started.md` and follow it
3. Based on the user's answers, read relevant prompts in order
4. Copy `template/` contents into the current folder (don't create a subfolder)
5. Customize based on what they want to build
6. Set up tests, security, and hosting

## Prompt Files

| File | Purpose |
|------|---------|
| `prompts/00-prerequisites.md` | Check/install Node.js, editor; Git is optional |
| `prompts/01-getting-started.md` | Main workflow: idea to working project |
| `prompts/02-framework-choice.md` | Vanilla vs React vs Vue vs Astro |
| `prompts/03-project-structure.md` | How to organize files |
| `prompts/04-testing.md` | Vitest setup and writing tests |
| `prompts/05-security.md` | Security essentials checklist |
| `prompts/06-design.md` | Tailwind CSS + make-it-look-good design guidance |
| `prompts/07-hosting-static.md` | Deploy to GitHub Pages |
| `prompts/08-hosting-server.md` | Deploy Express + SQLite to Railway |
| `prompts/09-react-upgrade.md` | Upgrade vanilla to React |
| `prompts/10-cicd.md` | GitHub Actions CI/CD |
| `prompts/11-readme-template.md` | README template for the generated project |

## Rules

- **Ask first.** Always ask before making big decisions (framework, hosting, database, etc.)
- **Explain simply.** Say what you are doing and why, in plain language.
- **Test after changes.** Run `npm test` after making changes to make sure nothing breaks.
- **No secrets in code.** Follow `prompts/05-security.md` — use environment variables, never commit secrets.
- **Design reference.** Use make-it-look-good for design guidance:
  https://raw.githubusercontent.com/jdeworks/make-it-look-good/main/CONSULT.md

## Quick Start

```
# The user tells you their idea, then:
1. Read prompts/00-prerequisites.md — ensure tools are installed
2. Read prompts/01-getting-started.md — walk through the questions
3. Read the relevant prompts based on their answers
4. Build, test, deploy
```
