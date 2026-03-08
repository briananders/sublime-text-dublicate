# Change Log
All notable changes to the "sublime-text-dublicate" extension will be documented in this file.

Check [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.

## [0.3.1] - 2026-03-07

### Fixed
- Line duplication now works when no text is selected, matching Sublime Text behavior
- Removed reliance on keybinding routing for the no-selection case — duplication now works correctly when triggered via command palette or any other method

## [0.3.0] - 2025-10-20

### Added
- TypeScript support for better type safety and maintainability
- Comprehensive build system with compile, watch, and clean scripts
- ESLint configuration with TypeScript support
- Prettier for consistent code formatting
- GitHub Actions CI/CD for automated testing and publishing
- Better error handling and user feedback
- Source maps for debugging
- Contributing guidelines (CONTRIBUTING.md)

### Changed
- **Complete rewrite in TypeScript** for improved code quality and maintainability
- Updated to modern VSCode extension architecture
- Migrated from deprecated `vscode` package to `@vscode/test-electron` and `@types/vscode`
- Updated VSCode engine requirement to ^1.74.0
- Updated all dependencies to latest versions for security fixes
- Modernized test suite with proper test cases and test runner
- Optimized package size by excluding unnecessary files (.vscodeignore)
- Improved project structure (src/ directory for source files)

### Fixed
- Removed debug console.log statement from production code
- Fixed 58 security vulnerabilities in dependencies
- Replaced placeholder tests with actual extension tests
- Added proper error handling for edge cases

### Security
- Updated all vulnerable dependencies (minimist, lodash, tar, cryptiles, etc.)
- Addressed all critical and high severity security issues
- Added npm audit checks in CI pipeline
- Zero vulnerabilities in current dependencies

## [0.2.5] - Previous
- Previous releases