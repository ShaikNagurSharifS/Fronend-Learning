# SECURITY REMEDIATION PLAN

Goal: Address vulnerabilities reported by `npm audit` while avoiding disruptive, breaking upgrades where possible.

Summary of outstanding issues:

- 4 high severity vulnerabilities related to Playwright being used in nested dependencies of `artillery` (via `artillery-engine-playwright`).
- Other medium/high issues surfaced during previous `npm audit fix --force` runs were temporarily addressed by forced upgrades, but that introduced package churn.

Conservative remediation steps (safe, minimal disruption):

1. Do NOT run `npm audit fix --force` in the main branch without review. It upgrades packages to potentially breaking majors (e.g., `artillery`), which can change behavior.

2. Update direct dependencies to stable, supported releases where possible:

   - `@playwright/test` — keep current stable (already ^1.49.0). If you want to update to a newer stable series, test locally first.
   - `artillery` — consider upgrading to the latest 2.x release only after testing your performance scripts: `npm install --save-dev artillery@^2.0.26`.

3. Introduce selective overrides (npm `overrides` or yarn `resolutions`) to force nested packages to use patched versions where safe.

   - We added a basic `overrides` forcing `playwright` and `@playwright/test` to ^1.49.0. This may not fully resolve engine dependencies inside `artillery-engine-playwright`.
   - If `artillery-engine-playwright` requires a specific older `@playwright/test`, reach out to the package maintainer or consider replacing the engine with a maintained alternative.

4. Replace or remove modules that are not actively maintained or cause vulnerabilities. Examples were removed earlier (nonexistent packages).

5. For packages that only appear in the dependency tree (not direct deps), open an issue or a PR against the dependent package (e.g., `artillery` or `artillery-engine-playwright`) to bump Playwright or other vulnerable libraries.

6. Run the test suite and performance scripts after each candidate upgrade. Key check commands:

   - `npm run lint`
   - `npm run build`
   - `npm run test:performance` (if you have Artillery scripts) — these may require environment setup.

7. If you require me to try an automated path that may include breaking upgrades, I can:
   - Create a feature branch.
   - Run `npm audit fix --force` there, run tests, and produce a PR with the changes and manual notes.

Commands to run locally (recommended order):

```powershell
# Inspect current vulnerabilities
npm audit

# Update direct dev deps selectively (example)
npm install --save-dev artillery@^2.0.26

# Reinstall to ensure overrides apply (optional)
rm -r node_modules; rm package-lock.json; npm install

# Run your linters/build/tests
npm run lint
npm run build
npm run test:performance
```

If you want, I will:

- Create a feature branch and run the forced audit fix there to show the full effect (optionally commit results).
- Or proceed conservatively and prepare PRs to update `artillery` and other direct deps one-by-one with test runs.
