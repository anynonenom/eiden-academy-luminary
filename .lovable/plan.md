

# Eiden Academy — Cinematic Motion Web-App

A light/cream-themed, motion-driven web-app inspired by Zenya (creative-agency theme), respecting Eiden Academy's brand identity (crest logo, Montserrat + Inter, cream/teal/gold/deep-green palette). Every page is a curated, scroll-choreographed experience with **8 distinct sections**, each section visually different from the others.

## Brand System (locked)

- **Palette:** Cream `#f5f1e8` (background), Deep Green `#122620`, Teal `#0c5752`, Gold `#d7bb93`, White, Grey `#6b6b6b`
- **Fonts:** Montserrat (display, 700/800, italic accents in gold) + Inter (body)
- **Logo:** Eiden Academy crest (uploaded green PNG) — used in preloader, nav, footer
- **Tone:** editorial luxury × kinetic energy — disciplined typography, gold serif-italic accents, generous whitespace, bold motion

## Global Motion Layer (every page inherits)

1. **Cinematic preloader / opening curtain** (Zenya-style): logo crest reveals with mask animation, percentage counter 0→100, then a teal panel + cream panel split-curtain wipes off-screen revealing the page. Fires once per session.
2. **Custom animated cursor:** dot + outline ring, magnetic on links/buttons, morphs into "VIEW" / "DRAG" labels over media.
3. **Smooth-scroll engine** (Lenis) with momentum + scroll progress bar (teal→gold gradient) at top.
4. **Sticky nav** that shrinks on scroll, with full-screen overlay menu — links stagger in with mask reveal, large hover labels.
5. **Reveal system on every section:** masked text rise, char-by-char split-text on headings, image clip-path reveals, parallax depth.
6. **Marquee bands** (gold underline italics) used as section dividers.
7. **Section number watermarks** (huge faded "01 / 02 …") behind content like the brand guide.
8. **Page transitions:** between routes a teal panel sweeps across with the crest pulsing in the center.
9. **Footer reveal:** scrolls up from beneath the page (parallax peek) on every route.

## Pages — 8 sections each (every section unique)

### 1. Homepage
1. **Hero** — full-viewport cream stage; oversized kinetic headline "Eiden *Academy*" with character-by-character mask reveal, floating crest, animated metrics row (counters), grain texture.
2. **Infinite gold marquee** — "Excellence · Discipline · Architecture du Savoir ·" scrolling both directions.
3. **Manifesto** — large editorial paragraph with words highlighting in gold as you scroll (scroll-linked text color).
4. **Programmes preview** — horizontal-scroll-pinned showcase of the 5 formations with image parallax tilt cards.
5. **Numbers band** — dark green section, animated counters (500+ leaders, 4 programmes, ∞ ambition) with diagonal motion lines.
6. **Method / 4 pillars** — grid that morphs from list to cards on hover, gold underline scribble draws on enter.
7. **Testimonials carousel** — draggable slider with portrait masks and large pull-quote, custom drag cursor.
8. **CTA + footer reveal** — split layout, animated arrow, "Begin your transformation" with hover magnetic button.

### 2. MICE (Meetings · Incentives · Conferences · Events)
1. **Hero** — cinematic video-loop placeholder with cream overlay, headline "Convene. *Inspire.* Transform."
2. **Service pillars (4 tiles)** — flip-on-hover cards (Meetings/Incentives/Conferences/Events) with icon morph.
3. **Process timeline** — vertical scroll-animated path (SVG draw) with 5 stages.
4. **Signature venues gallery** — masonry with cursor-follow zoom preview.
5. **Capacity / specs interactive table** — rows reveal with stagger, hover row highlights gold.
6. **Past events marquee strip** — logos scrolling with scroll-velocity reactive speed.
7. **Booking enquiry form** — large editorial form, floating labels, gold focus ring.
8. **CTA + footer reveal**.

### 3. Formations (index of 5 programmes + 5 detail pages)
**Index page sections:**
1. **Hero** — "5 Architectures. *One Standard.*" with stacked rotating word reveal.
2. **Filter bar** — animated pill filters (Leadership / Strategy / Finance / Marketing / Tech).
3. **Programme grid (5 cards)** — large editorial cards, image clip-reveal on enter, hover lifts with gold border draw.
4. **Comparison table** — animated diff highlight when scrolled.
5. **Faculty showcase** — circular portraits orbiting a central crest.
6. **Curriculum philosophy** — split-screen sticky text + visual.
7. **Outcomes / alumni numbers** — counters + radial chart animation.
8. **CTA + footer**.

**Each of the 5 formation detail pages** uses a shared 8-section template but with **distinct hero treatments + accent layouts** (e.g. Leadership = stacked typography hero; Strategy = chess-grid hero; Finance = animated chart hero; Marketing = layered marquee hero; Tech = code-rain hero) — sections: Hero · Overview · Curriculum modules accordion · Schedule timeline · Instructor spotlight · Pricing/cohorts · Testimonials · Apply CTA.

### 4. Contact
1. **Hero** — "Let's *talk.*" with massive italic gold word, animated underline scribble.
2. **Direct channels grid** — phone / email / WhatsApp / address tiles with icon morphs.
3. **Interactive map** — stylized map with pulsing teal pin, parallax on scroll.
4. **Contact form** — multi-step form with progress arc, smooth field transitions.
5. **FAQ accordion** — with gold marker that travels between open items.
6. **Office hours + team availability** — animated clock visual.
7. **Social / press marquee**.
8. **CTA + footer**.

### 5. About Us
1. **Hero** — "The Architecture *Behind* the Academy." — split text reveal over crest watermark.
2. **Origin story** — long-form editorial with scroll-linked image swap (3 images crossfade through scroll).
3. **Mission · Vision · Values** — three pinned panels that swap as you scroll past.
4. **Timeline of milestones** — horizontal scroll with year markers and image cards.
5. **Founders & faculty** — large portrait grid, cursor reveals name/title, click opens overlay bio.
6. **Manifesto block** — large italic pull quote on dark green panel with gold left border.
7. **Partners / accreditations marquee**.
8. **Join us CTA + footer**.

## Technical Approach

- React + Vite + Tailwind, design tokens added to `index.css` (cream bg, brand HSL vars), Tailwind config extended with brand colors, Montserrat + Inter via Google Fonts.
- **Framer Motion** for component-level animation (variants, stagger, layout, scroll-linked).
- **GSAP + ScrollTrigger** for pinned horizontal scroll, split-text, scroll-linked timelines, marquee velocity.
- **Lenis** for smooth scroll.
- **React Router** routes: `/`, `/mice`, `/formations`, `/formations/:slug` (×5), `/contact`, `/about`.
- Reusable motion primitives: `<SplitTextReveal>`, `<MaskReveal>`, `<Marquee>`, `<MagneticButton>`, `<CursorFollower>`, `<Preloader>`, `<PageTransition>`, `<SectionNumber>`, `<ParallaxImage>`, `<HorizontalPin>`.
- Fully responsive: mobile gets simplified motion (no pinning, marquees stay, custom cursor disabled on touch), hamburger overlay nav, tap-friendly hit areas, fluid `clamp()` typography throughout.
- Performance: lazy-load route chunks, `prefers-reduced-motion` respected, images use `loading="lazy"`, animation kills on unmount.

## Deliverable

A motion-rich, editorial-luxury Eiden Academy web-app on a cream/light foundation with the Zenya choreography vibe — preloader opening, custom cursor, smooth scroll, 5 routes × 8 unique sections each (plus 5 formation detail pages), brand-locked typography & colors, and full mobile responsiveness.

