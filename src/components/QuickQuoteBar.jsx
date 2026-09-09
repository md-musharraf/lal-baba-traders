import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Zap, MessageCircle } from 'lucide-react';

export default function QuickQuoteBar() {
  const { lang, t } = useLanguage();
  const [material, setMaterial] = useState('UltraTech / Dalmia Cement');
  const [quantity, setQuantity] = useState('');
  const [area, setArea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!quantity.trim()) {
      alert(lang === 'hi' ? 'कृपया मात्रा दर्ज करें (उदा. 100 बोरी, 2 टन)' : 'Please specify required quantity (e.g. 100 bags, 2 tons)');
      return;
    }

    const msg = lang === 'hi'
      ? `*नमस्ते लाल बाबा ट्रेडर्स (जसीडीह, देवघर)*\nमुझे निम्नलिखित सामग्री का तुरंत भाव चाहिए:\n• सामग्री: ${material}\n• आवश्यक मात्रा: ${quantity}\n• साइट डिलीवरी क्षेत्र: ${area || 'जसीडीह / देवघर'}\nकृपया आज का थोक रेट बताएं।`
      : `*Hello Lal Baba Traders (Jasidih, Deoghar)*\nI need an immediate quote for:\n• Material: ${material}\n• Quantity: ${quantity}\n• Delivery Area: ${area || 'Jasidih / Deoghar'}\nPlease share today's wholesale rate and delivery time.`;

    const waUrl = `https://wa.me/919431125489?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative">
      <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider shadow">
        Instant Dispatch
      </div>

      <div className="flex items-center gap-2.5 mb-5">
        <div className="p-2 rounded-lg bg-amber-400/10 text-amber-400">
          <Zap className="w-5 h-5" />
        </div>
        <h2 className="text-xl font-bold text-white">
          {t('quick_title')}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {t('select_material')}
          </label>
          <select 
            value={material} 
            onChange={(e) => setMaterial(e.target.value)}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-400"
          >
            <option value="UltraTech / Dalmia Cement">Cement (UltraTech / Dalmia / ACC)</option>
            <option value="Tata Tiscon 550D TMT Steel">TMT Steel (Tata Tiscon / Jindal Panther)</option>
            <option value="Clean River Sand (Balu)">River Sand (साफ नदी बालू)</option>
            <option value="20mm / 10mm Stone Aggregate (Gitti)">Stone Aggregate (पत्थर गिट्टी)</option>
            <option value="Red Clay Bricks / Fly Ash">Bricks (पक्की लाल ईंट / फ्लाई ऐश)</option>
            <option value="Dr. Fixit Waterproofing / Putty">Waterproofing Chemicals / Putty</option>
            <option value="Full House Construction Package">Full House Construction Package (सम्पूर्ण सामग्री)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {lang === 'hi' ? 'आवश्यक मात्रा' : 'Required Quantity'}
          </label>
          <input 
            type="text" 
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder={t('enter_quantity')}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-400 placeholder-slate-500"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            {lang === 'hi' ? 'साइट डिलीवरी क्षेत्र' : 'Site Delivery Locality'}
          </label>
          <input 
            type="text" 
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder={t('enter_delivery_area')}
            className="w-full bg-slate-900 border border-slate-700 text-slate-200 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-amber-400 placeholder-slate-500"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-3 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 mt-2 active:scale-95"
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>{t('send_quick_rfq')}</span>
        </button>
      </form>
    </div>
  );
}
