# Career Page Redesign Plan

Status: planning document  
Prepared: July 11, 2026  
Scope: the Career experience only. The Photography portfolio, its pages, imagery, and visual system are separate and are not redesigned here.

## 1. Executive summary

The Career portfolio should remain primarily a single-page experience, but it should stop treating every piece of information as equally important. The redesigned `index.html` will become a focused professional overview that a recruiter can understand quickly and explore without unnecessary navigation.

The recommended structure is a hybrid:

- Keep the career overview, experience, selected research, selected projects, education, recognition, and contact on one scrolling page.
- Add dedicated pages for Research and Projects because those areas benefit from deeper explanations and direct links.
- Use normal anchor links and page links rather than tabbed interface controls.
- Preserve all existing career content, but distinguish between overview content and supporting detail.

This creates a shorter, clearer main page without fragmenting the portfolio into seven small pages. Photography remains a separate top-level mode and is outside this plan.

## 2. Goals and non-goals

### Goals

1. Make Krish's professional focus understandable within the first screen.
2. Let a recruiter scan the most important experience and work in roughly one to two minutes.
3. Preserve deeper technical material for readers who want it.
4. Establish a clear hierarchy between primary accomplishments and supporting details.
5. Improve navigation on desktop and mobile.
6. Correct broken links, content inconsistencies, and accessibility issues encountered within the career page.
7. Keep the site static, fast, maintainable, and compatible with GitHub Pages.

### Non-goals

- Redesigning or changing the Photography portfolio
- Introducing a framework, CMS, database, or build system
- Hiding career sections behind JavaScript tabs
- Rewriting Krish's professional history without confirming factual changes
- Adding speculative metrics, employers, projects, publications, or accomplishments
- Removing existing content before it has been mapped to a new location

## 3. Current state of the career page

### 3.1 Technical structure

The career page is a static single-page site:

| File | Career responsibility |
| --- | --- |
| `index.html` | All career content, metadata, header, navigation, and footer |
| `assets/css/style.css` | Career layout, typography, cards, responsive behavior, and shared mode-switch styling |
| `assets/js/main.js` | Mobile career navigation and dynamic footer year |

There is no framework, build step, or client-side router. This remains a good technical fit for the redesign.

The site already has a two-level header:

- A `Krish Mody / Career` identity and `Career / Photography` mode switch
- A career-specific row of seven section links

The mode switch should be retained. The work described below begins underneath that shared boundary and does not alter the Photography experience.

### 3.2 Current content inventory

The page currently contains:

1. **Hero** — professional interests, introductory copy, a `View Research` action, and a Snapshot card.
2. **Education** — CMU degree, concentration, minors, coursework, and honors.
3. **Experience** — five entries spanning software engineering, machine-learning research, startup work, and autonomous vehicles.
4. **Research** — five research directions or projects.
5. **Publications** — one published paper.
6. **Projects** — four projects with descriptions and technology tags.
7. **Achievements** — academic/competition and hackathon recognition.
8. **Contact** — short availability copy, email, and LinkedIn.

All of this content appears in one continuous document. The header links directly to each section using anchors.

### 3.3 Current visual system

The career design uses:

- Inter throughout
- A white and light-gray background system
- Blue as the primary accent
- A centered 960px content container
- Rounded cards, subtle borders, soft shadows, and pill-shaped labels
- Alternating section backgrounds
- A two-column hero that stacks on smaller screens
- Card and timeline treatments for nearly every type of content

The style is professional and readable, but repeated card treatments make education, employment, research, publications, and projects feel similarly important. The visual design does not currently guide a reader toward the strongest evidence first.

### 3.4 Current interaction and responsive behavior

- The entire header is sticky.
- The Career/Photography selector is always visible.
- Career section links appear inline on desktop.
- Below 720px, the section links move into a toggleable menu.
- The mobile menu exposes `aria-expanded`, closes after selection, and supports Escape.
- Section anchors account for the sticky header through `scroll-margin-top`.
- There are no tabs, filters, accordions, page transitions, or career detail pages.

