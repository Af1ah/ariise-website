# ARiiSE design language

The website uses one shared visual language, defined in `app/globals.css` and applied to every page through the global shell.

## Text roles

- **Display** — responsive `h1` and `h2` styles for page-level ideas.
- **Section heading** — `h3` for grouped content.
- **Body** — `--type-body`, never below `1rem` (16px), with `--leading-body` for readable long-form text.
- **Control** — `--type-control` for navigation, buttons, and text links; never below `1rem`.
- **Label** — `--type-label` for uppercase section and metadata labels; `0.9375rem` (15px) minimum with stronger weight and tracking.

## Color and interaction

- `--ink` is the primary reading color; `--ink-soft` is the accessible secondary-reading color.
- `--signal` is reserved for labels, active states, and focus treatment.
- Text and background tokens are shared across the header, content sections, client logos, footer, and responsive navigation.
- Every keyboard-focusable link or control receives a visible focus ring.

The site preserves browser zoom and user text settings. Motion-based headline highlighting always begins at a readable color, and becomes more prominent as it animates.

## Section rhythm and motion

- `--space-section`, `--space-section-tight`, `--space-section-gap`, and `--space-section-inset` define the vertical rhythm for hero-adjacent bands, standard editorial sections, and the closing call to action.
- Every content section uses `section-surface` for a shared scroll offset and label spacing. Platform, Evidence, and Closing use `SectionReveal`: a once-only, no-bounce spring that moves only `transform` and `opacity`.
- The hero keeps its scroll-led dashboard interaction, and the client band keeps its lighter logo stagger; these are the two intentional variations inside the same timing system.
- Press feedback uses `--motion-press`; temporary navigation surfaces use `--motion-surface`; `--motion-frame` draws a section frame on scroll entry; `--motion-reveal` stages the main content in a visible sequence. Reduced-motion users receive static content or a gentle fade rather than positional motion.
