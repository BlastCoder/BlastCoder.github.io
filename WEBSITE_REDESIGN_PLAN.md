# Career + Photography Website Redesign Plan

Status: planning document  
Prepared: July 10, 2026  
Scope of this pass: document the existing site, define the proposed design, and sequence the implementation. No production UI changes are included.

## 1. Executive summary

The website should become one personal site with two clearly distinct modes:

1. **Career** — the current portfolio and all of its existing content.
2. **Photography** — a visual portfolio inspired by the editorial, image-led structure of [Rob Schanz's portfolio](https://www.robschanz.com), but branded for Krish and built from original photography.

The recommended architecture is a small multi-page static site. The existing career page remains the default home page at `/`. A new photography index lives at `/photography.html`, with one page per photo series in `/photography/<series-name>.html`. A persistent `Career / Photography` switch connects the two experiences. This approach works with the current GitHub Pages setup, gives each mode its own URL and metadata, and avoids hiding an entire portfolio behind JavaScript.

The two modes should feel related through the name, mode switch, and baseline interaction quality, but they do not need to look identical. Career stays structured and information-dense. Photography becomes spacious, expressive, and almost entirely image-led.

## 2. Current state of the website

### 2.1 Technology and repository

The site is a hand-built static website with no framework, build step, CMS, or package dependencies.

| File | Current responsibility |
| --- | --- |
| `index.html` | All career content and page structure |
| `assets/css/style.css` | Entire visual system and responsive styling |
| `assets/js/main.js` | Mobile navigation toggle and dynamic footer year |
| `README.md` | Repository title and a brief greeting only |

This is an appropriate foundation for the redesign. Photography does not require a framework at the current scale; semantic HTML, CSS Grid, and a small amount of JavaScript are sufficient.

### 2.2 Current information architecture

The website is a single long page with a sticky header and anchor links to:

- Education
- Experience
- Projects
- Research
- Publications
- Achievements
- Contact

The main content is:

- A hero introducing Krish as a CMU computer science and machine learning undergraduate
- A “Snapshot” summary card
- One education entry with coursework and honors
- Four experience entries
- Five research entries
- One publication
- Four projects
- Two achievement categories
- Contact information and footer

The career mode already contains the material requested for the new site, so its content should be preserved rather than rewritten or removed during the first implementation pass.

### 2.3 Current visual design

The current career portfolio uses:

- Inter as the only typeface
- A white and light-gray background system
- Blue (`#3366ff`) as the primary accent
- A centered content column capped at 960px
- Rounded cards, subtle borders, soft shadows, and pill-shaped controls/tags
- Alternating white and light-gray sections
- A two-column hero on large screens and stacked content on small screens
- A card grid for projects and a vertical card timeline for research/experience

The result is clean and readable, but visually optimized for professional information rather than photography. Reusing its narrow container and card language for photographs would make the photography mode feel constrained.

### 2.4 Current behavior and responsiveness

- The header is sticky and uses a translucent blurred background.
- Desktop navigation is an inline list of section links.
- Below 720px, the section navigation becomes a button-triggered dropdown.
- The mobile menu closes after an anchor is selected.
- The footer year is set dynamically.
- There is no page transition, gallery interaction, lightbox, lazy-loading strategy, or photo-specific keyboard navigation.

### 2.5 Current content and quality issues to protect against

These do not block the redesign, but should be handled during implementation or a content-polish pass:

- The repository contains no local image assets today.
- Two project links still use `github.com/your-username/...` placeholders.
- The visible email and its `mailto:` destination do not match.
- Several organization links point to generic or incorrect destinations.
- There are copy errors such as “Reseacher,” “adpative,” and “adn.”
- The photography portfolio has not yet been defined: there are no final images, series names, ordering, captions, alt text, or credits in the repository.
- SEO metadata currently describes only the career portfolio.
- The mobile menu button does not expose `aria-expanded` or an explicit controlled-menu relationship.
- There is no automated validation, performance budget, or cross-browser test setup.

## 3. What is useful from the reference site

The reference was reviewed on July 10, 2026. Its most useful patterns are structural rather than brand-specific:

- An oversized nameplate anchors the page.
- Navigation is minimal and visually quiet.
- The home page is the body of work; it does not begin with explanatory marketing copy.
- Projects appear in a roomy three-column masonry layout on desktop.
- Each project uses one strong cover image and a short title below it.
- Mixed portrait and landscape crops create an editorial rhythm.
- Project pages let the photographs dominate, using a loose two-column gallery and little supporting copy.
- The footer is small and unobtrusive.
- On mobile, the visual hierarchy collapses to a straightforward single-column experience.

At the time of review, the reference uses a dusty mauve background, mint text, a warm orange active/accent color, a very bold sans-serif nameplate, and smaller utility typography. Those exact colors, fonts, titles, imagery, and brand details should not be copied. The proposed site should reproduce the successful hierarchy and pacing with its own identity.

## 4. Proposed website design

### 4.1 Design principles

1. **One identity, two modes.** Visitors should always understand that both portfolios belong to Krish.
2. **Preserve career content.** Mode creation must not cause content loss or make current career links unusable.
3. **Let each medium choose its layout.** Career favors scannability; photography favors image scale and rhythm.
4. **Use real URLs.** Both modes and every photo series should be linkable, refresh-safe, and indexable.
5. **Make the switch obvious.** A visitor should be able to move between modes from any top-level page in one action.
6. **Build for performance.** Responsive images and native lazy loading are requirements, not later enhancements.
7. **Stay inspired, not derivative.** Adopt the reference's editorial structure while using Krish's own palette, typography, photos, and interaction details.

### 4.2 Proposed sitemap

```text
/
├── index.html                         Career mode (existing content)
├── photography.html                   Photography project index
├── photography/
│   ├── <series-one>.html              Photo series detail
│   ├── <series-two>.html              Photo series detail
│   └── ...
├── assets/
│   ├── css/
│   │   ├── style.css                  Shared foundation + career styles
│   │   └── photography.css            Photography-only styles
│   ├── js/
│   │   ├── main.js                    Shared/career behavior
│   │   └── photography.js             Optional gallery behavior
│   └── images/
│       └── photography/
│           └── <series-slug>/          Cover and full gallery images
└── README.md
```

Plain `.html` URLs are the safest recommendation for this repository's current GitHub Pages setup. Clean folder URLs can be adopted later by placing each page at `<slug>/index.html`, but that is not necessary for the initial release.

### 4.3 Global header and mode switching

Every top-level page should include a shared identity row:

- **Left:** `Krish Mody`, linking to the active mode's landing page.
- **Right:** an explicit two-option switch: `Career` and `Photography`.
- The active mode is indicated by both style and `aria-current="page"`; color alone is not enough.

In career mode, the existing section navigation remains available as a secondary row or compact menu. This prevents the new mode selector from competing with seven section links. In photography mode, secondary navigation stays minimal: `Work`, optionally `About`, and `Contact` or Instagram if those are wanted.

Recommended behavior:

- `/` always opens Career; do not remember and force a visitor's last mode.
- The switch uses normal links, not a client-side content toggle.
- Mobile shows the mode switch without hiding it inside the hamburger menu.
- Photo-series pages retain a clear route back to the photography index.

### 4.4 Career mode

The initial career release should retain all current sections and copy. Only the shell changes:

- Replace the `KM` badge with a more explicit Krish Mody identity treatment.
- Add the persistent mode switch.
- Separate mode navigation from in-page section navigation.
- Preserve existing anchor IDs so old `/#research`-style links continue working.
- Normalize small spacing and accessibility issues encountered while modifying the header.

A later polish phase may correct copy, URLs, and information density, but this is deliberately separate from the two-mode launch so scope stays controlled.

### 4.5 Photography index

The photography landing page should be a portfolio index, not a biography-first page.

**Desktop composition**

- A wide page shell rather than the career page's 960px container
- A large `Krish Mody` nameplate at upper left
- Sparse navigation and the mode switch at upper right
- Generous vertical space between the header and first row of work
- Three masonry-style columns at large widths
- One cover photograph per series, preserving varied portrait/landscape proportions
- Series title directly beneath its cover
- Large horizontal and vertical gaps; no cards, borders, radii, or shadows
- A very small footer after the final row

**Tablet and mobile composition**

- Two columns at medium widths when image legibility remains strong
- One column on phones
- Reduced nameplate scale without losing its visual role
- Titles remain visible below images; do not rely on hover overlays
- Touch targets are at least 44px and images never cause horizontal scrolling

**Visual direction**

Use a distinctive but original palette. A strong starting option is a deep aubergine or warm charcoal background, warm off-white primary text, and a muted apricot accent. This retains the reference's colorful editorial confidence while creating enough text contrast and a separate identity. Final colors should be tested against WCAG contrast targets before implementation.

Suggested type roles:

- Nameplate: a bold display grotesk or heavy sans-serif
- Navigation and titles: a clean humanist sans-serif
- Captions/credits: the same family at a smaller size; avoid adding a third family

### 4.6 Photo-series detail pages

Each series page should contain:

- Shared photography header and mode switch
- Series title and optional one-line context
- An editorial gallery using a loose two-column grid on desktop
- Original image aspect ratios rather than forced uniform crops
- Optional credits/collaborators at the end
- Previous/next series navigation and a `Back to work` link
- Copyright footer

The default interaction should be direct scrolling, like a photo essay. A lightbox is optional, not required for version one. If added, it must support Escape to close, arrow-key navigation, focus management, and meaningful accessible labels.

### 4.7 Image system and content model

Each series needs a small content manifest before implementation:

| Field | Example |
| --- | --- |
| Slug | `pittsburgh-after-dark` |
| Display title | `Pittsburgh After Dark` |
| Cover image | `cover-1600.webp` |
| Cover focal point | `50% 35%` if a crop is used |
| Ordered gallery images | `01.webp`, `02.webp`, ... |
| Alt text | Brief description of visible content |
| Caption | Optional; separate from alt text |
| Credits | Optional subjects, collaborators, publication, year |

For each photograph, generate at least practical small, medium, and large WebP/AVIF variants while retaining a high-quality fallback where needed. Use `srcset` and `sizes`, include intrinsic `width`/`height`, lazy-load below-the-fold images, and give the first visible cover higher loading priority. Do not commit camera-original files with unnecessary metadata and multi-megabyte payloads.

### 4.8 Accessibility, SEO, and performance requirements

- Semantic headings and landmarks on every page
- Visible keyboard focus states in both color themes
- Descriptive alt text, with `alt=""` only for genuinely decorative duplicates
- No information available only on hover
- Respect `prefers-reduced-motion`
- Photography-specific page titles, descriptions, canonical URLs, and Open Graph images
- One `h1` per page and logical heading order
- Responsive images with explicit dimensions to limit layout shift
- Target initial photography-index transfer under roughly 2 MB on mobile, subject to final art direction
- Target Lighthouse scores of at least 90 for Performance, Accessibility, Best Practices, and SEO on representative pages

## 5. Step-by-step implementation plan

### Phase 0 — Content decisions and asset intake

1. Select the photo series for launch; 6–12 strong series is a practical first release.
2. Choose one cover for every series and finalize series ordering.
3. Provide the ordered full-resolution images for each series.
4. Finalize titles, optional one-line descriptions, captions, credits, and photography contact/social links.
5. Confirm the original visual direction: aubergine/charcoal proposal, or another palette.
6. Confirm whether version one needs `About`, a lightbox, or both. The default plan excludes both until the core portfolio works.

**Exit criterion:** every launch series has a slug, cover, ordered image list, and rights/credit information.

### Phase 1 — Shared shell and two-mode navigation

1. Introduce shared design tokens for spacing, typography, focus states, and mode colors.
2. Refactor the current header into an identity row, visible Career/Photography switch, and career section navigation.
3. Keep all current career section IDs and content intact.
4. Add `aria-current`, `aria-expanded`, and controlled-menu attributes where appropriate.
5. Create `photography.html` with the shared shell and temporary semantic project placeholders.
6. Verify direct navigation, browser back/forward, anchor links, and mobile navigation.

**Exit criterion:** users can reliably switch modes on desktop and mobile without JavaScript being required for the switch.

### Phase 2 — Photography design system and index

1. Add `photography.css` so photo-specific rules do not destabilize career cards and sections.
2. Implement the wide photography header, display nameplate, sparse navigation, original palette, and footer.
3. Build the responsive project index: three columns on wide screens, two where appropriate, and one on phones.
4. Preserve image aspect ratios and define consistent cover/title spacing.
5. Add subtle focus/hover treatment that does not obscure the photos.
6. Test representative portrait, landscape, and unusually tall covers to prevent broken masonry rhythm.

**Exit criterion:** the index matches the intended editorial hierarchy at 375px, 768px, 1024px, and wide desktop sizes.

### Phase 3 — Series pages and image pipeline

1. Create the reusable series-page HTML pattern.
2. Organize assets under one directory per series.
3. Export responsive AVIF/WebP sizes and appropriate fallbacks.
4. Add `srcset`, `sizes`, intrinsic dimensions, lazy loading, and fetch priority rules.
5. Populate titles, images, alt text, captions, and credits.
6. Add `Back to work` and previous/next navigation.
7. Add an accessible lightbox only if it was confirmed in Phase 0.

**Exit criterion:** every cover opens a complete, keyboard-accessible, performant series page.

### Phase 4 — Metadata, polish, and career cleanup

1. Add photography-specific titles, descriptions, canonical URLs, and sharing images.
2. Correct the known career typos, placeholder project links, incorrect organization URLs, and email-link mismatch after confirming the intended destinations.
3. Ensure external links that open new tabs use `rel="noopener"` consistently.
4. Add a favicon/brand treatment that works in both modes.
5. Add a basic README explaining how to create, order, or remove a photo series.
6. Add a lightweight not-found page with routes back to both modes if desired.

**Exit criterion:** content and metadata are publication-ready, with no placeholders or known broken links.

### Phase 5 — Verification and launch

1. Validate HTML and inspect the browser console for errors.
2. Test Chrome, Safari, and Firefox at desktop and phone widths.
3. Test keyboard-only navigation, focus order, reduced motion, and screen-reader labels.
4. Run Lighthouse on the career home, photography index, and one image-heavy series.
5. Check for broken links, missing assets, oversized images, layout shifts, and horizontal overflow.
6. Verify GitHub Pages paths on the actual project URL, including nested series pages.
7. Deploy and perform a final smoke test on the live domain.

**Exit criterion:** both modes and all launch series pass functional, accessibility, metadata, and performance checks on the deployed site.

## 6. Recommended delivery order

The safest delivery is three small implementation milestones:

1. **Mode shell:** shared header, working switch, empty photography index.
2. **Photography MVP:** designed index plus 2–3 representative series to validate the system.
3. **Full launch:** remaining series, metadata, performance tuning, and content cleanup.

This sequence validates the highest-risk variables—photography assets, crop behavior, layout rhythm, and load performance—before duplicating the pattern across the full portfolio.

## 7. Decisions needed before implementation

The build can begin with placeholders, but it cannot be considered launch-ready until these are answered:

1. Which photo series and images are included at launch?
2. What is the desired order of the series?
3. Should the photography mode include an About page, Instagram link, contact details, or only Work?
4. Is the proposed aubergine/charcoal direction acceptable, or should the site hew closer to the reference's mauve/mint energy?
5. Should images open only as project pages, or should individual images also open in a lightbox?
6. Are there credits, publication names, client names, dates, or usage restrictions to display?

## 8. Definition of done

The redesign is complete when:

- Career and Photography are visible, linkable modes on every top-level page.
- All existing career sections remain accessible and no current content is lost.
- Photography has an original, image-led index and complete series pages.
- The layout works without overlap or horizontal scrolling across supported widths.
- All images are optimized, responsive, correctly ordered, and described accessibly.
- There are no placeholder links, missing files, console errors, or known broken routes.
- Both modes have correct metadata and share previews.
- The deployed GitHub Pages site passes the agreed accessibility and performance checks.

## 9. Reference boundary

The redesign may use the reference site's broad patterns—oversized identity, sparse navigation, colorful editorial art direction, masonry project covers, titles beneath images, and scrolling project galleries. It should not reproduce Rob Schanz's photographs, wording, exact brand treatment, source code, or page-for-page identity. The final result should clearly read as Krish Mody's portfolio.
