# Prerequisites

Check and install everything needed before starting. Walk the user through each item.

## Node.js 20 LTS

1. Ask the user to run: `node -v`
2. If output starts with `v20` or `v22` — they're good
3. If command not found or version too old — install from https://nodejs.org/ (pick the LTS version)
4. After install, have them close and reopen their terminal, then run `node -v` again

## npm

- Comes bundled with Node.js. Verify with: `npm -v`
- Should show version 10+. If missing, reinstalling Node.js fixes it.

## Git

1. Ask the user to run: `git -v`
2. If output shows `git version 2.x` — they're good
3. If command not found — install from https://git-scm.com/
4. After install, configure identity:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

## Code Editor

- **Recommended:** VS Code (https://code.visualstudio.com/) or Cursor (https://cursor.com/)
- Either works. Cursor has built-in AI features.
- Suggest installing the Tailwind CSS IntelliSense extension

## GitHub Account

- If the user doesn't have one: sign up at https://github.com/
- They'll need this for hosting (GitHub Pages) and CI/CD
- Suggest setting up SSH keys or using GitHub CLI (`gh auth login`)

## Verification Checklist

Run these commands and confirm output:

```bash
node -v    # Should print v20.x.x or v22.x.x
npm -v     # Should print 10.x.x+
git -v     # Should print git version 2.x.x
```

If all three work, the user is ready. Proceed to `prompts/01-getting-started.md`.
