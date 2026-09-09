import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-950 text-white border-b border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-amber-400">
              {t('stat_experience')}
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {t('stat_exp_sub')}
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-amber-400">
              {t('stat_customers')}
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {t('stat_cust_sub')}
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-amber-400">
              {t('stat_fleet')}
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {t('stat_fleet_sub')}
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <span className="text-3xl sm:text-4xl font-black text-emerald-400">
              {t('stat_weigh')}
            </span>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {t('stat_weigh_sub')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
