# InfiniCity Labs website redesign plan

Status: **draft for review**. Nothing is built yet.
Branch: `website-redesign`, cut from local `main` at `e5e6cfe`.
Last updated: 4 November 2026.

This plan replaces the current site rather than restyling it. Nothing from the old site carries over by default: no layout, palette, copy or imagery. A few facts do carry over (product names, partner list, team bios, the contact address), and each is listed in section 5 with its source.

---

## 1. Audience, positioning, actions, scope

### What was agreed

| Topic | Decision |
|---|---|
| What we are | A **company first**. Research is the company's foundation and its evidence, not its identity. |
| Who comes first | No single audience ranks first. The site serves transport agencies, cities, engineering firms, research partners and funders, and hires through **separate routes from one shared front door**. |
| Main action | **Email us.** One contact form sends to `info@infinicitylabs.org`. There is no booking link, trial or self-serve sign-up. |
| Geography | We work in the US, West Africa and elsewhere. The site **does not state a base location**. |
| Agriculture | Secondary. Only herd monitoring is real, so it gets one solution page and is never promoted on the home page. |
| Products | AdAMS, Traffic Management System (TMC), Turnflow, RoadLogger, AdAMS Annotate and PaveXpert (in development). TMC and Turnflow stay **separate products**. |
| Copy | Everything is rewritten. The old site's claims are removed: SOC 2, GDPR, 99.9% uptime, "30-day trial", "thousands of organizations", "100% herbicide reduction" and "70% lower labour cost". |
| Team | The team page is built, but its list is empty for launch. Development seed data lives behind one flag. |
| Partners | NDDOT, NDSU, US NSF, Sustein and Farms are cleared for use. |
| Testimonial | The Elijah Kofi Osei (The Greyspaces Ltd.) quote is approved. |
| Metrics | Placeholder numbers until your supervisor supplies real ones. Every figure is flagged in code so it can't ship unreviewed (see §5.4). |
| Old URLs | Free to change. Old paths redirect permanently (see §3.4). |
| Analytics | Yes, gated behind a cookie banner. |
| Accessibility | My recommendation is **WCAG 2.2 level AA**, explained in §6.3. |

### Positioning in one line

> **InfiniCity Labs builds computer-vision software that turns road and traffic video into the records engineers maintain: sign inventories, pavement scores, turning-movement counts and incident logs.**

