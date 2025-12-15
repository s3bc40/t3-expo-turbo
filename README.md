# T3 Expo Turborepo

A bare minimum platform-agnostic template for building full-stack applications with [Expo](https://expo.dev/), [Next.js](https://nextjs.org/), and [Turborepo](https://turborepo.com/).

## Quick Start

Clone this repo and install dependencies:

```bash
git clone <your-repo-url>
cd t3-expo-turbo
pnpm install
```

## What's Inside?

### Apps

- **`web`** – Next.js web application (TypeScript)
- **`mobile`** – Expo cross-platform app (iOS, Android, Web)

### Packages

- **`@repo/api`** – Shared backend logic with Supabase and tRPC (TypeScript)
- **`@repo/ui`** – Shared React component library
- **`@repo/eslint-config`** – Shared ESLint configuration
- **`@repo/typescript-config`** – Shared TypeScript configuration

## Tech Stack

- **Monorepo**: [Turborepo](https://turborepo.com/) for task orchestration
- **Language**: [TypeScript](https://www.typescriptlang.org/) throughout
- **Backend**: [tRPC](https://trpc.io/) + [Supabase](https://supabase.com/)
- **Code Quality**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Testing**: [Jest](https://jestjs.io/)

## Available Commands

```bash
# Development
pnpm dev              # Start all apps in dev mode
pnpm dev --filter=web        # Start only web app
pnpm dev --filter=mobile     # Start only mobile app

# Building
pnpm build            # Build all apps and packages

# Testing
pnpm test             # Run all tests with Jest

# Code Quality
pnpm lint             # Run ESLint
pnpm format           # Format code with Prettier
pnpm check-types      # Type check all TypeScript
```

## Project Structure

```
├── apps/
│   ├── web/           # Next.js web application
│   └── mobile/        # Expo mobile application
├── packages/
│   ├── api/           # Backend API with tRPC + Supabase
│   ├── ui/            # Shared UI components
│   ├── eslint-config/ # ESLint rules
│   └── typescript-config/ # TypeScript configs
└── turbo.json         # Turborepo configuration
```

## Getting Started with Each App

### Web Development

```bash
pnpm dev --filter=web
# Runs on http://localhost:3000
```

### Mobile Development

```bash
pnpm dev --filter=mobile
# Choose platform (iOS/Android/Web)
```

### Testing

```bash
pnpm test             # Run all tests
pnpm test --watch     # Watch mode
```

## Requirements

- Node.js >= 18
- pnpm >= 9.0.0

## License

MIT
