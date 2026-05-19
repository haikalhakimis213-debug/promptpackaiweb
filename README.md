# AI Prompt Pack Store

Clean responsive landing page for a digital prompt pack catalog. Built with Next.js App Router, TypeScript, Tailwind CSS, lucide-react icons, and a small Three.js hero scene.

Includes product detail pages at `/products/[slug]`, an agent/referral guide at `/agent`, WhatsApp order links, and manual payment notes for bank transfer and TNG eWallet.

## Vercel

Vercel should auto-detect this as a Next.js project.

- Install command: `npm install`
- Build command: `npm run build`
- Output: handled by Next.js

## Update WhatsApp Number

Open `app/storeLinks.ts` and replace:

```ts
phone: "60XXXXXXXXX",
```

with your real WhatsApp number in international format.

Also replace the Google Form placeholder:

```ts
export const AGENT_FORM_URL =
  "https://docs.google.com/forms/d/e/REPLACE_WITH_YOUR_AGENT_FORM_ID/viewform";
```

with your real agent application form link.
