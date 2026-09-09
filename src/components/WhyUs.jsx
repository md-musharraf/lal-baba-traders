import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale, Building2, Truck, BadgePercent, GraduationCap, Users2, ShieldCheck, MapPin } from 'lucide-react';

export default function WhyUs() {
  const { lang, t } = useLanguage();

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
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-400 mb-3">
            {t('why_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t('why_title')}
          </h2>
        </div>

        {/* Depot & Fleet Facility Showcase Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-2xl relative group">
          <div className="relative h-64 sm:h-96 w-full overflow-hidden">
            <img 
              src="/images/depot-warehouse.jpg" 
              alt="Lal Baba Traders Central Depot and Fleet in Jasidih" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-amber-400 text-slate-950 mb-2">
                  {lang === 'hi' ? 'जसीडीह मुख्य गोदाम एवं ट्रांसपोर्ट फ्लीट' : 'Jasidih Central Depot & Transport Fleet'}
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  {lang === 'hi' ? 'सीलन-मुक्त ऊंचे प्लेटफॉर्म एवं तत्काल साइट डिलीवरी' : 'Moisture-Proof Elevated Platforms & Priority Dispatch'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {lang === 'hi'
                    ? 'सिंघवा चामरीडीह रोड स्थित हमारा डिपो: अल्ट्राटेक, डालमिया व एसीसी का ताजा स्टॉक, डिजिटल धर्मकांटा और अपनी एक्सप्रेस डंपर गाड़ियां।'
                    : 'Singhwa Chamaridih Road Jasidih Depot: Fresh cement stocks on wooden pallets, electronic weighbridge certification, and dedicated offloading fleet.'}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <a 
                  href="tel:+919431125489" 
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors shadow-md active:scale-95"
                >
                  {lang === 'hi' ? 'लोडिंग स्थिति पूछें' : 'Check Dispatch Status'}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Pillars Grid */}
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
