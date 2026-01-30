# OYA Client Turbo

A production-ready Turborepo monorepo for the OYA Client application, featuring a Next.js web app, shared UI components, Storybook documentation, and centralized configuration packages.

## Monorepo Structure

```
OYA-client-turbo/
├── apps/
│   ├── web/              # Next.js 15 web application (main app)
│   └── storybook/        # Storybook 10 component documentation
├── packages/
│   ├── ui/               # Shared React component library
│   ├── shared/           # Shared types, hooks, utils, configs
│   ├── eslint-config/    # Centralized ESLint configurations
│   └── typescript-config/# Centralized TypeScript configurations
└── turbo.json            # Turborepo pipeline configuration
```

## Packages Overview

### Apps

#### `@OYA/web` (apps/web)

Main Next.js 15 application featuring:

- **App Router** with client-side rendering
- **Redux Toolkit** + **React Query** for state management
- **CASL.js** for role-based authorization
- **React Hook Form** + **Zod** for form validation
- **Tailwind CSS** with custom design system
- **Recharts** for data visualization

Key directories:

- `app/` - Next.js app router pages
- `components/` - App-specific components (auth, dashboard, patients, etc.)
- `lib/` - API client, React Query, CASL ability
- `store/` - Redux slices
- `context/` - React Context providers
- `services/` - Utility services

#### `@twosteps/storybook` (apps/storybook)

Storybook 10 documentation with 40+ stories for UI components, organized by category.

### Packages

#### `@twosteps/ui` (packages/ui)

Shared component library built on:

- **shadcn/ui** components
- **Radix UI** primitives
- **Tailwind CSS** styling
- Full TypeScript support

Exports 50+ reusable components including forms, data display, navigation, and feedback components.

#### `@OYA/shared` (packages/shared)

Common code shared across apps:

- **Types**: API types, domain models (Patient, Exercise, Auth, etc.)
- **Hooks**: Custom React hooks (useCan, useExerciseForm, usePagination, etc.)
- **Utils**: Helper functions
- **Configs**: Menu config, role config, social config

#### `@twosteps/eslint-config` (packages/eslint-config)

Centralized ESLint configurations:

- `base.js` - Base config for all projects
- `next.js` - Next.js apps with TypeScript stylistic rules
- `storybook.js` - Relaxed rules for Storybook stories
- `library.js` - React libraries
- `react-internal.js` - Internal React configs

#### `@twosteps/typescript-config` (packages/typescript-config)

Centralized TypeScript configurations:

- `base.json` - Base TypeScript config
- `nextjs.json` - Next.js app defaults
- `nextjs-app.json` - Next.js app with path aliases
- `react-library.json` - React component libraries

## Getting Started

### Prerequisites

- **Node.js** 18+
- **pnpm** 9+ (recommended package manager)

### Installation

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

Run specific app:

```bash
# Run web app only
pnpm dev --filter=@OYA/web

# Run Storybook only
pnpm dev --filter=@twosteps/storybook
```

### Available Commands

```bash
# Development
pnpm dev              # Run all apps in dev mode
pnpm dev:web          # Run web app only
pnpm dev:storybook    # Run Storybook only

# Building
pnpm build            # Build all apps and packages
pnpm build:web        # Build web app only

# Code Quality
pnpm lint             # Lint all packages
pnpm check-types      # Type check all packages
pnpm format           # Format code with Prettier

# Testing
pnpm test             # Run all tests
```

## Import Patterns

### From Web App (`apps/web`)

```typescript
// UI components from shared library
import { Button, Card, Input } from '@twosteps/ui';
import { DataTable } from '@twosteps/ui/data-table';

// Shared types
import type { Patient } from '@OYA/shared/types/patient.type';
import type { ApiResponse } from '@OYA/shared/types/api.type';

// Shared hooks
import { useCan } from '@OYA/shared/hooks/useCan';
import { usePagination } from '@OYA/shared/hooks/usePagination';

// Shared utils
import { getSubjectFromMenuPath } from '@OYA/shared/utils/get-subject-from-menu-path';

// Shared configs
import { MENU_CONFIG } from '@OYA/shared/configs/menu.config';

// App-specific imports using @/ alias
import { apiClient } from '@/lib/api-client';
import { PatientCard } from '@/components/patient/PatientCard';
```

### From Storybook (`apps/storybook`)

```typescript
// UI components
import { Button } from '@twosteps/ui';

// Shared packages
import type { Patient } from '@OYA/shared/types/patient.type';

// Web app imports (for stories that need context)
import { AuthProvider } from '@/context/AuthContext';
import '@/app/globals.css';
```

## Configuration

### Environment Variables

Create `.env.local` in `apps/web/`:

```env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_API_TIMEOUT=30000

# Feature Flags
NEXT_PUBLIC_ENABLE_ANALYTICS=false

# Auth Configuration
NEXT_PUBLIC_AUTH_PROVIDER=local
```

### Path Aliases

All packages use consistent path aliases:

