# Nahawandi — website

Static site built with [Astro](https://astro.build), rebuilt from the Framer design (home + biography letter).

## Work on it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes the finished site to ./dist
```

## Where things live

| What | File |
|---|---|
| Tracks, categories, SoundCloud/Spotify links, timestamps | `src/data/tracks.ts` |
| Homepage sections | `src/pages/index.astro` |
| Biography letter | `src/pages/biography.astro` |
| Contact block + social links | `src/components/Contact.astro` |
| Colours, fonts, sizes, animations | `src/styles/global.css` |
| Photos | `public/images/` |

To add a track: add a line to `setList` (set tracks) or a new object to `tracks` (releases) in `src/data/tracks.ts`. Tabs, counts and numbering update automatically.

## Deploy

`npm run build`, then upload the contents of `dist/` to the server's web root (e.g. `/var/www/nahawandi`). Any static web server works — nginx, Apache, Caddy, or shared hosting via FTP/SFTP. No Node.js needed on the server.
