import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Clock, Send, Navigation, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: '',
    requirements: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const message = `*NEW QUOTATION REQUEST - LAL BABA TRADERS*\n` +
      `-----------------------------------\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `📞 *Mobile:* ${formData.phone}\n` +
      `📍 *Delivery Location:* ${formData.location || 'Jasidih / Deoghar'}\n` +
      `🧱 *Material Requirements:*\n${formData.requirements}\n` +
      `-----------------------------------\n` +
      `Sent via website instant inquiry.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919431125489?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-3">
            {t('contact_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('contact_title')}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {t('contact_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Depot Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-amber-400/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span>Lal Baba Traders</span>
              </h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-400 text-xs uppercase tracking-wider">
                      {t('contact_address_label')}
                    </strong>
                    <span className="text-slate-200 mt-1 block leading-relaxed font-medium">
                      {t('contact_address_val')}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-400 text-xs uppercase tracking-wider">
                      {t('contact_phone_label')}
                    </strong>
                    <div className="space-y-1 mt-1">
                      <a href="tel:+919431125489" className="block font-bold text-amber-400 hover:underline text-base">
                        +91 94311 25489
                      </a>
                      <a href="tel:+917004512890" className="block font-semibold text-slate-300 hover:text-white">
                        +91 70045 12890
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-400 text-xs uppercase tracking-wider">
                      {t('contact_hours_label')}
                    </strong>
                    <span className="text-slate-200 mt-1 block font-medium">
                      {t('contact_hours_val')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons inside card */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=24.5184,86.6392" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-4 rounded-xl font-bold text-xs bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 border border-slate-700"
                >
                  <Navigation className="w-4 h-4 text-amber-400" />
                  <span>{lang === 'hi' ? 'गूगल मैप्स पर रास्ता देखें' : 'Navigate on Maps'}</span>
                </a>

                <a 
                  href="https://wa.me/919431125489" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-950"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{lang === 'hi' ? 'व्हाट्सएप चैट' : 'WhatsApp Hotline'}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact & Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                {lang === 'hi' ? 'आधिकारिक कोटेशन व साइट विजिट हेतु अनुरोध' : 'Request Official Quotation & Site Call'}
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                {lang === 'hi' 
                  ? 'दैनिक प्लांट रेट, सही वजन और वाहन भाड़े का विवरण 15 मिनट में प्राप्त करें।' 
                  : 'Receive an itemized quote with confirmed daily plant rates and transport within 15 minutes.'}
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">
                    {lang === 'hi' ? 'आपका अनुरोध सफलतापूर्वक भेजा गया!' : 'Inquiry Submitted Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 max-w-md mx-auto">
                    {lang === 'hi'
                      ? 'हमारा डिपो प्रतिनिधि कुछ ही मिनटों में आपसे व्हाट्सएप / फोन पर संपर्क करेगा।'
                      : 'Our Jasidih depot manager will connect with you via WhatsApp or phone shortly with the best daily rates.'}
                  </p>
                  <button 
                    type="button" 
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', location: '', requirements: '' });
                    }}
                    className="mt-4 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-bold hover:bg-slate-800"
                  >
                    {lang === 'hi' ? 'नया फॉर्म भरें' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t('form_name')} *
                      </label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        placeholder={lang === 'hi' ? 'उदा. राजेश शर्मा' : 'e.g., Rajesh Sharma'}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        {t('form_phone')} *
                      </label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        placeholder="9876543210" 
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('form_location')}
                    </label>
                    <input 
                      type="text" 
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder={lang === 'hi' ? 'उदा. बैद्यनाथधाम मंदिर के पास, कास्टर टाउन, जसीडीह' : 'e.g., Near Baidyanathdham, Castairs Town, Jasidih'}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      {t('form_requirements')} *
                    </label>
                    <textarea 
                      rows="4" 
                      name="requirements"
                      value={formData.requirements}
                      onChange={handleChange}
                      required 
                      placeholder={lang === 'hi' 
                        ? 'उदा. 300 बैग अल्ट्राटेक सीमेंट, 3 टन टाटा टिस्कॉन 10mm/12mm, 1000 CFT बालू अगले सोमवार को छत ढलाई के लिए।' 
                        : 'e.g. 300 bags UltraTech Cement, 3 MT Tata Tiscon 10mm/12mm, 1000 CFT river sand for slab casting next week.'}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md transition-all flex items-center justify-center gap-2 active:scale-[0.99]"
                  >
                    <span>{t('form_submit')}</span>
                    <Send className="w-4 h-4 text-amber-400" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
