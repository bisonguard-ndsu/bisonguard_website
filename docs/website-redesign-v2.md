# Website redesign: second direction

## Checkpoint and brief

The first implementation is preserved in commit `34c94b3` on `codex/company-website-redesign`. The user requested this rollback point before the second pass. This revision keeps charcoal, warm white, and muted teal while replacing the shallow homepage narrative and extending the visitor experience.

Confirmed corrections: PaveXpert is presented as a product with no development label. TMC is a separate named product from AdAMS and Turnflow. BisonGuard is the herd detection and monitoring system (confirmed by the user in this turn). The logo reads InfiniCity Labs on one line. Homepage actions are Explore our products and Book a demo. The homepage header is transparent over the hero and becomes solid when scrolling.

## Design and content direction

Create an editorial technology-company site with distinct chapter compositions: cinematic introduction; interactive product workbench; a portfolio strip; image-led solution stories; an engineering workflow; technology detail; research and practical guides; and a substantive conversion section. Each section explains a different part of the company. Avoid repeated pitch cards and unsubstantiated customer proof.

The interactive workbench lets visitors switch among AdAMS, PaveXpert, TMC, Turnflow, and BisonGuard. Purpose-built interface illustrations communicate their workflows. Mark synthetic examples as illustrative. Use existing approved photographs and original generated imagery. Avoid source footage from restricted research datasets.

Product pages include a substantial overview, interactive workflow illustration, capabilities, a sequence from inputs to outputs, relevant use cases, FAQs, related products, and a product-specific demo action. RoadLogger emphasizes capture, offline work, follow-up inspection, and repair coordination. AdAMS Annotate explains prelabels, human review, roles, and dataset export.

## New destinations

- `/solutions` and four detail pages: infrastructure management, traffic engineering, field operations, and visual AI.
- `/technology`: computer vision, spatial context, agentic workflows, and human review.
- `/resources` and three practical guides grounded in the repositories.
- `/book-a-demo`: product-specific inquiry through the existing email endpoint. A request does not claim to be a confirmed calendar booking.
- `/careers`: an open invitation to contact the company, without invented vacancies.
- `/products/tmc` and `/products/bisonguard` replace former descriptive slugs with redirects for old links.

Retain the research library, company, team, product directory, platform directory, contact, and privacy destinations. Keep member data empty as previously requested.

## Motion vocabulary

- Header: 250ms background transition and a subtle scroll progress line.
- Hero: short coordinated text entrance and restrained image parallax.
- Sections: scroll-triggered opacity/translation reveals, 450-600ms, small stagger.
- Product selector: 250-350ms crossfade, active indicator, keyboard-operable tabs.
- Demonstrations: animated data paths, active review steps, and user-triggered scenario changes. No fake live data feed.
- Links/cards: restrained image movement, directional arrows, underline transitions.
- Route entry: brief opacity and upward transition without delaying navigation.
- Respect reduced motion globally, disable parallax for that preference, and provide a pause control for looping demonstrations. Keep normal native scrolling.

## Source review

Reviewed the attached AdAMS app, company webapp, API, model API, Turnflow, RoadLogger, and annotation repositories. Their source supports deeper descriptions than the first version. Repository evidence distinguishes TMC camera/recording/vehicle observations from Turnflow movement studies. PaveXpert interface concepts include specialist agents and human review; use illustrative workflows without performance promises. AdAMS capabilities supplied by the user are retained. BisonGuard scope comes from the user's confirmation.

RoadLogger includes geolocated cases, asset inventories, offline queues, inspection histories, status progression, and sharing. AdAMS Annotate is built on CVAT Community and includes model-assisted labels, review, roles, and standard exports.

Asset exclusions: the Turnflow camera-9 clip and frames originate from the AIC21 dataset; commercial redistribution permission is not established. `tmc.png` has third-party Asset Vision branding. Some old map screenshots contain an unconfirmed person's name. Use original interface illustrations instead.

## Verification

Check production compilation and type safety, all new routes and redirects, product distinctions, form routing, keyboard navigation, reduced-motion behavior, pause controls, transparent-to-solid header behavior, tab transitions, and responsive layouts. Review actual browser output at mobile and desktop widths. Preserve the current contact validation and consent behavior.

## Final implementation log

Completed on 2026-11-05. The site now has 28 public pages: 14 primary destinations, seven product pages, four solution pages, and three field guides. The first version remains in commit `34c94b3`; this second direction is left in the working tree for review.

The homepage uses a full-height image introduction, an editorial company statement, five selectable product previews, supporting field and annotation products, four solution stories, a capture-to-action narrative, field photography, and a resource section. Shared components provide the fixed transparent-to-solid header, full-width navigation panels, scroll progress, route entrances, scroll reveals, and product-specific demo links.

Product illustrations are interactive examples, not screenshots of live deployments. Visitors can inspect mapped locations, choose PaveXpert questions, switch traffic overlays, show or hide herd detections, step through RoadLogger inspections, and toggle annotation review layers. Looping illustration motion has a pause control. Reduced-motion styles turn off the loops, reveals, smooth scrolling, and hero parallax; the motion control is replaced with a preference indicator.

## Repository evidence and boundaries

All paths below are relative to the named sibling checkout.

