# Nat & Nishwe Trade Brokerage & Advisory

Official website for **Nat & Nishwe**, Australia's premier strategic trade brokerage and advisory firm.

## 🌐 Quick Links

- **Website**: [Visit Website](#)
- **Phone**: +61 426 017 345
- **Location**: Wembley, Perth, WA, Australia
- **Services**: Trade facilitation, deal structuring, market entry advisory, compliance consulting, custom engagements

## 📋 About

Nat & Nishwe is a strategic partner in:
- **Trade Facilitation & Execution**: Professional trade operations across residential and commercial spaces
- **Deal Structuring & Planning**: Bespoke trade systems and governance frameworks
- **Market Entry for Trade Operations**: Ground-up business establishment and growth strategies
- **Risk, Compliance & Standards**: WHS audits, regulatory compliance, HACCP protocols
- **Custom Engagements**: Crisis response, multi-site rollouts, specialized consulting

## 📁 Project Structure

```
natnish-website/
├── index.html                    # Homepage
├── about.html                    # About Us page
├── services.html                 # Services overview
├── contact.html                  # Contact & inquiry form
├── servicedetails.html           # Individual service detail pages
├── rewrite_services2.js          # JavaScript helper for dynamic content
├── GITHUB_PAGES_SETUP.md         # GitHub Pages deployment guide
├── README.md                     # This file
├── .gitignore                    # Git ignore rules
├── .nojekyll                     # Disable Jekyll processing
└── public/                       # Static assets
    ├── logo.webp                 # Brand logo
    ├── favicon.svg               # Browser tab icon
    └── images/
        ├── services-bg.png       # Services page background
        ├── consulting.png        # Consulting service image
        ├── about-bg.png          # About page background
        ├── hero-bg.png           # Homepage hero background
        ├── hero-image-nat-nish.jpeg  # Hero image
        ├── team-advisory.png     # Team/advisory image
        └── service-detail-bg.png # Service detail background
```

## 🚀 Local Development

### View in Browser
Simply open `index.html` in your web browser:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Using a Local Server
For better development experience, use a local HTTP server:

**Python 3:**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
# Visit: http://localhost:8000
```

**Node.js (with http-server):**
```bash
npm install -g http-server
http-server
# Visit: http://localhost:8080
```

## 🌐 GitHub Pages Deployment

### Option 1: username.github.io (Recommended)

1. Create repository: `your-username.github.io`
2. Clone repository locally
3. Copy all files to the repository
4. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: natnish website"
   git push -u origin main
   ```
5. Live at: `https://your-username.github.io/`

### Option 2: natnish-website Repository

1. Create repository: `natnish-website`
2. Clone repository locally
3. Copy all files to the repository
4. Go to Settings → Pages → select main branch
5. Push to GitHub:
   ```bash
   git add .
   git commit -m "Initial commit: natnish website"
   git push -u origin main
   ```
6. Live at: `https://your-username.github.io/natnish-website/`

**For detailed setup instructions, see [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)**

## ✅ Path Verification

All file paths are **relative and GitHub Pages compatible**:

| Asset | Path | Status |
|-------|------|--------|
| Logo | `./public/logo.webp` | ✅ |
| Favicon | `./public/favicon.svg` | ✅ |
| Images | `./public/images/*.png` | ✅ |
| Page Links | `./services.html`, `./about.html`, etc. | ✅ |

## 🔧 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with CSS custom properties (variables)
- **Vanilla JavaScript**: Dynamic functionality without frameworks
- **Responsive Design**: Mobile-first approach with media queries
- **Accessibility**: ARIA labels and semantic HTML

## 📝 Pages Overview

### Homepage (index.html)
- Hero section with CTA
- Core services showcase
- Why choose Nat & Nishwe section
- Team and credentials
- Call-to-action sections

### Services (services.html)
- Detailed service offerings
- Service cards with imagery
- Process workflow
- Comparison features

### About Us (about.html)
- Company story and mission
- Values and vision
- Team overview
- Credentials and experience

### Contact (contact.html)
- Contact form
- Business information
- Location details
- Contact method options (phone, email, form)

### Service Details (servicedetails.html)
- Individual service deep-dives
- Detailed feature lists
- Process steps
- Related services sidebar
- CTA sections

## 🎨 Design System

### Colors
- **Navy**: `#0b1e3c` - Primary dark color
- **Coral**: `#ff5a5f` - Accent/CTA color
- **White**: `#fff` - Background
- **Light Gray**: `#f8f9fa` - Light background
- **Medium Gray**: `#6b7280` - Text color
- **Border Gray**: `#e5e7eb` - Borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Base Font Size**: 15-17px

### Layout
- **Max Width**: 1280px
- **Padding**: 24px horizontal
- **Section Spacing**: 88px vertical

## 🔍 SEO

All pages include:
- Meta descriptions
- Open Graph tags
- Canonical links
- Structured HTML hierarchy
- Descriptive alt text for images
- Mobile viewport meta tag

## 🚢 Deployment Checklist

- [ ] Test all links locally
- [ ] Verify all images load
- [ ] Test responsive design on mobile
- [ ] Check form functionality
- [ ] Review page titles and meta descriptions
- [ ] Test contact form submission
- [ ] Create GitHub repository
- [ ] Push files to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Verify site is live
- [ ] Test live site on mobile devices

## 🐛 Troubleshooting

### Images not loading?
- Verify `public/images/` folder exists
- Check image filenames match (case-sensitive)
- Clear browser cache: Ctrl+Shift+Delete

### Styles look broken?
- All CSS is inline in HTML files
- Clear browser cache
- Check browser console for errors

### Links not working?
- Verify HTML files are in root directory
- Check relative paths start with `./`

## 📞 Support

For issues or questions about the website structure, refer to:
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Troubleshooting GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-common-issues-with-github-pages)

## 📄 License

© 2024 Nat & Nishwe Trade Brokerage & Advisory. All rights reserved.

---

**Ready to deploy?** See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for complete deployment instructions.
