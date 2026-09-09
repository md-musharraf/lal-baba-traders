import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileBottomBar() {
  const { t } = useLanguage();

  return (
    <div className="mobile-bottom-bar sm:hidden">
      <a 
        href="tel:+919431125489" 
        className="flex-1 flex items-center justify-center gap-2 py-3 mx-1 bg-slate-900 text-white rounded-xl text-xs font-bold active:scale-95 transition-transform border border-slate-700"
      >
        <Phone className="w-4 h-4 text-amber-400" />
        <span>{t('call_us')}</span>
      </a>
      
      <a 
        href="https://wa.me/919431125489?text=Hello%20Lal%20Baba%20Traders,%20please%20send%20today's%20rate%20list%20for%20cement%20and%20steel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex-1 flex items-center justify-center gap-2 py-3 mx-1 bg-emerald-600 text-white rounded-xl text-xs font-bold active:scale-95 transition-transform shadow-lg shadow-emerald-600/30"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>{t('whatsapp_us')}</span>
      </a>
    </div>
  );
}
