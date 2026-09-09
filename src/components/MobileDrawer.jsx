import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle, ChevronRight } from 'lucide-react';

export default function MobileDrawer({ isOpen, onClose }) {
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-slate-950/98 border-b border-slate-800 px-5 pt-4 pb-8 space-y-3 shadow-2xl backdrop-blur-xl animate-fade-in">
      {/* Drawer Header with Language Switcher */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Navigation Menu</span>
        <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800">
          <button
            type="button"
            onClick={() => setLang('en')}
            className={`px-3 py-1 text-xs rounded-md transition-all ${
              lang === 'en'
                ? 'bg-amber-500 text-slate-900 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang('hi')}
            className={`px-3 py-1 text-xs rounded-md transition-all ${
              lang === 'hi'
                ? 'bg-amber-500 text-slate-900 font-bold shadow-sm'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            हिन्दी
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <a 
        href="#products" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span>{t('nav_products')}</span>
        <ChevronRight className="w-4 h-4 text-slate-500" />
      </a>
      <a 
        href="#calculator" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-amber-400 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400"></span>
          <span>{t('nav_calculator')} (IS 456)</span>
        </span>
        <ChevronRight className="w-4 h-4 text-amber-400" />
      </a>
      <a 
        href="#daily-rates" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span>{t('nav_prices')}</span>
        <ChevronRight className="w-4 h-4 text-slate-500" />
      </a>
      <a 
        href="#delivery" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span>{t('nav_delivery')}</span>
        <ChevronRight className="w-4 h-4 text-slate-500" />
      </a>
      <a 
        href="#why-us" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span>{t('nav_why_us')}</span>
        <ChevronRight className="w-4 h-4 text-slate-500" />
      </a>
      <a 
        href="#reviews" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span>{t('nav_reviews')}</span>
        <ChevronRight className="w-4 h-4 text-slate-500" />
      </a>
      <a 
        href="#contact" 
        onClick={onClose} 
        className="flex items-center justify-between py-2.5 px-3 text-base font-semibold text-slate-200 hover:bg-slate-900 rounded-xl transition-colors"
      >
        <span>{t('nav_contact')}</span>
        <ChevronRight className="w-4 h-4 text-slate-500" />
      </a>
      
      {/* Quick Action Buttons in Drawer */}
      <div className="pt-4 border-t border-slate-800 space-y-2.5">
        <a 
          href="tel:+919431125489" 
          className="w-full text-center py-3 rounded-xl font-bold text-sm bg-slate-900 text-white border border-slate-700 flex items-center justify-center gap-2 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>{t('call_us')} (+91 94311 25489)</span>
        </a>

        <a 
          href="https://wa.me/919431125489?text=Hello%20Lal%20Baba%20Traders,%20please%20send%20today's%20rate%20list" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-full text-center py-3 rounded-xl font-bold text-sm bg-emerald-600 text-white flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 active:scale-95 transition-all"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{t('whatsapp_us')} (Rate List)</span>
        </a>
      </div>
    </div>
  );
}
