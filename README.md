# CV Site

A Jekyll rebuild of a LaTeX academic CV template (`curve` class), themed as a
**wireline well-log** — each Employment/Education entry gets a depth tick and
a lithology-coloured core band, since the content is genuinely chronological.

## Edit your content

Everything lives in one file: **`_data/cv.yml`**. No HTML editing needed to
update your name, contact info, employment, education, skills, or referees.

Publications live in the same file under `publications:`. Each entry:
- Leave `link: ""` until you have a real, public URL (DOI / journal page).
  The page will show an "In Revision" pill instead of a dead link.
- Once published, set `link:` to the DOI/journal URL and `status: "Published"`.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Visit `http://localhost:4000`.

## Replace placeholders before publishing

- `assets/files/cv.pdf` — currently a placeholder; swap in your real compiled CV.
- `assets/img/photo.jpg` — optional; add a photo here and wire it into
  `_includes/header.html` if you want one (the LaTeX template's `\photo` was
  optional too — `fullonly`).
- `_config.yml` — set `url` to your actual GitHub Pages / custom domain.
- `_data/cv.yml` — fill in every `[bracketed placeholder]`.

## Deploy to GitHub Pages

1. Push this repo to GitHub (e.g. `Rutatina95/cv-site`).
2. Repo Settings → Pages → Build and deployment → Source: **Deploy from a
   branch**, branch `main`, folder `/ (root)`.
3. Set `url` in `_config.yml` to `https://<username>.github.io` and `baseurl`
   to `/<repo-name>` if it's not a `<username>.github.io` repo.

## Structure

```
_config.yml         site settings
_data/cv.yml         <- all editable content
_includes/           header, icon library (inline SVG, no external font), log-section renderer
_layouts/default.html
_sass/               design tokens, layout, well-log component styles
assets/css/main.scss main stylesheet entry point
assets/js/reveal.js  subtle scroll-reveal (respects prefers-reduced-motion)
assets/files/cv.pdf  downloadable CV (placeholder — replace me)
index.html           Employment / Education / Skills / Additional / Referees
publications/index.html
```
