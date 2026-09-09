/**
 * Lal Baba Traders - Main Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Bilingual Engine
  if (window.initI18n) window.initI18n();

  // 2. Initialize Catalog & Price Board
  if (window.initCatalog) window.initCatalog();

  // 3. Initialize Civil Material Calculator
  if (window.initCalculator) window.initCalculator();

  // 4. Initialize Leaflet Depot Map
  if (window.initDepotMap) window.initDepotMap();

  // 5. Mobile Hamburger Navigation
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isClosed = mobileMenuDrawer.classList.contains('hidden');
      if (isClosed) {
        mobileMenuDrawer.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      } else {
        mobileMenuDrawer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  if (mobileMenuClose && mobileMenuDrawer) {
    mobileMenuClose.addEventListener('click', () => {
      mobileMenuDrawer.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuDrawer) {
        mobileMenuDrawer.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
      }
    });
  });

  // 6. Quick Rate Inquiry Bar (Hero Form)
  const quickRfqForm = document.getElementById('hero-quick-rfq');
  if (quickRfqForm) {
    quickRfqForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const material = document.getElementById('quick-material').value;
      const quantity = document.getElementById('quick-quantity').value;
      const area = document.getElementById('quick-area').value;

      if (!quantity.trim()) {
        showToast('Please specify quantity (e.g. 100 bags, 2 tons)', 'error');
        return;
      }

      const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';
      const msg = currentLang === 'hi'
        ? `*नमस्ते लाल बाबा ट्रेडर्स (जसीडीह, देवघर)*\nमुझे निम्नलिखित सामग्री का तुरंत भाव चाहिए:\n• सामग्री: ${material}\n• आवश्यक मात्रा: ${quantity}\n• साइट डिलीवरी क्षेत्र: ${area || 'जसीडीह / देवघर'}\nकृपया आज का थोक रेट बताएं।`
        : `*Hello Lal Baba Traders (Jasidih, Deoghar)*\nI need an immediate quote for:\n• Material: ${material}\n• Quantity: ${quantity}\n• Delivery Area: ${area || 'Jasidih / Deoghar'}\nPlease share today's wholesale rate and delivery time.`;

      const waUrl = `https://wa.me/919431125489?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      showToast('Opening WhatsApp with your request...', 'success');
    });
  }

  // 7. Full Contact & Quotation Form
  const contactForm = document.getElementById('depot-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const phone = document.getElementById('form-phone').value;
      const location = document.getElementById('form-location').value;
      const requirements = document.getElementById('form-requirements').value;

      if (!name.trim() || !phone.trim() || !requirements.trim()) {
        showToast('Please fill in Name, Mobile, and Requirements.', 'error');
        return;
      }

      // Save inquiry to localStorage
      const inquiry = {
        name,
        phone,
        location,
        requirements,
        timestamp: new Date().toISOString()
      };
      const existingInquiries = JSON.parse(localStorage.getItem('lbt_inquiries') || '[]');
      existingInquiries.push(inquiry);
      localStorage.setItem('lbt_inquiries', JSON.stringify(existingInquiries));

      const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';
      const msg = currentLang === 'hi'
        ? `*नया कोटेशन अनुरोध - लाल बाबा ट्रेडर्स*\n\n👤 *नाम:* ${name}\n📞 *मोबाइल:* ${phone}\n📍 *साइट स्थान:* ${location || 'देवघर'}\n📋 *सामग्री आवश्यकता:*\n${requirements}\n\nकृपया जल्द से जल्द संपर्क करें।`
        : `*New Quotation Request - Lal Baba Traders*\n\n👤 *Name:* ${name}\n📞 *Phone:* ${phone}\n📍 *Site Location:* ${location || 'Deoghar'}\n📋 *Requirements:*\n${requirements}\n\nPlease contact me with delivery schedule and pricing.`;

      const waUrl = `https://wa.me/919431125489?text=${encodeURIComponent(msg)}`;
      window.open(waUrl, '_blank');
      
      contactForm.reset();
      showToast('Quotation request submitted! Opening WhatsApp chat...', 'success');
    });
  }

  // 8. FAQ Accordion
  document.querySelectorAll('.faq-accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const arrow = header.querySelector('.faq-arrow');
      
      const isOpen = !content.classList.contains('hidden');
      if (isOpen) {
        content.classList.add('hidden');
        if (arrow) arrow.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (arrow) arrow.style.transform = 'rotate(180deg)';
      }
    });
  });

  // 9. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
      } else {
        backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-20 right-4 z-50 flex flex-col gap-2 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'success' 
    ? 'bg-emerald-800 text-emerald-50 border-emerald-600' 
    : type === 'error'
    ? 'bg-rose-800 text-rose-50 border-rose-600'
    : 'bg-slate-900 text-slate-50 border-slate-700';

  toast.className = `${bgClass} border px-4 py-3 rounded-xl shadow-xl text-sm font-semibold flex items-center gap-2 pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `
    <svg class="w-4 h-4 shrink-0 fill-current" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-2', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

window.showToast = showToast;
