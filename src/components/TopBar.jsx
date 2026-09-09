import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, MapPin, Clock } from 'lucide-react';

export default function TopBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
        
        {/* Live Status & Notice */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-950 text-emerald-400 border border-emerald-800/80">
            <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-active-badge"></span>
            <span>Open Today</span>
          </span>
          <span className="hidden sm:inline text-slate-400">
            {t('timings')}
          </span>
          <span className="hidden md:inline text-slate-600">•</span>
          <span className="hidden md:inline text-slate-300">
            {t('location_short')}
          </span>
        </div>

        {/* Quick Contact & Language Switcher */}
        <div className="flex items-center gap-4 ml-auto">
          <a 
            href="tel:+919431125489" 
            className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-semibold text-slate-200"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>+91 94311 25489</span>
          </a>

          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-800 rounded-lg p-0.5 border border-slate-700">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all ${
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
              className={`px-2.5 py-1 text-xs rounded-md transition-all ${
                lang === 'hi'
                  ? 'bg-amber-500 text-slate-900 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
