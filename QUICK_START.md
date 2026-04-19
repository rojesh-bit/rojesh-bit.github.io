# Quick Start Guide: Deploy to GitHub Pages in 5 Minutes

## Step-by-Step Instructions

### Step 1: Create GitHub Repository ⚡
1. Go to https://github.com/new
2. Choose repository name:
   - **Option A (Recommended)**: `your-username.github.io` (replace with your GitHub username)
   - **Option B**: `natnish-website`
3. Select "Public" ✓
4. Click "Create repository"

---

### Step 2: Copy Your Files 📁
Copy these files to a new folder on your computer:
- `about.html`
- `contact.html`
- `index.html`
- `services.html`
- `servicedetails.html`
- `rewrite_services2.js`
- `.gitignore`
- `.nojekyll`
- `README.md`
- **`public/` folder** (with logo, favicon, and images)

---

### Step 3: Upload to GitHub 🚀

**Using Command Line:**

```bash
# Navigate to your files folder
cd path/to/natnish-website

# Initialize git
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: natnish website"

# Add remote repository (copy from GitHub)
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin main
```

**Using GitHub Desktop (if you prefer GUI):**
1. Open GitHub Desktop
2. Go to File → Clone Repository
3. Create new repository
4. Copy all files into the repository folder
5. Click "Publish repository"

---

### Step 4: Enable GitHub Pages 🔧

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. In left sidebar, click **Pages**
4. Under "Build and deployment":
   - Select branch: **main** (or master)
   - Select folder: **/ (root)**
   - Click **Save**
5. Wait 1-2 minutes ⏳

---

### Step 5: Visit Your Live Site ✨

Your site is now LIVE at:
- **Option A URL**: `https://your-username.github.io/`
- **Option B URL**: `https://your-username.github.io/natnish-website/`

---

## ✅ What's Already Configured

Your website is **ready to go**! All paths are correct:

| Item | Status |
|------|--------|
| Relative paths | ✅ All set |
| Image paths | ✅ All correct |
| Internal links | ✅ Working |
| Favicon | ✅ Ready |
| Responsive design | ✅ Mobile-friendly |
| Meta tags | ✅ SEO optimized |

---

## 🔗 Important Files Included

- **GITHUB_PAGES_SETUP.md** - Complete detailed guide (70+ details)
- **README.md** - Project documentation
- **.gitignore** - What to exclude from Git
- **.nojekyll** - Tells GitHub to serve files as-is

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Site shows 404 | Wait 2-3 minutes for GitHub to build, then refresh |
| Images not loading | Check `public/images/` folder exists in repository |
| Styles look broken | Clear browser cache (Ctrl+Shift+Delete) |
| Can't find your URL | Go to Settings → Pages to see your live URL |

---

## 📝 Next Steps

1. ✅ Test all links on your live site
2. ✅ Test on mobile devices
3. ✅ Share your GitHub Pages URL with others
4. ✅ (Optional) Point a custom domain to your site

---

## 🎉 Done!

Your website is now hosted on GitHub Pages! 

**Share your site with:**
- Social media
- Email marketing
- Business cards
- Your company network

---

**Questions?** See the full guide in `GITHUB_PAGES_SETUP.md`
