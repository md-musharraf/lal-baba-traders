import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsData } from '../data/products';
import { Check, MessageCircle, Layers, ShieldCheck, Shield, Droplets, Cpu, Hammer, Link, Wind, Box, Grid, Columns, Feather, Square, ShieldAlert, Sparkles, Image as ImageIcon } from 'lucide-react';

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
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-800 border border-amber-500/30 mb-3">
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
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === tab.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-950/20 scale-[1.02]'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-amber-400 hover:text-amber-600'
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => {
            const name = lang === 'hi' ? prod.name_hi : prod.name_en;
            const tag = lang === 'hi' ? prod.tag_hi : prod.tag_en;
            const grade = lang === 'hi' ? prod.grade_hi : prod.grade_en;
            const app = lang === 'hi' ? prod.application_hi : prod.application_en;
            const features = lang === 'hi' ? prod.features_hi : prod.features_en;
            const inquireText = lang === 'hi' ? 'व्हाट्सएप रेट पाएं' : 'Inquire Wholesale Price';
            const gradeLabel = lang === 'hi' ? 'ग्रेड / मानक:' : 'Grade / Spec:';
            const appLabel = lang === 'hi' ? 'उपयुक्तता:' : 'Ideal For:';

            const whatsappMsg = encodeURIComponent(
              `Hello Lal Baba Traders, I am inquiring about current wholesale price and delivery for: ${prod.name_en} (${prod.brand}) in Deoghar/Jasidih.`
            );

            const IconComponent = ICON_MAP[prod.icon] || Box;

            return (
              <div 
                key={prod.id} 
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-500/50"
              >
                <div>
                  {/* Product Demo Image Banner */}
                  <div className="relative w-full h-52 sm:h-56 bg-slate-900 overflow-hidden">
                    <img 
                      src={prod.image} 
                      alt={name}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Floating Brand & Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-950/80 text-white backdrop-blur-md border border-white/20 shadow-sm">
                        {prod.brand}
                      </span>
                    </div>

                    <div className="absolute top-3 left-3">
                      <span className="inline-block px-2.5 py-1 text-[11px] font-bold rounded-full bg-amber-400 text-slate-950 shadow-md">
                        {prod.badge}
                      </span>
                    </div>

                    {/* Bottom overlay in image */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-xs font-extrabold text-amber-300 drop-shadow-md bg-slate-950/60 px-2 py-0.5 rounded backdrop-blur-sm">
                        {prod.price_indicator}
                      </span>
                      <span className="text-[10px] font-semibold bg-emerald-600/90 backdrop-blur-sm text-white px-2 py-0.5 rounded shadow-sm">
                        {lang === 'hi' ? '100% सही वजन' : 'Direct Plant Supply'}
                      </span>
                    </div>
                  </div>

                  {/* Card Header */}
                  <div className="p-5 border-b border-slate-100 bg-white relative">
                    <div className="flex items-center gap-2 mb-1 text-slate-500 text-xs">
                      <IconComponent className="w-4 h-4 text-amber-500 shrink-0" />
                      <span className="font-semibold text-slate-600">{tag}</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {name}
                    </h3>
                  </div>

                  {/* Specs Table */}
                  <div className="p-5 space-y-2.5 text-sm text-slate-600">
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{gradeLabel}</span>
                      <span className="font-semibold text-slate-800 text-right text-xs sm:text-sm">{grade}</span>
                    </div>
                    <div className="flex items-baseline justify-between border-b border-slate-100 pb-2">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{appLabel}</span>
                      <span className="font-semibold text-slate-800 text-right text-xs max-w-[65%] leading-snug">{app}</span>
                    </div>
                    <div className="flex items-baseline justify-between pb-1">
                      <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Pack:</span>
                      <span className="text-xs font-medium text-slate-700">{prod.packaging}</span>
                    </div>

                    {/* Feature bullets */}
                    <div className="pt-2">
                      <ul className="space-y-1 text-xs text-slate-600">
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
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] block uppercase font-medium text-slate-400">
                      {lang === 'hi' ? 'रेट स्टेटस' : 'Price Status'}
                    </span>
                    <span className="text-xs font-bold text-slate-900">
                      {lang === 'hi' ? 'थोक छूट उपलब्ध' : 'Bulk Tiered Rate'}
                    </span>
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
