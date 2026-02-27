## Machine Coding Questions – React.js

A small collection of **machine coding style React problems** implemented as standalone mini-features, all wired together via `react-router`. Each route demonstrates a focused UI pattern or interaction you might be asked to build in interviews.

### Tech stack

- **Framework**: React.js + TypeScript
- **Bundler/Dev server**: Vite
- **Routing**: `react-router` (data/router API)
- **Styling**: Tailwind CSS (v4, via `@tailwindcss/vite`)

### Project structure

- **`src/main.tsx`**: App entry; sets up the `createBrowserRouter`, using the `DATA` route config.
- **`src/helper.tsx`**
  - `DATA`: Array of `RouteObject`s used by `react-router` and by the home grid.
  - `getTitle(path)`: Converts a URL path (e.g. `/copy-to-clipboard`) into a human‑readable title.
- **`src/App.tsx`**: Home page that lists all machine-coding questions as cards.
- **`src/components/Layout.tsx`**: Simple layout wrapper providing page title and base padding/background.
- **`src/components/FeatureCard.tsx`**: Card component used on the home page to link into each feature route.
- **`src/pages/*`**: Individual feature pages like `FeatureName.tsx`

### Available routes / features

All of these are defined in `DATA` inside `src/helper.tsx` and surfaced on the home grid:

- **`/`** – Home page titled **“Machine Coding Questions”** showing a grid of feature cards.
- **`/color-explorer`** – Basic **Color Explorer** page (placeholder for a color picking/exploration tool).
- **`/authentication`** – **Authentication** demo page (placeholder for login/register flows).
- **`/contact-form`** – **Contact Form** demo (placeholder for a simple contact form UI).
- **`/copy-to-clipboard`** – **Copy to Clipboard** demo (placeholder for clipboard interaction).

Each feature page currently uses the shared `Layout` component and placeholder content, so you can iteratively flesh out the full machine-coding solutions.

### Getting started

#### 1. Install dependencies

```bash
pnpm install
# or
npm install
# or
yarn
```

> The project is compatible with any Node-based package manager; pick the one you prefer. There is also a `bun.lock` if you want to use Bun.

#### 2. Run the dev server

```bash
pnpm dev
# or
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`) in your browser.

#### 3. Build for production

```bash
pnpm build
# or
npm run build
```

The bundled app will be output to `dist/`.

### How routing works

- `src/helper.tsx` exports a `DATA` array of `RouteObject`s (`path` + `element`).
- `src/main.tsx` builds the router as:
  - an index (`/`) route rendering `App`
  - plus the spread `...DATA` for all feature routes.
- The home page uses the same `DATA` to render a grid of cards; this guarantees that any route added to `DATA` automatically:
  - becomes a real route handled by `react-router`
  - appears as a card on the landing page.

### Adding a new machine-coding question

1. **Create a new page component** under `src/pages`, e.g. `src/pages/TodoList.tsx`.
2. Wrap it with `Layout` and implement the full UI/logic for the question.
3. **Add a route** in `DATA` in `src/helper.tsx`:

```ts
import TodoList from "./pages/TodoList";

export const DATA: RouteObject[] = [
  // existing routes...
  {
    path: "/todo-list",
    element: <TodoList />,
  },
];
```

4. The `FeatureCard` on the home page will automatically derive the human-readable title using `getTitle("/todo-list")` → **“Todo List”**.

### Development notes

- **Styling**: Tailwind CSS v4 is enabled via the `@tailwindcss/vite` plugin, and `src/index.css` imports the Tailwind base using `@import "tailwindcss";`.
- **TypeScript + ESLint**: The project is set up with strict-ish TypeScript and modern ESLint configs. You can run:

```bash
pnpm lint
# or
npm run lint
```

to check for issues.

### License

No explicit license file is currently present. Add one if you plan to open‑source or share this repository.
