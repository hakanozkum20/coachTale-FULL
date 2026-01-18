# AGENTS.md

This guide is for agentic coding assistants working in the coachNE codebase - an AI-powered educational coaching platform for Turkish curriculum (TYT, AYT, YDS).

---

## Build, Lint, and Test Commands

### Backend (`backend/`)
```bash
npm run dev              # Start dev server with nodemon
npm run build            # Compile TypeScript to dist/
npm start                # Run production server
npm run prisma:generate  # Generate Prisma client
npm run prisma:push      # Push schema changes to DB
```

### Frontend Web (`frontend-web/`)
```bash
npm run dev              # Start Vite dev server
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run format           # Format with Prettier
npm run format:check     # Check formatting
npm run knip             # Find unused exports
```

### Frontend Mobile (`frontend-mobile/`)
```bash
npm start                # Start Expo dev server
npm run android          # Run on Android
npm run ios              # Run on iOS
npm run web              # Run in browser
```

---

## Code Style Guidelines

### TypeScript Configuration

**Backend:** ES2023 target, CommonJS modules, strict mode enabled

**Frontend:** ES2020+, strict mode, `@/*` path alias for `src/*`

---

### Formatting (Prettier)

- **Semi-colons:** Disabled (`semi: false`)
- **Quotes:** Single quotes (`singleQuote: true`, `jsxSingleQuote: true`)
- **Tabs:** 2 spaces (`tabWidth: 2`)
- **Trailing commas:** ES5 style (`trailingComma: "es5"`)
- **Line width:** 80 characters (`printWidth: 80`)
- **End of line:** LF
- **Arrow parentheses:** Always (`arrowParens: "always"`)

---

### Import Order (Frontend)