### 3.5 Current strengths

- All professional information is accessible from one URL.
- The content is semantic enough to work without JavaScript.
- Anchor navigation makes sections directly linkable.
- The page is responsive and uses a small amount of JavaScript.
- The career design is visually distinct from the Photography portfolio.
- The current structure can be incrementally improved without a rewrite.

### 3.6 Current problems to solve

#### Information hierarchy

- The hero paragraph covers many interests at once and does not lead with a concise professional proposition.
- The Snapshot card repeats introductory facts without showing the strongest evidence or current priorities.
- Education appears before professional experience, although experience is likely the stronger recruiter signal.
- Every research item and project receives similar visual weight.
- Research and Publications are separated even though the published paper belongs to the research narrative.
- Achievements repeat some information already shown under Education.
- The page lacks a clear distinction between selected work and the complete archive.

#### Navigation and page length

- Seven career section links make the secondary header dense, especially at intermediate widths.
- The navigation order and the page's section order are not fully aligned.
- Separate links for Research and Publications add complexity for a single publication.
- The long page is not inherently a problem, but repeated full-detail cards make it feel longer than necessary.

#### Content quality

- Some text contains spelling errors, including `Reseacher`, `adpative`, and `adn`.
- Two GitHub URLs still contain `your-username` placeholders.
- The visible email address and its `mailto:` destination do not match.
- Some organization links point to generic or unrelated destinations.
- Several bullets are long, dense, or inconsistent in punctuation and tense.
- There is no visible résumé action or résumé asset in the current repository.

#### Presentation and maintainability

- Projects have no supporting images, diagrams, or other visual differentiation.
- Similar card rules are repeated across content types.
- The current metadata describes the overall portfolio but could describe the career proposition more precisely.
- There is no documented method for selecting which research or projects appear on the overview page.
- There is no automated HTML, link, accessibility, or performance validation.

## 4. Proposed career information architecture

### 4.1 Recommended sitemap

```text
Career
├── index.html                  Career overview
│   ├── Hero
│   ├── Experience
│   ├── Selected Research
│   ├── Selected Projects
│   ├── Education & Recognition
│   └── Contact
├── research.html               Complete research and publications
└── projects.html               Complete project portfolio
```

The initial release does not need one page per research item or project. Individual detail pages can be added later only when there is enough material—such as diagrams, demos, source code, results, methods, or a case study—to justify them.

### 4.2 Why this is preferable to tabs

Literal tabs are not recommended because they:

- Hide information until a visitor interacts with them
- Make deep linking and browser history more complicated
- Can be awkward on narrow screens
- Require more accessibility behavior than normal links
- Do not reduce the underlying amount of content

The redesign instead uses:

- Anchor links for major sections on the overview page
- `View all research` and `View all projects` links for deeper content
- Normal URLs for content that needs to be shared or indexed independently

### 4.3 Content mapping

| Current content | New location | Treatment |
| --- | --- | --- |
| Hero introduction | Career overview | Rewrite for clarity and reduce length |
| Snapshot card | Career overview | Replace with a compact proof/credential strip or remove |
| Five experience entries | Career overview | Keep all initially, tighten formatting and bullets |
| Five research entries | Overview + `research.html` | Show 2–3 selected items on overview; preserve all on detail page |
| One publication | `research.html`, with a compact overview mention | Integrate into the relevant research story |
| Four projects | Overview + `projects.html` | Show 2–3 selected items on overview; preserve all on detail page |
| Education | Career overview | Move below selected work and simplify coursework presentation |
| Achievements | Career overview | Merge with Education or present as compact Recognition row |
| Contact | Career overview | Keep as final section with direct action |

Nothing is discarded during migration. Content that leaves the overview page moves to a dedicated page first.

## 5. Design of the new career page

### 5.1 Overall experience

The new career page should feel like a concise professional briefing rather than a full résumé rendered as cards. The hierarchy should answer these questions in order:

