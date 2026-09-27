# Hafiz Quran Academy - Hostinger Deployment Guide

**Target Domain:** `hafizonlineacdmeyhub.site.je`  
**Official WhatsApp / Contact:** `+92 302 1490138` (WhatsApp ID: `923021490138`)

This directory contains the production-ready standalone HTML5, CSS3, and vanilla JavaScript website files ready for immediate upload to Hostinger or any web hosting server (cPanel, Hostinger File Manager, Apache, Nginx, Netlify, Vercel, etc.).

## 🚀 How to Deploy on Hostinger for `hafizonlineacdmeyhub.site.je`

1. Log into your **Hostinger hPanel**.
2. Go to **Websites** → select or add your domain `hafizonlineacdmeyhub.site.je`.
3. Click **File Manager** (or connect via FTP).
4. Open the `public_html` directory of `hafizonlineacdmeyhub.site.je`.
5. Upload all the files and folders from this folder (`hostinger-deploy/`):
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` folder (contains `hero-quran.jpg`, `about-teacher.jpg`, `course-tajweed.jpg`, `learning-family.jpg`)
6. Ensure your domain DNS is pointed to Hostinger (A Record or Hostinger Nameservers).
7. Visit `https://hafizonlineacdmeyhub.site.je` in your browser!

---

## 📱 WhatsApp & Contact Pre-configured

The files are already pre-configured with:
- **WhatsApp Link:** `https://wa.me/923021490138`
- **Phone Display:** `+92 302 1490138`
- **Admissions Email:** `admissions@hafizonlineacdmeyhub.site.je`

If you ever need to change the number in the future, simply update line 9 in `script.js`.

---

## ✉️ Connecting the Contact Form to Email

The contact form in `index.html` is ready to connect with any form backend of your choice:
- **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"` to `<form id="mainContactForm">`.
- **Hostinger PHP Mailer**: Create a simple `sendmail.php` on your server and point the form action to it.
