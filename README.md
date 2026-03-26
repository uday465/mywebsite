# VisaVerse - Static Visa Services Website

A production-ready static website for VisaVerse, a visa consulting service covering 8 popular countries. Built with HTML, Tailwind CSS (CDN), and vanilla JavaScript — no build step required.

## Live Demo

Deploy to GitHub Pages and access at: `https://<your-username>.github.io/visa-verse/`

## Features

- **Homepage** with hero, stats, country cards, how-it-works, testimonials carousel, FAQ accordion
- **Services page** with destination cards, pricing tiers (DIY / Assisted / Full Concierge), and US visa slot booking highlight
- **8 country detail pages** (USA, UK, Canada, Australia, Schengen/EU, UAE, Singapore, Japan), each with:
  - Tabbed interface (Overview, Dos & Don'ts, Document Checklist, Step-by-Step Process, FAQs)
  - Interactive document checklist
  - Timeline-based process visualization
- **Contact page** with form (Formspree-ready), WhatsApp integration, service type selection
- **About page** with company story, team, values, and partner logos
- **Fully responsive** — mobile, tablet, and desktop
- **Shared navbar & footer** injected via JavaScript (edit once, updates everywhere)
- **Scroll animations** via Intersection Observer
- **Floating WhatsApp button** on all pages
- **SEO-friendly** meta tags on every page

## Tech Stack

| Layer     | Technology                  |
|-----------|-----------------------------|
| Markup    | HTML5 (semantic)            |
| Styling   | Tailwind CSS via CDN        |
| Fonts     | Inter (Google Fonts via CSS)|
| Scripts   | Vanilla JavaScript (ES6)    |
| Forms     | Formspree (external)        |
| Hosting   | GitHub Pages (static)       |

## Project Structure

```
visa-verse/
├── index.html              # Homepage
├── services.html           # All services + pricing
├── contact.html            # Contact form + WhatsApp
├── about.html              # About, team, story
├── countries/
│   ├── usa.html            # United States guide
│   ├── uk.html             # United Kingdom guide
│   ├── canada.html         # Canada guide
│   ├── australia.html      # Australia guide
│   ├── schengen.html       # Schengen / EU guide
│   ├── uae.html            # Dubai / UAE guide
│   ├── singapore.html      # Singapore guide
│   └── japan.html          # Japan guide
├── css/
│   └── custom.css          # Custom styles (animations, components)
├── js/
│   └── main.js             # Navbar, footer, carousel, tabs, accordion
├── assets/
│   └── images/             # (Add your images here)
└── README.md
```

## Getting Started

### Local Development

No build step needed. Just open in a browser:

```bash
# Clone the repo
git clone https://github.com/<your-username>/visa-verse.git
cd visa-verse

# Open in browser (macOS)
open index.html

# Or use a local server (recommended for consistent paths)
npx serve .
# or
python3 -m http.server 8000
```

### Deploy to GitHub Pages

1. Create a new repository on GitHub named `visa-verse`
2. Push this code to the repository:
   ```bash
   cd visa-verse
   git init
   git add .
   git commit -m "Initial commit - VisaVerse static website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/visa-verse.git
   git push -u origin main
   ```
3. Go to **Settings > Pages** in your GitHub repo
4. Under **Source**, select `Deploy from a branch`
5. Select `main` branch and `/ (root)` folder
6. Click **Save** — your site will be live in ~1 minute

## Configuration

### WhatsApp Number

The WhatsApp number is configured in `js/main.js`:
```javascript
const WHATSAPP_NUMBER = '918463944773';
```

### Contact Form

The contact form uses [Formspree](https://formspree.io/). To activate it:
1. Sign up at formspree.io
2. Create a new form
3. Replace `YOUR_FORM_ID` in `contact.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Content Updates

- **Navbar & Footer**: Edit `js/main.js` — the `injectNavbar()` and `injectFooter()` functions
- **Country pages**: Edit the corresponding HTML file in `countries/`
- **Pricing**: Edit the service tiers section in `services.html`
- **Testimonials**: Edit the carousel in `index.html`

## Browser Support

- Chrome 80+
- Firefox 80+
- Safari 14+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome for Android)

## License

All rights reserved. This is a proprietary website for VisaVerse.
