# InfiniCity Labs website redesign

This document records the first implementation, preserved in commit `34c94b3`. The current direction and product corrections are in [website-redesign-v2.md](website-redesign-v2.md). In particular, the previous PaveXpert development label and descriptive TMC/herd-monitoring names below are superseded.

## Agreed brief

Created on 2026-11-05. Branch `codex/company-website-redesign` starts at local `main` commit `e5e6cfe`. The user explicitly authorized planning and implementation in this turn. Work is local to the company website repository.

InfiniCity Labs is a company building applied AI, infrastructure, and mobility technology. Present its breadth through concrete products and engineering work. Support agencies, cities, consultants, research collaborators, prospective colleagues, and other partners through clear entry points. The main conversion is an inquiry to info@infinicitylabs.org. Omit geographic headquarters claims.

The user grants creative freedom over all copy and presentation. The latest theme preference takes precedence over the earlier black/white/green idea. The dark application theme supplies the color family. Keep the three ascending bars of the brand mark.

## Recommended visual direction

Use charcoal surfaces, warm off-white typography, and a restrained desaturated teal accent drawn from the application palette. Instrument Sans supplies the primary typography. Instrument Serif supplies occasional large editorial emphasis. Photography and demonstrations carry visual interest. Use thin dividers, large compositions, generous spacing, and minimal corner rounding.

Desktop homepage composition

1. An approximately 88px header with brand, Products, Expertise, Research, Company, platform access, and a contact action.
2. A wide cinematic aerial infrastructure image with a large left-aligned headline, concrete company introduction, and product discovery link. Label conceptual imagery as illustrative.
3. A short company statement followed by an editorial product feature. AdAMS gets a large product story, followed by Turnflow and RoadLogger. Remaining products are discoverable from the index.
4. An expertise section linking infrastructure intelligence, mobility analytics, and applied AI engineering to tangible work.
5. Selected research with verified publication metadata and direct source links.
6. A conversational contact section and a complete structured footer.

Mobile composition follows the same reading order. Headlines scale with viewport width. Images retain meaningful crops. Product stories stack into full-width rows. The menu becomes an accessible tap-operated panel. Interactive targets are at least 44px where practicable, body text starts at 16px, and normal text aims for 4.5:1 contrast. Honor reduced-motion preferences.

## Information architecture

| Destination                    | Purpose                                                                             |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `/`                            | Explain the company, reveal the product portfolio, offer research and contact paths |
| `/products`                    | Product directory, including clear development labels                               |
| `/products/adams`              | Advanced Asset Management System and its confirmed capabilities                     |
| `/products/pavexpert`          | Agentic platform for AdAMS, explicitly in development                               |
| `/products/traffic-management` | Traffic management system, distinct from Turnflow                                   |
| `/products/turnflow`           | Traffic video counting, review, and reporting                                       |
| `/products/roadlogger`         | Road survey collection and field logging                                            |
| `/products/annotate`           | Annotation tools for visual datasets                                                |
| `/products/herd-monitoring`    | A secondary selected system for herd detection and monitoring                       |
| `/services`                    | Infrastructure, mobility, and applied AI engineering capabilities                   |
| `/research`                    | Selected verified publications co-authored by Armstrong Aboah and collaborators     |
| `/company`                     | Company approach and the work it takes on                                           |
| `/team`                        | Designed team destination backed by an initially empty member collection            |
| `/contact`                     | One inquiry form delivered to info@infinicitylabs.org                               |
| `/platforms`                   | Product access directory with confirmed destinations and inquiry paths              |
| `/privacy`                     | Plain-language description of actual contact and analytics behavior                 |

Redirect `/adams`, `/tmc`, `/fms`, and `/about` to their corresponding new destinations. Retain homepage contact/project anchors where useful for old incoming links.

## Navigation

