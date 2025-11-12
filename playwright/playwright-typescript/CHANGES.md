# CHANGES

This file documents the changes made to `package.json` to resolve installation errors and reduce vulnerabilities.

Edits made:

1. Removed the following devDependencies (they caused ETARGET/E404 or were not found in the npm registry):

   - `cucumber` (duplicate/legacy; kept `@cucumber/cucumber` instead)
   - `cucumber-pretty` (no matching version in registry)
   - `device-detector-js` (version ^4.0.0 not found)
   - `playwright-mobile-emulator` (not found in npm registry)
   - `playwright-visual-test` (not found in npm registry)

2. Renamed the following dependency:

   - `faker-js` -> `@faker-js/faker` (the correct scoped package name on npm)

3. Added an `overrides` section to force Playwright versions for nested deps (may require further adjustments):
   "overrides": {
   "playwright": "^1.49.0",
   "@playwright/test": "^1.49.0"
   }

Notes:

- `npm install` completed after the removals/rename.
- `npm audit` still reports remaining issues that are linked to the `artillery` dependency chain which depends on older versions of Playwright. Fixing those without breaking changes requires manual review.

Recommended follow-ups:

- If any removed package is required, re-add it with a valid version, git URL, or private registry path.
- Run `npm audit` and apply the conservative remediation plan in `SECURITY_PLAN.md` (created next).
