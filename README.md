# Unit 13 — GitHub Actions CI/CD Demo

A tiny, modern demo for teaching **Continuous Integration** with GitHub Actions.

Every push to `main` and every pull request into `main` runs the test suite in
the cloud. If the tests pass, a celebratory banner prints. If they fail, a sad
ASCII cat prints instead — a visible, memorable signal that the branch isn't
safe to merge.

## Stack

| Concern      | Choice                                  |
| ------------ | --------------------------------------- |
| Runtime      | Node.js 20+ (ES modules)                |
| Test runner  | [Vitest](https://vitest.dev)            |
| CI           | GitHub Actions (`.github/workflows/ci.yml`) |

## Files

```
sum.js                     # the "app" under test
sum.test.js                # Vitest tests for sum()
scripts/success.js         # prints a figlet banner when CI is green
scripts/fail.js            # prints an ASCII cat when CI is red
.github/workflows/ci.yml   # the CI workflow
```

## Run it locally

```bash
npm install
npm test          # run the suite once
npm run test:watch # re-run on change while developing
```

## How the CI workflow works

`.github/workflows/ci.yml` defines a single `test` job that:

1. Checks out the code (`actions/checkout@v4`)
2. Installs Node 20 with an npm cache (`actions/setup-node@v4`)
3. Installs dependencies with `npm ci`
4. Runs `npm test`
5. **On success** (`if: success()`) runs `npm run success`
6. **On failure** (`if: failure()`) runs `npm run fail`

It triggers on three events:

- `push` to `main`
- `pull_request` targeting `main`
- `workflow_dispatch` — the manual **Run workflow** button in the Actions tab

## Classroom demo script

1. **Green run:** Push to `main` (or open a PR). Watch the job pass and the
   figlet banner print in the logs.
2. **Red run:** In `sum.test.js`, change an expected value to something wrong
   (e.g. `toBe(100)`), commit on a branch, and open a PR. Watch the job fail
   and the console cat appear. The PR's checks turn red.
3. **Fix it:** Revert the test, push again, watch the check go green.
