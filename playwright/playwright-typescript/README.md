# Playwright + TypeScript Testing Framework

## Overview

This project is an enterprise-style hybrid testing framework built on Playwright and TypeScript. It is designed to support a wide range of automated tests:

- UI functional tests (cross-browser)
- API tests (Playwright API + Axios)
- End-to-end (E2E) workflows (Playwright + Cucumber BDD)
- Mobile device emulation
- Database integration tests (pg, mysql2, mongodb)
- Accessibility checks (@axe-core/playwright)
- Visual regression (pixelmatch)
- Performance/load testing (k6)
- Security testing (OWASP ZAP - manual/local or CI)

## Goals and Principles

- Keep tests fast, deterministic, and isolated.
- Favor small, focused tests and a few long-running E2E flows.
- Use composition (fixtures) instead of inheritance for test setup.
- Keep test data and environment configuration out of source (use .env/.env.local).

## Key Patterns and Architecture

1. Test Runner and Fixtures

   - Uses `@playwright/test` as the test runner.
   - Shared fixtures are defined for common resources: browser context, API clients, DB connections, test data builders, and authentication helpers.
   - Fixtures scope: choose `test`, `worker`, or `suite` scope depending on resource cost.

2. Page Object Pattern (POM)

   - Encapsulate page operations and element locators in Page classes under `src/pages`.
   - Page methods should return higher-level actions (e.g., `loginAs(user)`), not low-level DOM operations.

3. BDD / Cucumber

   - Feature files live under `src/features`.
   - Step definitions and support code live under `src/steps` and `src/support`.
   - Scripts in `package.json` are provided for running BDD tag expressions (see `bdd:*` scripts).

4. API / Contract Testing

   - API helpers live under `src/api`; use Axios or Playwright API for requests.
   - Use schemas (Zod/AJV) to validate responses in tests.

5. Visual & Accessibility

   - Visual diffs are created with Playwright screenshots compared with `pixelmatch`.
   - Accessibility checks use `@axe-core/playwright` to assert accessibility rules.

6. Performance Testing

   - k6 scripts live under `performance/k6/` and are executed locally or in CI using the `test:performance:*` scripts.

7. Security (DAST)
   - OWASP ZAP is not run by default in CI in this repo; run locally in a controlled environment or add a dedicated ZAP CI job if needed.

## Project Layout

- src/
  - api/ API clients and helpers
  - pages/ Page objects
  - components/ UI component wrappers
  - steps/ Cucumber step definitions
  - support/ Cucumber support code, hooks
  - tests/ Playwright test files (grouped by tags)
  - utils/ Reusable utilities, data builders
- performance/k6/ k6 scripts for load/stress/spike/soak
- configs/ Playwright config variants (web/api/mobile)
- performance/ performance harness and artifacts
- .github/workflows GitHub Actions (CI configs)

## Scripts (selected)

- npm run test:ui - Run UI tests (@ui)
- npm run test:api - Run API tests (@api)
- npm run test:e2e - Run E2E tag (@e2e)
- npm run bdd:smoke - Run Cucumber smoke scenarios
- npm run test:performance:load - Run k6 load test
- npm run lint - Run ESLint
- npm run build - TypeScript compile

## CI Integration

- A GitHub Actions workflow `ci.yml` is present to run Playwright tests and k6 performance jobs.
- For ZAP, prefer running the ZAP scanner in a dedicated environment or a CI job that runs against a staging deployment.

## How to run locally

1. Install node and dependencies

   npm ci

2. Install Playwright browsers

   npx playwright install --with-deps

3. Run Playwright smoke tests

   npm run test:ci-smoke

4. Run a k6 script (requires k6 installed locally or on runner)

   npm run test:performance:load

## Design decisions & tradeoffs

- Using Playwright for both UI and API tests reduces tool sprawl and simplifies cross-browser testing.
- Cucumber is included for teams that prefer BDD feature files; keep glue code minimal and avoid duplicating assertions across step definitions.
- Performance tests (k6) are separated from unit/UI tests to keep CI runs fast; they run in a dedicated job.
- OWASP ZAP is best run with infrastructure control (staging) because it performs active scanning and can be noisy.

## Contributing

- Add new tests under `src/tests` and tag them with relevant tags (e.g., @ui, @api).
- Keep fixtures small and focused; prefer composition.
- For breaking upgrades (major Playwright / Node changes), create a feature branch and run the full test matrix.

Questions? Want me to:

- Add a sample Page Object and a sample Playwright test?
- Add Python/Java test harness scaffolding and CI jobs?
- Enable ZAP in CI (containerized)?

**_ End of README _**
