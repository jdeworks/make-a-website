# CI/CD with GitHub Actions

Automatically run tests and lint on every push and pull request.

## CI Workflow

Create `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run lint
      - run: npm run test:run
      - run: npm run build
```

## What This Does

- **Triggers** on every push to `main` and every pull request targeting `main`
- **Installs** dependencies with `npm ci` (clean install, uses lockfile)
- **Lints** code to catch style and syntax issues
- **Tests** run once (not in watch mode) to verify nothing is broken
- **Builds** the project to catch build-time errors

If any step fails, the workflow fails and GitHub shows a red X on the commit/PR.

## Add a Status Badge

Add this to the top of your `README.md` (replace USERNAME and REPO):

```markdown
![CI](https://github.com/USERNAME/REPO/actions/workflows/ci.yml/badge.svg)
```

## Combining with Deploy

**For static sites:** Use both `ci.yml` and the `deploy.yml` from `prompts/07-hosting-static.md`. CI runs on PRs, deploy runs on push to main.

**For server apps:** If using Railway with auto-deploy from GitHub, CI validates the code and Railway deploys automatically when main is updated.

## Combined CI + Deploy

For static sites, combine CI with deploy by adding the pages artifact upload and deploy job from `prompts/07-hosting-static.md` into the CI workflow. Add `upload-pages-artifact` after the build step (with `if: github.ref == 'refs/heads/main'`), then add a separate deploy job that `needs: test` and uses `deploy-pages`.

## Tips

- Never skip CI — broken code on main wastes everyone's time
- If a test fails in CI but passes locally, check the Node.js version matches
- Keep CI fast: under 2 minutes is the goal
