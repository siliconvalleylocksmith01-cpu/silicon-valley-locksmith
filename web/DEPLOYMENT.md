# Deployment Guide for Silicon Valley Locksmith

This guide provides step-by-step instructions for deploying the Silicon Valley Locksmith website to Vercel and connecting your custom domain `silicon-valley-locksmith.com`.

---

## Prerequisites

- A GitHub, GitLab, or Bitbucket account (for connecting your repository to Vercel)
- Access to your domain registrar's DNS settings for `silicon-valley-locksmith.com`
- The project repository ready for deployment

---

## Step 1: Deploy to Vercel

### 1.1 Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **Sign Up** and create an account using GitHub, GitLab, or Bitbucket
3. Complete the account setup process

### 1.2 Import Your Project

1. From your Vercel dashboard, click **Add New** → **Project**
2. Select your Git provider and authorize Vercel to access your repositories
3. Find and select the Silicon Valley Locksmith repository
4. Click **Import**

### 1.3 Configure Build Settings

Vercel should automatically detect the project settings from `vercel.json`, but verify the following:

- **Framework Preset**: `Vite`
- **Root Directory**: `web`
- **Build Command**: `yarn build`
- **Output Directory**: `dist`
- **Install Command**: `yarn install`

### 1.4 Deploy

1. Click **Deploy** to start the build process
2. Wait for the deployment to complete (typically 1-3 minutes)
3. Once complete, Vercel will provide a temporary URL like:
   - `https://your-project-name.vercel.app`
   - `https://your-project-name-git-main-username.vercel.app`

4. **Test your deployment** by visiting the temporary URL to ensure everything works correctly

---

## Step 2: Add Custom Domain

### 2.1 Add Domain in Vercel

1. From your project dashboard in Vercel, go to **Settings** → **Domains**
2. Enter your domain name: `silicon-valley-locksmith.com`
3. Click **Add**
4. Also add the `www` subdomain: `www.silicon-valley-locksmith.com`
5. Click **Add**

Vercel will display configuration instructions and the DNS records you need to add.

---

## Step 3: Configure DNS Records

**IMPORTANT**: You must complete Step 1 (deployment) and Step 2 (add domain in Vercel) before configuring DNS. Vercel needs to generate the proper DNS records for your specific deployment.

### 3.1 Access Your Domain Registrar

Log in to your domain registrar where you purchased `silicon-valley-locksmith.com` (e.g., GoDaddy, Namecheap, Google Domains, Cloudflare, etc.)

### 3.2 Add DNS Records

Navigate to the DNS management section and add the following records:

#### A Record (for root domain)

| Type | Name/Host | Value/Points to | TTL  |
|------|-----------|-----------------|------|
| A    | @         | 76.76.21.21     | 3600 |

#### CNAME Record (for www subdomain)

| Type  | Name/Host | Value/Points to          | TTL  |
|-------|-----------|--------------------------|------|
| CNAME | www       | cname.vercel-dns.com     | 3600 |

### 3.3 DNS Record Configuration Details

- **@ (Root Domain)**:
  - Record Type: `A`
  - Name/Host: `@` or leave empty (depending on your registrar)
  - Value: `76.76.21.21`
  - TTL: `3600` (or `Automatic`)

- **www Subdomain**:
  - Record Type: `CNAME`
  - Name/Host: `www`
  - Value: `cname.vercel-dns.com`
  - TTL: `3600` (or `Automatic`)

### 3.4 Remove Conflicting Records

**Important**: If you have existing A, AAAA, or CNAME records for your root domain or www subdomain, you must remove them before adding the new Vercel records to avoid conflicts.

---

## Step 4: Verify Domain Configuration

### 4.1 DNS Propagation

