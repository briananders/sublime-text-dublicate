# Contributing to Sublime Duplicate Text

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Development Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Open in VS Code: `code .`

## Building

- Compile TypeScript: `npm run compile`
- Watch mode for development: `npm run watch`
- Clean build artifacts: `npm run clean`

## Code Quality

### Linting

```bash
npm run lint          # Check for linting errors
npm run lint:fix      # Auto-fix linting errors
```

### Formatting

We use Prettier for code formatting:

```bash
npm run format        # Format all TypeScript files
npm run format:check  # Check if files are formatted
```

### Testing

```bash
npm test              # Run all tests
```

## Project Structure

```
.
├── src/
│   ├── extension.ts       # Main extension code
│   └── test/              # Test files
│       ├── runTest.ts     # Test runner
│       └── suite/         # Test suite
├── out/                   # Compiled JavaScript (gitignored)
├── package.json           # Extension manifest
├── tsconfig.json          # TypeScript configuration
└── .eslintrc.json         # ESLint configuration
```

## Commit Guidelines

- Use clear, descriptive commit messages
- Follow conventional commits format when possible
- Test your changes before committing

## Pull Request Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## Questions?

Feel free to open an issue for questions or discussions!
