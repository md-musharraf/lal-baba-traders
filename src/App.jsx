import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import MobileDrawer from './components/MobileDrawer';
import Hero from './components/Hero';
import Stats from './components/Stats';
import MaterialCalculator from './components/MaterialCalculator';
import ProductCatalog from './components/ProductCatalog';
import DailyRates from './components/DailyRates';
import WhyUs from './components/WhyUs';
import DeliveryMap from './components/DeliveryMap';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import FloatingActions from './components/FloatingActions';

function MainLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-400 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      {/* Top Announcements Bar */}
      <TopBar />

      {/* Main Sticky Navigation */}
      <Navbar onOpenMenu={() => setIsMobileMenuOpen(true)} />

      {/* Mobile Drawer (Accessible off-canvas menu) */}
      <MobileDrawer 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      <main className="flex-1">
        {/* Hero Section & Quick Rate Inquiry */}
        <Hero />

        {/* Operational Proof & Credibility Metrics */}
        <Stats />

        {/* IS 456 Construction Material & Cost Estimator */}
        <MaterialCalculator />

        {/* Filterable Products & Building Supplies Catalog */}
        <ProductCatalog />

        {/* Daily Wholesale Market Benchmark Rates */}
        <DailyRates />

        {/* Six Core Pillars: Dharmakanta, Fleet, Godowns */}
        <WhyUs />

        {/* Delivery Network Radius & Leaflet Map */}
        <DeliveryMap />

        {/* Verified Customer & Thekedar Reviews */}
        <Reviews />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Jasidih Depot Location & Quotation Request */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fixed Bottom Action Bar for Mobile Touchscreens */}
      <MobileBottomBar />

      {/* Floating WhatsApp and Back to Top Buttons */}
      <FloatingActions />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}