1. Who is Krish and what kind of work does he do?
2. Where has he applied those skills?
3. What are the strongest technical outcomes?
4. Where can a reader explore the work in more depth?
5. How can they contact him?

Recommended main-page order:

```text
Header and career navigation
Hero
Experience
Selected Research
Selected Projects
Education & Recognition
Contact
Footer
```

### 5.2 Header and career navigation

Retain the current identity and Career/Photography mode switch. Simplify only the career-specific navigation.

Recommended links:

- Experience
- Research
- Projects
- Education
- Contact

`Publications` becomes part of Research, and `Achievements` becomes part of Education & Recognition. This reduces the secondary navigation from seven links to five while preserving access to all content.

On `research.html` and `projects.html`, the shared career header remains, with a clear `Career overview` route. The active page or section should be indicated with `aria-current` where appropriate.

### 5.3 Hero

Replace the current broad introduction with a sharper three-part hierarchy:

1. **Eyebrow:** current identity, such as `Computer Science · Machine Learning · Quantitative Systems`.
2. **Headline:** a concise statement of specialization or value rather than only `Hi, I'm Krish.`
3. **Supporting copy:** two or three sentences connecting ML research, systems work, and real-world products.

Recommended actions:

- Primary: `View experience`
- Secondary: `Explore research`
- Optional: `Résumé`, only after a current résumé PDF is supplied and verified

The Snapshot card should either be removed or replaced by a smaller proof strip containing genuinely useful signals, for example:

- Carnegie Mellon Computer Science
- Machine Learning concentration
- Research, systems, and quantitative focus

Avoid duplicating details that appear immediately in Education.

### 5.4 Experience

Experience becomes the first substantive section.

Each entry should consistently show:

- Role
- Organization
- Date range
- One-line context if the organization or team is unfamiliar
- Two or three strongest outcome-focused bullets
- Relevant link when verified

The visual treatment should resemble a clean professional timeline or stacked editorial list rather than five isolated floating cards. Dates should align consistently on wide screens and stack naturally on mobile.

Entries remain reverse chronological. Current roles should be labeled consistently, and overlapping dates should not imply an error when the roles were concurrent.

### 5.5 Selected Research

The overview page should show the strongest two or three research items, selected based on:

- Publication or external validation
- Technical novelty
- Relevance to Krish's desired opportunities
- Strength of measurable results

Each selected item should include:

- Research title
- Topic labels
- A concise problem/method/result summary
- Paper or external link when available
- A `View all research` link to `research.html`

The complete research page should contain all existing research entries and publications. Publication metadata should sit with the related research rather than appearing as an isolated card with repeated text. The page may include distinct `Research` and `Publications` headings while sharing one URL and narrative.

### 5.6 Selected Projects

The overview page should show two or three projects that best demonstrate range and execution. Each project card should focus on:

- The problem
- Krish's contribution
- The outcome or validation
- A short technology list
- Verified source/demo links

The full `projects.html` page contains every project. A project should not display a GitHub action until its destination is correct. If screenshots or diagrams are later provided, they can be added to the full page without making visuals a launch blocker.

### 5.7 Education and Recognition

Combine the current Education and Achievements sections into one lower-page area.

Recommended layout:

- Left/main column: CMU degree, concentration, minors, and a concise coursework line
- Right/secondary column: selected academic, competition, and hackathon recognition

Remove duplicated honors and retain each accomplishment once. Coursework should be curated to the roles Krish wants rather than presented as an undifferentiated long list.

### 5.8 Contact

The final section should be short and direct:

- One sentence describing the kinds of conversations or opportunities Krish welcomes
- Verified email link
- LinkedIn
- Optional résumé link
- Optional GitHub only after the correct profile and repositories are confirmed

Avoid generic filler. The primary contact action should be recognizable without reading the full paragraph.

### 5.9 Visual direction

Retain the existing career identity—light background, blue accent, Inter, and structured professionalism—but refine the system:

