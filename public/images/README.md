# Image Assets

No client photography has been supplied yet, so every image slot in the
site currently renders an elegant placeholder block (see
`src/components/ui/ImagePlaceholder.tsx`) instead of a stock photo.

## Folder structure

- `brand/` — logo files, OG image, favicon source
- `hero/` — homepage hero background photo/video
- `food/` — food and preparation photography
- `events/` — event photography (weddings, corporate, etc.)
- `gallery/` — gallery page photography
- `owner/` — proprietor portrait
- `stations/` — live counter / stall photography
- `icons/` — any custom icon assets

## How to add a real image

1. Drop the optimized image file into the relevant folder above (WebP or
   AVIF preferred; JPEG is fine too).
2. Reference it via its public path, e.g. `/images/food/paneer-tikka.webp`.
3. Wire it up:
   - Menu item photos: set `image` on the relevant entry in
     `src/data/menu/*.ts`.
   - Gallery photos: set `src` on the relevant entry in `src/data/gallery.ts`.
   - Event photos: set `images` on the relevant entry in `src/data/events.ts`.
   - Hero/owner/other one-off images: pass `src` to the relevant
     `ImagePlaceholder` usage, or swap in `next/image` directly.

Once `src` is present, `ImagePlaceholder` automatically renders the real
photo (via `next/image`, with lazy loading and responsive sizing) instead of
the placeholder block.
