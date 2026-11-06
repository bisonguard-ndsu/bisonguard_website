# Visual reset after the second review

## Reason for the reset

The user rejected the second direction as looking AI-generated. The functional checks and page count did not establish design quality. Version two is preserved in local commit `08b3eae`; the initial direction remains at `34c94b3`.

The assessment is a design judgment: repeated oversized slogans, italic heading fragments, uniform section spacing, a generated cityscape, and decorative interface examples made the site feel like a generic technology template. The retained product distinctions, content structure, inquiry flow, navigation behavior, and accessibility work remain useful.

## Composition critique

| Dimension  | Assessment  | Observation and correction                                                                                                                                                    |
| ---------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Balance    | Major issue | The hero gives most of its visual weight to a generic landscape. Give that weight to the company proposition and an actual product interface.                                 |
| Whitespace | Major issue | Large equal gaps isolate every section regardless of its purpose. Use tighter related groups and larger breaks only when the subject changes.                                 |
| Rhythm     | Major issue | Two-line headings, italic endings, and numbered dividers repeat throughout. Use distinct compositions for the introduction, product directory, company context, and research. |
| Grouping   | Minor issue | Similar presentation makes product families, company statements, and research hard to distinguish. Give each a specific role and a recognizable layout.                       |

No `mood.md`, `voice.md`, or `tokens.md` brand specification exists in the repository. Do not claim compliance with an unprovided identity guide. This document establishes a proposed direction for review.

## Proposed direction

Product-led company presentation, keeping charcoal and muted teal with a more substantial use of white surfaces. Use straightforward sans-serif typography with normal word spacing and stronger weights. Remove decorative italics, vague chapter slogans, and ornamental coordinate labels. Use direct copy that identifies products, users, capabilities, and outputs.

The homepage should establish what the company builds, show a real AdAMS interface, expose all seven products, explain the infrastructure/mobility/applied-AI areas, and connect visitors to the company, services, research, and demo request. Product media should carry the visual interest. Avoid invented customer proof, business results, or endorsements.

Preserve the transparent-to-solid mega navigation, inline InfiniCity Labs brand, Explore and Book a demo actions, and the seven distinct product identities. BisonGuard is herd monitoring; PaveXpert is presented as a normal product; TMC, AdAMS, and Turnflow remain separate.

Motion should support interaction: short entrances, deliberate image changes, navigation transitions, and existing pause/reduced-motion controls. It cannot substitute for a coherent layout.

## Reference review

Revisited [DIPPER Lab](https://dipperlab.knust.edu.gh/), [Irisity](https://irisity.com/), and [Jacobs StreetLight](https://www.jacobs.com/solutions/streetlight). Their content offers concrete examples of research activity, named products, and domain-specific services. These are references, not templates to copy. Do not borrow their metrics, client claims, or proprietary images.

## Scope and validation

Rebuild the homepage composition and shared visual language; replace generic headings across the main destinations; retain the working routes, contact handling, product data, and consent behavior. Review actual desktop and mobile output before describing the result as complete. Check changed navigation and interactive behavior, type/lint/build, and internal links. Reuse established backend verification unless its behavior changes.

## Implemented direction

- Replaced the generated aerial hero with a direct company proposition and the existing AdAMS inspection interface. Added an accessible image enlargement dialog with Escape dismissal and focus return.
- Rebuilt the homepage around the seven-product portfolio, engineering services, existing herd photography, and specific research and guides. Charcoal and muted teal remain, with light surfaces separating the product and editorial sections.
- Removed the serif heading treatment and its font download. Rewrote the primary page headings and product headlines around the actual subject of each page.
- Changed the full product catalog to filterable comparison rows showing purpose and outputs. Replaced the illustrative AdAMS map with the real inspection interface.
- Simplified the footer and contact band; removed the oversized decorative wordmark. Preserved the mega menu, scroll treatment, inline logo, product-specific demo links, and reduced-motion handling.

## Validation on November 6, 2026

- Optimized production build, TypeScript, ESLint, and whitespace checks passed. The final build includes the narrow-screen correction and eager loading for the AdAMS interface.
- Read-only production checks passed for all 28 public pages and 35 distinct internal destinations. All seven product links are present on the homepage; it no longer loads the generated aerial. Evidence: `website-verification-v3.json` in the session artifact directory.
- Reviewed desktop, tablet, and mobile layouts at 1440, 768, 390, and 320 pixels. Narrow-screen geometry checks covered 23 pages, including every product, the primary destinations, a solution, an article, the catalog, and the demo form. Corrected an overflow caused by the long Implementation heading; no overflow remained in those checks.
- Verified the image dialog, Escape and focus return, desktop mega menu dismissal, mobile product navigation, catalog filtering, and TMC demo preselection. No external email was sent. Contact processing and consent logic were unchanged; their earlier integration evidence remains in the V2 plan.
- Reduced motion was reviewed in source. The browser runner does not expose media-preference emulation, so this is not a claim of a complete accessibility audit.

## Remaining content work

The homepage now uses existing product and herd imagery. Some inner-page scenes and workflow demonstrations remain illustrative. Approved screenshots and footage for the other products, company photography, and final copy review will improve specificity further. Team data remains intentionally empty. These are content limitations, not evidence that the visual direction has been approved by the user.