- Use fewer elevated cards and shadows.
- Let section spacing, dividers, and typography establish hierarchy.
- Reserve strong card treatments for selected projects or key proof points.
- Increase heading contrast and reduce repeated decorative pills.
- Use one consistent metadata style for dates, organizations, topics, and status.
- Keep the content width readable, with slightly wider layouts only where dates or two-column summaries benefit.
- Preserve visible focus states and strong contrast.

The career page should not borrow the Photography portfolio's editorial color palette or image-grid behavior. The existing mode switch is the bridge between two intentionally different visual experiences.

### 5.10 Responsive behavior

**Wide desktop**

- Full five-link career navigation
- Dates aligned opposite role titles
- Two-column Education & Recognition layout
- Selected projects may use a two- or three-column grid

**Tablet**

- Career navigation remains usable without crowding the mode switch
- Selected cards use two columns only when content remains readable
- Long role headings and dates wrap without overlap

**Mobile**

- Career/Photography switch remains directly visible
- Career section links stay in the accessible menu
- All content becomes one column
- Dates move below titles
- Calls to action remain at least 44px tall
- No information depends on hover

## 6. Dedicated career pages

### 6.1 `research.html`

Recommended structure:

1. Career header and overview link
2. Research-page introduction
3. Complete research list
4. Publications integrated with related research
5. Contact callout
6. Footer

Each entry can grow beyond the overview summary with problem, approach, result, collaborators/advisor, status, and verified external links. It should remain concise until richer content is available.

### 6.2 `projects.html`

Recommended structure:

1. Career header and overview link
2. Projects-page introduction
3. Complete project grid/list
4. Verified demo, source, award, or publication links
5. Contact callout
6. Footer

Projects should be ordered by relevance and strength, not necessarily by creation date. The selected projects on `index.html` should appear first here as well.

### 6.3 Future detail pages

Do not create individual pages merely to make the site look larger. Add `/research/<slug>.html` or `/projects/<slug>.html` only when an item has enough original material for a useful case study. Until then, the two collection pages provide sufficient depth.

## 7. Step-by-step implementation plan

### Phase 0 — Content audit and decisions

1. Confirm the target audience and priority roles: research, ML engineering, quantitative work, startup engineering, or a ranked combination.
2. Select the two or three research items for the overview page.
3. Select the two or three projects for the overview page.
4. Confirm the desired ordering of all experience entries.
5. Verify employer, lab, publication, LinkedIn, email, GitHub, and project URLs.
6. Supply a current résumé PDF if a résumé action is desired.
7. Confirm which metrics and claims are public and suitable for the website.

**Exit criterion:** the overview selections, target narrative, link destinations, and résumé decision are confirmed.

### Phase 1 — Information architecture and content migration

1. Create `research.html` and `projects.html` using the existing career shell.
2. Copy all current research, publication, and project content to the appropriate complete page before shortening the overview.
3. Integrate Publications under Research without losing citation details.
4. Merge Education and Achievements into an Education & Recognition section.
5. Reorder the overview to Hero, Experience, Selected Research, Selected Projects, Education & Recognition, and Contact.
6. Preserve useful old anchor IDs or provide compatible destinations where possible.

**Exit criterion:** every current career item exists in the new structure, and no content has been accidentally dropped.

### Phase 2 — Header, hero, and overview hierarchy

1. Reduce the career navigation to five links.
2. Ensure page order and navigation order match.
3. Rewrite the hero after the target role hierarchy is confirmed.
4. Replace or remove the Snapshot card.
5. Add the primary and secondary calls to action.
6. Add `View all research` and `View all projects` links.
7. Add a résumé action only if a current file is available.

**Exit criterion:** the first screen communicates identity, focus, and the next action clearly on desktop and mobile.

### Phase 3 — Career visual-system refinement

1. Create a consistent typography scale for page titles, section titles, item titles, metadata, and body copy.
2. Reduce unnecessary card elevation, border repetition, and pill usage.
3. Implement a cleaner experience timeline/list.
4. Create consistent selected-research and selected-project patterns.
5. Build the two-column Education & Recognition treatment.
6. Define responsive layouts and intermediate-width behavior.
7. Confirm that career-specific styling does not leak into Photography pages.

