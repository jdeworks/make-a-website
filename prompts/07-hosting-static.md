# Hosting: Static Sites on GitHub Pages

Deploy a Vite static site to GitHub Pages using GitHub Actions.

## Step 1: Configure Vite Base Path

In `vite.config.js`, set the `base` option:

```js
export default defineConfig({
  base: '/<repo-name>/',  // Replace with your GitHub repo name
  // Use '/' if deploying to username.github.io (user site)
});
```

## Step 2: Create the Deploy Workflow

Create `.github/workflows/deploy.yml` with this exact content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Step 3: Push to GitHub

```bash
git add -A
git commit -m "Add GitHub Pages deploy workflow"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

## Step 4: Enable GitHub Pages

1. Go to your repo on GitHub
2. Settings > Pages
3. Source: select **GitHub Actions**
4. Wait for the action to complete (check the Actions tab)

## Step 5: Verify

Your site is live at: `https://USERNAME.github.io/REPO-NAME/`

## Custom Domain

1. Add a `CNAME` file in `public/` containing your domain: `www.example.com`
2. Configure DNS: add a CNAME record pointing to `USERNAME.github.io`
3. In GitHub: Settings > Pages > Custom domain > enter your domain

## SPA Routing Fix

If using client-side routing (React Router, etc.), add this to `package.json` scripts:

```json
"build": "vite build && cp dist/index.html dist/404.html"
```

This ensures all routes serve `index.html` instead of a 404 page.

## Verify

- [ ] `npm run build` succeeds without errors
- [ ] `vite.config.js` has correct `base` path
- [ ] `.github/workflows/deploy.yml` exists
- [ ] GitHub Pages source set to "GitHub Actions"
- [ ] Site is live at the expected URL