- `@twosteps/ui` → UI component library
- `@OYA/shared` → Shared code (types, hooks, utils, configs)
- `@/*` → App-specific code (only in apps/web and apps/storybook)

### TypeScript

Projects extend from centralized configs:

```json
{
	"extends": "@twosteps/typescript-config/nextjs-app.json"
}
```

### ESLint

Projects extend from centralized configs:

```javascript
import { nextJsConfig } from '@twosteps/eslint-config/next';
export default nextJsConfig;
```

## Architecture Decisions

### State Management Strategy

Multi-layered approach:

1. **Server State**: React Query (API data, caching)
2. **Global Client State**: Redux Toolkit (user, auth)
3. **Component State**: React hooks (UI state)
4. **Form State**: React Hook Form (form data, validation)

### Repository Pattern

Separation of concerns:

- **UI Layer** (`@twosteps/ui`): Pure presentation components
- **Shared Layer** (`@OYA/shared`): Domain logic, types, hooks
- **App Layer** (`apps/web`): App-specific logic, pages, API integration

### Authorization

CASL.js with role-based permissions:

- Admin: Full access
- Physician: Patient management, exercises
- Patient: View own data only

### Styling

Tailwind CSS with design system:

- CSS variables for theming
- Consistent spacing, colors, typography
- Dark mode support (prepared)

## Turborepo Features

### Caching

Turborepo caches build outputs for faster subsequent builds:

```bash
# First build (slower)
pnpm build

# Subsequent builds (instant if no changes)
pnpm build
```

### Filtering

Run tasks for specific packages:

```bash
# Run only web app build
turbo build --filter=@OYA/web

# Run all tasks that depend on ui package
turbo build --filter=...@twosteps/ui
```

### Parallel Execution

Turborepo automatically parallelizes independent tasks across all CPU cores.

## Troubleshooting

### Module Resolution Issues

If you encounter "Module not found" errors:

1. **Rebuild packages:**

   ```bash
   pnpm build
   ```

2. **Clear TypeScript cache:**

   ```bash
   rm -rf apps/web/.next
   rm -rf node_modules/.cache
   ```

3. **Reinstall dependencies:**
   ```bash
   rm -rf node_modules
   pnpm install
   ```

### Type Errors

Run type checking to see all errors:

```bash
pnpm check-types
```

Common fixes:

- Ensure all packages are built: `pnpm build`
- Check path aliases in `tsconfig.json`
- Verify package exports in `package.json`

### ESLint Errors

Run linting:

```bash
pnpm lint
```

Auto-fix issues:

```bash
pnpm lint --fix
```

### Storybook Issues

If Storybook fails to start:

1. Check path mappings in `apps/storybook/tsconfig.json`
2. Ensure web app dependencies are installed
3. Verify `nextConfigPath` in `.storybook/main.ts` is correct

## Development Workflow

### Adding New Components

1. **Create component in `packages/ui/src/`:**

   ```typescript
   // packages/ui/src/my-component.tsx
   export function MyComponent() { ... }
   ```

2. **Export from `packages/ui/src/index.tsx`:**

   ```typescript
   export { MyComponent } from './my-component';
   ```

3. **Use in apps:**
   ```typescript
   import { MyComponent } from '@twosteps/ui';
   ```

### Adding New Shared Code

1. **Add to appropriate directory in `packages/shared/`:**

   ```typescript
   // packages/shared/types/my-type.ts
   export type MyType = { ... }
   ```

2. **Import using namespace:**
   ```typescript
   import type { MyType } from '@OYA/shared/types/my-type';
   ```

### Creating New Stories

1. **Create story file in `apps/storybook/stories/`:**

   ```typescript
   // apps/storybook/stories/MyComponent.stories.tsx
   import { MyComponent } from '@twosteps/ui';

   export default {
   	title: 'Components/MyComponent',
   	component: MyComponent,
   };
   ```

2. **Run Storybook:**
   ```bash
   pnpm dev:storybook
   ```

## Tech Stack

### Frontend

- **Next.js 15** - React framework
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Styling
- **shadcn/ui** - Component library
- **Radix UI** - Primitives

### State Management

- **Redux Toolkit** - Global state
- **React Query** - Server state
- **Zustand** - (future consideration)

### Forms & Validation

- **React Hook Form** - Form management
- **Zod** - Schema validation

### Authorization

- **CASL.js** - Permissions
- **JWT** - Authentication tokens

### Data Visualization

- **Recharts** - Charts and graphs

### Development Tools

- **Turborepo** - Monorepo orchestration
- **pnpm** - Package manager
- **ESLint** - Linting
- **Prettier** - Code formatting
- **Storybook 10** - Component documentation

## Contributing

### Code Style

- Follow ESLint rules (enforced by CI)
- Use Prettier for formatting
- Write TypeScript with strict mode
- Add JSDoc comments for exported functions

### Commit Conventions

Follow conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Test changes
- `chore:` Build/config changes

## Useful Links

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Storybook Documentation](https://storybook.js.org)
- [pnpm Workspaces](https://pnpm.io/workspaces)
