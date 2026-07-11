# Project Rules

## General

1. Each project should have a unique name and a unique slug.
2. Each project will contain its stack of technologies.
3. Each project has it's own repository and a live URL.
4. Each project has it's own preview screenshots, contents and landing page.

## Code Writing / Style

1. For functions try to use `() => {...}` format instead of `function <function_name> () {...}` as much as possible.
2. Comments should not be long and rarely contain code except for examples in jsdocs.
3. Use `camelCase` for variable names.
4. Use `camelCase` for function names.
5. Prefer `type` over `interface` for all type definitions.
6. Every exported component, hook, and non-trivial type should have a JSDoc block explaining its purpose, referencing related components/types with `{@link Name}`, and documenting any non-obvious interaction/behavior (e.g. why a certain approach was taken, not just what it does).
7. Destructure props from a single `props` parameter inside the function body (`const { a, b } = props;`) rather than destructuring directly in the function signature.

## File & Folder Structure

1. Path aliases (defined in `tsconfig.json`) should be used instead of relative `../../` imports: `@/*`, `@app*`, `@assets*`, `@components*`, `@data*`, `@errors*`, `@features*`, `@hooks*`, `@lang*`, `@pages*`, `@plugins*`, `@styles*`, `@utils*`.
2. Section components live under `src/components/section/<SectionName>/<SectionName>.section.tsx`.
3. Page components live under `src/pages/<PageName>/<PageName>.page.tsx`, one per route.
4. Reusable, non-section UI elements (buttons, toggles, icons, etc.) live under `src/components/ui/`.
5. Static/singleton UI text (nav labels, section copy, aria-labels) lives in `src/lang/<matching-path>/<name>.ts`, mirroring the structure of the component it belongs to.
6. Project metadata (one project per file) lives under `src/data/projects/<category>/<project_slug_or_name>/metadata.ts`, aggregated by a category index file (e.g. `markupProjects.ts`) and combined in `src/data/projects.ts`.
7. Component-scoped CSS files sit beside their component (e.g. `CTA.section.css` next to `CTA.section.tsx`) and are imported into the relevant `*.css` aggregator (e.g. `components.css`).

## Internationalization (i18n)

1. The app supports English (`en`) and Hebrew (`he`) via `SupportedLanguages`.
2. Any piece of translatable content must use the `Translations<T>` helper type so both languages are enforced at compile time.
3. Non-text/structural data (paths, IDs, flags) stays outside the translated `content` object; only human-readable text is translated.
4. Use the `useLanguage()` hook to read the current language inside components; never hardcode language-specific text directly in a component.
5. Account for RTL (Hebrew) layout: prefer logical CSS properties/classes (`start`/`end`, `ps-`/`pe-`) over physical ones (`left`/`right`) unless a specific visual effect requires a physical value (documented inline when it does).

## Styling

1. Use Tailwind utility classes; use the semantic color tokens defined in `globals.css` (`text-color`, `text-color-muted`, `bg-bg-dark`, `border-border`, `text-primary`, `text-secondary`, etc.) instead of raw color values.
2. Reuse the `Section` component to wrap page sections rather than raw `<section>` elements.
3. Keep dark/light theme parity in mind - any new custom property added under `@theme inline` in `globals.css` should get both a dark (`:root`) and light (`.light`) value.

## Data & Content

1. Each project's rich content (`title`, `shortDescription`, `overview`, `architecture`, `challenges`, `lessons`) is defined per-language, separately from its non-translatable metadata (`slug`, `stack`, `featured`, links, screenshots).
2. Project `slug` values and project names/titles must remain unique across the whole `allProjects` list.
3. A project's `stack` array must be ordered with its most important/flagship technologies first. Nothing infers or re-sorts this order at render time - e.g. `ProjectCard` shows the first 3 entries as a project's featured badges (collapsing the rest into a "+N" overflow badge), trusting the array's order as-authored. When adding or editing a project's `stack`, put the technologies you want surfaced first.

## Working with AI on this codebase

1. Before accepting an AI-written chunk, be able to explain what it does and why it was written that way — if not, ask for a line-by-line explanation before moving on.
2. For non-trivial features, write the skeleton first (function signatures, file structure, a comment per piece) and let AI fill it in, rather than asking for the whole feature at once.
3. Review AI diffs like a PR from a coworker: check for missed edge cases, unnecessary new dependencies, and consistency with existing patterns in this repo. Ask for smaller diffs if one is too large to review carefully.
4. For unfamiliar concepts, ask AI to explain first and write a minimal example, then implement the real thing yourself — reserve "just write it" for boilerplate already well understood (CRUD, config, routing scaffolding).
