import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale, Building2, Truck, BadgePercent, GraduationCap, Users2 } from 'lucide-react';

export default function WhyUs() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: Scale,
      title: t('why_card1_title'),
      desc: t('why_card1_desc')
    },
    {
      icon: Building2,
      title: t('why_card2_title'),
      desc: t('why_card2_desc')
    },
    {
      icon: Truck,
      title: t('why_card3_title'),
      desc: t('why_card3_desc')
    },
    {
      icon: BadgePercent,
      title: t('why_card4_title'),
      desc: t('why_card4_desc')
    },
    {
      icon: GraduationCap,
      title: t('why_card5_title'),
      desc: t('why_card5_desc')
    },
    {
      icon: Users2,
      title: t('why_card6_title'),
      desc: t('why_card6_desc')
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-slate-900 text-white relative bg-grid-pattern-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 mb-3">
            {t('why_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('why_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-7 hover:border-amber-400/60 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
