# Ogbu Princewill: portfolio website

A fast, dependency-free site (HTML, CSS, JavaScript) that runs on GitHub Pages.

## Put it online (5 minutes)

1. On GitHub, click **New repository** and name it exactly **`Princewill106.github.io`**. Make it Public.
2. On the new repo page, click **uploading an existing file**, drag in **everything in this folder** (including the `assets` folder), and click **Commit changes**.
3. Go to **Settings → Pages**. Under *Build and deployment* choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
4. After a minute or two the site is live at **https://princewill106.github.io**.

## Edit the content

Everything visitors read is in **`data.js`**. Open it on GitHub, click the pencil icon, change the text, and commit. The site updates in about a minute.

- **CV:** `assets/Princewill-Ogbu-CV.pdf` is linked from the menu, the hero, About and Contact. To update it, upload a new PDF with the same name.
- **Selected projects:** `caseStudies` holds the four case studies. Keep `type` accurate ("Client deployment", "Working prototype", "Open-source template" or "Teaching project"), and only add an outcome you actually measured.
- **Videos:** each entry in `videos` has optional `work` ("Client work" or "Personal sample"), `brief` (audience and purpose) and `made` (your part). They appear under the player once filled in. Posters are in `assets/poster/`, playlist stills in `assets/reel/`.
- **Experience:** `timeline` takes an optional `type` (Full-time, Part-time, Contract, Consulting, Freelance). Keep titles and dates the same as your CV and LinkedIn.
- **Awards:** add the year, your role and a link in `awards` when you have them.
- **Photos:** `photo` (About) and `photo2` (Contact) point to files in `assets/`.
- **Booking link:** set `contact.booking` to a Calendly or Cal.com link. Until then, the call buttons open WhatsApp.
- **Testimonials:** add entries to `testimonials`. The section appears once there's at least one. Get permission first.

## Videos from Google Drive

Videos play in the on-page player straight from Drive. Each file must be shared as **Anyone with the link: Viewer**. The `id` is the part between `/d/` and `/view` in the share link. Under the player there is always a "Watch it on Google Drive" link in case a visitor's network blocks the embedded player.

## Sharing preview

`index.html` includes a page title, description, social preview image (`assets/og-image.jpg`) and a favicon made from your portrait. These all assume the address https://princewill106.github.io/. If you move to a custom domain, update `SITE_URL` in the meta tags.

## Custom domain (optional)

Buy a domain (e.g. from Namecheap), then in **Settings → Pages → Custom domain** enter it and follow GitHub's DNS instructions.
