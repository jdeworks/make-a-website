# Security Essentials

Security checklist for web projects. Follow every item.

## Secrets Management

- **NEVER commit secrets** (API keys, passwords, tokens) to Git
- Store secrets in `.env` files — the template `.gitignore` already excludes `.env`
- For Vite frontend: prefix with `VITE_` — access via `import.meta.env.VITE_API_URL`
- For Node.js server: access via `process.env.DB_PATH`
- Example `.env` file:
  ```
  VITE_API_URL=https://api.example.com
  DB_PATH=./data/app.db
  SECRET_KEY=your-secret-here
  ```

## HTTPS

- Automatic on GitHub Pages, Railway, Fly.io, Vercel, Netlify
- Never serve a production site over plain HTTP
- No action needed if using recommended hosting

## Input Validation

- Never trust user input — validate and sanitize on the server side
- Use parameterized queries for SQL (NEVER concatenate user input into SQL strings)
- Escape HTML output to prevent XSS attacks
- Validate types, lengths, and formats before processing

## Dependencies

- Run `npm audit` regularly to check for vulnerabilities
- Run `npm audit fix` to auto-fix what's possible
- Enable Dependabot on GitHub: Settings > Code security > Enable Dependabot alerts
- Keep dependencies updated: `npm outdated` shows what needs updating

## Authentication

- **Do NOT build your own auth system**
- Use a proven service: Clerk, Auth0, or Supabase Auth
- These handle password hashing, session management, OAuth, and MFA

## API Security (if building a server)

- Use `helmet` middleware for secure HTTP headers
- Use `cors` middleware to control cross-origin access
- Use `express-rate-limit` to prevent abuse
- Example:
  ```js
  import helmet from 'helmet';
  import cors from 'cors';
  import rateLimit from 'express-rate-limit';

  app.use(helmet());
  app.use(cors({ origin: 'https://yoursite.com' }));
  app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 100 }));
  ```

## Pre-Launch Checklist

- Did you remove all hardcoded secrets from source code?
- Did you add `.env` to `.gitignore`?
- Did you run `npm audit`?
- Did you enable HTTPS on your hosting platform?
- Did you use parameterized queries for all database calls?
- Did you add rate limiting to your API?
- Did you validate all user inputs on the server?

## Verify

- [ ] `.env` is in `.gitignore`
- [ ] No API keys or secrets in source code
- [ ] `npm audit` shows no high/critical vulnerabilities
