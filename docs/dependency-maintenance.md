# Dependency Policy

This repository is a historical learning archive. None of the archived course projects are deployed, production-supported, or treated as maintained applications.

## Automation policy

Automated dependency updates are disabled for both historical course projects and repository workflows.

The repository keeps a path-naming pull-request check because naming consistency is an active structural rule. That workflow should be updated manually only when necessary.

## Historical manifests

A package manifest or lockfile may remain when it helps explain the original learning environment. Its presence does not mean that:

- the project installs successfully on a current runtime;
- the dependencies are secure or supported;
- the example is suitable for deployment;
- the repository owner promises upgrades or fixes.

Do not deploy or reuse a historical example without a fresh dependency, runtime, licensing, security, and test review.

## Dependency alerts

A vulnerable package inside an undeployed historical example is not an active production exposure in this repository. Alerts may be dismissed as **not used** or **tolerable risk** when that description is accurate.

Repository-level Dependabot alerts may also be disabled if they produce noise without informing an active project decision.

## Promoting a project to Active

Dependency automation should return only after a specific project is deliberately promoted to Active and receives:

1. A supported runtime and toolchain.
2. A reproducible lockfile.
3. Build and test validation.
4. Security and licensing review.
5. A named maintenance owner.
6. An explicit deployment or ongoing-learning purpose.

Until then, historical projects are preserved as learning evidence with no update promise.
