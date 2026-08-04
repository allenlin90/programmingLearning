# Dependency Maintenance

This repository contains many historical course projects. A dependency manifest does not automatically mean that a project is actively maintained.

## Current automated scope

Dependabot is intentionally limited to the two most recently maintained runnable NestJS examples:

- `javascript/nodeJS/nestJSTheCompleteDeveloperGuide/10-custom_data_serialization`
- `javascript/nodeJS/nestJSTheCompleteDeveloperGuide/vehicle_report_project`

GitHub Actions dependencies are also monitored when workflow files are added.

## Update policy

- Check for updates monthly on Monday at 09:00 Asia/Bangkok.
- Group security fixes together where GitHub can resolve them safely.
- Group minor and patch version updates by dependency name across the monitored projects.
- Do not automatically propose routine semantic-version major upgrades.
- Keep security updates visible even when remediation requires a major version; review those changes manually.
- Review major upgrades separately because NestJS, TypeScript, ESLint, Jest, TypeORM, and related tooling can require coordinated migration work.
- Add another project to `.github/dependabot.yml` only after it is classified as Active or as a retained runnable Reference project.

The `allow.update-types` rules constrain routine version updates only. They do not suppress Dependabot security updates.

## Lockfile limitation

The monitored projects currently do not contain committed npm lockfiles. Dependabot can update declared versions in `package.json`, but dependency resolution is not reproducible until a lockfile is generated.

Before merging a dependency update:

1. Use a supported Node.js release.
2. Run `npm install` to generate or refresh `package-lock.json`.
3. Run `npm run build`.
4. Run `npm test` and `npm run test:e2e` when the project environment is available.
5. Review framework migration notes for any major update.
6. Commit the validated lockfile with the dependency change.

## Security settings

After the configuration reaches the default branch, enable these repository settings under **Settings → Advanced Security**:

- Dependency graph
- Dependabot alerts
- Dependabot security updates
- Grouped security updates

The configuration file controls update behavior, while alerts and security-update enablement are repository settings.

## Historical manifests

Historical course snapshots remain excluded from routine version updates. Their old dependencies should not be interpreted as supported production software.

For each historical project, choose one of these actions during cleanup:

- Promote it to Active and add Dependabot coverage.
- Keep it as Reference with an archive notice and no update promise.
- Preserve only notes and original exercises, then remove obsolete manifests and lockfiles.
- Remove exact duplicates, generated files, and copied third-party distributions.
