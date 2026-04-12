# Design System Specification

## 1. Overview & Creative North Star
**Creative North Star: The Sovereign Ledger**
This design system moves away from the "soft" tropes of sustainability—avoiding the overused leaves and organic shapes—to embrace an aesthetic of institutional authority and technical precision. We are merging the high-density utility of a **Bloomberg Terminal** with the airy, functional warmth of **Scandinavian Minimalism**. 

The goal is to present environmental data not as a "social good" hobby, but as a critical institutional asset. We achieve this through "The Sovereign Ledger" approach: high-contrast typography, a rigid adherence to data-centric layouts, and a "layered" depth model that replaces traditional borders with tonal shifts. The interface should feel like a premium financial tool—fast, dense, and undeniable.

## 2. Color & Tonal Architecture
The palette is rooted in deep "Ink" and high-performance "Emerald," supported by a secondary module-specific spectrum.

### The "No-Line" Rule
To achieve a high-end editorial feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined through background color shifts. 
- Use `surface-container-low` (#edf4ff) for the primary page background.
- Use `surface-container-lowest` (#ffffff) for primary content cards.
- Use `surface-container-high` (#dfe9f7) to denote interactive or nested zones.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of technical papers. 
- **Level 0 (Base):** `surface` (#f7f9ff).
- **Level 1 (Sections):** `surface-container-low`.
- **Level 2 (Active Components/Cards):** `surface-container-lowest`.
- **Level 3 (Popovers/Modals):** Use `surface-bright` with a **Glassmorphism** effect: 80% opacity with a 20px backdrop blur to maintain the "density" of the data behind the overlay.

### Signature Accents
- **Primary Emerald (#059669):** Used for "CarbonLens" and core system actions.
- **WasteAI Violet (#7C3AED):** Used exclusively for waste management metrics.
- **EnergyRadar Amber (#D97706):** Used for power and heating data.
- **The "Data-Glow":** Use subtle gradients (e.g., `primary` to `primary_container`) on high-value CTA buttons to provide a "lit from within" professional polish.

## 3. Typography
The system employs a dual-typeface strategy to separate "Human Intent" from "System Output."

- **DM Sans (UI & Display):** Used for all navigation, headings, and labels. Its geometric clarity provides the Scandinavian "cleanliness."
- **JetBrains Mono (Data & Numbers):** Used for every numerical value, metric, and table cell. This creates the "Terminal" aesthetic, signaling that every number is a live, computed data point.

### Typography Scale
- **Display-LG (56px):** DM Sans. For hero metrics (e.g., Campus Carbon Score).
- **Headline-MD (28px):** DM Sans Medium. For section headers.
- **Title-SM (16px):** DM Sans Bold. For card titles.
- **Body-MD (14px):** DM Sans Regular. For descriptive text.
- **Label-MD (12px):** JetBrains Mono. For data keys, table headers, and status micro-copy.

## 4. Elevation & Depth
Depth is conveyed through **Tonal Layering** rather than structural shadows.

### The Layering Principle
Instead of casting shadows, "lift" is created by placing a lighter surface on a darker one. A card (`surface-container-lowest`) sitting on a page (`surface-container-low`) creates a natural, sharp hierarchy that feels modern and architectural.

### Ambient Shadows
When a floating effect is required (e.g., a "sticky" header or a floating action button), use an **Ambient Shadow**:
- **Color:** A tinted version of `on_surface` (Ink) at 6% opacity.
- **Blur:** 24px - 32px (extra-diffused).
- **Y-Offset:** 8px.

### The "Ghost Border"
If a border is required for accessibility in complex data tables, use a "Ghost Border": `outline-variant` (#bccac0) at 15% opacity. Never use 100% opaque lines.

## 5. Components

### Stat Cards (The Data Hero)
- **Background:** `surface-container-lowest`.
- **Radius:** 12px (`xl`).
- **Typography:** Big JetBrains Mono numbers in `on_surface`.
- **Interaction:** No border. On hover, transition the background color to `surface-container-high`.

### Module-Specific Cards
- **Structure:** Standard card with a 4px solid left-border accent.
- **Accents:** The border color must match the module: Emerald (Carbon), Violet (Waste), or Amber (Energy).
- **Content:** Use `Label-MD` (JetBrains Mono) for the "Last Updated" timestamp in the top right.

### Data Tables
- **Header:** `surface-container-highest` background with `on_surface` (Ink) text. 
- **Typography:** JetBrains Mono for all cell data.
- **Separation:** No horizontal lines. Use a 4px vertical "Spacing Scale" gap between rows or subtle alternating row tints (`surface-container-low`).

### Dark Side-Navigation
- **Background:** `on_background` (#121c27).
- **Text:** `inverse_on_surface` (#e8f1ff).
- **Active State:** A vertical emerald bar on the far left with a subtle gradient bleed into the background.

### Buttons
- **Primary:** `primary` (#006948) background, `on_primary` text. 12px radius.
- **Secondary:** Transparent background with a `Ghost Border` and `on_surface` text.
- **Tertiary/Ghost:** No background, no border. DM Sans Bold, all caps, 12px.

## 6. Do’s and Don’ts

### Do
- **Do** lean into asymmetry. For example, a dashboard might have a wide data table on the left and a narrow, vertically-stacked list of "insights" on the right.
- **Do** use `JetBrains Mono` for *any* character that is a number. This includes dates, percentages, and ordinals.
- **Do** use whitespace as a separator. If you feel the need to add a line, add 16px of padding instead.

### Don't
- **Don't** use green for everything. "Sustainability" is communicated through the data, not through green leaf icons or floral patterns.
- **Don't** use standard "drop shadows." They look "templated" and cheapen the Bloomberg-esque professional feel.
- **Don't** use rounded corners larger than 16px. We are aiming for "Professional Minimalism," not "Playful Consumerism." Stay within the 8px/12px/16px scale.