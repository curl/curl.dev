# curl.dev

The curl.dev website

## Idea

This website is **not** meant to be a [curl.se](https://github.com/curl/curl-www) alternative nor to "compete" with its attention.

curl.dev is meant to have content to refer users to the correct targets for various curl development topics: development *with* [curl/libcurl](https://curl.se/libcurl/) and development *of* [curl/libcurl](https://curl.se/libcurl/).

[curl.se](https://github.com/curl/curl-www) remains the main curl website. [everything.curl.dev](https://github.com/curl/everything-curl) is the curl book and a good reference to link to.

---

## curl.dev website

### Quick start

Prerequisites: Node.js (LTS) and NPM.

Install dependencies:

```bash
npm ci
```

Run the development server (Vite):

```bash
npm run dev
```

Open http://localhost:5173 (Vite will print the exact URL).

Build for production:

```bash
npm run build
```

This produces the production output in the `public/` directory.

Preview the production build locally:

```bash
npm run preview
```

### Project layout

- `index.html` - Vite entry at repository root (loads `/src/main.js`).
- `src/` - source JavaScript, CSS and assets (imports from node modules are bundled by Vite).
- `src/assets/` - images and other static assets that are bundled by Vite.
- `public/` - Vite build output (contains `.gitignore` to keep generated files out of git).

Fonts are self-hosted via `@fontsource` packages. The site bundles highlight.js for code highlighting.

## Related GitHub projects

- curl organization: https://github.com/curl
- curl source (main repo): https://github.com/curl/curl
- curl.se website: https://github.com/curl/curl-www
