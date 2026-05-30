# Mess N Care Website Update Guide

Most website information is now controlled from one file:

`lib/site.ts`

Use this file for everyday website updates before going live.

## Update App Links

In `lib/site.ts`, edit:

- `googlePlayUrl`
- `appStoreUrl`

Keep `appStoreUrl: "#"` until the iOS app is live.

## Update Contact Details

In `lib/site.ts`, edit:

- `supportEmail`
- `phone`
- `whatsapp`
- `supportHours`
- `serviceAreas`

These values automatically flow into the footer, contact page, FAQ/support copy, and metadata where used.

## Update Images

In `lib/site.ts`, edit `siteImages`.

Current expected image files:

- Logo: `/images/logo.png`
- Website wordmark: `/images/logo-wordmark.png`
- Icon logo: `/images/logo-icon.png`
- Staff photo: `/images/hero-staff.png`
- App screen 1: `/images/app-screen1.png`
- App screen 2: `/images/app-screen2.1.png`
- App screen 3: `/images/app-screen3.png`
- Google Play badge: `/images/google-play-badge.svg`
- App Store badge: `/images/app-store-badge.svg`

If you rename an image in `public/images`, update the matching value in `siteImages`.

## Update Services And Icons

In `lib/site.ts`, edit the `services` list.

Each service has:

- `name` - text shown on the website
- `icon` - the Lucide icon used for that service

Example:

```ts
{ name: "Bathroom Cleaning", icon: Bath }
```

The homepage services grid and service page both use this service list.

## Update Service Categories

In `lib/site.ts`, edit `serviceCategories`.

Use the same service names as the `services` list so the correct icon appears on category cards.

## Update Legal Text

Legal page content is inside:

- `app/privacy-policy/page.tsx`
- `app/delete-account/page.tsx`
- `app/contact/page.tsx`

Before publishing, confirm legal wording with the actual business policy.

## Before Going Live

Run:

```bash
npm run build
```

Then confirm:

- App download links are correct.
- Support email and phone are correct.
- Legal business details are correct.
- Every image shown on the site is final.
- No booking, login, payment, dashboard, or admin flow exists on the website.

## Static cPanel Deployment

This project is a static export website. Do not use Setup Node.js App,
`server.js`, SSR, API routes, server actions, or middleware for production.

After `npm run build`, upload the contents of the `out` folder to:

`/home/mittalai/messncare.com`

The live folder should contain `index.html`, `.htaccess`, `_next`, `images`,
`robots.txt`, `sitemap.xml`, and the exported static page files.
