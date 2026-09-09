import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, MessageCircle } from 'lucide-react';
import MobileDrawer from './MobileDrawer';

export default function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 transition-all shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Brand Info */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 p-0.5 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-xl text-amber-400">
                  LBT
                </div>
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white tracking-tight group-hover:text-amber-400 transition-colors">
                  Lal Baba Traders
                </span>
                <span className="block text-[11px] font-semibold text-slate-400 tracking-wider uppercase">
                  लाल बाबा ट्रेडर्स • Jasidih, Deoghar
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
              <a href="#products" className="hover:text-amber-400 transition-colors">
                {t('nav_products')}
              </a>
              <a href="#calculator" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                <span>{t('nav_calculator')}</span>
              </a>
              <a href="#daily-rates" className="hover:text-amber-400 transition-colors">
                {t('nav_prices')}
              </a>
              <a href="#delivery" className="hover:text-amber-400 transition-colors">
                {t('nav_delivery')}
              </a>
              <a href="#why-us" className="hover:text-amber-400 transition-colors">
                {t('nav_why_us')}
              </a>
              <a href="#reviews" className="hover:text-amber-400 transition-colors">
                {t('nav_reviews')}
              </a>
              <a href="#contact" className="hover:text-amber-400 transition-colors">
                {t('nav_contact')}
              </a>
            </div>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <a 
                href="https://wa.me/919431125489?text=Hello%20Lal%20Baba%20Traders,%20I%20need%20a%20price%20quote%20for%20building%20materials%20in%20Deoghar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-600/20 transition-all transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('whatsapp_us')}</span>
              </a>
              <a 
                href="#calculator" 
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-900 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-400/20 transition-all transform hover:-translate-y-0.5"
              >
                {t('get_quote')}
              </a>
            </div>

            {/* Mobile Hamburger Toggle Button */}
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" 
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Slide-Down Mobile Drawer Menu */}
      <MobileDrawer isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
