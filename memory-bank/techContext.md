# Tech Context: Magnific Landing Page

## 1. Core Technologies
- **Programming Language:** TypeScript (evident from `.tsx`, `.ts` file extensions and type annotations).
- **UI Framework/Library:** React (imports from `react`, `react-dom/client`).
- **Styling:** Tailwind CSS (setup in `index.css`, utility classes in `App.tsx`).
- **UI Components:** Likely shadcn/ui, which uses Radix UI primitives (e.g., `@radix-ui/react-accordion`) and `lucide-react` for icons.

## 2. Build & Development Tools
- **Build Tool / Dev Server:** Vite (inferred from `vite-env.d.ts`).
- **Package Manager:** Not explicitly visible, but likely npm or yarn (standard for React/Vite projects).

## 3. Key Libraries & Dependencies
- `react`, `react-dom`: Core React libraries.
- `@radix-ui/react-accordion`: Headless UI component for the accordion.
- `lucide-react`: For SVG icons (e.g., `ChevronDown`).
- `clsx`: Utility for constructing `className` strings conditionally.
- `tailwind-merge`: Utility to merge Tailwind CSS classes without style conflicts.
- `tailwindcss` (implied by `index.css` and usage).

## 4. Development Setup (Assumed)
- Node.js and a package manager (npm/yarn) are required.
- A typical Vite-React project structure:
  - `public/`: For static assets (e.g., fonts in `/fonts/PPMori-Regular.woff2` referenced in `index.css`).
  - `src/`: Contains all source code.
    - `main.tsx`: Application entry point.
    - `App.tsx`: Main application component.
    - `index.css`: Global styles and Tailwind setup.
    - `components/`: For UI components.
      - `ui/`: Likely for shadcn/ui components (e.g., `accordion.tsx`).
    - `lib/`: For utility functions (e.g., `utils.ts` containing `cn`).
  - `vite-env.d.ts`: TypeScript definitions for Vite environment variables.
  - `package.json`: Defines project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.
  - `tailwind.config.js` (or `.ts`): Tailwind CSS configuration.
  - `postcss.config.js`: PostCSS configuration (often used with Tailwind).

## 5. Technical Constraints & Considerations
- **Static Deployment:** The project is suitable for static hosting platforms (e.g., Vercel, Netlify, GitHub Pages).
- **Browser Compatibility:** Ensure compatibility with modern web browsers.
- **Performance:** Optimize images and assets for fast load times, as is crucial for landing pages.
- **Accessibility (A11y):** While not explicitly detailed, using Radix UI primitives helps with accessibility. Further attention to ARIA attributes and semantic HTML is always good practice.

## 6. Code Style & Conventions
- **TypeScript:** Static typing is enforced.
- **React Functional Components & Hooks:** The primary way of writing components (`App.tsx` is a functional component using `useState`).
- **ESLint/Prettier (Assumed):** Likely used for code linting and formatting, common in modern web projects, though no config files are directly visible in the provided `src` listing.
- **Absolute Imports (`@/`):** Path aliases like `@/components/ui/accordion` and `@/lib/utils` are configured, typical in Vite/TS projects (usually via `tsconfig.json`). 