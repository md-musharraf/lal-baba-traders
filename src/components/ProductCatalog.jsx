import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/products';
import { Check, MessageCircle, Layers, ShieldCheck, Shield, Droplets, Cpu, Hammer, Link, Wind, Box, Grid, Columns, Feather, Square, ShieldAlert, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Layers,
  ShieldCheck,
  Shield,
  Droplets,
  Cpu,
  Hammer,
  Link,
  Wind,
  Box,
  Grid,
  Columns,
  Feather,
  Square,
  ShieldAlert,
  Sparkles
};

export default function ProductCatalog() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState('all');

  const filteredProducts = filter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  return (
    <section id="products" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800 mb-3">
            {t('prod_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('prod_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('prod_subtitle')}
          </p>
        </div>

        {/* Swipeable Filter Tabs */}
        <div className="mobile-swipe-tabs no-scrollbar items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 px-2 sm:px-0">
          {[
            { id: 'all', labelKey: 'filter_all' },
            { id: 'cement', labelKey: 'filter_cement' },
            { id: 'steel', labelKey: 'filter_steel' },
            { id: 'sand_gitti', labelKey: 'filter_sand_gitti' },
            { id: 'bricks', labelKey: 'filter_bricks' },
            { id: 'chemicals', labelKey: 'filter_chemicals' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-amber-500 text-slate-900 shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-400'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => {
            const name = lang === 'hi' ? prod.name_hi : prod.name_en;
            const tag = lang === 'hi' ? prod.tag_hi : prod.tag_en;
            const grade = lang === 'hi' ? prod.grade_hi : prod.grade_en;
            const app = lang === 'hi' ? prod.application_hi : prod.application_en;
            const features = lang === 'hi' ? prod.features_hi : prod.features_en;
            const inquireText = lang === 'hi' ? 'व्हाट्सएप पर रेट पूछें' : 'Inquire Wholesale Price';
            const gradeLabel = lang === 'hi' ? 'ग्रेड / मानक:' : 'Grade / Spec:';
            const appLabel = lang === 'hi' ? 'उपयुक्तता:' : 'Ideal For:';

            const whatsappMsg = encodeURIComponent(
              `Hello Lal Baba Traders, I am inquiring about current price and delivery for: ${prod.name_en} (${prod.brand}) in Deoghar/Jasidih.`
            );

            const IconComponent = ICON_MAP[prod.icon] || Box;

            return (
              <div 
                key={prod.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-500/40"
              >
                <div>
                  {/* Card Header */}
                  <div className="p-6 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white relative">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {prod.brand}
                      </span>
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-amber-500/15 text-amber-800 border border-amber-500/30">
                        {prod.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {name}
                    </h3>
                    <p className="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{tag}</span>
                    </p>
                  </div>

                  {/* Specs Table */}
                  <div className="p-6 space-y-3 text-sm text-slate-600">
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{gradeLabel}</span>
                      <span className="font-semibold text-slate-800 text-right">{grade}</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{appLabel}</span>
                      <span className="font-semibold text-slate-800 text-right text-xs max-w-[65%]">{app}</span>
                    </div>
                    <div className="flex items-baseline justify-between pb-2">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pack:</span>
                      <span className="text-xs font-medium text-slate-700">{prod.packaging}</span>
                    </div>

                    {/* Feature bullets */}
                    <div className="pt-2">
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {features.map((f, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 font-bold">✓</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[11px] block uppercase font-medium text-slate-400">
                      {lang === 'hi' ? 'दैनिक भाव' : 'Benchmark'}
                    </span>
                    <span className="text-sm font-bold text-slate-900">{prod.price_indicator}</span>
                  </div>
                  <a 
                    href={`https://wa.me/919431125489?text=${whatsappMsg}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>{inquireText}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
