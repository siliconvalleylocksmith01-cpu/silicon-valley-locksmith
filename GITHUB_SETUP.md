# GitHub Repository Setup Guide

**⚠️ IMPORTANT: Complete this setup BEFORE deploying to Vercel**

This guide will walk you through creating a GitHub repository and pushing your Silicon Valley Locksmith project code to GitHub. This step is **required** before you can deploy to Vercel, as Vercel needs to connect to your GitHub repository for automated deployments.

After completing this guide, proceed to `web/DEPLOYMENT.md` for Vercel deployment instructions.

---

## Why GitHub is Required

- **Vercel Integration**: Vercel deploys directly from GitHub repositories
- **Automatic Deployments**: Every code change pushed to GitHub triggers an automatic deployment
- **Version Control**: Track all changes to your website over time
- **Backup**: Your code is safely stored in the cloud
- **Collaboration**: Easy to work with developers if needed in the future

---

## Prerequisites

- A GitHub account (free) - [Create one here](https://github.com/signup) if you don't have one
- Git installed on your computer
- Your local Silicon Valley Locksmith project files (this directory)

---

## Step 1: Create a GitHub Account (Skip if you already have one)

1. Go to [github.com/signup](https://github.com/signup)
2. Enter your email address
3. Create a password
4. Choose a username (you'll need this later)
5. Complete the verification process
6. Verify your email address

---

## Step 2: Create a New GitHub Repository

### 2.1 Create Repository on GitHub Website

1. Log in to [github.com](https://github.com)
2. Click the **+** icon in the top-right corner
3. Select **New repository**

### 2.2 Configure Repository Settings

Fill in the following information:

- **Repository name**: `silicon-valley-locksmith` (exactly as shown)
- **Description**: `Professional locksmith website for Silicon Valley Locksmith - Automotive, Residential & Commercial Services`
- **Visibility**: 
  - Choose **Public** (free, recommended for most users)
  - Or **Private** (free for personal accounts, keeps code hidden)
- **Initialize repository**: **DO NOT** check any boxes
  - ❌ Do NOT add README
  - ❌ Do NOT add .gitignore
  - ❌ Do NOT add license

### 2.3 Create Repository

Click **Create repository** button

### 2.4 Save Your Repository URL

After creation, you'll see a page with setup instructions. Note your repository URL:

```
https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith
```

Replace `[YOUR_USERNAME]` with your actual GitHub username.

**Example**: If your username is `johnsmith`, your URL will be:
```
https://github.com/johnsmith/silicon-valley-locksmith
```

---

## Step 3: Configure Git (First-Time Setup Only)

If this is your first time using Git, you need to configure your identity:

### 3.1 Set Your Name and Email

Open your terminal/command prompt in the project directory and run:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

Replace with your actual name and the email associated with your GitHub account.

**Example**:
```bash
git config --global user.name "John Smith"
git config --global user.email "john.smith@example.com"
```

---

## Step 4: Initialize Local Git Repository

Navigate to your project directory (where this file is located) and run the following commands:

### 4.1 Initialize Git Repository

```bash
git init
```

This creates a new Git repository in your project folder.

### 4.2 Add All Project Files

```bash
git add .
```

This stages all your project files for the first commit.

### 4.3 Create Your First Commit

```bash
git commit -m "Initial commit: Silicon Valley Locksmith website"
```

This creates your first commit with all project files.

---

## Step 5: Connect to GitHub and Push Code

### 5.1 Set Your Default Branch Name

```bash
git branch -M main
```

This ensures you're using the `main` branch (GitHub's default).

### 5.2 Add GitHub Repository as Remote

```bash
git remote add origin https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith.git
```

⚠️ **Replace `[YOUR_USERNAME]` with your actual GitHub username**

**Example**:
```bash
git remote add origin https://github.com/johnsmith/silicon-valley-locksmith.git
```

### 5.3 Push Code to GitHub

```bash
git push -u origin main
```

This uploads all your code to GitHub.

---

## Step 6: Authenticate with GitHub

When you run the `git push` command, you'll be prompted to authenticate. There are two methods:

### Option A: GitHub Personal Access Token (Recommended)

GitHub no longer accepts passwords for Git operations. You need to create a Personal Access Token:

#### Create a Token:

1. Go to GitHub → Click your profile picture → **Settings**
2. Scroll down to **Developer settings** (bottom of left sidebar)
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Add a note: `Silicon Valley Locksmith Deploy`
6. Set expiration: Choose 90 days or longer
7. Select scopes: Check **repo** (this gives full control of private repositories)
8. Click **Generate token** at the bottom
9. **Copy the token immediately** (you won't see it again!)

#### Use the Token:

When prompted for a password during `git push`, paste your token instead.

**Username**: Your GitHub username  
**Password**: Paste the Personal Access Token

### Option B: GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
gh auth login
```

Follow the interactive prompts to authenticate.

---

## Step 7: Verify Your Repository

### 7.1 Check GitHub Website

1. Go to your repository URL:
   ```
   https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith
   ```

2. Verify that you can see:
   - All project files and folders
   - `web/` directory with your website code
   - `README.md` and other documentation files
   - Recent commit showing "Initial commit: Silicon Valley Locksmith website"

### 7.2 Check Repository Structure

Your GitHub repository should show the following structure:

```
silicon-valley-locksmith/
├── web/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   ├── DEPLOYMENT.md
│   └── ... (other web files)
├── README.md
├── GITHUB_SETUP.md (this file)
└── ... (other root files)
```

### 7.3 Test Repository Access

Try accessing your repository in a private/incognito browser window to ensure it's publicly accessible (if you chose public) or that you can access it when logged in (if private).

---

## Troubleshooting Common Issues

### Issue 1: Authentication Failed

**Problem**: `git push` fails with authentication error

**Solutions**:

1. **Verify Personal Access Token**:
   - Make sure you're using a Personal Access Token, not your GitHub password
   - Ensure the token has `repo` permissions
   - Generate a new token if needed

2. **Clear Cached Credentials** (Windows):
   ```bash
   git credential-manager-core erase https://github.com
   ```
   Then try pushing again.

3. **Check Username**:
   - Ensure you're using your correct GitHub username

### Issue 2: Remote Already Exists

**Problem**: Error message: `fatal: remote origin already exists`

**Solution**:

Remove the existing remote and add it again:

```bash
git remote remove origin
git remote add origin https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith.git
git push -u origin main
```

### Issue 3: Permission Denied (publickey)

**Problem**: SSH authentication error

**Solution**:

Use HTTPS instead (as shown in this guide) or set up SSH keys:

1. Check your remote URL:
   ```bash
   git remote -v
   ```

2. If it shows `git@github.com`, change to HTTPS:
   ```bash
   git remote set-url origin https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith.git
   ```

### Issue 4: Not a Git Repository

**Problem**: `fatal: not a git repository`

**Solution**:

Make sure you're in the correct directory (where this file is located), then run:

```bash
git init
```

### Issue 5: Repository Not Found

**Problem**: `ERROR: Repository not found`

**Solutions**:

1. **Check Repository Name**: Verify the repository exists on GitHub and the name is exactly `silicon-valley-locksmith`

2. **Check Username**: Ensure you're using the correct GitHub username in the remote URL

3. **Verify URL**:
   ```bash
   git remote -v
   ```
   Make sure it shows the correct URL

4. **Update Remote URL** if incorrect:
   ```bash
   git remote set-url origin https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith.git
   ```

### Issue 6: Updates Were Rejected

**Problem**: `Updates were rejected because the remote contains work that you do not have locally`

**Solution**:

This shouldn't happen with a new repository, but if it does:

```bash
git pull origin main --rebase
git push -u origin main
```

### Issue 7: Large File Warning

**Problem**: Warning about large files or Git LFS

**Solution**:

1. Check for large files in your project:
   ```bash
   find . -type f -size +50M
   ```

2. If you have large files (especially images), optimize them first:
   - Compress images to under 500KB
   - See `web/public/IMAGE_OPTIMIZATION_GUIDE.md` for help

3. Remove large files from Git history if needed:
   ```bash
   git rm --cached [path-to-large-file]
   git commit -m "Remove large file"
   git push -u origin main
   ```

---

## Making Future Updates

After your initial setup, whenever you make changes to your website:

### Update Your Code

1. Make changes to your files locally

2. Stage the changes:
   ```bash
   git add .
   ```

3. Commit the changes:
   ```bash
   git commit -m "Brief description of your changes"
   ```
   
   **Example commit messages**:
   - `git commit -m "Update phone number in contact section"`
   - `git commit -m "Add new service area: Gilroy"`
   - `git commit -m "Optimize logo image"`

4. Push to GitHub:
   ```bash
   git push
   ```

5. Vercel will automatically deploy your changes!

---

## Quick Reference Commands

Here's a cheat sheet for future reference:

```bash
# Check status of your files
git status

# View your commit history
git log --oneline

# See what changed in your files
git diff

# Add all changed files
git add .

# Add specific file
git add path/to/file.tsx

# Commit with message
git commit -m "Your message here"

# Push to GitHub
git push

# Pull latest changes (if working with others)
git pull

# View remote repository URL
git remote -v

# See current branch
git branch
```

---

## Next Steps

✅ **Once your code is successfully pushed to GitHub**, proceed to:

📄 **`web/DEPLOYMENT.md`** - Follow this guide to deploy your website to Vercel and connect your custom domain

---

## Additional Resources

- **GitHub Documentation**: [docs.github.com](https://docs.github.com)
- **Git Basics**: [git-scm.com/book/en/v2/Getting-Started-Git-Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- **Personal Access Tokens**: [docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- **GitHub Support**: [support.github.com](https://support.github.com)

---

## Support

If you encounter issues not covered in this guide:

1. **Check GitHub Status**: [githubstatus.com](https://githubstatus.com) - Verify GitHub services are operational
2. **Search GitHub Community**: [github.community](https://github.community)
3. **Contact GitHub Support**: Available through your GitHub account settings

---

## Summary Checklist

Before moving to Vercel deployment, ensure you have:

- [x] Created a GitHub account
- [x] Created a new repository named `silicon-valley-locksmith`
- [x] Initialized Git in your local project
- [x] Added and committed all project files
- [x] Connected your local repository to GitHub
- [x] Successfully pushed your code to GitHub
- [x] Verified all files are visible on GitHub
- [x] Noted your repository URL: `https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith`

**Repository URL Format**:
```
https://github.com/[YOUR_USERNAME]/silicon-valley-locksmith
```

Once all items are checked, you're ready to proceed with Vercel deployment! 🚀

👉 **Next**: Open `web/DEPLOYMENT.md` and follow the Vercel deployment instructions.
