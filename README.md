# Lal Baba Traders - Official Website & Material Estimator
### देवघर और जसीडीह का अग्रणी भवन निर्माण सामग्री प्रतिष्ठान

A modern, mobile-first, bilingual (English & हिन्दी) digital storefront and utility platform built for **Lal Baba Traders** located on Singhwa Chamaridih Road, Jasidih, Deoghar, Jharkhand - 814142.

---

## 🌟 Key Features

1. **Bilingual Engine (English / हिन्दी)**
   - Instant 1-click language toggle across all headings, cards, badges, and forms.
   - Saves language preference in `localStorage`.

2. **IS 456 Home Construction Material & Cost Estimator**
   - Calculates exact quantities of **Cement** (Bags), **TMT Rebar Saria** (Metric Tonnes), **River Sand** (CFT), **Stone Aggregate / Gitti** (CFT), and **Bricks** (Pieces) based on built-up area and number of floors.
   - Estimates total material cost in ₹ Lakhs.
   - **Send to WhatsApp**: Generates a pre-formatted breakdown ready to be sent to Lal Baba Traders with 1 tap.
   - **Print / Save Estimate Sheet**: Generates a formal, printable invoice voucher with depot branding.

3. **Interactive Product & Brand Catalog**
   - Dynamic category filters: *All Materials*, *Cement*, *TMT Steel*, *Sand & Gitti*, *Bricks & Blocks*, *Waterproofing & Putty*.
   - Specifications, application guides, and brand badges (UltraTech, Dalmia DSP, ACC, Ambuja, Tata Tiscon 550D, Jindal Panther, Dr. Fixit, Birla White).
   - Direct 1-tap WhatsApp price inquiry buttons.

4. **Today's Market Rate Benchmark Board**
   - Daily rate indicator for cement and steel per kg/ton.
   - Transparent bulk order discounts and contractor volume tiers.

5. **Interactive Delivery Coverage Map (Leaflet.js)**
   - OpenStreetMap interactive integration centered on Singhwa Chamaridih Road, Jasidih.
   - Color-coded delivery zones:
     - 🟢 **Zone 1 (0-5 km)**: Jasidih Local (1-2 Hr Express)
     - 🟡 **Zone 2 (5-12 km)**: Deoghar City & Rohini (2-3 Hr Delivery)
     - 🔵 **Zone 3 (12-30 km)**: Greater Deoghar, AIIMS Devipur, Madhupur (Same-Day)

6. **Local Trust & Value Propositions**
   - 100% Certified Digital Dharmakanta (Electronic weighbridge) print slip guarantee.
   - Moisture-proof elevated warehouse storage for cement freshness.
   - In-house dedicated transport fleet (Tippers, Tractors, Hyva).
   - Contractor & Mason privilege credit facilities.

7. **Mobile-First UX & Instant Conversion**
   - Sticky bottom action bar on mobile devices (1-tap `Call Depot` & `WhatsApp Rate`).
   - Floating pulsing WhatsApp button.
   - FAQ accordion & working quotation form.

---

## 🚀 How to Run Locally

### Option 1: Zero-Dependency Node.js Server
Ensure Node.js is installed, then in this directory run:
```bash
node server.js
```
Open your browser at:
```
http://localhost:3000
```

### Option 2: Direct Static File
You can also open `index.html` directly in any web browser (Chrome, Edge, Safari, Firefox). No build step required!

---

## 📁 File Structure

```
lal baba traders/
├── index.html           # Main semantic HTML5 single-page application
├── css/
│   ├── style.css        # Custom tokens, animations, industrial accents & print styles
│   └── responsive.css   # Mobile sticky action bar, touch target optimization & tables
├── js/
│   ├── i18n.js          # Bilingual English & Hindi translation dictionary
│   ├── catalog.js       # Product data, specifications, and daily rate table logic
│   ├── calculator.js    # IS 456 civil material estimator & printable invoice generator
│   ├── map.js           # Interactive Leaflet map & delivery radius zones
│   └── app.js           # Main application event orchestrator, mobile drawer & forms
├── assets/
│   └── favicon.svg      # Branded industrial SVG favicon
├── package.json         # NPM configuration
├── server.js            # Built-in zero-dependency HTTP static server
└── README.md            # Documentation
```

---

## 🌐 How to Deploy to Production

This website is completely static and can be deployed anywhere in 1 minute:
- **GitHub Pages**: Push repository and enable Pages in repo settings.
- **Vercel**: Drag and drop folder or connect via GitHub.
- **Netlify**: Drag and drop folder into Netlify Drop.
- **Shared Hosting / cPanel**: Upload all files to `public_html`.
