import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, MapPin, Phone, ArrowUp } from 'lucide-react';

export default function Footer() {
  const { t, lang } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-24 sm:pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Summary */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 flex items-center justify-center font-black text-slate-950 text-lg shadow-md">
                LBT
              </div>
              <div>
                <span className="block text-lg font-bold text-white tracking-tight">Lal Baba Traders</span>
                <span className="block text-xs font-semibold text-amber-400 uppercase">
                  {lang === 'hi' ? 'लाल बाबा ट्रेडर्स • जसीडीह, देवघर' : 'Building Materials Wholesaler • Jasidih'}
                </span>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {t('footer_about')}
            </p>
            
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>GST Registered & Authorized Distributor (Jharkhand)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer_links')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  {t('nav_products')}
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-amber-400 transition-colors">
                  {t('nav_calculator')} (IS 456)
                </a>
              </li>
              <li>
                <a href="#daily-rates" className="hover:text-amber-400 transition-colors">
                  {t('nav_prices')}
                </a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-amber-400 transition-colors">
                  {t('nav_delivery')}
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors">
                  {t('nav_why_us')}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">
                  {t('nav_reviews')}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  {t('nav_contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Materials Supplied */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {t('footer_products')}
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li>• UltraTech Super & Weather Plus Cement (PPC/OPC)</li>
              <li>• Dalmia DSP Heavy Duty Dhalai Cement</li>
              <li>• ACC Suraksha & Concrete+ Cement</li>
              <li>• Tata Tiscon Fe 550D Superlinks Saria</li>
              <li>• Jindal Panther Fe 550D TMT Rebars</li>
              <li>• Dredged Clean River Sand (साफ नदी बालू)</li>
              <li>• Black Basalt 10mm & 20mm Stone Aggregate (गिट्टी)</li>
              <li>• Kiln Pura Paka Red Bricks & Fly Ash Bricks</li>
              <li>• Dr. Fixit Waterproofing & Wall Putty</li>
            </ul>
          </div>

        </div>

        {/* Copyright Sub-footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Lal Baba Traders, Singhwa Chamaridih Road, Jasidih, Deoghar, Jharkhand - 814142.
          </p>
          <div className="flex items-center gap-4">
            <p>
              {t('footer_dev')}
            </p>
            <button 
              type="button" 
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-amber-400 transition-colors"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Top</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
