# Getting Started

This is the main workflow. Follow these steps as a conversation with the user.

**Remember:** Always tell the user "If anything is confusing or you're not sure, just ask! There are no wrong answers."

## Step 1: Understand the Project

Ask the user:
> "What do you want to build? Describe your website idea — what it does, who it's for, and any features you have in mind. Don't worry about technical details — just describe it like you'd tell a friend."

Wait for their response before continuing.

## Step 2: Determine the Type

If the user identified as a **total novice** (or you haven't asked yet), use this approach:

> "I need to figure out one thing about your website. Let me describe two options in simple terms:
>
> **Option A: A website that shows information** (like a portfolio, blog, or landing page)
> Everyone who visits sees the same content. You update it by changing the code. Think of it like a digital poster or brochure.
>
> **Option B: A website where people can log in or save things** (like a social media site, online store, or app with user accounts)
> Each person has their own data. The website remembers who they are. Think of it like Instagram or Amazon.
>
> Based on what you described, I'd recommend **Option [A/B]** because [reason]. Does that sound right?
>
> (Not sure? Just ask and I'll help you figure it out!)"

Fill in the recommendation based on what they described in Step 1. Most beginner projects are Option A (static).

If the user is more experienced, you can use the shorter version:
> "Is this a static site (blog, portfolio, landing page) or does it need a server (user accounts, database, API)?"

- **Static (Option A)** — content doesn't change per user, no login, no database
- **Server (Option B)** — needs user accounts, saves data, talks to external APIs with secrets

## Step 3: Set Up the Project

**Important: Work in the current folder.** Do not create a new subfolder. Copy the template contents directly into where we are.

1. Copy the template files into the current directory:
   ```bash
   cp -rn template/* template/.* . 2>/dev/null || cp -rn template/* .
   ```
   (This copies all files from `template/` into the current folder without overwriting existing files.)

2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Confirm the user sees the starter page in their browser (usually http://localhost:5173)

🟢 **Total novice celebration:** "Your dev server is running — you just set up a real development environment! The website you see in your browser will update automatically as we make changes."

### About node_modules

After running `npm install`, you'll see a `node_modules` folder appear. This is normal! It contains helper code that your project needs. A few things to know:
- **Don't edit files in there** — they're managed by npm
- **Don't worry about its size** — it can be large, but that's normal
- **It's not saved to Git** — the `.gitignore` file tells Git to skip it
- **You can delete and recreate it** — just run `npm install` again

## Step 4: Initialize Git (if using Git)

Check `project-config.md` or ask: is the user using Git?

**If yes:**
```bash
git init
git add .
git commit -m "Initial commit from WebStarter Kit template"
```

Then do a quick test to make sure everything is working:
```bash
git log --oneline
```
They should see their commit. Celebrate: "Git is tracking your project now. Every change you make can be saved as a snapshot!"

**If no Git:** Skip this step entirely. The user can always add Git later.

## Step 5: Record Project Decisions

Create a `project-config.md` in the project root to record these decisions. Update it as you make more choices.

```markdown
# Project Configuration

- **Project name:** {name}
- **Type:** static / server
- **Description:** {what the user described}
- **Framework:** vanilla (default, can upgrade to React later)
- **Hosting:** GitHub Pages / Railway / not decided yet
- **Needs auth:** yes / no
- **Needs database:** yes / no
- **Using Git:** yes / no
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

**For CI/CD (requires Git):**
- Read `prompts/10-cicd.md` for automated testing and deployment

## Tone

Be encouraging. The user is likely a beginner. Celebrate small wins. Don't overwhelm with options — guide them one step at a time. Always remind them they can ask questions about anything.

## Verify

- [ ] `npm run dev` starts without errors
- [ ] Browser shows the starter page at localhost:5173
- [ ] `npm run test:run` passes all tests
- [ ] Git repo initialized with initial commit (if using Git)
- [ ] `project-config.md` created with user's choices
