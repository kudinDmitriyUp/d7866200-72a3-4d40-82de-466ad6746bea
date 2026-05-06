# Templates

Templates are complete website starting points. Props for content, default values for demo content, inline sections for freedom.

---

## Quick Setup Flow

### 1. Define Sections
List the sections for the template:
```
NavbarFloating, HeroBillboardBrand, AboutTextSplit, ProductMediaCards,
FeaturesBento, TestimonialTrustCard, FaqSplitMedia, ContactCenter, FooterSimpleCard
```

### 2. Create Files
```
src/templates/[name]/
├── page.tsx
└── theme.css
```

### 3. Build page.tsx

**Imports** - UI components only, never sections:
```tsx
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AutoFillText from "@/components/ui/AutoFillText";
import { Star, ArrowUpRight } from "lucide-react";
import "./theme.css";
```

**Types** - One type per section:
```tsx
type TemplateProps = {
  hero: { brand: string; description: string; /* ... */ };
  about: { title: string; description: string; /* ... */ };
};
```

**Default Props** - Demo content:
```tsx
const defaultProps: TemplateProps = {
  hero: { brand: "Brand", description: "Description text" },
  about: { title: "About Us", description: "..." },
};
```

**Sections** - Copy code from base section, add marker:
```tsx
{/* === HERO (base: HeroBillboardBrand) === */}
<section>
  {/* Inline code from HeroBillboardBrand.tsx */}
</section>
```

### 4. Build theme.css

Copy full structure from existing template, change only:
- Color values in `:root`
- Card style (`.card`)
- Button styles (`.primary-button`, `.secondary-button`)

Required structure:
```css
/* [Name] - [Theme Description] */
@import "tailwindcss";
@import "../../styles/masks.css";
@import "../../styles/animations.css";

:root {
  /* @colorThemes/[lightTheme|darkTheme]/[themeName] */
  --background: #...;
  --card: #...;
  --foreground: #...;
  --primary-cta: #...;
  --primary-cta-text: #...;
  --secondary-cta: #...;
  --secondary-cta-text: #...;
  --accent: #...;
  --background-accent: #...;

  /* @layout/border-radius/rounded */
  --radius: 1.5rem;

  /* @layout/content-width/medium */
  --width-content-width: clamp(40rem, 72.5vw, 100rem);

  /* ... carousel, typography variables ... */
}

/* Mobile typography */
@media (max-width: 768px) { :root { /* ... */ } }

@theme inline { /* Tailwind mappings */ }

/* Base styles: *, html, body, h1-h6 */

/* WEBILD_CARD_STYLE */
/* @cards/[style-name] */
.card { /* ... */ }

/* WEBILD_PRIMARY_BUTTON */
/* @buttons/primary-button-styles/[style-name] */
.primary-button { /* ... */ }

/* WEBILD_SECONDARY_BUTTON */
/* @buttons/secondary-button-styles/[style-name] */
.secondary-button { /* ... */ }
```

### 5. Add Route
In `src/pages/components/templates/`:
- Create `[Name]TemplatePage.tsx`
- Add to `TemplateListPage.tsx`

---

## Structure

```
src/templates/
├── saas/
│   ├── page.tsx          # Props + defaults + inline sections
│   └── theme.css         # Colors, buttons, cards
└── restaurant/
    ├── page.tsx
    └── theme.css
```

---

## Template Pattern

```tsx
// UI components (always imported)
import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import "./theme.css";

// Types
type SaasTemplateProps = {
  hero: {
    tag: string;
    title: string;
    description: string;
    primaryButton: { text: string; href: string };
    secondaryButton: { text: string; href: string };
  } & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });
  features: { /* ... */ };
};

// Default content (demo data)
const defaultProps: SaasTemplateProps = {
  hero: {
    tag: "SaaS Platform",
    title: "Build Modern Web Experiences",
    description: "Create stunning websites...",
    primaryButton: { text: "Get Started", href: "#contact" },
    secondaryButton: { text: "Learn More", href: "#features" },
    imageSrc: "https://...",
  },
  features: { /* ... */ },
};

// Template component
const SaasTemplate = ({
  hero = defaultProps.hero,
  features = defaultProps.features,
}: Partial<SaasTemplateProps>) => {
  return (
    <>
      {/* === HERO (base: HeroSplit) === */}
      <section aria-label="Hero section" className="...">
        <TextAnimation text={hero.title} /* ... */ />
        <Button text={hero.primaryButton.text} href={hero.primaryButton.href} />
        <ImageOrVideo imageSrc={hero.imageSrc} videoSrc={hero.videoSrc} />
      </section>

      {/* === FEATURES (base: FeaturesMediaCards) === */}
      <section aria-label="Features section">
        {/* Inline code using features prop */}
      </section>
    </>
  );
};

export default SaasTemplate;
```

---

## Base Markers

Each section has a comment marking its base section:

```tsx
{/* === HERO (base: HeroSplit) === */}
```

Find all templates using a section: `grep -r "base: HeroSplit" src/templates/`

---

## theme.css

```css
/* Colors from colorThemes.json */
:root {
  --background: #050012;
  --card: #040121;
  --foreground: #f0e6ff;
  --primary-cta: #c89bff;
  --primary-cta-text: #050012;
  --secondary-cta: #1d123b;
  --secondary-cta-text: #f0e6ff;
  --accent: #684f7b;
  --background-accent: #65417c;
}

/* Buttons from theme-options/buttons/ */
.primary-button { /* ... */ }
.secondary-button { /* ... */ }

/* Cards from theme-options/cards/ */
.card { /* ... */ }
```

---

## Creating a Template

1. Create `src/templates/[name]/page.tsx` and `theme.css`
2. Define types matching your chosen sections
3. Create defaultProps with demo content
4. Copy section code inline (don't import sections)
5. Add base markers to each section
6. Build theme.css from colorThemes.json + theme-options/

---

## Updating Templates

When a base section changes, find affected templates with grep and apply the fix to each inline section.

---

## Not Included

- Not in registry.json (standalone files)
- No ThemeProvider
- No imported sections (inline code only)
