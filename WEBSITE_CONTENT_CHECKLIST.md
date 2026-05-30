# Mess N Care Website Publishing Checklist

Replace or confirm these items before publishing `messncare.com`.

For easiest updates, edit `lib/site.ts` first. It controls app links, contact details, image paths, service areas, services, and service icons.

## Brand Images

- `public/images/logo.png` - final Mess N Care full logo.
- `public/images/logo-wordmark.png` - cropped website header/footer logo generated from the full logo.
- `public/images/logo-icon.png` - final icon mark for header and metadata.
- `public/images/hero-staff.png` - realistic Mess N Care staff photo in green branded T-shirt.
- `public/images/app-screen1.png` - real app screen for service selection.
- `public/images/app-screen2.1.png` - real app screen for slot/address selection.
- `public/images/app-screen3.png` - real app screen for tracking/payment/review.

## App Store Assets And Links

- `public/images/google-play-badge.svg` - official Google Play badge.
- `public/images/app-store-badge.svg` - official App Store badge when iOS is live.
- Google Play link in `lib/site.ts` - replace `#` with the live Play Store URL.
- App Store link in `lib/site.ts` - replace `#` when iOS is live.
- Remove or update the "Coming soon on iOS" label if the iOS app is published.
- QR code placeholder in the homepage app download section - replace with real app QR code or remove.

## Support And Business Contact Details

- Support email in `lib/site.ts` - currently `support@messncare.com`.
- Phone / WhatsApp number in `lib/site.ts` - currently `+91 8824106060`.
- Support hours in `lib/site.ts`.
- Service areas in `lib/site.ts`.
- Contact page business details.
- Footer contact details.

## Services

- Confirm every service in `lib/site.ts` is real and currently planned.
- Confirm every service category includes the correct service names.
- Confirm each service icon in `lib/site.ts` matches the service meaning.
- Confirm services are informational only and still direct users to the app.

## Legal And Compliance Details

- Confirm registered legal business name.
- Confirm registered office address.
- Confirm GST / tax registration details if required.
- Confirm refund timeline and cancellation charges.
- Confirm data retention language with legal counsel.
- Confirm account deletion request handling workflow and destination email/backend.
- Confirm payment provider names once live.
- Confirm professional verification and onboarding language matches actual operations.

## Launch Safety

- Confirm the website does not include service booking, login, payment, dashboard, or admin flows.
- Confirm every public legal page is reachable from the footer.
- Confirm app booking language says bookings happen only inside the mobile app.
- Confirm no fake customer numbers, fake press logos, or fake reviews are present.
- Run `npm run build` before deployment.
- Upload only the generated `out` folder contents to `/home/mittalai/messncare.com`.
- Do not use Node hosting, `server.js`, SSR, API routes, server actions, or middleware for production.
