# Krish Mody Portfolio

This is a static GitHub Pages portfolio with two modes:

- Career: `index.html`
- Photography: `photography.html`

Photography source originals live locally in `photos/` and are intentionally
ignored by Git. The published images live in `assets/images/photography/`.

## Add a photo series

1. Choose a lowercase, hyphen-separated slug, such as `new-york`.
2. Keep the original photos in `photos/<Series Title>/`. Use `Cover` for the
   index image and number the gallery photos in their desired order.
3. Export web images into `assets/images/photography/<slug>/`. Each cover and
   gallery image needs three WebP variants and three JPEG fallbacks:

   ```text
   cover-800.webp
   cover-1600.webp
   cover-2400.webp
   cover-800.jpg
   cover-1600.jpg
   cover-2400.jpg
   01-800.webp
   01-1600.webp
   01-2400.webp
   01-800.jpg
   01-1600.jpg
   01-2400.jpg
   ```

   Preserve aspect ratios. The `800`, `1600`, and `2400` labels represent the
   image's maximum pixel dimension; do not enlarge a smaller original.

4. Copy `photography/alaska.html` to `photography/<slug>.html`.
5. Update the copied page title, description, visible series title, photo
   count, and gallery `<figure>` entries. Each image uses a WebP `<source>`
   with a JPEG `img` fallback, `srcset`, `sizes`, and its intrinsic width and
   height.
6. Add a matching linked series tile to the `series-grid` in
   `photography.html`. Point it to `photography/<slug>.html` and use the cover
   variants from the new asset directory.
7. Record the final title, slug, source-image order, and rights information in
   `PHOTOGRAPHY_CONTENT_MANIFEST.md`.

## Change series order

The order on the photography landing page is the order of the linked
`photo-series` entries in `photography.html`. Move an entire entry (the link,
picture, and title) to its new position. There is no next/previous navigation
between series pages, so no other pages need updating.

The photograph order within a series is the order of the `<figure>` entries in
that series page. Keep the numbered asset filenames and the figure order in
sync.

## Remove a photo series

1. Remove its linked `photo-series` entry from `photography.html`.
2. Remove `photography/<slug>.html`.
3. Remove `assets/images/photography/<slug>/` if the published images are no
   longer needed.
4. Update `PHOTOGRAPHY_CONTENT_MANIFEST.md`.

Removing published assets does not remove the original files in `photos/`.

## Image rules

- Do not publish HEIC or TIFF originals directly.
- Keep `width` and `height` attributes on every published image to avoid
  layout shifts.
- Load only the first image of a page eagerly; use `loading="lazy"` for the
  remaining images.
- The current release intentionally uses empty image `alt` attributes and no
  visible captions.
