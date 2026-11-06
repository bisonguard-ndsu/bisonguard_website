# InfiniCity Labs company website

The public company website, built with Next.js App Router, TypeScript, locally hosted Instrument Sans, and Motion. This repository is separate from the product applications.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:8080. Source checks: `npm run lint` and `npx tsc --noEmit`. Production: `npm run build`, then `npm run start` (port 3000 by default).

## Design and content

The current visual direction is documented in [the third design plan](docs/website-redesign-v3.md). Product source boundaries, asset provenance, and the earlier functional verification are in [the second design plan](docs/website-redesign-v2.md), preserved at commit `08b3eae`. The [original plan](docs/website-redesign-plan.md) describes the first version, saved at commit `34c94b3` on `codex/company-website-redesign`.

- Products: `src/content/products.ts`
- Solutions: `src/content/solutions.ts`
- Field guides: `src/content/resources.ts`
- Publications: `src/content/publications.ts`
- Shared navigation, forms, and interactive illustrations: `src/components/site/`
- Images: `public/images/`

Team data is intentionally empty. The product illustrations contain sample content and are labeled accordingly. Generated editorial scenes do not depict actual customer deployments.

## Email and analytics

Use `.env.example` as the configuration reference. Store SMTP credentials in the hosting provider's secret settings or an ignored local environment file. Contact and demo requests go to `info@infinicitylabs.org`. Demo requests include the selected product; they do not reserve a calendar time.

Analytics requires a real `NEXT_PUBLIC_GA_MEASUREMENT_ID` at build time and visitor consent. The implementation sends route page views itself; disable automatic page-view/history and form-interaction collection in the GA4 stream to avoid duplicate events and unwanted form measurement. Deployment verification details are in the design plans.

Before public launch, review the generated editorial copy, provide approved product media and any team members, confirm product access URLs, and verify production email and analytics delivery.
