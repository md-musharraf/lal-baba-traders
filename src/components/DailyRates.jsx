import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { dailyRatesData } from '../data/dailyRates';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function DailyRates() {
  const { lang, t } = useLanguage();

  return (
    <section id="daily-rates" className="py-16 lg:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-3">
            {t('rate_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('rate_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('rate_subtitle')}
          </p>
        </div>

        {/* Desktop Table Container */}
        <div className="desktop-rates-table bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden max-w-5xl mx-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-900 text-white text-xs uppercase tracking-wider font-bold">
                <th className="py-4 px-6">{t('rate_item_col')}</th>
                <th className="py-4 px-6">{t('rate_brand_col')}</th>
                <th className="py-4 px-6">{t('rate_price_col')}</th>
                <th className="py-4 px-6">{t('rate_discount_col')}</th>
                <th className="py-4 px-6 text-right">{t('rate_action_col')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {dailyRatesData.map((row, idx) => {
                const item = lang === 'hi' ? row.item_hi : row.item_en;
                const rate = lang === 'hi' ? row.rate_hi : row.rate_en;
                const discount = lang === 'hi' ? row.discount_hi : row.discount_en;
                const btnText = lang === 'hi' ? 'व्हाट्सएप ऑर्डर' : 'Book on WhatsApp';

                const whatsappMsg = encodeURIComponent(
                  `Hello Lal Baba Traders, I would like to book order for: ${row.item_en} at today's rate in Deoghar.`
                );

                return (
                  <tr key={idx} className="border-b border-slate-200/80 hover:bg-amber-50/40 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
                      <span>{item}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 font-medium">
                      <span className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700">
                        {row.brand}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">
                      {rate}
                    </td>
                    <td className="py-4 px-6 text-emerald-700 text-xs font-bold">
                      {discount}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a 
                        href={`https://wa.me/919431125489?text=${whatsappMsg}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 transition-colors active:scale-95"
                      >
                        <span>{btnText}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards Container (Visible on <640px) */}
        <div className="mobile-rates-cards max-w-xl mx-auto">
          {dailyRatesData.map((row, idx) => {
            const item = lang === 'hi' ? row.item_hi : row.item_en;
            const rate = lang === 'hi' ? row.rate_hi : row.rate_en;
            const discount = lang === 'hi' ? row.discount_hi : row.discount_en;
            const btnText = lang === 'hi' ? 'व्हाट्सएप ऑर्डर' : 'Book on WhatsApp';

            const whatsappMsg = encodeURIComponent(
              `Hello Lal Baba Traders, I would like to book order for: ${row.item_en} at today's rate in Deoghar.`
            );

            return (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 mb-1">
                      {row.brand}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">
                      {item}
                    </h4>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1"></span>
                </div>

                <div className="flex items-baseline justify-between pt-1 border-t border-slate-100">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      {lang === 'hi' ? 'दैनिक भाव' : 'Benchmark Rate'}
                    </span>
                    <span className="text-base font-extrabold text-slate-900">{rate}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200/60 inline-block">
                      {discount}
                    </span>
                  </div>
                </div>

                <a 
                  href={`https://wa.me/919431125489?text=${whatsappMsg}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl font-bold text-xs bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{btnText}</span>
                </a>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-center text-slate-500 mt-4 italic max-w-2xl mx-auto">
          {t('rate_disclaimer')}
        </p>

      </div>
    </section>
  );
}