Products, Expertise, and Company use a full-width panel immediately beneath the header. Each panel has a short contextual introduction, grouped links, and a useful featured destination. Desktop hover has a small close delay with a continuous pointer path. Buttons also open through click and keyboard. Escape closes and returns focus to the trigger. Clicking outside, leaving with keyboard focus, and navigating close the panel. Mobile navigation exposes the same destinations through accordions. Ordinary links remain ordinary links.

## Representative product page

Breadcrumb, category, product name, precise summary, and inquiry action precede a large relevant image. Follow with a problem and workflow narrative, supported capability descriptions, related products, and a contextual contact action. PaveXpert receives a visible in-development label. Existing application access is exposed through the platform directory so the company header accommodates multiple products.

## Content and evidence decisions

- Spell AdAMS as Advanced Asset Management System.
- Keep traffic management and Turnflow separate.
- Agriculture is represented by herd monitoring only.
- Team member data starts empty. No invented people.
- Remove the former testimonials and certification claims from active pages. Avoid fabricated social proof and business metrics. Illustrative interface data, if used, is visibly labeled.
- Partner images are cleared by the user, but relationship types are unconfirmed. Defer an endorsement strip until those relationships can be described accurately.
- Publication links must resolve to primary sources. Attribute papers to their authors and avoid implying every paper originated at the company.
- Existing approved assets can be reused as content. Their former layouts and presentation do not determine the new design.
- Original generated infrastructure imagery can illustrate the subject. Record its source and prompt in this document.

## Implementation and verification

Retain Next.js App Router, TypeScript, and existing dependency foundations. Establish shared design tokens and reusable site components. Keep product and publication content in typed data modules. Use server-rendered pages with client components only for interaction.

Build the shared shell, homepage, product template, and remaining pages. Implement contact validation on client and server, truthful delivery states, and an accessible consent interface with accept, reject, preferences, and a persistent reopen control. Analytics will load only after consent and only when a real measurement identifier is configured. Document that dependency before launch.

Verify type checking and production build, core routes and legacy redirects, desktop/mobile rendering, menu keyboard behavior, overflow, contact validation and failure states, and consent behavior. Avoid sending live test emails without the user's instruction. Review actual screenshots and fix observed layout issues.

## Materials needed before launch

Confirmed product screenshots and demonstration footage, any product-specific portal URLs, approved project outcomes, partner relationship labels, final team members, a verified analytics measurement identifier, and confirmation of email delivery configuration. These materials can replace the prepared content through the typed data modules and local assets.

## Skills applied

Sites local development workflow and presentation-led guidance, ImageGen, and the installed designer-skills guidance for dark mode, typography scale, information architecture, and navigation patterns. Bibliographic verification uses the research-integrity skill.

## Asset and verification log

Implementation is complete for the page structure above. The original promotional sections, testimonials, certification claims, and former navigation are removed from active routes. Product and publication content is maintained in `src/content/products.ts` and `src/content/publications.ts`. Team data is intentionally empty.

### Image provenance and generation briefs

| Repository asset                           | Source                                                    | Use                                                                           |
| ------------------------------------------ | --------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `public/images/infrastructure-aerial.webp` | Original ImageGen output                                  | Homepage hero, company imagery, selected navigation and product illustrations |
| `public/images/intersection.webp`          | Original ImageGen output                                  | Turnflow and traffic illustrations                                            |
| `public/images/adams-inspection.webp`      | Existing approved `public/traffic-sign-geolocation_2.png` | Actual AdAMS inspection interface                                             |
| `public/images/road-survey.webp`           | Existing approved `public/adams-1.png`                    | Field collection illustration                                                 |
| `public/images/herd-monitoring.webp`       | Existing approved `public/herd.JPG`                       | Herd monitoring system                                                        |

Generation brief for the infrastructure image: photorealistic editorial aerial photography of a highway interchange and cable-stayed bridge beside a city, late-afternoon light, charcoal shadows, muted teal colors, roads strongest in the middle and right, darker wooded space on the left for headline copy, panoramic composition. No labels, UI, bounding boxes, holograms, or neon. An illustrative scene, with no claim that it depicts an InfiniCity deployment.