| Product        | Source examples                                                                                                                                                                                        | Copy boundary                                                                                                                                                                                                          |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AdAMS          | `infinicity-adams-app/src/features/recording/helpers/useSegmentRecording.ts`; `infinicity_labs_api/src/adams_analysis/analysisService.ts`; `infinicitylabs_model_api/src/api/routes/adams_analysis.py` | Survey capture, analysis, evidence, and asset workflows; additional assessment capabilities were supplied by the user.                                                                                                 |
| TMC            | Camera, recording, and analysis interfaces in `infinicitylabs_webapp`; `infinicitylabs_model_api/src/jobs/traffic_analysis_job.py`                                                                     | Cameras, recordings, and vehicle observations. No invented crash, violation, anomaly, or speed-detection claims.                                                                                                       |
| Turnflow       | `turnflow/README.md`, `turnflow/docs/DOMAIN.md`, `turnflow/docs/REPORTING.md`                                                                                                                          | Movement definitions, counts, review, and exports. No invented accuracy or AADT claims.                                                                                                                                |
| PaveXpert      | `infinicitylabs_webapp/src/lib/paveagent/mock.ts` and related interface components                                                                                                                     | The repository interface uses mock data. The user explicitly directed normal product presentation with no development label. Illustrations remain labeled sample content; no autonomous performance promises are made. |
| RoadLogger     | `infinicitylabs_roadlogger_app/src/app/cases/new.tsx`, `src/constants/assetConstants.ts`, `src/services/offlineSyncService.ts`                                                                         | Geolocated cases, assets, repeat inspections, offline queues, repair status, and sharing.                                                                                                                              |
| AdAMS Annotate | `adams-annotate/ENGINEERING_HANDOFF.md`, `adams/README.md`, portal and model configuration                                                                                                             | Model-assisted labels, manual review, team workflows, and standard exports. No public portal URL is invented.                                                                                                          |
| BisonGuard     | User confirmation in this conversation                                                                                                                                                                 | Herd detection and monitoring. No unsupported individual identification, health alert, collar, or geofencing claims.                                                                                                   |

The `infinicitylabs_public_adams` workspace path was unavailable during review. Product destinations in the platform directory remain access links only where confirmed; other entries provide a product or inquiry path.

## New assets

| Asset                                 | Provenance                                                                                                     | Size          |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------- |
| `public/images/bisonguard-herd.webp`  | Optimized copy of the user's approved `public/herd2.JPEG`; used for BisonGuard and the applied visual AI story | 170,466 bytes |
| `public/images/field-inspection.webp` | Original ImageGen editorial scene, converted to WebP                                                           | 240,222 bytes |

The original generated field image is retained at `C:/Users/SOLOMON/.codex/generated_images/01a1a937-c247-7d93-b25d-5fdf53e32071/exec-9fea20a1-40d3-4b5c-8243-f8d4f785d2bb.png`.

Exact generation prompt:

> Create a premium editorial photograph for an infrastructure technology company's website, landscape 3:2 composition. An anonymous civil engineer in a charcoal jacket and understated high visibility safety vest stands safely on the broad shoulder of an empty rural road, holding a rugged tablet while inspecting the asphalt and roadside guardrail. Frame from behind and over the shoulder, no identifiable face. The road sweeps away through rolling countryside, overcast soft late afternoon light, rich charcoal asphalt, muted desaturated teal greens, warm ivory highlights. Realistic documentary photography, tactile material detail, refined architectural magazine art direction, natural believable engineering context. Spacious composition with the engineer on the right third and the road and landscape filling the left. No text, logos, watermarks, fake data overlays, glowing effects, holograms, or UI. This is an illustrative scene, not a depiction of a real company team or customer project.

The previous aerial, intersection, and inspection images retain their provenance in the first design plan. The Turnflow camera-9 footage and extracted frames were excluded after reviewing their AIC21 source license. The former third-party-branded traffic image and RoadVista photograph are not used in the new presentation.

## Verification results

- ESLint and the final optimized production build passed, including TypeScript checking and route generation. A separate TypeScript check also passed during implementation.
- All 59 production integration checks passed after the final visual changes: 28 public pages, six permanent redirects, four 404 cases, 11 metadata/assets, sitemap completeness, demo preselection, PaveXpert status wording, and seven contact/demo cases.
- Email checks used a loopback-only SMTP sink. Recipient, reply-to, selected product, validation, honeypot behavior, and delivery rejection were verified. No external email was sent.
- Browser submission verified empty-field errors, first-error focus, BisonGuard preselection, and the demo success state.
- Reviewed layouts at 320, 390, 768, 1280, and 1440 pixels. Narrow-screen checks covered the homepage, catalog, product, solution, technology, guide, and demo form. No horizontal page overflow was found in those checks.
- Verified transparent-to-solid header behavior, desktop menu opening, Escape and focus restoration, mobile product navigation, keyboard product tabs, PaveXpert scenario changes, pause control, BisonGuard layer toggle, RoadLogger inspection steps, product FAQ expansion, catalog filtering, and article link copying.
- Inspected the rendered hero, company introduction, product explorer, solution stories, product illustration, article, and mobile form. Corrected the hero's internal clipping/scroll behavior, improved portrait image resolution selection, and aligned herd overlays with their source image.
- Reduced-motion handling was reviewed in CSS and component code. The browser runner did not expose media-preference emulation, so an OS-level reduced-motion visual pass remains a release check. This is a manual review, not an accessibility certification.

Integration evidence is saved outside the repository in the session artifact folder as `website-verification-v2.json`, alongside `verify-website-v2.mjs` and the review screenshots.

## Material still needed for launch

Review the drafted editorial copy and field guides; supply approved real product screenshots or demonstration footage where desired; add team members when ready; confirm any additional public product URLs; and verify SMTP delivery and consent-gated analytics in the deployed environment. The existing `.env.example` and original plan describe the configuration. These items do not block reviewing the local design. No fabricated business results, customer endorsements, certifications, or team members were added.
