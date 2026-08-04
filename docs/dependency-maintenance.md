# Dependency Maintenance

This repository is a historical learning archive. None of the contained course projects are deployed, production-supported, or treated as maintained applications.

## Automated scope

Dependabot is intentionally limited to GitHub Actions workflow dependencies.

npm, Yarn, and other course-project manifests are excluded from automated version-update PRs because they represent historical exercises and snapshots rather than deployed software.

## Risk interpretation

- A vulnerable dependency reported inside a historical course manifest does not represent an active production exposure in this repository.
- Course examples should not be deployed or reused as production systems without a fresh dependency review, lockfile regeneration, tests, and framework migration work.
- Existing dependency alerts may be dismissed as **not used** or **tolerable risk** when the affected package is only present in an undeployed historical example.
- A project should receive automated dependency maintenance only after it is explicitly promoted to an Active project.

## Update policy

- Check GitHub Actions dependencies monthly on Monday at 09:00 Asia/Bangkok.
- Group safe minor and patch workflow updates.
- Review major workflow-action upgrades separately.
- Do not add historical course directories to `.github/dependabot.yml`.

## Historical manifests

Package manifests and lockfiles may remain when they are useful for understanding the original course setup. During repository cleanup, they may be removed when they are redundant, generated, copied, or no longer useful.

For each historical project, choose one of these actions:

- Keep it as a learning reference with no update promise.
- Preserve only notes and original exercises, then remove obsolete manifests and lockfiles.
- Remove exact duplicates, generated files, and copied third-party distributions.
- Promote it to Active only after adding supported runtimes, reproducible lockfiles, build checks, and tests.

## Repository settings

To eliminate npm security-update PRs, keep npm ecosystems out of `.github/dependabot.yml`.

GitHub dependency-graph alerts are controlled separately under **Settings → Advanced Security**. Alerts for undeployed historical examples can be dismissed individually with the appropriate reason, or Dependabot alerts can be disabled for the repository if no dependency monitoring is desired.
