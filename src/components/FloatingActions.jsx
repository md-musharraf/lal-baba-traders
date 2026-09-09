import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919431125489?text=Hello%20Lal%20Baba%20Traders,%20I%20have%20an%20inquiry%20regarding%20building%20materials" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-wa-btn shadow-2xl" 
        aria-label="Chat with Lal Baba Traders on WhatsApp"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.122-.533-1.825-.762-2.983-2.617-3.074-2.738-.09-.121-.738-.983-.738-1.874 0-.89.467-1.328.633-1.507.167-.179.365-.224.486-.224.122 0 .243.002.348.007.112.006.262-.042.41.314.152.366.52 1.272.565 1.364.046.091.076.198.016.319-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.47 1.01 1.009 1.49 1.157 1.031 1.408 1.031 1.606 1.198.197.167.313.142.435.002.121-.14.524-.611.664-.823.14-.212.28-.176.467-.107.188.069 1.189.561 1.393.663.204.102.34.152.39.237.05.086.05.498-.094.903z"/>
        </svg>
      </a>

      {/* Back to Top Floating Button */}
      <button 
        type="button" 
        onClick={scrollToTop}
        className={`fixed bottom-24 left-6 z-40 bg-slate-900/90 text-white p-2.5 rounded-xl border border-slate-700 shadow-xl transition-all hover:bg-amber-500 hover:text-slate-900 ${
          showTopBtn ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        aria-label="Scroll back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