- DNS changes can take anywhere from a few minutes to 48 hours to propagate globally
- Most changes propagate within 1-2 hours
- You can check DNS propagation status at [dnschecker.org](https://dnschecker.org)

### 4.2 Verify in Vercel

1. Return to your Vercel project dashboard → **Settings** → **Domains**
2. Wait for Vercel to verify your DNS configuration
3. Once verified, you'll see a green checkmark next to your domain
4. Vercel will automatically provision and configure SSL certificates (HTTPS)

### 4.3 Test Your Domain

Once DNS has propagated and SSL is configured:

1. Visit `https://silicon-valley-locksmith.com`
2. Visit `https://www.silicon-valley-locksmith.com`
3. Both should display your website with a valid SSL certificate (🔒 padlock icon)

---

## Step 5: Post-Deployment Verification

### 5.1 Functionality Checklist

Test the following features on your live domain:

- [ ] Logo displays correctly in header
- [ ] "CALL NOW" sticky button is visible and functional
- [ ] Phone number links work on mobile devices (`tel:669-400-6680`)
- [ ] All sections load properly (Hero, Services, Service Areas, Contact)
- [ ] Responsive design works on mobile, tablet, and desktop
- [ ] Images load correctly
- [ ] Forms and interactive elements function as expected
- [ ] Page loads quickly (check performance with [PageSpeed Insights](https://pagespeed.web.dev))

### 5.2 SEO Verification

- [ ] Meta tags are present (view page source)
- [ ] Structured data is correct (test with [Google Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Sitemap is accessible (if implemented)
- [ ] Robots.txt is configured properly (if needed)

---

## Automatic Deployments

Vercel automatically deploys your site whenever you push changes to your connected Git repository:

- **Production Deployments**: Triggered by pushes to your main/master branch
- **Preview Deployments**: Created for pull requests and other branches
- Each deployment gets a unique URL for testing before going live

### Deployment Workflow

1. Make changes to your code locally
2. Commit and push to your Git repository
3. Vercel automatically builds and deploys
4. Check the deployment status in your Vercel dashboard
5. Once successful, changes are live at `silicon-valley-locksmith.com`

---

## Troubleshooting

### Domain Not Verifying

- **Check DNS Records**: Ensure A and CNAME records are exactly as specified
- **Wait for Propagation**: DNS changes can take up to 48 hours
- **Remove Conflicting Records**: Delete any old DNS records that might conflict
- **Contact Support**: Reach out to Vercel support if issues persist

### SSL Certificate Issues

- Vercel automatically provisions SSL certificates through Let's Encrypt
- If SSL fails, check that your DNS records are correct
- SSL provisioning can take a few minutes after DNS verification

### Build Failures

- Check the build logs in your Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify that the project builds successfully locally: `cd web && yarn build`

### Website Not Loading

- Verify DNS records are correct using [dnschecker.org](https://dnschecker.org)
- Check that your domain is verified in Vercel dashboard
- Clear your browser cache and try again
- Test in an incognito/private browser window

---

## Domain Registrar-Specific Guides

### GoDaddy

1. Log in to GoDaddy
2. Go to **My Products** → **Domain** → Click on your domain
3. Click **DNS** or **Manage DNS**
4. Add the A and CNAME records as specified above

### Namecheap

1. Log in to Namecheap
2. Go to **Domain List** → Click **Manage** next to your domain
3. Go to **Advanced DNS** tab
4. Add the A and CNAME records as specified above

### Google Domains / Squarespace Domains

1. Log in to Google Domains (now Squarespace)
2. Select your domain
3. Click **DNS** in the left sidebar
4. Scroll to **Custom records**
5. Add the A and CNAME records as specified above

### Cloudflare

1. Log in to Cloudflare
2. Select your domain
3. Go to **DNS** → **Records**
4. Add the A and CNAME records as specified above
5. Ensure proxy status (orange cloud) is **OFF** for Vercel to work properly

---

## Environment Variables (if needed)

If your application requires environment variables:

1. Go to your Vercel project → **Settings** → **Environment Variables**
2. Add any required variables for Production, Preview, and Development environments
3. Redeploy your project for changes to take effect

---

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Custom Domain Guide](https://vercel.com/docs/concepts/projects/domains)
- [DNS Configuration](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
- [Build Configuration](https://vercel.com/docs/build-step)

---

## Support

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Domain Issues**: Contact your domain registrar's support team
- **Project Issues**: Check build logs in Vercel dashboard

---

## Summary

To deploy Silicon Valley Locksmith to your custom domain:

1. ✅ **Deploy to Vercel** using your Git repository
2. ✅ **Add custom domain** in Vercel dashboard
3. ✅ **Configure DNS** with A record (76.76.21.21) and CNAME (cname.vercel-dns.com)
4. ✅ **Wait for verification** and SSL provisioning
5. ✅ **Test your site** at silicon-valley-locksmith.com

Your website will automatically redeploy whenever you push changes to your repository.
