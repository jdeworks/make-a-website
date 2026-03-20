# Project Structure

How to organize files based on project type.

## Static Site (Vanilla)

```
my-project/
  public/           # Static assets (images, fonts, favicon)
    favicon.svg
  src/
    style.css       # Tailwind CSS entry point
    main.js         # JavaScript entry point
    utils/          # Helper functions
  index.html        # Main HTML file
  vite.config.js
  package.json
```

## React App

```
my-project/
  public/
    favicon.svg
  src/
    components/     # Reusable UI components
      Header.jsx
      Footer.jsx
      Button.jsx
    pages/          # Page-level components
      Home.jsx
      About.jsx
    hooks/          # Custom React hooks
    utils/          # Helper functions
    App.jsx         # Root component
    main.jsx        # Entry point (renders App)
    style.css       # Tailwind entry point
  index.html
  vite.config.js
  package.json
```

## Server App (Express + SQLite)

```
my-project/
  public/           # Frontend files (served by Express)
    index.html
    style.css
    main.js
  routes/           # API route handlers
    items.js
  data/             # SQLite database directory
    app.db
  server.js         # Express entry point
  package.json
```

## File Naming Conventions

- **HTML/CSS/JS files:** kebab-case — `my-component.js`, `hero-section.css`
- **React components:** PascalCase — `Header.jsx`, `UserProfile.jsx`
- **Utilities/hooks:** camelCase — `useAuth.js`, `formatDate.js`
- **Config files:** lowercase — `vite.config.js`, `package.json`
- **Test files:** match source name with `.test` suffix — `utils.test.js`

## When to Split Files

- **Over 200 lines** — split into smaller files
- **Reused in 2+ places** — extract to its own file
- **Distinct responsibility** — separate concerns (data fetching vs. rendering)

## Rules

- Keep `index.html` at the project root (Vite expects this)
- Put all source code in `src/` (not at root level)
- Put static assets in `public/` (copied as-is during build)
- One component per file for React projects
- Group related files together, not by type
