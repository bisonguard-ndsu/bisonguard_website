# Corporate presentation with research character

## Direction confirmed by the user

The user selected the corporate direction (bold imagery and structured layouts) together with the general feel of DIPPER Lab. This supersedes the provisional product-led V3 direction. V3 is preserved at `1cf31f0`; V2 at `08b3eae`; V1 at `34c94b3`.

The site introduces a company with products, engineering services, and a research practice. The homepage must not read primarily as a landing page for a single software application.

## Visual interpretation

Use the corporate scale and hierarchy of the reference sites, and DIPPER's image-led introduction, tangible subject matter, and visible research activity. Retain the charcoal and muted teal identity; use warm light surfaces for readability. Do not copy DIPPER's branding, red palette, institutional claims, people, or photographs.

- A wide photographic hero establishes the company's domain. An inset light panel gives the introduction, Explore our products, and Book a demo a clear place. The header blends into the image at the top and becomes solid on scroll.
- A substantive welcome section describes the company and links to its engineering practice. Products are part of the company story, not the sole visual subject.
- Large linked area features cover infrastructure, mobility, and applied AI with relevant imagery and concrete descriptions.
- Selected work shows the actual AdAMS interface and the confirmed BisonGuard application. Do not invent client deployments, outcomes, testimonials, or partners.
- A complete product index preserves all seven separate products. Research and practical resources have a more prominent editorial treatment.
- Keep varied proportions, disciplined spacing, straightforward sans-serif headings, image transitions, and restrained scroll reveals. Preserve reduced-motion support and keyboard navigation.

## Asset boundaries

Prefer real photography with a documented commercial reuse license for general infrastructure context. Stock scenes illustrate a domain; they are not presented as a company project or office. The existing AdAMS interface and herd image can illustrate the relevant products. Record source, creator, license, and local filename for every new external asset. Do not reuse the research-only Turnflow camera dataset or unapproved third-party brand images.

## Scope

Recompose the homepage and company presentation. Retain the substantive product and solution pages, seven product distinctions, contact/demo handling, empty team data, and established navigation behavior. PaveXpert is a normal product; TMC is separate from AdAMS and Turnflow; BisonGuard is herd monitoring.

## Validation

Review actual desktop and mobile layouts, image crops, readable contrast, header states, section navigation, and primary CTAs. Run the production build and relevant source checks. Verify changed links. Do not repeat unchanged mail integration tests or send real email. Leave the result on the existing local redesign branch for review.

## Implementation and verification

- Rebuilt the homepage with a photographic corporate hero and inset introduction, a company welcome, three areas of work, an AdAMS project feature, the full seven-product index, research publications, practical guides, and collaboration links.
- Moved Company to the start of the primary navigation and made Research & insights explicit. Preserved the full-width mega menus, mobile navigation, and transparent-to-solid header behavior.
- Added three licensed photographs and replaced generated infrastructure imagery across the relevant product, solution, service, and guide pages. Sources and usage boundaries are in [media-sources.md](media-sources.md). Existing interactive workflow examples remain labeled as illustrative.
- Updated the company introduction and its image, and aligned the social preview with the corporate proposition.
- The final production build, TypeScript check, ESLint, and whitespace checks passed. Read-only production checks passed for 28 pages, 35 internal destinations, and all three new photographic assets. Results are saved as `website-verification-v4.json` in the session artifact directory.
- Reviewed the homepage at 320, 390, 768, 1024, 1280, and 1440 pixels. Checked narrow layouts for the company, services, solution, product, and guide templates; no horizontal overflow was found. Verified the revised research menu on mobile and desktop, Escape/focus return, the solid header after scrolling, and the hero demo link.
- Retained reduced-motion handling for image entrance, parallax, and scroll reveals. Media-preference emulation remains unavailable in the browser runner; this is not a full accessibility audit.

No external mail was sent and no deployment was performed. Approved company photography and final product demonstration footage can replace contextual or illustrative media later without changing the page structure.
