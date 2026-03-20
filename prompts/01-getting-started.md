# Getting Started

This is the main workflow. Follow these steps as a conversation with the user.

## Step 1: Understand the Project

Ask the user:
> "What do you want to build? Describe your website idea — what it does, who it's for, and any features you have in mind."

Wait for their response before continuing.

## Step 2: Determine the Type

Ask the user:
> "Is this a static site (blog, portfolio, landing page) or does it need a server (user accounts, database, API)?"

If they're unsure, help them decide:
- **Static** — content doesn't change per user, no login, no database
- **Server** — needs user accounts, saves data, talks to external APIs with secrets

## Step 3: Set Up the Project

1. Copy the `template/` directory to a new folder named after their project:
   ```bash
   cp -r template/ my-project-name
   cd my-project-name
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Confirm the user sees the starter page in their browser (usually http://localhost:5173)

## Step 4: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit from WebStarter Kit template"
```

## Step 5: Record Project Decisions

Create a `project-config.md` in the project root to record these decisions. Update it as you make more choices.

```markdown
# Project Configuration

- **Project name:** {name}
- **Type:** static / server
- **Description:** {what the user described}
- **Framework:** vanilla (default, can upgrade to React later)
- **Hosting:** GitHub Pages / Railway
- **Needs auth:** yes / no
- **Needs database:** yes / no
```

Fill in the values based on what the user told you in Steps 1 and 2. Leave hosting blank if not yet decided. This file ensures later prompts know what the user chose without re-asking.

## Step 6: Guide to Next Steps

Based on their project type, point them to the right prompts:

**For all projects:**
- Read `prompts/02-framework-choice.md` to decide on a framework
- Read `prompts/03-project-structure.md` to organize files
- Read `prompts/06-design.md` for styling guidance
- Read `prompts/04-testing.md` to add tests
- Read `prompts/05-security.md` for security basics

**For static sites:**
- Read `prompts/07-hosting-static.md` to deploy to GitHub Pages

**For server apps:**
- Read `prompts/08-hosting-server.md` to deploy with Express + SQLite

**When they need more interactivity:**
- Read `prompts/09-react-upgrade.md` to upgrade to React

**For CI/CD:**
- Read `prompts/10-cicd.md` for automated testing and deployment

## Tone

Be encouraging. The user is likely a beginner. Celebrate small wins ("Your dev server is running — you just set up a real development environment!"). Don't overwhelm with options — guide them one step at a time.

## Verify

- [ ] `npm run dev` starts without errors
- [ ] Browser shows the starter page at localhost:5173
- [ ] `npm run test:run` passes all tests
- [ ] Git repo initialized with initial commit
- [ ] `project-config.md` created with user's choices
