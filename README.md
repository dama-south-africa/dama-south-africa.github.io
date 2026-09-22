# DAMA South Africa — website

A modern rebuild of the DAMA South Africa site, built with [Astro](https://astro.build).
Static, fast, no WordPress. Brand blue `#243090`, classic-professional type,
restrained corporate look.

Pages: Home, About, Become a Member, Community & SIGs, Contact.

---

## What you need to do (start to finish)

### 1. Install the tools (once)
- [Node.js](https://nodejs.org) (LTS), [VS Code](https://code.visualstudio.com), and Git.
- In VS Code, install the **Astro** and **Claude Code** extensions (it will prompt you).

### 2. Run it locally
Open this folder in VS Code, then in the terminal:

```bash
npm install      # first time only
npm run dev      # then open the URL it prints (http://localhost:4321)
```

The site live-reloads as you edit. `localhost` is only visible to you.

### 3. Push to your private GitHub repo
Create a **private** repo in your `dama-south-africa` org (any name, e.g. `dama-website`), then:

```bash
git init
git add .
git commit -m "DAMA South Africa website"
git branch -M main
git remote add origin https://github.com/dama-south-africa/dama-website.git
git push -u origin main
```

### 4. Deploy to Cloudflare Pages (gives you the public preview link)
Because the repo is private, use Cloudflare Pages (free, works with private repos):
- Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → pick the repo.
- Build settings: **Framework preset: Astro**, **Build command: `npm run build`**, **Output: `dist`**.
- **Save and Deploy.** You get a public link like `https://dama-website.pages.dev` that
  updates automatically about a minute after every `git push`.

### 5. Fill in the real content (the TODOs)
Search the project for `TODO`. The main ones:
- **Board members** — `src/pages/about.astro`
- **Meeting & SIG RSVP links** — real Meetup URLs in `src/pages/community.astro`
- **Footer links** — LinkedIn / Meetup in `src/components/Footer.astro`
- Confirm the membership wording in `src/pages/become-a-member.astro`

Do these with Claude Code: edit → `git add . && git commit -m "..." && git push` → the live link refreshes.

### 6. Go live on dama.org.za (last, zero downtime)
Only when you're happy with the Cloudflare preview:
- In Cloudflare, add the domain and point its DNS, then attach `dama.org.za` to the Pages
  project as a custom domain (HTTPS is automatic).
- The old WordPress site stays live until you switch DNS, so there's no downtime. Keep it
  as a backup for ~2 weeks, then decommission it.

---

## Project structure
```
src/
  layouts/Layout.astro       page shell (head, fonts, header, footer)
  components/Header.astro     top nav + logo
  components/Footer.astro     footer
  pages/                      one file = one URL (index, about, become-a-member, community, contact)
  styles/global.css           all styling + brand colours (top of file)
public/
  logo.png                    the DAMA South Africa logo
  favicon.svg                 simplified globe icon for the browser tab
```

Brand colours and fonts live at the top of `src/styles/global.css` (`:root`).

## Commands
```bash
npm run dev       # local dev server (live reload)
npm run build     # production build → dist/
npm run preview   # preview the built site
```

## Notes
- Contact enquiries route to **membership@dama.org.za** via a mailto link (no form service needed).
- Events/RSVPs link out to Meetup — just drop the real URLs into the `#` placeholders.
