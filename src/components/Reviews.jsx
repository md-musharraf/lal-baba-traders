import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Reviews() {
  const { t, lang } = useLanguage();

  const reviewsData = [
    {
      id: 1,
      name: "Ramesh Kumar Singh",
      role: lang === 'hi' ? "गृहस्वामी, जसीडीह" : "Home Builder, Jasidih",
      initials: "RK",
      rating: 5,
      avatarBg: "bg-slate-900 text-amber-400",
      quote: lang === 'hi'
        ? "हमने जसीडीह स्टेशन के पास अपना दो मंजिला मकान बनाया। लाल बाबा ट्रेडर्स ने हमें डालमिया डीएसपी सीमेंट और टाटा टिस्कॉन सरिया पर सीधा थोक भाव दिया। हर बैच की धर्मकांटा पर्ची दी गई। 100% ईमानदार और पक्का काम।"
        : "We constructed our two-storey home near Jasidih Station. Lal Baba Traders gave us direct wholesale rate on Dalmia DSP cement and Tata Tiscon saria. Weighbridge print slip was given for every batch. 100% genuine and honest dealer."
    },
    {
      id: 2,
      name: "Mukesh Mandal (Thekedar)",
      role: lang === 'hi' ? "सिविल ठेकेदार, कास्टर टाउन, देवघर" : "Civil Contractor, Castairs Town, Deoghar",
      initials: "MM",
      rating: 5,
      avatarBg: "bg-amber-500 text-slate-950",
      quote: lang === 'hi'
        ? "मैं पिछले 8 वर्षों से देवघर और जसीडीह में सिविल कॉन्ट्रैक्टर का काम कर रहा हूँ। लाल बाबा ट्रेडर्स का सबसे बड़ा फायदा यह है कि इनकी अपनी गाड़ी है, छत ढलाई के दिन सुबह 6 बजे बिना देरी माल साइट पर पहुंच जाता है।"
        : "I have been contracting civil projects across Deoghar for 8 years. The biggest advantage of Lal Baba Traders is their own transport fleet. On slab casting days, materials arrive on site by 6 AM sharp without delay."
    },
    {
      id: 3,
      name: "Sanjay Yadav",
      role: lang === 'hi' ? "देवीपुर (एम्स देवघर के समीप)" : "Devipur (Near AIIMS Deoghar)",
      initials: "SY",
      rating: 5,
      avatarBg: "bg-blue-600 text-white",
      quote: lang === 'hi'
        ? "उत्कृष्ट गुणवत्ता वाली नदी की बालू और धुली हुई 20mm गिट्टी। कोई मिट्टी या धूल नहीं। इनके मटेरियल कैलकुलेटर ने काम शुरू करने से पहले हमारे घर का सटीक बजट निकालने में बहुत मदद की। देवघर में सभी को अनुशंसित।"
        : "Excellent quality river sand and washed 20mm gitti. No mud, no dust. Their material calculator helped us budget our house accurately before starting excavation. Highly recommended to everyone in Deoghar."
    }
  ];

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-3">
            {t('rev_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('rev_title')}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {t('rev_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviewsData.map((rev) => (
            <div 
              key={rev.id}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    <CheckCircle className="w-3 h-3" />
                    {lang === 'hi' ? 'प्रमाणित ग्राहक' : 'Verified Purchase'}
                  </span>
                </div>
                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${rev.avatarBg} font-bold flex items-center justify-center text-sm shrink-0 shadow-sm`}>
                  {rev.initials}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-slate-900">{rev.name}</h5>
                  <span className="text-xs text-slate-500">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
