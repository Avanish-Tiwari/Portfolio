# Agent Guidelines for Portfolio

## Custom Subagents

- **test-engineer**: Specialist QA & Test Engineer subagent located in `.agents/agents/test-engineer.md` and `.agents/plugins/testing-agent/`.
  - **Purpose**: Authoring unit and component tests, running Vitest suites, debugging build/runtime errors, checking accessibility, and verifying regressions.
  - **Delegation**: When asked to test, create test suites, verify builds, or write tests for components, delegate to `test-engineer`.

## Testing Best Practices
- **Test Framework**: Vitest with React Testing Library (`@testing-library/react`).
- **Commands**:
  - Run tests: `npm test` or `npx vitest run`
  - Build check: `npm run build`
- All React Router dependent components must be rendered inside `<MemoryRouter>` during test execution.
