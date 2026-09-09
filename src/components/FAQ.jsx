import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: lang === 'hi' 
        ? "ऑन-साइट डिलीवरी के लिए न्यूनतम ऑर्डर मात्रा (MOQ) क्या है?" 
        : "What is the minimum order quantity for on-site delivery?",
      a: lang === 'hi'
        ? "हम छोटे और बड़े सभी प्रकार के ऑर्डर डिलीवर करते हैं! छोटी मात्रा (जैसे 20-50 सीमेंट बैग या 500 किग्रा सरिया) के लिए हम मिनी-पिकअप या ट्रैक्टर भेजते हैं। बड़े प्रोजेक्ट्स व छत ढलाई के लिए 10-चक्का टिपर और हाइवा सीधे प्लांट या डिपो से भेजे जाते हैं।"
        : "We deliver orders of all sizes! For small quantities (e.g. 20-50 cement bags or 500 kg saria), we dispatch via mini-pickup or tractor. For large construction pours, full truckloads and 10-wheeler Hyvas are dispatched with free or subsidized transport depending on volume."
    },
    {
      q: lang === 'hi'
        ? "सरिया और बालू का वजन 100% सही होने की क्या गारंटी है?"
        : "How can I be sure that the TMT steel and sand weight is 100% accurate?",
      a: lang === 'hi'
        ? "हम सभी गाड़ियों को सरकारी मान्यता प्राप्त डिजिटल धर्मकांटा (इलेक्ट्रॉनिक वे-ब्रिज) पर तौलते हैं। आपकी साइट पर माल उतरने से पहले आपको ग्रॉस वेट, खाली गाड़ी का वजन और शुद्ध माल के वजन की कंप्यूटराइज्ड प्रिंट पर्ची दी जाती है। 1 किलोग्राम की भी हेराफेरी संभव नहीं है।"
        : "We weigh our vehicles on a calibrated government-inspected digital Dharmakanta (electronic weighbridge). You receive a printed computer slip showing gross weight, tare weight, and net weight before offloading at your site."
    },
    {
      q: lang === 'hi'
        ? "देवघर के मौसम में छत ढलाई (स्लैब) के लिए कौन सा सीमेंट सर्वोत्तम है?"
        : "Which cement is best for roof slab (dhalai) in Deoghar climate?",
      a: lang === 'hi'
        ? "देवघर व जसीडीह क्षेत्र के मौसम अनुसार छत ढलाई के लिए हम उच्च क्षमता वाले स्पेशल सीमेंट जैसे UltraTech Super / Weather Plus या Dalmia DSP की अनुशंसा करते हैं। ये कम हाइड्रेशन हीट उत्पन्न करते हैं, जिससे दरारें नहीं पड़तीं और बारिश में सीलन से पूर्ण सुरक्षा मिलती है।"
        : "For roof slab casting in Deoghar, we recommend high-performance PPC or Composite cements like UltraTech Super / Weather Plus or Dalmia DSP. They generate low heat during curing, preventing hair cracks and dampness during monsoon."
    },
    {
      q: lang === 'hi'
        ? "भुगतान के कौन से तरीके स्वीकार किए जाते हैं?"
        : "What payment methods do you accept?",
      a: lang === 'hi'
        ? "हम UPI (Google Pay, PhonePe, Paytm, BHIM), बैंक RTGS / NEFT, चेक और जसीडीह/देवघर लोकल साइट डिलीवरी के लिए कैश ऑन डिलीवरी (COD) स्वीकार करते हैं। सभी व्यावसायिक व निजी लेन-देन के लिए पक्का जीएसटी बिल प्रदान किया जाता है।"
        : "We accept UPI (Google Pay, PhonePe, Paytm, BHIM), RTGS / NEFT bank transfers, Cheque, and Cash on Delivery (COD) for confirmed local Jasidih/Deoghar site deliveries. GST invoices are provided for all commercial transactions."
    },
    {
      q: lang === 'hi'
        ? "क्या आप सीधे साइट पर अनलोडिंग (उतराई) की सुविधा देते हैं?"
        : "Do you provide labor unloading at the construction site?",
      a: lang === 'hi'
        ? "हाँ! हमारे पास प्रशिक्षित लेबर स्टाफ और हाइड्रोलिक डंपिंग वाहन हैं जो सरिया और सीमेंट को आपकी साइट पर सुरक्षित रूप से अनलोड करते हैं ताकि काम तुरंत शुरू हो सके।"
        : "Yes! We provide trained offloading staff and hydraulic tippers that can safely discharge materials directly onto your job site so your work proceeds without delay."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="py-16 lg:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {lang === 'hi' ? 'अक्सर पूछे जाने वाले सवाल' : 'Frequently Asked Questions (FAQ)'}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {lang === 'hi' 
              ? 'सामग्री, डिजिटल धर्मकांटा, डिलीवरी और भुगतान से संबंधित महत्वपूर्ण जानकारियां।' 
              : 'Answers to common inquiries about materials, delivery, and pricing.'}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button 
                  type="button" 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50 transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base pr-4">{faq.q}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-amber-500' : ''}`} 
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-1 text-sm text-slate-600 border-t border-slate-100 leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