This is narrower than the old "smart cities / digital twins / big data" framing, and deliberately so. Everything we can show (the AdAMS sign map, the IRI layer, Turnflow's counts, TMC's camera monitoring, RoadLogger's inspections) is a form of *video in, engineering record out*. A visitor can check that claim against the screenshots on the same page. "Digital twins" and "big data" are dropped as headline categories because we have nothing to show under them.

### What each visitor should understand in ten seconds, and do next

| Visitor | Ten-second takeaway | Next step on the site |
|---|---|---|
| Transport agency / DOT / city | "They survey my network from a phone or my existing cameras, and give me inventories and condition scores." | A product page (AdAMS, TMC), then the Fargo survey example, then **Email us** |
| Engineering consultancy | "They produce counts and studies I can put in a report." | Turnflow or the Traffic studies solution, then **Email us** |
| Research partner / funder | "The methods are published, and the team publishes." | Research, then Publications, then **Email us** (topic: research) |
| Prospective hire | "This is a real engineering team shipping real products." | Company, then Careers, then **Email us** (topic: careers) |
| Existing customer | "Where do I sign in?" | Header **Sign in** menu, then the right app |

### Launch scope

Phase 1 (the review build) is the **Home page** and the **AdAMS product page**, built with the full header, footer and contact flow. After your review, the remaining pages follow in phases 2 to 4 (§7).

---

## 2. Creative direction: "Field Record"

### The idea

Every product we make looks at a road and writes something down. The identity borrows from that record: **the camera frame, the detection box, the coordinate, the survey station**. These aren't decorative tech motifs. They are the real output of the products, drawn in the site's own visual language.

The signature device is the **frame/record pair**: a real road frame on one side, and on the other the record our software produced from it. The record is the sign class, GPS position, condition and roughness. The pair appears in the home hero, on every product page, and in the mega menu's featured card. It's what an AdAMS user actually gets, so it is honest, and no other company's homepage can show it.

**Interchangeability test.** If we swapped the logo and name, could the home page pass for any AI startup? No. Its hero is a Fargo road frame with an R7-1 sign boxed and geolocated to `46.864087, −96.865637`, and its evidence section is an IRI map of West Fargo. If a later section starts to read as generic (icon cards, "Why choose us", abstract gradients), the rule is to replace it with an artefact from one of the products.

### Colour: white, black and one colour

The supervisor's brief is white, black and one other colour. I agree, with one constraint: the colour must come from the road, not from a tech palette.

| Token | Value | Use |
|---|---|---|
| `paper` | `#FFFFFF` | Main background |
| `stone` | `#F4F3EF` | Alternate section ground (a warm off-white like survey paper, not grey-blue) |
| `ink` | `#111311` | Text, black bands, footer |
| `ink-2` | `#4A4D48` | Secondary text (8.6:1 on white) |
| `rule` | `#DCDAD3` | Hairlines, borders |
| **`guide`** | **`#00704A`** | **The one colour.** US highway guide-sign green. Links, primary button, logo bars, status "In service" (5.9:1 on white, AA for text) |
| `guide-ink` | `#00553A` | Hover and pressed state of `guide` |
| `survey` | `#FFC700` | **Only inside imagery**: detection boxes and labels drawn over road frames, on dark. Never used for text on white. |

Why guide green:
- It keeps the recognition of the current green logo bars without the dated mint-on-navy look.
- It is the colour of the signs AdAMS detects.
- It passes contrast as a text colour, which mint (`#27EA9C`) never did.

Survey yellow is not a second brand colour. It is a data colour (road-paint yellow) that only appears where software has drawn on a photo, so it always reads as "the machine marked this".

The dark navy/neon theme is gone. Black (`ink`) is used for **three full-bleed bands only**: the hero image frame, the evidence band and the footer. That keeps contrast moments rare.

### Typography: Overpass and Overpass Mono

- **Display and body: Overpass** (Google Fonts, variable 100–900). It is an open-source typeface based on **Highway Gothic**, the lettering on US road signs. It suits the subject, is slightly narrow, and was designed to be read at speed.
- **Data: Overpass Mono.** Used for coordinates, station numbers, confidence scores, status tags and the small labels on frames. It pairs with Overpass without needing a third family.

This handles both of the hard cases:
- **Short headline:** "Every sign, on the record." Set in Overpass 800 at `clamp(2.75rem, 6vw, 5.5rem)`, line-height 0.98, tracking −0.02em.
- **Long technical name:** "AdAMS: Advanced Asset Management System." The short name is set large in display weight. The expansion sits beneath it as a 1.25rem/500 line. A long name is never forced into a giant headline, and `text-wrap: balance` is applied to every h1 and h2 so lines break evenly.

| Style | Size (mobile to desktop) | Weight / line-height |
|---|---|---|
| Display (home h1) | 44 → 88px | 800 / 0.98 |
| H1 (product) | 40 → 72px | 800 / 1.0 |
| H2 | 30 → 48px | 700 / 1.08 |
| H3 | 20 → 24px | 700 / 1.25 |
| Lead | 18 → 21px | 400 / 1.5 |
| Body | 16 → 17px | 400 / 1.6, max 68ch |
| Label (mono) | 12 → 13px | 500 / 1.3, uppercase +0.06em |

Alternative if you dislike Overpass: **Inter Tight** with **IBM Plex Mono**. It is cleaner, but it loses the road-sign connection.

### Logo

- The three rising bars stay. I'll redraw them as **SVG**, which is exact because they are plain rectangles: bars in `guide` on light backgrounds and white on `ink`.
- The current wordmark is a wide geometric sans in mixed weights, with the tagline in very small letterspaced caps. It looks dated next to Overpass. Two options:
  - **A (recommended):** reset "InfiniCity Labs" in Overpass 700 beside the bars. Drop the tagline from the lockup.
  - **B:** keep the existing wordmark and only recolour it. That needs the vector source file.
- Favicon and app icon: the bars only, on `guide`.

### Imagery rules

1. **Real product output first.** Real screenshots, frames and reports. No stock skyline, no generic "hands together" team photo, no AI-generated scene presented as our work.
2. **Every road photo is a frame**, cropped like a camera, 16:9 or 3:2 and never 1:1, with the horizon in the upper third. Where software drew on it, the overlay is a hairline survey-yellow box with a mono label.
3. **Screenshots are shown at size.** They sit in a plain black or stone mat with no fake device chrome, cropped to the part being described. For example, the sign card (R7-1, Track 23) is cropped from `adams-3.png` rather than shown as the whole dashboard.
4. **Placeholder slots are obvious in development and never ship.** Until your materials arrive, I'll compose stand-ins from the real screenshots we already have. Each slot is registered in `src/content/media.ts` with `status: "placeholder"`. A pre-launch check lists them all (§6.6).

Where an image doesn't exist yet, I won't invent a photograph. I can't produce a convincing real-world photo, and a fake one would undermine the "real output" idea. Instead the composition falls back to type, the record panel, or a cropped screenshot.

### Layout

- A 12-column grid, max content width 1280px, with gutters of 16px (mobile), 24px (tablet) and 40px (desktop). Left and right edges are the same on every section.
- Section rhythm: 96–160px vertical spacing on desktop, 64–88px on mobile.
- Two section grounds only, `paper` and `stone`, plus the three `ink` bands.
- No card grids of icons. Lists of things are set as **ruled rows** (a hairline, a mono index, a title, one line, an arrow), like an index or an inventory.
- **DIPPER's influence:** generous full-width photo bands with plenty of white space around them. We use the bands for frames, not for theme banners.

### Motion: quiet and purposeful

| Motion | Spec |
|---|---|
| Hero detection draw | Boxes draw in one after another, 120ms apart, 500ms each. The record rows fill in as their box completes. Runs once and **does not loop**. |
| Mega menu | Panel opens with opacity 0→1 and translateY −4px→0 over 180ms; it closes over 120ms. |
| Hover | Rows: the arrow moves 4px and the hairline turns `guide`. Photos: scale 1.02 inside their frame over 400ms. Buttons: colour change, and a 1px press on click. |
| Scroll | No fade-ins, parallax or scroll-jacking. Content is visible on load. |
| Reduced motion | All of the above become instant state changes, and the hero renders in its finished state. |

### Sample headlines (to judge the voice)

- **Home h1:** "Every sign, crack and turning movement, on the record."
- **Home lead:** "InfiniCity Labs builds computer-vision software for road agencies and engineers. A phone on the dashboard or a camera at the intersection becomes asset inventories, pavement scores and traffic counts you can act on."
- **AdAMS h1:** "AdAMS". Expansion: "Advanced Asset Management System". Line: "Drive the network once with a phone. Get back every sign, where it stands, what condition it's in, and a roughness score for each segment you drove."
- **TMC h1:** "Traffic Management System". Line: "Your existing intersection cameras, watched continuously. Incidents and anomalies flagged as they happen, with recordings scheduled and archived."
- **Turnflow h1:** "Turnflow". Line: "Turning-movement counts from video, with every count traceable to the vehicle path that produced it."
- **RoadLogger h1:** "RoadLogger". Line: "Field inspections on a phone. Log an issue, place it on the map, open a case."
- **Research section:** "Our methods are published."
- **Contact:** "Tell us about your network." Button: **"Send message"**.

---

## 3. Sitemap and navigation

### 3.1 Sitemap

```
/                                   Home
/products                           All products (index)
  /products/adams                   AdAMS (+ AdAMS Annotate, PaveXpert sections)
  /products/traffic-management      Traffic Management System (TMC)
  /products/turnflow                Turnflow
  /products/roadlogger              RoadLogger
/solutions                          By problem (index)
  /solutions/road-asset-inventory   Signs, markings, guardrails → AdAMS
  /solutions/pavement-condition     IRI, PCI, distress → AdAMS
  /solutions/traffic-studies        Counts, TMCs, headways → Turnflow
  /solutions/traffic-operations     Live cameras, incidents → TMC
  /solutions/field-inspection       Issues, cases → RoadLogger
  /solutions/herd-monitoring        Livestock on open range
/work                               Projects
  /work/fargo-west-fargo-survey     Representative case study
/research                           Areas, methods, datasets
  /research/publications            Publication list
/company                            About
  /company/team                     Team (empty list at launch)
  /company/careers                  Careers (routes to contact form)
/contact                            Contact form
/privacy  /cookies  /terms          Legal
```

### 3.2 What each main page helps a visitor do

| Page | The visitor's job | Strongest evidence on the page |
|---|---|---|
| Home | Work out what we do, and choose a route | Frame/record hero, the product register, the Fargo map |
| Products index | Compare products by what goes in and what comes out | One row per product with its real screen and status |
| Product page | Decide whether this solves their problem | Product screens, method, project example, limits stated plainly |
| Solution page | Start from their problem rather than a product name | Problem, then method, then project (the Jacobs pattern) |
| Work / case study | See it done on a real network | Map, counts, outputs, partner |
| Research | Trust the methods | Papers, datasets, the challenge we ran |
| Company | Judge who we are | Principles, partners, team (when filled), careers |
| Contact | Reach a person | One form with a topic selector, plus the email address |

### 3.3 Header and mega menu

**Desktop header** (72px, white, hairline bottom border, sticky):

```
[≡≡≡ InfiniCity Labs]   Products ▾   Solutions ▾   Research ▾   Company ▾   Work      [Sign in ▾]  [Contact us]
```

- **Products ▾**, **Solutions ▾**, **Research ▾** and **Company ▾** open a mega panel.
- **Work** is an ordinary link.
- **Sign in ▾** is a small dropdown, not a mega panel. It lists each app with its own URL: AdAMS, Traffic Management, RoadLogger and Turnflow. The URLs come from `src/content/apps.ts`, so when the platforms split up, only the URLs change. For now AdAMS, TMC and RoadLogger point to `app.infinicitylabs.org`. Turnflow's URL is pending (see §5.3).
- **Contact us** is the primary button, in `guide`.

**Mega panel layout.** The panel spans the full viewport width and sits flush under the header. The interaction follows your screenshot, but the composition is our own:

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│ PRODUCTS                         │ 01  AdAMS               IN SERVICE  │ ┌──────────────┐ │
│                                  │     Phone video → sign inventory,    │ │ [frame with  │ │
│ Software that reads road and     │     pavement condition               │ │  R7-1 boxed] │ │
│ traffic video.                   │ 02  Traffic Management  IN SERVICE  │ └──────────────┘ │
│                                  │     Intersection cameras → incidents │ Fargo–West Fargo │
│ All products →                   │ 03  Turnflow            IN SERVICE  │ survey: 118 signs│
│                                  │     Video → turning-movement counts  │ mapped →         │
│ Sign in to an app →              │ 04  RoadLogger          IN SERVICE  │                  │
│                                  │     Phone → field inspection cases   │                  │
│                                  │ ─ also: AdAMS Annotate · PaveXpert   │                  │
│                                  │   (in development)                   │                  │
└──────────────────────────────────────────────────────────────────────────────────────┘
   intro (3 cols)                     list (5 cols)                          featured (4 cols)
```

- **Solutions:** six problems in two ruled columns (Roads and assets / Traffic / Beyond the road). The featured card is the IRI map.
- **Research:** areas (pavement, traffic safety, multimodal AI), Publications and Datasets. The featured card is the latest paper.
- **Company:** About, Team, Careers and Contact. The featured card is "We're hiring engineers" or the partner strip.

The status tags (`IN SERVICE`, `PILOT`, `IN DEVELOPMENT`) are a single field in `src/content/products.ts`. Their values must be confirmed (§5.3).

**Interaction spec.** The panel is built as an accessible disclosure (button plus region), not an ARIA `menu`, because it contains rich content.

| Input | Behaviour |
|---|---|
| Pointer enters a trigger | Opens after **80ms**, so brushing past a trigger does nothing. If another panel is already open, switching is instant. |
| Pointer travels down into the panel | It stays open. The panel is flush with the header (no gap) and covers full width, so any path down lands inside it. |
| Pointer leaves the header and panel | Closes after a **200ms** grace period, which re-entering cancels. |
| Click or tap on a trigger | Toggles that panel. This works without hover, so it suits touch laptops. |
| Enter or Space on a focused trigger | Toggles the panel. |
| ↓ on an open trigger | Moves focus to the first link in the panel. |
| ←/→ between triggers | Moves focus across the top-level items. |
| Esc | Closes the panel and returns focus to its trigger. |
| Tab past the last panel link | Closes the panel and continues to the next trigger. |
| Click outside, scroll more than 80px, or a route change | Closes the panel. |
| Focus visible | 2px `guide` outline with 3px offset on every interactive element, using `:focus-visible`. |
| ARIA | Each trigger has `aria-expanded` and `aria-controls`. The panel is a `<div role="region" aria-label="Products">` and all links are plain `<a>`. |
| Backdrop | A translucent `ink`/20 scrim dims the page below the panel. Clicking it closes the panel. |

**Mobile and touch (below 1024px).**

- **Header:** logo on the left; **Contact** and **Menu** on the right. Contact stays reachable without opening the menu.
- **Menu panel:**
  - Opens full-screen with a focus trap, body scroll lock, and Esc or ✕ to close.
  - Each section (Products, Solutions, Research, Company) is a 56px row that expands as an accordion: tap to expand, chevron rotates, `aria-expanded`. Only one section is open at a time.
  - Each product row shows its name, status tag and one-line description, so it is as informative as the desktop panel.
  - Work is a plain row.
  - Pinned to the bottom: **Sign in** (expands to the app list) and a full-width **Contact us** button.
- **Touch targets:** at least 48px, with 8px spacing.

### 3.4 Existing URLs and app links

Permanent redirects (308) in `next.config.ts`:

| Old | New |
|---|---|
| `/adams` | `/products/adams` |
| `/tmc` | `/products/traffic-management` |
| `/fms` | `/solutions/herd-monitoring` |
| `/about` | `/company` |
| `/team` | `/company/team` |
| `/#contact` | (hash; can't redirect server-side) `/contact` is linked everywhere, and the home page keeps a `#contact` anchor on its closing section |

- `/privacy` keeps its URL.
- `sitemap.ts` and `robots.ts` are regenerated from the content files.
- All app links open in a new tab, are marked with ↗, and have `rel="noopener"`.

---

## 4. Rough compositions

### 4.1 Home, desktop (1440 wide)

Reading order runs top to bottom. ★ marks where the strongest evidence appears.

```
┌─ HEADER ───────────────────────────────────────────────────────────────────────────┐
│ [bars] InfiniCity Labs   Products▾ Solutions▾ Research▾ Company▾ Work   Sign in▾ [Contact us] │
├─ 1 HERO (paper) ───────────────────────────────────────────────────────────────────┤
│ COMPUTER VISION FOR ROAD AGENCIES AND ENGINEERS          (mono label)              │
│ Every sign, crack and                                                              │
│ turning movement, on the record.                         (display, 7 cols)         │
│ Lead paragraph (2 lines, 6 cols)                                                   │
│ [Contact us]  See the products →                                                   │
│                                                                                    │
│ ★ ┌──────────────── FRAME (8 cols, ink mat) ────────────┐ ┌─ RECORD (4 cols) ────┐ │
│   │  road frame, 16:9                                    │ │ SIGN   R7-1          │ │
│   │     ┌─────┐ R7-1 · conf. (item 1)                    │ │ TRACK  23            │ │
│   │     │     │                                          │ │ LAT    46.864087     │ │
│   │     └─────┘                                          │ │ LON   −96.865637     │ │
│   │                                                      │ │ IRI    (item 1)      │ │
│   │  frame meta: recording · frame no. (from item 1)     │ │ COND   (item 1)      │ │
│   └──────────────────────────────────────────────────────┘ │ → Open in AdAMS      │ │
│                                                            └──────────────────────┘ │
├─ 2 PROOF LINE (paper, ruled) ──────────────────────────────────────────────────────┤
│ Worked with:  NDDOT · NDSU · U.S. NSF · Sustein · Farms         (logos, greyscale)  │
├─ 3 PRODUCT REGISTER (stone) ───────────────────────────────────────────────────────┤
│ H2: Four products. One kind of output: records you can maintain.                    │
│ 01 AdAMS        Phone video → sign inventory, IRI, PCI   [screen]  IN SERVICE  →   │
│ 02 Traffic Mgmt Cameras → incidents, recordings          [screen]  IN SERVICE  →   │
│ 03 Turnflow     Video → turning-movement counts, reports [screen]  IN SERVICE  →   │
│ 04 RoadLogger   Phone → inspections, issues, cases       [screen]  IN SERVICE  →   │
│ Also: AdAMS Annotate (labelling) · PaveXpert (agent, in development)                │
├─ 4 ★ EVIDENCE BAND (ink, full bleed) ──────────────────────────────────────────────┤
│ FARGO – WEST FARGO, ND                                                             │
│ H2: One drive. 118 signs mapped. 2,267 segments rated.                              │
│ [IRI map crop, 8 cols]           figures (4 cols, mono numerals)                    │
│                                  118   traffic signs geolocated                     │
│                                  2,267 road segments with IRI                       │
│                                  14    signs detected in one 1:42 recording       │
│ Read the project →                                                                  │
├─ 5 METHOD (paper) ─────────────────────────────────────────────────────────────────┤
│ H2: From a drive to a work order.                                                  │
│ SURVEY ──→ DETECT ──→ MAP ──→ REPORT     (4 columns, each a real cropped screen)   │
├─ 6 RESEARCH (stone) ───────────────────────────────────────────────────────────────┤
│ H2: Our methods are published.                                                     │
│ Ruled list of 4 papers: title · venue · year · ↗                                   │
│ (PaveSAM, PaveCap, Context-CrackNet, PaveSync…)   All publications →              │
├─ 7 ROUTES (paper) ─────────────────────────────────────────────────────────────────┤
│ For agencies & cities →   For engineering firms →   For researchers →   Careers →  │
│ (four ruled columns: one line on what they get, one link)                          │
├─ 8 TESTIMONIAL (paper) ────────────────────────────────────────────────────────────┤
│ "The quality of research…" — Elijah Kofi Osei, The Greyspaces Ltd.  (portrait 4:5)  │
├─ 9 CONTACT #contact (stone) ───────────────────────────────────────────────────────┤
│ H2: Tell us about your network.      │ [form: name · email · organisation ·        │
│ info@infinicitylabs.org              │  topic ▾ · message]  [Send message]          │
├─ FOOTER (ink) ─────────────────────────────────────────────────────────────────────┤
│ bars + wordmark │ Products │ Solutions │ Research │ Company │ Sign in ↗ │ social    │
│ © 2026 · Privacy · Cookies · Cookie settings                                       │
└────────────────────────────────────────────────────────────────────────────────────┘
```

- **Next steps for the visitor:** **Contact us** sits in the hero, the header and section 9. Every product row, the evidence band and each route column link deeper into the site.
- **Figures:** the three numbers in section 4 are read from the AdAMS screenshots, so they are real. Before launch I'll still confirm they describe one survey run, and that we may publish them (§5.4).

### 4.2 Home, mobile (390 wide)

```
┌ [bars] InfiniCity Labs      [Contact] [Menu] ┐
│ COMPUTER VISION FOR ROAD AGENCIES            │
│ Every sign, crack                            │
│ and turning                                  │
│ movement, on the                             │
│ record.                (44px, balanced)      │
│ Lead (4–5 lines)                             │
│ [ Contact us ─────────────── full width ]    │
│ See the products →                           │
│ ★ ┌ frame 16:9, full bleed ───────────────┐  │
│   │ boxes + labels                         │  │
│   └────────────────────────────────────────┘  │
│ ┌ record: 2-column mono table ──────────┐    │
│ │ SIGN R7-1        TRACK 23             │    │
│ │ LAT 46.864087    LON −96.865637       │    │
│ │ IRI · COND (from item 1 data)          │    │
│ └────────────────────────────────────────┘    │
│ Worked with: logos in a 3×2 grid             │
│ ── Product register: each row stacks ──      │
│ 01 AdAMS   IN SERVICE                        │
│ Phone video → sign inventory…                │
│ [screen crop 3:2]                         →  │
│ … (×4)                                       │
│ ★ Evidence band: map crop, then figures      │
│   stacked as 3 rows                          │
│ Method: 4 steps as a vertical ruled list     │
│ Research: 4 rows                             │
│ Routes: 4 rows                               │
│ Testimonial                                  │
│ Contact form (single column)                 │
│ Footer: accordions per column                │
└──────────────────────────────────────────────┘
```

- The hero frame comes **before** the fold-line content ends. At 390×844 the h1, lead, button and the top of the frame are all visible, so the first screen promises the evidence that follows.

### 4.3 Representative product page: AdAMS, desktop

```
┌─ HEADER ───────────────────────────────────────────────────────────────────────────┐
│ Products / AdAMS                                       (breadcrumb, mono)          │
├─ 1 PRODUCT HERO (paper) ───────────────────────────────────────────────────────────┤
│ IN SERVICE · ROAD ASSETS · PAVEMENT                                                 │
│ AdAMS                                    (h1, display)                              │
│ Advanced Asset Management System         (expansion, 21px/500)                      │
│ Drive the network once with a phone. Get back every sign, where it stands, what     │
│ condition it's in, and a roughness score for each segment you drove.                │
│ [Contact us about AdAMS]   Sign in to AdAMS ↗                                       │
│ ★ [frame → record pair, as on home but showing a sign + IRI segment]                │
├─ 2 WHAT IT RECORDS (stone) ────────────────────────────────────────────────────────┤
│ H2: What one drive records.                                                        │
│ Ruled table, one row per capability, each with a cropped real output:              │
│ Traffic signs      class · position · condition · size        [sign card crop]     │
│ Pavement roughness IRI per segment, 5 bands                   [IRI legend + map]   │
│ Pavement condition PCI, distress type and severity            [placeholder slot]   │
│ Markings           retroreflectivity                          [placeholder slot]   │
│ Guardrails         detection, condition                       [placeholder slot]   │
│ Bridges            drone inspection                           [placeholder slot]   │
├─ 3 HOW IT WORKS (paper) ───────────────────────────────────────────────────────────┤
│ SURVEY  → mount a phone, drive (AdAMS mobile app)                                   │
│ DETECT  → models find and classify assets frame by frame                            │
│ MAP     → every detection placed on the network, deduplicated by track              │
│ ACT     → work orders, reports, alerts                                              │
│ (sticky left column with step titles; right column swaps the real screen per step; │
│  on mobile, each step stacks with its screen)                                       │
├─ 4 ★ PROJECT (ink band) ───────────────────────────────────────────────────────────┤
│ Fargo – West Fargo survey: map crop + 3 figures + "Read the project →"              │
├─ 5 THE PLATFORM AROUND IT (paper) ─────────────────────────────────────────────────┤
│ AdAMS Annotate: how our training data is labelled (signs, distress, assets)        │
│ PaveXpert: an agent that answers questions about your network. IN DEVELOPMENT      │
├─ 6 RESEARCH BEHIND IT (stone) ─────────────────────────────────────────────────────┤
│ 3 papers directly behind AdAMS (pavement distress, roughness from smartphones,     │
│ PaveSAM)                                                                           │
├─ 7 CONTACT (paper) ────────────────────────────────────────────────────────────────┤
│ H2: Survey your network with AdAMS.  [form, topic pre-set to "AdAMS"]               │
│ Related: Pavement condition → · Road asset inventory → · RoadLogger →              │
└────────────────────────────────────────────────────────────────────────────────────┘
```

**Mobile:**
- The hero stacks as label, h1, expansion, line, a full-width **Contact us about AdAMS** button, the sign-in link, then the frame and record.
- "What it records" becomes one card-free ruled block per capability, with the crop above its text.
- "How it works" loses the sticky column. Each step becomes a title, a screen and two lines.

**Honesty rule on product pages.** Any capability marked as a placeholder slot shows a small `IN DEVELOPMENT` or `PILOT` tag if that is its status. You said all capabilities work, so they'll show as in service. Each one still needs a real output image before launch (§5.2).

---

## 5. Content and assets

### 5.1 What we have and will use

| Asset | Where it's used | Note |
|---|---|---|
| `adams-2/3/4.png`: AdAMS asset map, sign card, IRI tooltip | Home hero record, evidence band, AdAMS page | Real. Crop and recompose; never show the whole dashboard. Remove the "John Grant" user chip from crops. |
| `traffic-sign-geolocation_2.png`: recording + sign detection summary | AdAMS "What it records" and Method step 2 | Real. The STOP frame inside it is the hero frame stand-in until the full-resolution frame arrives. |
| `herd.JPG`, `herd2.JPEG` | Herd monitoring solution page | Appear to be our field photos (glowing ear tags). Please confirm. |
| `feature-graphic.png` (AdAMS Play Store listing) | No. Not used as an image | Its "Survey · Map · Analyze · Report" wording informs the method section. |
| Team bios in `constants.ts` | Dev seed for `/company/team` | List empty at launch |
| Partner names | Proof line | Logo files need replacing with clean vectors (§5.2) |
| Elijah Kofi Osei quote and photo | Home section 8 | Approved |
| Aboah publications | Research and Publications | Built from aboah1994.github.io and arXiv; you confirm the list |
| Bars logo | Redrawn as SVG | |

**Not carried over:**
- `tmc.png`: carries a third-party "Asset Vision" watermark.
- `adams.png`: the City of Pasadena control room.
- `retroref.png`: a RoadVista product photo.
- `pci.png`: a generic slide.
- AI-generated or stock images: `adams-1.png`, `weeding-robot.webp`, `team.jpg`, `tmc2.jpg`, `road.jpg`, `smartcity.jpg`, `robotics.webp`, `fms.webp`.
- The `background.mp4` demo video, which is mislabelled.

### 5.2 Materials still needed from you

**Needed for the Home and AdAMS build (Phase 1).** Each item has a placeholder until it arrives.

| # | Item | Used in | Spec |
|---|---|---|---|
| 1 | **One original road-survey frame + the AdAMS detections for that same frame** (boxes, class and confidence, as JSON or a screenshot), and that frame's GPS and IRI if available | Home hero, AdAMS hero | Frame ≥ 1920×1080, unannotated, JPG/PNG. I'll draw the overlay in code so it stays crisp and animates. |
| 2 | 4 clean AdAMS screenshots: sign list, IRI map, a report or export, a work order | AdAMS "What it records" and "How it works" | ≥ 2560px wide, demo account, no client names, light theme if available |
| 3 | One output image each for PCI/distress, marking retroreflectivity, guardrails, bridge (drone) | AdAMS capability rows | Our own output only, ≥ 1600px wide |
| 4 | Confirmation that the Fargo–West Fargo data may be named publicly, plus who it was for (NDDOT? NDSU?) and the date | Evidence band, `/work/fargo-west-fargo-survey` | Plain text |
| 5 | A 10–20 s silent field clip from the phone mount | Optional hero loop on AdAMS | MP4 H.264, 1080p, < 8 MB |

**Needed for later phases:**

| # | Item | Used in | Spec |
|---|---|---|---|
| 6 | TMC: 3 screenshots (camera wall/map, anomaly alert, recording schedule) | TMC page | ≥ 2560px, blur plates and faces |
| 7 | Turnflow: one annotated frame with zones and paths, a counts table, and a report page | Turnflow page | ≥ 2560px; a report page as PDF is fine |
| 8 | RoadLogger: 3 phone screenshots (map, issue form, case) | RoadLogger page | Native resolution PNG |
| 9 | AdAMS Annotate: one labelling screenshot | AdAMS page §5 | ≥ 1920px |
| 10 | Field photos of the team at work (phone mount, survey vehicle, site visit) | Company, Careers, Work | Landscape ≥ 2400px, written consent from anyone identifiable |
| 11 | Partner logos as SVG (or ≥ 600px PNG on transparent), and each one's role: client, funder or research collaborator | Proof line, Company | Role decides the label: "Worked with" vs "Funded by" |
| 12 | Herd monitoring: a detection frame from the herd system, if one exists | Herd page | ≥ 1920px |
| 13 | Real metrics from your supervisor (§5.4) | Everywhere figures appear | Number, unit, what it counts, as-of date |
| 14 | Publication list confirmation, plus any papers by other team members | Publications | BibTeX or links |
| 15 | Logo vector source (only if you choose option B) | Logo | SVG/AI/PDF |

### 5.3 Decisions and claims awaiting confirmation

1. **Colour:** guide green `#00704A` as the single colour, with survey yellow only inside imagery.
2. **Type:** Overpass and Overpass Mono.
3. **Wordmark:** option A (reset in Overpass, drop the tagline) or option B (keep the current one).
4. **Product statuses:** I've assumed AdAMS, TMC, Turnflow and RoadLogger are `IN SERVICE`, AdAMS Annotate is internal tooling, and PaveXpert is `IN DEVELOPMENT`. Correct any that are wrong.
5. **Turnflow sign-in URL:** where does its portal live? It is a separate deployment.
6. **Partner roles** (client, funder or collaborator), which decide the wording.
7. **Fargo survey** named as a public project, with coordinates shown.
8. **Herd monitoring** wording: one deployed system. Where and for whom?
9. **Research framing:** the papers are by team members, and many carry NDSU affiliation. I propose the label "Research by our team" rather than "InfiniCity research".
10. **Analytics:** GA4 with Consent Mode v2, loaded only after the visitor accepts analytics cookies. The measurement ID comes from an environment variable. The alternative is Plausible, which is cookieless and needs no banner for analytics; tell me if you'd prefer that.

**Record panel rule:** every field in a frame/record pair must come from the *same* detection. Until item 1 arrives, the hero shows only the R7-1 fields we have from one source (`adams-3.png`: class, track, lat/long). IRI and condition fill in from the real frame's data.

### 5.4 Placeholder figures policy

You said to use generated numbers for now. To stop invented figures going live by accident:

- Every figure lives in `src/content/metrics.ts` with `{ value, label, source, verified: boolean }`.
- Unverified figures render normally in development, with a dashed underline visible only when `NEXT_PUBLIC_SHOW_DRAFT_MARKERS=1`.
- `npm run prelaunch` **fails** while any `verified: false` metric, `placeholder` media slot or team seed data remains.
- The three Fargo figures (118 signs, 2,267 segments, 14 signs in Recording 74) are taken from the screenshots, so I've marked them as sourced. They stay unverified until you confirm they can be published.

---

## 6. Implementation and verification

### 6.1 Stack

- Next.js 16 App Router, React 19 and Tailwind CSS 4, as today. **Server components by default.** Client components only for the header and menu, the hero overlay animation, the contact form and the cookie banner.
- Fonts via `next/font/google` (Overpass and Overpass Mono, variable, `display: swap`, latin subset).
- **Content as typed TypeScript** in `src/content/`: `products.ts`, `solutions.ts`, `apps.ts`, `partners.ts`, `publications.ts`, `team.ts`, `metrics.ts` and `media.ts`. Pages render from these, so adding a team member or product is a data change.
- **Components** in `src/components/`: `site-header/` (mega menu, mobile menu, apps menu), `frame-record/`, `ruled-list/`, `product-register/`, `evidence-band/`, `contact-form/`, `footer/`, `cookie-consent/`.
- **Removed:** the old hero carousel, embla carousels, the shadcn components we don't use, the old CTA band, `video-viewer`, and the stock and third-party images listed in §5.1.
- **Contact:** a route handler at `/api/contact`:
  - zod validation shared with the client
  - a honeypot field and a 3-per-minute rate limit per IP
  - nodemailer sends to `info@infinicitylabs.org`, with `replyTo` set to the sender
  - a plain-text plus simple HTML email that includes the topic
  - `CONTACT_TRANSPORT=console` in development logs the email instead of sending it
- **Cookies:** one banner with necessary, analytics and marketing categories. "Reject all" is as prominent as "Accept all". Choices are stored for 12 months, and a **Cookie settings** link in the footer reopens the banner. GA4 loads only after analytics consent.
- **SEO:** per-page metadata, an Organization JSON-LD, Product JSON-LD on product pages, a generated sitemap and robots file, and OG images generated with `next/og` in the house style.

### 6.2 Build sequence (Phase 1)

1. Tokens, fonts, global styles, SVG logo.
2. Content files with the Phase 1 data.
3. Header with the mega menu (desktop), mobile menu and apps menu. Footer.
4. The `FrameRecord` component (overlay drawn from detection JSON).
5. Home sections 1–9.
6. AdAMS page sections 1–7.
7. Contact form and API. Cookie consent and the analytics loader.
8. Redirects, sitemap, metadata.
9. Verification pass (§6.3–6.6), screenshots, report back.

### 6.3 Accessibility: WCAG 2.2 AA

WCAG 2.2 AA is the standard most public agencies are required to meet, and US agencies increasingly ask vendors to meet it, so it suits our buyers. In practice:

- Text contrast is at least 4.5:1, and 3:1 for large text and UI.
- Everything works by keyboard, with a visible focus that is never hidden behind the sticky header.
- Touch targets are at least 24px (we use 44–48px).
- Nothing relies on hover or colour alone.
- Motion is reduced on request.
- Every image has meaningful alt text, and every form error is announced.

**How I'll check it:**
- An axe-core scan on every Phase 1 page at desktop and mobile widths.
- Keyboard-only walkthroughs of the menu and the form.
- Contrast checked from computed styles.
- The page tested at 200% zoom and at 320px width with no horizontal scroll.

### 6.4 Responsiveness

- The browser pane at **1440, 1280, 1024, 820, 768 and 390** wide.
- Checks at each width: equal content edges, no horizontal scroll, the first screen reading as one composition, headings balanced, and long product names wrapping cleanly.
- Screenshots at 1440 and 390 for every Phase 1 page.

### 6.5 Navigation, forms and links

- **Mega menu, with a mouse:**
  - Hover-open delay works, and diagonal travel into the panel keeps it open.
  - It closes after the grace period.
  - Switching between triggers is instant.
- **Mega menu, with the keyboard:** Tab, Enter/Space, ↓, ←/→ and Esc, with focus returning to the trigger.
- **Touch:** at 390 and 820 widths with touch emulation, tap opens, tap again closes, the accordion works, scroll is locked and the focus trap holds.
- **Contact form:**
  - Each field's validation errors appear and are announced.
  - The honeypot rejects submissions.
  - The rate limit returns 429.
  - With the console transport, the success path logs the correct email to `info@`.
  - With SMTP unavailable, the error path shows a clear message and the email address.
- **Links:** a script crawls every internal link (it must return 200, or 308 to a 200). Every app link and external paper link must resolve, and must have `target="_blank"` and `rel="noopener"`.

### 6.6 Performance and pre-launch

- `next build` clean, `tsc --noEmit` clean, ESLint clean.
- **Images:** `next/image` with AVIF/WebP, explicit sizes, priority on the hero frame only. The hero image is under 200 KB at 1440.
- **Targets** (Lighthouse mobile, home and AdAMS): LCP < 2.5s, CLS < 0.05, TBT < 200ms, Performance ≥ 90.
- **`npm run prelaunch`** fails on any of:
  - an unverified metric
  - a placeholder media slot
  - team seed data present
  - missing alt text
  - a missing environment variable (SMTP, GA4)

---

## 7. Phases

| Phase | Scope | Exit criteria |
|---|---|---|
| **0 · Foundation** | Tokens, type, SVG logo, content model, header and mega menu, footer, contact API, cookies, redirects | Menu passes the §6.5 checks; contact works with the console transport |
| **1 · Review build** | Home and AdAMS | **Stop for your and your supervisor's review**, with screenshots and the list of remaining placeholders |
| **2 · Products** | Products index, TMC, Turnflow, RoadLogger, `/contact` page | Each product page uses real screenshots or registered placeholders |
| **3 · Proof** | Solutions index and six solution pages, Work index, Fargo case study, Research and Publications | Every solution links to a product and a project |
| **4 · Company and launch** | Company, Team (empty list), Careers, Privacy/Cookies/Terms, 404, OG images, analytics | `npm run prelaunch` passes, which requires real metrics and assets |

Phases 0 and 1 go together in one stretch of work, so the first thing you see is the finished Home and AdAMS pages.

---

## 8. Skills used

| Skill | Used for |
|---|---|
| `superpowers:brainstorming` | The process: inspect, interview, written plan, approval |
| `ui-ux-pro-max` | Design-system query (accessibility-first pattern, trust-and-authority structure), mega-menu UX rules, pre-delivery checklist |
| `taste-skill:design-taste-frontend` | Real material over mood imagery; no invented reviews or figures; no captions apologising for images; hover feedback on every link |

To be used during the build:
- `interaction-design:navigation-patterns`, `inclusive-interaction:keyboard-navigation` and `inclusive-interaction:touch-target-design` for the menu.
- `interaction-design:form-design` and `interaction-design:error-flow` for contact.
- `ui-design:type-system` for the scale.
- `design-systems:accessibility-audit` and `visual-critique:critique-screen` for the Phase 1 review.
- `superpowers:verification-before-completion` before reporting.
