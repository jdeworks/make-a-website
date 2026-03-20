# README Template

Use this template to generate a README for the user's project. Replace all `{placeholders}` with actual values.

## Template

Fill in and write this to the project's `README.md`:

```markdown
# {Project Name}

{One-line description of what this project does}

## Demo

[Live site]({deployed-url})

## Features

- {Feature 1}
- {Feature 2}
- {Feature 3}

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

\`\`\`bash
git clone {repo-url}
cd {project-name}
npm install
npm run dev
\`\`\`

### Running Tests

\`\`\`bash
npm test
\`\`\`

## Tech Stack

- {Framework: Vanilla JS / React / Vue / Astro}
- Tailwind CSS
- Vite
- Vitest

## Deployment

{Describe how this project is deployed — e.g., "Deployed to GitHub Pages via GitHub Actions" or "Deployed to Railway with persistent SQLite storage"}

## License

MIT
```

## Instructions for AI Agents

1. Replace every `{placeholder}` with the actual project values
2. Remove the Demo section if the site isn't deployed yet
3. Add additional sections only if relevant (API docs, environment variables, contributing)
4. Keep it concise — a README should be scannable in 30 seconds
5. Add the CI badge at the top if CI is configured (see `prompts/10-cicd.md`)
