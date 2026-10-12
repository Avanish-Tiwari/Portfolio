# Testing Standards & Guidelines

Whenever testing code or validating changes in this portfolio repository:

1. **Test Runner**: Use Vitest for running unit and integration tests.
2. **Command**: Use `npm test` or `npx vitest run` to execute tests non-interactively.
3. **Build Integrity**: Ensure `npm run build` succeeds without warnings or bundle failures before marking any task as complete.
4. **Subagent Delegation**: Delegate complex test writing, regression audits, and QA investigations to the `test-engineer` subagent.
5. **Component Tests**:
   - Wrap React Router components in `<MemoryRouter>` during test execution.
   - Assert on accessible content and user interactions.
   - Do not commit failing tests.
