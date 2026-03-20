# Framework Choice

Help the user pick the right tool for their project.

## Vanilla HTML/CSS/JS (Default)

- **Best for:** Landing pages, portfolios, simple sites, learning web fundamentals
- **Pros:** Zero learning curve, fast, works everywhere, no build complexity
- **Cons:** Gets messy for complex interactive apps, manual DOM manipulation
- The template already uses this. No changes needed.

## React

- **Best for:** Interactive apps, dashboards, anything with lots of UI state
- **Pros:** Largest ecosystem, best AI agent support, most job opportunities, huge community
- **Cons:** Learning curve (JSX, hooks, component model), more boilerplate
- Upgrade path: see `prompts/09-react-upgrade.md`

## Vue

- **Best for:** Developers who find React too complex, similar use cases as React
- **Pros:** Gentler syntax, excellent docs, good ecosystem
- **Cons:** Smaller job market than React, fewer AI-generated examples

## Astro

- **Best for:** Content-heavy sites, blogs, documentation sites
- **Pros:** Ships zero JS by default, extremely fast, supports multiple frameworks
- **Cons:** Smaller ecosystem, not ideal for highly interactive apps

## Decision Guide

Ask the user these questions:

1. **Is this a simple site with mostly static content?** Use vanilla. Done.
2. **Do you need interactive elements beyond basic show/hide?** Consider React.
3. **Is this primarily a blog or content site?** Consider Astro.
4. **Are you learning web development?** Start with vanilla to understand the basics.

## Default Recommendation

Start with vanilla from the template. It covers most beginner projects. If you find yourself writing complex DOM manipulation (lots of `document.querySelector`, event listeners everywhere, manual state tracking), that's the signal to upgrade to React.

The upgrade path is documented in `prompts/09-react-upgrade.md` and preserves all your existing work.
