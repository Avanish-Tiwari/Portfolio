---
name: qa-testing
description: "Workflows and best practices for writing, running, and debugging React tests with Vitest and React Testing Library. Use when creating test files, running test suites, or fixing failing tests."
---

# QA Testing & Test Engineering Guide

This skill provides step-by-step guidance for testing React components, custom hooks, and application logic.

## 1. Test Architecture

- **Test Framework**: Vitest (`vitest`)
- **DOM Environment**: JSDOM (`jsdom`)
- **Test Utilities**: React Testing Library (`@testing-library/react`), Jest DOM matchers (`@testing-library/jest-dom`)
- **Test File Location**: `src/__tests__/*.test.jsx` or co-located `*.test.jsx`

## 2. Standard Test Template for React Components

```jsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyComponent from '../components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly with expected content', () => {
    render(
      <MemoryRouter>
        <MyComponent />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });
});
```

## 3. Best Practices

1. **Accessibility Queries Over Selectors**:
   - Prefer: `getByRole('button', { name: /submit/i })`, `getByLabelText`, `getByText`
   - Avoid: `container.querySelector('.btn-class')` or relying on styling classes

2. **Router Context**:
   - Any component containing `<Link>` or using `useNavigate`, `useLocation` must be wrapped in `<MemoryRouter>` during tests.

3. **User Interaction**:
   - Use `fireEvent` or `@testing-library/user-event` for handling clicks and keystrokes.
   - Assert on resulting state changes or DOM updates.

4. **Smoke & Build Testing**:
   - Always verify that components mount without throwing unhandled exceptions.
   - Run `npm run build` to verify production bundling.
