# Photography launch content manifest

Status: Phase 0 complete — ready for the shared shell and photography MVP

This document records the launch content before building the photography pages.
The `photos/` directory contains the supplied source photography. Do not use
those HEIC/TIFF camera-original files directly in the live site; export
optimized web assets during Phase 3.

## Launch decisions

| Decision | Selection |
| --- | --- |
| Launch series (target: 6–12) | 10: Alaska, Canada, Cities, Iceland, Night, SF, Seattle, Sunsets, Waterfalls, Yellowstone |
| Series display order | Alphabetical: Alaska, Canada, Cities, Iceland, Night, SF, Seattle, Sunsets, Waterfalls, Yellowstone |
| Photography palette | Deep aubergine/warm charcoal background, warm off-white text, muted apricot accent |
| Photography navigation | Work only, with the Career/Photography switch |
| About page in version one | No |
| Lightbox in version one | No |
| Photography contact or social link | None in version one |
| Copyright line | `© Krish Mody. All rights reserved. Images may not be licensed or reproduced without written permission.` |

## Shared series defaults

- Folder names are the series titles; URL slugs are their lowercase forms.
- A `Cover` file is the series preview on the photography index. It will not be
  duplicated in the detail gallery unless requested.
- Numbered files define each gallery's order. The two unnumbered Iceland files
  follow item 14, in the order listed below.
- No visible image captions or individual credits will be shown in version one.
  No image descriptions will be drafted for this release.
- The copyright statement above applies to every image and series.

## Launch series inventory

### 1. Alaska

| Field | Value |
| --- | --- |
| Slug | `alaska` |
| Source folder | `photos/Alaska/` |
| Cover | `Cover.HEIC` |
| Ordered gallery files | `1.heic`, `2.HEIC`, `3.HEIC`, `4.HEIC`, `5.HEIC`, `6.HEIC`, `7.HEIC`, `8.HEIC` |
| Captions / image descriptions | None in version one |

### 2. Canada

| Field | Value |
| --- | --- |
| Slug | `canada` |
| Source folder | `photos/Canada/` |
| Cover | `Cover.HEIC` |
| Ordered gallery files | `2.HEIC`, `3.jpg`, `4.HEIC`, `5.HEIC`, `6.HEIC`, `7.HEIC` |
| Captions / image descriptions | None in version one |

### 3. Cities

| Field | Value |
| --- | --- |
| Slug | `cities` |
| Source folder | `photos/Cities/` |
| Cover | `Cover.jpg` |
| Ordered gallery files | `1.tiff` |
| Captions / image descriptions | None in version one |

### 4. Iceland

| Field | Value |
| --- | --- |
| Slug | `iceland` |
| Source folder | `photos/Iceland/` |
| Cover | `Cover.tiff` |
| Ordered gallery files | `1.heic`, `2.HEIC`, `3.tiff`, `4.HEIC`, `5.HEIC`, `6.HEIC`, `7.HEIC`, `8.HEIC`, `9.HEIC`, `10.heic`, `11.HEIC`, `12.JPEG`, `13.HEIC`, `14.HEIC`, `Reynisfjara (3).tiff`, `Thingvillr (1).HEIC` |
| Captions / image descriptions | None in version one |

### 5. Night

| Field | Value |
| --- | --- |
| Slug | `night` |
| Source folder | `photos/Night/` |
| Cover | `Cover.HEIC` |
| Ordered gallery files | `1.HEIC` |
| Captions / image descriptions | None in version one |

### 6. SF

| Field | Value |
| --- | --- |
| Slug | `sf` |
| Source folder | `photos/SF/` |
| Cover | `Cover.HEIC` |
| Ordered gallery files | `1.HEIC`, `2.heic`, `3.HEIC`, `4.HEIC` |
| Captions / image descriptions | None in version one |

### 7. Seattle

| Field | Value |
| --- | --- |
| Slug | `seattle` |
| Source folder | `photos/Seattle/` |
| Cover | `Cover.tiff` |
| Ordered gallery files | `2.tiff`, `3.HEIC`, `4.HEIC` |
| Captions / image descriptions | None in version one |

### 8. Sunsets

| Field | Value |
| --- | --- |
| Slug | `sunsets` |
| Source folder | `photos/Sunsets/` |
| Cover | `Cover.JPG` |
| Ordered gallery files | `1.JPG`, `2.JPG`, `3.HEIC`, `4.jpg`, `5.HEIC` |
| Captions / image descriptions | None in version one |

### 9. Waterfalls

| Field | Value |
| --- | --- |
| Slug | `waterfalls` |
| Source folder | `photos/Waterfalls/` |
| Cover | `Cover.HEIC` |
| Ordered gallery files | `1.HEIC`, `2.HEIC`, `3.HEIC` |
| Captions / image descriptions | None in version one |

### 10. Yellowstone

| Field | Value |
| --- | --- |
| Slug | `yellowstone` |
| Source folder | `photos/Yellowstone/` |
| Cover | `Cover.HEIC` |
| Ordered gallery files | `2.HEIC`, `3.HEIC`, `4.HEIC`, `5.HEIC`, `6.HEIC`, `7.HEIC` |
| Captions / image descriptions | None in version one |

## Asset handoff checklist

- [x] One approved cover selected per launch series.
- [x] Each series has an ordered source-image list.
- [x] No image descriptions are included in version one, by design decision.
- [x] No captions, collaborators, publication/client names, or dates will be displayed in version one unless supplied later.
- [x] Rights and usage restrictions are confirmed for every photograph.
- [x] Source filenames are associated with their series.
- [x] Camera originals are explicitly excluded from the publishable asset set; Phase 3 will create a separate optimized web-asset directory.

## Proposed repository placement after export

```text
assets/images/photography/
  <series-slug>/
    cover-1600.webp
    01-800.webp
    01-1600.webp
    01-2400.webp
    ...
```

Phase 3 will determine exact exported dimensions and formats from the approved
images, preserve aspect ratios, add intrinsic dimensions, and wire responsive
sources into the pages.
