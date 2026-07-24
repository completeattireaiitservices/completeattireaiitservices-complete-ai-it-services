# Complete AI IT Services (marketing site)

This folder is the **Complete AI IT Services** Next.js site (`complete-ai-it-services`). It is **not** the Wishbee.ai product codebase.

## Do not mix with Wishbee.ai

- **Repository:** Use a **dedicated Git repository** for this project. Do not merge this tree into the Wishbee monorepo unless you intentionally want one repo for both.
- **Hosting (e.g. Vercel):** Create or use a **separate Vercel project** (or other host) linked **only** to this repo. Importing the wrong repo or setting **Root Directory** to a Wishbee path will deploy the wrong app and can overwrite or replace the Wishbee production deployment for that project.
- **Root directory:** For this app, the Vercel **Root Directory** must be the directory that contains **this** `package.json` (usually the repo root for this site).

## Scripts

- `npm run dev` — local development  
- `npm run dev:clean` — clear `.next` / cache then dev (useful on Windows + OneDrive)  
- `npm run build` — production build  
- `npm run start` — run production build locally (port 3000)

## Environment

Create **`.env.local`** in the **project root** (next to `package.json`) for local values. It is gitignored.

- `NEXT_PUBLIC_SITE_URL` — optional; public site URL (no trailing slash), for canonical URLs on blog pages. Production example: `https://completeaiitservices.ai`
- `NEXT_PUBLIC_CALENDLY_URL` — optional; defaults to the [Complete AI IT Services Calendly](https://calendly.com/completeaiitservices) inline embed. Set in Vercel if you use a different event or subdomain.
- `RESEND_API_KEY` — **required in production** for the contact form; create at [resend.com](https://resend.com)
- `CONTACT_TO_EMAIL` — optional; defaults to `kavitha@completeaiitservices.ai`
- `CONTACT_FROM_EMAIL` — optional; defaults to Resend’s test sender `Complete AI IT Services <onboarding@resend.dev>`. **Required for visitor confirmation emails:** verify `completeaiitservices.ai` in Resend, then set e.g. `Complete AI IT Services <info@completeaiitservices.ai>` (test sender cannot reliably email third-party Gmail addresses)
- `CONTACT_WEBHOOK_URL` — optional; also POSTs contact JSON to a webhook (n8n/Zapier)
- `SUBSCRIBE_WEBHOOK_URL` — optional; production newsletter POST target

On **Vercel**, set the same variables under **Project → Settings → Environment Variables** (Production + Preview). Redeploy after adding `RESEND_API_KEY`.

## Repository and production domain

- **GitHub:** [completeattireaiitservices/complete-ai-it-services](https://github.com/completeattireaiitservices/complete-ai-it-services)
- **Vercel (this site only):** [complete-ai-it-services — project dashboard](https://vercel.com/wishbeeai-7015s-projects/complete-ai-it-services)
- **Public site:** [completeaiitservices.ai](https://completeaiitservices.ai/) (DNS should point at this Vercel project—not the GoDaddy “Launching Soon” placeholder once you go live)

Deploy by connecting that GitHub repo to hosting (see Vercel or your host’s docs), then set the domain in the host and update **GoDaddy DNS** to the records the host shows—do not reuse Wishbee’s Vercel project or domain.
