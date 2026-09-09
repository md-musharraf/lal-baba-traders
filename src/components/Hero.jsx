import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Calculator, MessageCircle, Check } from 'lucide-react';
import QuickQuoteBar from './QuickQuoteBar';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-12 lg:py-24 bg-grid-pattern-dark">
      {/* Glow Orb Accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('hero_badge')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              <span className="block text-slate-100">{t('hero_title_1')}</span>
              <span className="block bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent">
                {t('hero_title_2')}
              </span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t('hero_subtitle')}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a 
                href="#calculator" 
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-lg shadow-amber-400/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95"
              >
                <Calculator className="w-4 h-4" />
                <span>{t('hero_cta_quote')}</span>
              </a>

              <a 
                href="https://wa.me/919431125489?text=Hello%20Lal%20Baba%20Traders,%20I%20would%20like%20to%20know%20today's%20cement%20and%20steel%20rates" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-600/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{t('hero_cta_whatsapp')}</span>
              </a>
            </div>

            {/* Hero Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hero_trust_1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hero_trust_2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hero_trust_3')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('hero_trust_4')}</span>
              </div>
            </div>
          </div>

          {/* Right Hero Card */}
          <div className="lg:col-span-5">
            <QuickQuoteBar />
          </div>

        </div>
      </div>
    </section>
  );
}
