# Testing

Vitest is already configured in the template. This guide covers writing and running tests.

## Running Tests

```bash
npm test          # Watch mode — re-runs on file changes
npm run test:run  # Run once and exit (used in CI)
```

## What to Test

- Utility functions (formatDate, calculateTotal, validateEmail)
- Data transformations (parsing, filtering, sorting)
- Component behavior (user interactions, conditional rendering)
- API response handling (success and error cases)

## What NOT to Test

- CSS styling and visual appearance
- Third-party library internals
- Trivial code (simple getters, constants, type definitions)
- Implementation details (internal state, private methods)

## Writing a Test

Create test files next to the code they test, with `.test.js` suffix.

```js
// src/utils/math.test.js
import { describe, it, expect } from 'vitest';
import { add, multiply } from './math.js';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });
});
```

## DOM Testing

happy-dom is configured in the template. You can test DOM manipulation:

```js
// src/utils/dom.test.js
import { describe, it, expect } from 'vitest';

describe('DOM manipulation', () => {
  it('creates an element with text', () => {
    const el = document.createElement('p');
    el.textContent = 'Hello';
    expect(el.textContent).toBe('Hello');
  });
});
```

## Testing Patterns

- **Arrange** — set up data and conditions
- **Act** — call the function or trigger the action
- **Assert** — check the result with `expect()`

## Coverage Goal

- At least one test file per feature area
- Focus on logic, not boilerplate
- Tests run automatically in CI (see `prompts/10-cicd.md`)

## Common Matchers

```js
expect(value).toBe(exact)           // Strict equality
expect(value).toEqual(deep)         // Deep equality for objects
expect(value).toBeTruthy()          // Truthy check
expect(value).toContain(item)       // Array/string contains
expect(fn).toThrow()                // Function throws
```

## Verify

- [ ] `npm run test:run` passes all tests
- [ ] At least one test file exists per feature area
- [ ] Tests cover both happy path and edge cases
