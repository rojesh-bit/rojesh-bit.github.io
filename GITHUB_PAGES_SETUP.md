# GitHub Pages Hosting Setup Guide for natnish-website

## Overview
Your website is **already configured with relative paths** that work perfectly with GitHub Pages! All image paths (`./public/images/`) and internal links (`./index.html`, `./services.html`, etc.) are using relative paths, which is exactly what you need.

---

## Two Hosting Options

### **Option 1: username.github.io (RECOMMENDED - Simpler)**
Host your site at the root of your GitHub Pages domain.

**Steps:**
1. Create a NEW repository named: `your-username.github.io`
   - Replace `your-username` with your actual GitHub username
   - Example: `natnish.github.io`

2. Clone the repository locally:
   ```
   git clone https://github.com/your-username/your-username.github.io.git
   ```

3. Copy ALL files from this project into the cloned repository:
   - `about.html`
   - `contact.html`
   - `index.html`
   - `services.html`
   - `servicedetails.html`
   - `rewrite_services2.js`
   - `public/` folder (with all images and favicon)

4. Push to GitHub:
   ```
   git add .
   git commit -m "Initial commit: natnish website"
   git push -u origin main
   ```

5. Your site will be live at: **https://your-username.github.io/**

**URL structure with Option 1:**
- Home: `https://your-username.github.io/`
- Services: `https://your-username.github.io/services.html`
- About: `https://your-username.github.io/about.html`

---

### **Option 2: natnish-website Repository**
Host your site in a subdirectory of your GitHub Pages domain.

**Steps:**
1. Create a NEW repository named: `natnish-website`

2. Clone the repository locally:
   ```
   git clone https://github.com/your-username/natnish-website.git
   ```

3. Copy all files into the cloned repository

4. **IMPORTANT:** Update the repository settings:
   - Go to Settings → Pages
   - Under "Build and deployment"
   - Select branch: `main` (or `master`)
   - Select folder: `/ (root)`
   - Click "Save"

5. Add a `.nojekyll` file (empty file) to the root:
   - This tells GitHub Pages to serve files as-is without Jekyll processing

6. Push to GitHub:
   ```
   git add .
   git commit -m "Initial commit: natnish website"
   git push -u origin main
   ```

7. Your site will be live at: **https://your-username.github.io/natnish-website/**

**URL structure with Option 2:**
- Home: `https://your-username.github.io/natnish-website/`
- Services: `https://your-username.github.io/natnish-website/services.html`
- About: `https://your-username.github.io/natnish-website/about.html`

---

## Path Verification ✓

Your current paths are ready for GitHub Pages:

| File | Current Path | Status |
|------|-------------|--------|
| Logo | `./public/logo.webp` | ✅ Correct |
| Favicon | `./public/favicon.svg` | ✅ Correct |
| Images (services, about, etc.) | `./public/images/*.png` | ✅ Correct |
| HTML Links | `./index.html`, `./services.html`, etc. | ✅ Correct |
| Service Details | `./servicedetails.html?service=...` | ✅ Correct |

---

## Additional Recommendations

### 1. Create a `.gitignore` file
Create a file called `.gitignore` in the root with:
```
node_modules/
.DS_Store
*.log
```

### 2. Create a `README.md`
Create a file called `README.md` with:
```markdown
# Nat & Nishwe Trade Brokerage & Advisory

Official website for Nat & Nishwe, Australia's premier strategic trade brokerage firm.

- **Website**: [https://natnish.com](https://your-github-pages-url)
- **Services**: Trade facilitation, deal structuring, market entry advisory, compliance consulting
- **Location**: Perth, WA, Australia

## Local Development

To view locally, simply open `index.html` in your browser or use a local server:

```bash
python -m http.server 8000
# Then visit: http://localhost:8000
```

## File Structure

```
natnish-website/
├── index.html
├── about.html
├── services.html
├── contact.html
├── servicedetails.html
├── rewrite_services2.js
└── public/
    ├── logo.webp
    ├── favicon.svg
    └── images/
        ├── services-bg.png
        ├── consulting.png
        ├── about-bg.png
        ├── hero-bg.png
        ├── hero-image-nat-nish.jpeg
        ├── team-advisory.png
        └── service-detail-bg.png
```

## Contact

[Contact information from your site]
```

### 3. Create a `.nojekyll` file (Optional but recommended)
This file tells GitHub Pages not to process your site with Jekyll:
```
[Create an empty file named: .nojekyll]
```

---

## Deployment Checklist

- [ ] Choose hosting option (Option 1 or 2)
- [ ] Create GitHub repository with correct name
- [ ] Copy all files to the repository
- [ ] Create `.gitignore` file
- [ ] Create `README.md` file
- [ ] Create `.nojekyll` file (if using Option 2)
- [ ] Run `git add .`
- [ ] Run `git commit -m "Initial commit"`
- [ ] Run `git push -u origin main`
- [ ] Go to repository Settings → Pages
- [ ] Verify "Build and deployment" is set to main branch, root folder
- [ ] Wait 1-2 minutes for GitHub to build your site
- [ ] Visit your GitHub Pages URL to confirm it's live

---

## Troubleshooting

### Site shows 404 error:
1. Check repository name is correct
2. Verify all files were pushed to GitHub
3. Check Settings → Pages is configured correctly
4. Clear browser cache and try again

### Images not loading:
1. Verify `public/` folder exists in root
2. Check image filenames match exactly (case-sensitive)
3. Verify relative paths in HTML are correct (`./public/images/filename.png`)

### Styles look broken:
1. Check console for 404 errors
2. Verify all CSS is inline in HTML (it is in your files ✓)
3. Clear browser cache

---

## After Deployment

1. **Test all links:**
   - Click through all navigation menus
   - Test all internal page links
   - Test contact form (may need backend setup)

2. **SEO:**
   - Your meta tags are already in place ✓
   - Monitor search console for indexing

3. **Custom Domain (Optional):**
   - If you own a domain, you can point it to your GitHub Pages site
   - Update DNS settings in your domain registrar
   - Add custom domain in repository Settings → Pages

---

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- GitHub Pages Troubleshooting: https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-common-issues-with-github-pages
