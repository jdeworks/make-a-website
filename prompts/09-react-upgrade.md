# Upgrading to React

Step-by-step guide to convert the vanilla template to a React app. Tailwind works the same way — no CSS changes needed.

## Step 1: Install Dependencies

```bash
npm install react react-dom
npm install -D @vitejs/plugin-react
```

## Step 2: Update Vite Config

Replace `vite.config.js`:

```js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [tailwindcss(), react()],
});
```

## Step 3: Update index.html

Change the script tag and add a root div:

```html
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
```

## Step 4: Create Entry Point

Rename `src/main.js` to `src/main.jsx`:

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## Step 5: Create App Component and Extract Components

Create `src/App.jsx` that imports components from `src/components/` (Header.jsx, Hero.jsx, Features.jsx, Footer.jsx). Each component is a function that returns JSX. Convert HTML to JSX: `class` becomes `className`, `for` becomes `htmlFor`, close all self-closing tags.

## Step 7: State Management

- Start with `useState` and `useEffect` for component state
- Pass data between components with props
- If state gets complex (shared across many components), add Zustand: `npm install zustand`

## Step 8: Testing

```bash
npm install -D @testing-library/react @testing-library/jest-dom
```

```jsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './components/Header';

describe('Header', () => {
  it('renders site name', () => {
    render(<Header />);
    expect(screen.getByText('My Site')).toBeTruthy();
  });
});
```

## Notes

- Tailwind classes work identically in JSX — no changes needed
- Run `npm run dev` after each step to verify nothing is broken
- Commit after each successful step so you can revert if needed

## Verify

- [ ] `npm run dev` starts without errors after React setup
- [ ] Components render correctly in browser
- [ ] Existing tests still pass
- [ ] New component tests added