Imports are automatically sorted in this order:
1. Node built-ins (path, vite)
2. Core libraries (React, React DOM)
3. Third-party libraries (zod, axios, date-fns)
4. UI libraries (@radix-ui/*, @tanstack/*)
5. All other third-party modules
6. Internal modules (@/assets, @/api, @/stores, @/lib, @/utils, @/hooks, @/components, @/features)
7. Relative imports (`./`)

---

### ESLint Rules

**Frontend specific:**
- `no-console: error` - Use proper logging, not console.log in production
- `@typescript-eslint/consistent-type-imports: error` - Use `import type` for type-only imports
- `@typescript-eslint/no-unused-vars: error` - No unused variables (prefix with `_` to ignore)
- `no-duplicate-imports: error` - Combine imports from same module

**File ignores:** `dist`, `src/components/ui` (auto-generated components)

---

### Backend Code Style

**Service Layer:**
```typescript
export class ExampleService {
    private repo: ExampleRepository;

    constructor() {
        this.repo = new ExampleRepository();
    }

    async methodName(param: string): Promise<ReturnType> {
        return await this.repo.method(param);
    }
}
```

**Controller Layer:**
```typescript
export const handleRequest = async (req: Request, res: Response) => {
    try {
        const result = await service.method(req.body);
        res.json(result);
    } catch (e: any) {
        res.status(500).json({ message: e.message });
    }
};
```

**Repository Layer:** Use Prisma Client for DB operations

**Middleware:**
```typescript
export const exampleMiddleware = (req: any, res: Response, next: NextFunction) => {
    // Logic here
    next();
};
```

**Naming:**
- Services: `XxxService`
- Repositories: `xxxRepository`
- Controllers: Exported functions, `handleXxx`
- Routes: `xxxRoutes.ts`

---

### Frontend Code Style

**Components:**
- Functional components with hooks
- TypeScript interfaces for props
- Use TanStack Query for data fetching
- Use Zustand for global state
- Shadcn UI components from `@/components/ui`

**State Management:**
```typescript
// TanStack Query
const { data, isLoading } = useQuery({
    queryKey: ['key'],
    queryFn: () => api.fetch()
});

// Zustand store
export const useStore = create((set) => ({
    state: null,
    setState: (val) => set({ state: val })
}));
```

**File Organization:**
- `src/components/` - Reusable UI components
- `src/features/` - Feature-specific components + hooks
- `src/routes/` - TanStack Router route files
- `src/stores/` - Zustand stores
- `src/hooks/` - Custom hooks

---

### Mobile (Expo/React Native)

**Tech Stack:**
- Expo SDK ~54
- Expo Router for navigation (file-based routing)
- NativeWind 4.x (Tailwind CSS)
- Gluestack UI components
- Zustand for state management
- Axios for HTTP
- Expo Auth Session (Google OAuth)
- Expo SecureStore for token storage
- Expo Notifications for push
- Expo Image Picker / Expo Camera

**Project Structure:**
```
frontend-mobile/
├── app/                          # Expo Router (file-based routing)
│   ├── _layout.tsx               # Root layout
│   ├── index.tsx                 # Login screen
│   ├── (auth)/                   # Protected routes group
│   │   ├── _layout.tsx           # Auth layout (auth check)
│   │   ├── dashboard.tsx         # Main dashboard
│   │   ├── pomodoro.tsx          # Timer screen
│   │   ├── chat.tsx              # AI chat
│   │   ├── solve.tsx             # Photo solve
│   │   ├── exams.tsx             # Exam tracking
│   │   ├── study-plans.tsx       # Study plans
│   │   ├── badges.tsx            # Badges
│   │   └── settings.tsx          # Settings
│
├── src/
│   ├── application/              # Business logic
│   │   ├── usecases/            # Use case hooks
│   │   └── services/            # Business services
│   ├── core/                    # Core entities
│   │   ├── entities/            # Domain entities
│   │   └── interfaces/          # TypeScript interfaces
│   ├── config/                  # Configuration
│   │   └── env.ts               # Environment variables
│   ├── infrastructure/          # External integrations
│   │   ├── api/
│   │   │   ├── apiClient.ts    # Axios instance
│   │   │   ├── authApi.ts      # Auth endpoints
│   │   │   ├── pomodoroApi.ts  # Pomodoro endpoints
│   │   │   ├── aiApi.ts        # AI endpoints
│   │   │   └── ...
│   │   └── storage/
│   │       └── secureStorage.ts # Expo SecureStore wrapper
│   ├── presentation/            # UI layer
│   │   ├── components/          # Reusable components
│   │   │   ├── common/         # Button, Input, etc.
│   │   │   ├── pomodoro/       # Timer components
│   │   │   ├── chat/           # Chat components
│   │   │   └── ...
│   │   └── hooks/              # Custom hooks
│   ├── stores/                  # State management
│   │   ├── authStore.ts        # Auth state
│   │   ├── pomodoroStore.ts    # Timer state
│   │   └── ...
│   └── types/                   # TypeScript types
│       └── index.ts
├── assets/                      # Images, fonts, etc.
├── .env                         # Environment variables
├── app.json                     # Expo config
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── babel.config.js
```

**Navigation:**
- Bottom tab navigation: Home (Dashboard), Timer (Pomodoro), Chat (AI Chat), Camera (Photo Solve), Profile (Settings)
- Protected routes via `(auth)` route group
- Login screen at `/` (root)

**UI/UX Guidelines:**

**NativeWind (Tailwind) Color Palette:**
```javascript
colors: {
  primary: '#6366f1',     // Indigo 500
  secondary: '#8b5cf6',   // Violet 500
  success: '#10b981',     // Emerald 500
  warning: '#f59e0b',     // Amber 500
  danger: '#ef4444',      // Red 500
  background: '#f8fafc',  // Slate 50
  surface: '#ffffff',     // White
  text: {
    primary: '#1e293b',   // Slate 800
    secondary: '#64748b', // Slate 500
  }
}
```

**GluestackUI Components:**
```typescript
import {
  Button,
  Input,
  Card,
  Avatar,
  Badge,
  Toast,
  AlertDialog,
  Progress,
  // ... more
} from '@gluestack-ui/themed';
```

**Design Patterns:**
- Card-based layouts for content grouping
- Circular progress for timer and statistics
- Bottom sheets for detail views
- Pull to refresh for lists
- Skeleton loading for load states

**Mobile-Specific Features:**
- Bottom tab navigation
- Swipe gestures (chat)
- Camera integration
- Push notifications
- Haptic feedback
- Offline timer mode

**Token Management:**
- Access Token: 30 days
- Refresh Token: 30 days
- Storage: Expo SecureStore

**Environment Variables:**
```env
EXPO_PUBLIC_API_URL=http://localhost:3000
EXPO_PUBLIC_GOOGLE_CLIENT_ID=xxx
```

**Development Commands:**
```bash
npm start                # Start Expo dev server
npm run android          # Run on Android
npm run ios              # Run on iOS
npm run web              # Run in browser
```

**Build Commands:**
```bash
npx expo run:android     # Development build Android
npx expo run:ios         # Development build iOS
eas build --platform all # EAS Build for all platforms
```

---

### Error Handling

**Backend:** Try-catch in controllers, return JSON with status codes
```typescript
try {
    // logic
} catch (e: any) {
    res.status(500).json({ message: e.message });
}
```

**Frontend:** TanStack Query error boundaries, component-level error UI

---

### Database Schema

Uses Prisma ORM with PostgreSQL. Run `npm run prisma:push` after schema changes.

**Key Models:**
- `User` (STUDENT, PARENT, ADMIN)
- `ChatSession`, `ChatMessage`
- `QuestionSolution`
- `ExamResult`, `StudyPlan`
- `PomodoroSession`, `PomodoroSettings`
- `Badge`, `UserBadge`
- `PushToken`, `NotificationSettings`

---

### Authentication

- Google OAuth via Appwrite
- JWT + Refresh Token pattern
- Role-based access control (STUDENT, PARENT, ADMIN)
- `authenticateToken` middleware for protected routes
- `authorizeAccess` middleware for ownership/parent access

---

### Architecture Patterns

**Backend:** Clean Architecture - Controllers → Services → Repositories → Prisma

**Frontend:** Feature-based organization with:
- Presentation components
- Business logic in services/hooks
- Data fetching with TanStack Query
- Routing with TanStack Router

---

### API Documentation

Backend uses Swagger/OpenAPI. Access at `/api-docs` when server is running.

---

## Project Context from .cursor/rules/

This is a production-ready, subscription-based AI education platform (not MVP):

**Subscription Plans:**
- FREE: 10 chats/week, 5 photos/week, 1 plan/week
- STANDARD: 25 chats/week, 15 photos/week, 3 plans/week
- PREMIUM: Unlimited everything

**Core Modules:**
- AI Chat (education-focused with intent classification)
- Photo Question Solver (OCR + Vision)
- Exam/Practice Test Analysis with AI study plans
- Pomodoro & Focus system (NOT just a counter - analytics + habit tracking)
- Parent tracking system
- Gamification (badges, streaks, leaderboard)

**Security Requirements:**
- All endpoints must be authenticated (except login)
- Role-based access (Student/Parent/Admin)
- Plan-based quota enforcement via middleware
- KVKK compliance (Turkish data privacy)
- Rate limiting
- Prompt injection prevention for AI

**Mobile Push Notifications (Expo):**
- Pomodoro start/end
- Break reminders
- Study time reminders
- Daily goal alerts
- User opt-out support

---

### Testing

No formal test setup currently. Manual testing via dev servers.

---

### When to Ask

- Ambiguous requirements
- Need to decide on approach/technology
- Major architectural changes
- Breaking changes to public APIs