**Exit criterion:** hierarchy remains clear at 375px, 768px, 1024px, and wide desktop sizes without affecting Photography.

### Phase 4 — Content polish and link repair

1. Correct spelling, grammar, tense, and punctuation inconsistencies.
2. Tighten experience bullets around action, technical method, and result.
3. Replace placeholder project URLs or remove unavailable actions.
4. Correct the email destination and verify all external links.
5. Replace generic organization URLs with the intended team, lab, or company pages when available.
6. Remove duplicated achievements and repeated research/publication descriptions.
7. Update career-specific title, description, canonical URL, and Open Graph metadata.

**Exit criterion:** there are no known placeholders, incorrect destinations, duplicate claims, or unreviewed copy errors.

### Phase 5 — Accessibility and behavior

1. Maintain logical heading order and one page-level `h1` per page.
2. Add appropriate `aria-current` states to page and section navigation.
3. Verify keyboard operation, Escape behavior, focus visibility, and focus order.
4. Respect `prefers-reduced-motion` for smooth scrolling or future transitions.
5. Ensure external-link behavior is consistent and secure.
6. Confirm touch targets meet the 44px recommendation.
7. Test the page without JavaScript to ensure content and normal links remain available.

**Exit criterion:** all career navigation and actions work with keyboard, touch, and JavaScript disabled where applicable.

### Phase 6 — Verification and release

1. Validate all career HTML pages.
2. Check the browser console for errors.
3. Test career pages in current Chrome, Safari, and Firefox.
4. Test representative mobile, tablet, laptop, and large-desktop widths.
5. Check every internal anchor and external link.
6. Run accessibility and Lighthouse checks on `index.html`, `research.html`, and `projects.html`.
7. Confirm no horizontal overflow, sticky-header obstruction, or unexpected content shift.
8. Verify GitHub Pages paths on the deployed URL.
9. Smoke-test the Career/Photography switch without modifying Photography content.

**Exit criterion:** the three career pages are deployable, link-complete, accessible, and verified without regressions to the separate Photography portfolio.

## 8. Recommended delivery sequence

The implementation should be delivered in three reviewable milestones:

1. **Structure:** new career page order plus complete Research and Projects pages, using mostly existing styles.
2. **Hierarchy:** refined hero, navigation, selected content, and career visual system.
3. **Release:** corrected copy and links, metadata, accessibility, responsive testing, and deployment verification.

This sequence separates content migration from visual redesign. It makes it easy to confirm that no professional content was lost before the overview is shortened.

## 9. Decisions required before implementation

1. Which opportunity types should the hero prioritize, and in what order?
2. Which two or three research items are the strongest overview selections?
3. Which two or three projects are the strongest overview selections?
4. Should every experience remain on the overview page, or should older/less relevant roles move to a résumé only?
5. Is there a current résumé PDF to publish?
6. What are the correct GitHub and project URLs?
7. Are all stated performance metrics and company descriptions approved for public display?
8. Should coursework remain visible, and if so, which courses are most relevant?

These decisions affect prioritization but do not change the recommended hybrid architecture.

## 10. Definition of done

The career redesign is complete when:

- The main career page provides a concise, recruiter-friendly overview.
- Experience appears before supporting education details.
- Selected Research and Selected Projects point to complete, dedicated pages.
- All existing career content has either been retained on the overview or moved to an appropriate detail page.
- Publications are integrated into the research narrative.
- Education and recognition no longer duplicate accomplishments.
- The career navigation is shorter, ordered consistently, and responsive.
- All visible actions lead to verified destinations.
- There are no placeholder links, mismatched email links, or known copy errors.
- The three career pages work with keyboard, touch, and normal browser navigation.
- Career metadata accurately describes Krish's professional portfolio.
- The separate Photography portfolio remains unchanged except for the already-shared mode link.
