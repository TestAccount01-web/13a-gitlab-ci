# 13a-gitlab-ci
**Same Node project, CI test step expressed in a different CI provider**

- **Test cases served:** DET-09
- **Expected CI-test-setup detection:** Yes - `npm test` (or documented 'unsupported CI provider' - see OQ-02)
- **Expected ocq behaviour:** Consistent: detected OR clearly reported as unsupported provider; never silently wrong
- **Runs standalone (no ocq):** Yes

## How to use
1. Unzip, then import this folder/repo into ocq as an existing codebase (it already has a git history on branch `main`).
2. Compare ocq's report with the expectations above and the linked test cases in the workbook.