Generation brief for the traffic image: realistic top-down aerial of a signalized four-way urban intersection, crosswalks, sparse cars and a bus, coherent road markings, architectural editorial photography with late-afternoon light, charcoal asphalt and restrained colors. No UI overlays, bounding boxes, text, or neon. An illustrative traffic scene.

Generated originals are retained in the session image output directory; the website uses compressed WebP copies. The five website images total approximately 875 KiB. Fonts are served locally with their SIL Open Font License files in `src/app/fonts`. Original imagery can replace these assets without changing the page architecture.

### Verification performed

- TypeScript check, ESLint, and optimized Next.js production build passed.
- 37 production HTTP/integration checks passed: 16 public pages, four permanent redirects, two 404 cases, nine asset/metadata endpoints, and six contact cases.
- Contact cases cover malformed JSON, invalid fields, oversized input, the honeypot, accepted SMTP delivery, and SMTP rejection.
- All mail tests used a receiver bound to `127.0.0.1`. The accepted message had the required recipient and visitor reply-to address. No test email was delivered externally.
- Browser submission confirmed the success panel. Simulated delivery failure preserved the typed message and enabled retry.
- Reviewed desktop, tablet, and mobile layouts, including 320px and 390px widths. Checked horizontal overflow, local font rendering, product image alignment, and image loading while scrolling.
- Verified desktop mega-menu click/keyboard interaction, Escape and focus restoration, mobile menu navigation, and the skip link.
- Checked the main text palette mathematically: body text exceeds 15:1, muted body copy exceeds 8:1, and the secondary text combinations checked exceed 4.5:1. Darkened the contact-band label after finding its initial contrast was too low. Body descriptions use 16px text; navigation and secondary information use smaller sizes.
- Research topic filtering changed the visible publication count from six to two for Mobility.
- Cookie preferences reopen from the footer; rejecting analytics persists and is reflected when reopening. No Google analytics script loads without a configured measurement ID.
- Live GA4 reporting and real SMTP delivery remain deployment configuration checks. This is a manual accessibility review, not an independent WCAG certification.

### Local development and launch configuration

Run `npm install` and `npm run dev` in this repository. The existing development command serves port 8080. Build with `npm run build` and serve production with `npm run start`. Run `npm run lint` and `npx tsc --noEmit` for source checks.

Use `.env.example` as the configuration reference. Supply SMTP host, port, username, password, and a sender address allowed by the email provider. The destination remains `info@infinicitylabs.org`; it is not taken from browser input. Keep credentials in the hosting provider's secret settings or an ignored local environment file. Confirm delivery from the deployed host before opening the form to public traffic.

For analytics, supply `NEXT_PUBLIC_GA_MEASUREMENT_ID` before building. Create the matching GA4 web stream and disable automatic page-view/history tracking and automatic form-interaction measurement in Enhanced Measurement: this implementation sends consent-gated route page views itself and does not submit form values to analytics. Confirm one page-view event per navigation in the configured property and verify rejection/withdrawal in a fresh browser session before launch. Query strings and fragments are excluded from the page location sent by this implementation; advertising features are disabled.

The current application link is `https://app.infinicitylabs.org`. Add product-specific destinations to the platform directory when those deployments are confirmed. Add team members to the typed collection when approved. Partner relationship wording, outcomes, and real project media can be added once supplied; no invented testimonials or business metrics are included.

Reference sites were treated as inspiration for editorial presentation, hierarchy, and navigation, not copied page designs: [DIPPER Lab](https://dipperlab.knust.edu.gh), [Irisity](https://irisity.com), [StreetLight](https://streetlightdata.com), and [Jacobs StreetLight](https://www.jacobs.com/solutions/streetlight). The supplied screenshot informed the full-width navigation panel.
