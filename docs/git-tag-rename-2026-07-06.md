# Git tag rename: `0.1.1` → `v0.1.1`

**Date:** 2026-07-06

## What happened

The `0.1.1` release tag was created without the `v` prefix (`git tag 0.1.1`), inconsistent
with every other tag in the repo (`v0.1.0`, `v0.0.4-alpha`, etc.). It was a lightweight tag
(no `-m` message), pointing at commit `9c83e7f` — "fix(languages): theme-aware font/star
colors and single-popup interaction".

## Fix

Git has no built-in "rename tag" command — the fix is to create a new tag pointing at the
same commit, then delete the old one, both locally and on the remote:

```bash
# 1. Create the correctly-named tag on the same commit
git tag v0.1.1 0.1.1

# 2. Delete the old local tag
git tag -d 0.1.1

# 3. Push the new tag to GitHub
git push origin v0.1.1

# 4. Delete the old tag from GitHub
git push origin :refs/tags/0.1.1
```

Since it was a lightweight tag, `git tag v0.1.1 0.1.1` was enough — no message to carry over.
(If it had been annotated, the equivalent would've been
`git tag -a v0.1.1 0.1.1^{} -m "<original message>"`.)

## Gotcha hit along the way

Deleting the old local tag intermittently failed with:

```
error: Unable to create '.../.git/packed-refs.lock': File exists.
Another git process seems to be running in this repository...
```

Caused by a stale lock file, most likely left behind by another git-aware program (VS Code,
GitHub Desktop, etc.) with the repo open at the same time. Fix was simply to close any other
git clients touching the repo and re-run `git tag -d 0.1.1`.

## Result

- `v0.1.1` now exists locally and on GitHub, pointing at the same commit the old `0.1.1` did.
- The old `0.1.1` tag is gone, both locally and on GitHub.
- `v0.1.2` (the RTL/navbar bugfix release) sits above it as the current latest tag.
- Tag naming is now consistent (`v<major>.<minor>.<patch>`) across the whole repo, aside from
  two pre-existing legacy tags (`0.0.3-alpha`, `0.0.3-beta`) from before the `v`-prefix
  convention started, which were left untouched.
