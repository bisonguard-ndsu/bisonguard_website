# Visual correction after the corporate version

## Feedback and decision

The forest-green palette was an unsupported design decision. The user had already rejected black/white/green. The ivory inset hero and predominantly light page also moved away from the first version's dark visual foundation without improving the composition.

Preserve the rejected corporate version at `c51d96b`; the initial design is available at `34c94b3`. This revision restores the initial composition selectively, without restoring obsolete product descriptions or removing the expanded website.

## Scope

- Charcoal and slate surfaces, cool white text, restrained blue-grey accents. Remove green from the brand UI, including shared product and company pages.
- Restore an uninterrupted, full-width image hero with open typography. Remove the ivory box and the three green topic blocks. Use the first version's infrastructure scene as a temporary illustration; do not imply it is a company deployment or photograph.
- Retain the inline InfiniCity Labs wordmark, transparent-to-solid header, mega menus, and Explore our products / Book a demo actions.
- Bring the company introduction and areas of work back onto dark surfaces. Use a light editorial research section for contrast, with neutral text and rules.
- Keep real product evidence, the seven distinct product pages, the publication library, services, solution pages, resources, and contact/demo flows.
- Retain restrained entrance, scroll, image, and navigation motion with reduced-motion support. Do not add decorative movement to compensate for composition.

## Composition checks

- Balance: the previous inset box divided the image into unrelated objects. Restore one image plane and one clear text focal point.
- Whitespace: use the original hero's open space; keep text away from the header and bottom navigation.
- Rhythm: dark introduction, photographic areas of work, product evidence, then lighter research. Avoid a sequence of identical card grids.
- Grouping: keep the two hero actions together, and put the product index directly beneath the featured product.

## Verification

Inspect the rendered desktop and mobile pages before concluding. Check representative product, company, research, and demo pages for leftover green, contrast, wrapping, and navigation. Run the production build and appropriate source checks. This is a correction of the rejected visual direction, not a claim that the user has approved the design.

### Completed checks

- Production build passed, including TypeScript and all 35 generated framework routes. The sandboxed compilation stalled; the same build completed with normal local process access.
- ESLint, the standalone TypeScript check, and Git whitespace checks passed.
- Homepage inspected at 320, 390, 768, 1024, and 1440 pixels. Corrected heading wrapping at 320 pixels so the actions do not collide with the bottom discovery link.
- PaveXpert, company, research, and demo pages checked at 320 pixels: no horizontal overflow or broken loaded images.
- Checked transparent and scrolled header states, desktop product mega menu, mobile product navigation, and the PaveXpert destination.
- Shared colors now use the charcoal/slate tokens; the favicon and social image use the same blue-grey accent. No changes to form delivery or analytics behavior.
- Saved desktop, mobile, and areas-of-work screenshots for review. The homepage hero remains an explicitly identified illustration.
