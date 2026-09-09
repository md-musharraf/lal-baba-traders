import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Navigation } from 'lucide-react';
import L from 'leaflet';

const DEPOT_COORDS = [24.5184, 86.6392]; // Singhwa Chamaridih Road, Jasidih, Deoghar

export default function DeliveryMap() {
  const { t } = useLanguage();
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: DEPOT_COORDS,
      zoom: 12,
      scrollWheelZoom: false,
      tap: false,
      touchZoom: true
    });

    mapInstanceRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Custom LBT Pin
    const depotIcon = L.divIcon({
      className: 'lbt-map-pin',
      html: `
        <div style="background:#0F172A; color:#F59E0B; border:3px solid #F59E0B; border-radius:50%; width:44px; height:44px; display:flex; align-items:center; justify-content:center; box-shadow:0 10px 15px -3px rgba(0,0,0,0.4); font-weight:bold; font-size:12px; transform:translate(-10px, -10px);">
          LBT
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22]
    });

    const marker = L.marker(DEPOT_COORDS, { icon: depotIcon }).addTo(map);
    marker.bindPopup(`
      <div style="font-family:sans-serif; padding:6px; max-width:240px;">
        <strong style="color:#0f172a; font-size:14px; display:block; margin-bottom:4px;">Lal Baba Traders (लाल बाबा ट्रेडर्स)</strong>
        <p style="margin:0 0 6px; font-size:12px; color:#475569;">Singhwa Chamaridih Road, Jasidih, Deoghar - 814142</p>
        <span style="display:inline-block; font-size:11px; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; margin-bottom:8px;">Authorized Cement & Steel Depot</span><br/>
        <a href="https://www.google.com/maps/dir/?api=1&destination=24.5184,86.6392" target="_blank" style="display:inline-block; font-size:12px; color:#ffffff; background:#1e3a8a; text-decoration:none; padding:5px 12px; border-radius:6px; font-weight:bold;">Get Directions</a>
      </div>
    `).openPopup();

    // Zone 1: Green (0-5 km)
    L.circle(DEPOT_COORDS, {
      color: '#10b981',
      fillColor: '#10b981',
      fillOpacity: 0.12,
      radius: 5000
    }).addTo(map).bindTooltip("Zone 1: Jasidih Local (1-2 Hr Express Dispatch)");

    // Zone 2: Amber (5-12 km)
    L.circle(DEPOT_COORDS, {
      color: '#f59e0b',
      fillColor: '#f59e0b',
      fillOpacity: 0.08,
      radius: 12000
    }).addTo(map).bindTooltip("Zone 2: Deoghar City & Rohini (2-3 Hr Dispatch)");

    // Zone 3: Blue (12-25 km)
    L.circle(DEPOT_COORDS, {
      color: '#3b82f6',
      fillColor: '#3b82f6',
      fillOpacity: 0.04,
      radius: 25000
    }).addTo(map).bindTooltip("Zone 3: Greater Deoghar, AIIMS Devipur, Madhupur");

    // Landmarks
    const landmarks = [
      { name: "Deoghar Baidyanathdham", coords: [24.4925, 86.7001], desc: "Deoghar City Core (Zone 2)" },
      { name: "Jasidih Railway Junction", coords: [24.5218, 86.6472], desc: "Jasidih Station Hub (Zone 1)" },
      { name: "AIIMS Deoghar (Devipur)", coords: [24.4251, 86.6705], desc: "Devipur Construction Zone (Zone 3)" },
      { name: "Rohini Historic Sector", coords: [24.4752, 86.6350], desc: "Rohini Township (Zone 2)" },
      { name: "Kunda Deoghar", coords: [24.4680, 86.7210], desc: "Kunda Residential Hub (Zone 2)" }
    ];

    landmarks.forEach(lm => {
      L.circleMarker(lm.coords, {
        radius: 6,
        fillColor: '#0F172A',
        color: '#FFFFFF',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(map).bindTooltip(`<b>${lm.name}</b><br><span style="font-size:11px;">${lm.desc}</span>`);
    });

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <section id="delivery" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-3">
            {t('deliv_badge')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('deliv_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('deliv_subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Leaflet Map Container */}
          <div className="lg:col-span-8 bg-white p-3 rounded-2xl border border-slate-200 shadow-md">
            <div id="depot-leaflet-map" ref={mapRef} className="shadow-inner"></div>
            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 mt-3 px-2 gap-2">
              <span className="font-medium">📍 Depot: Singhwa Chamaridih Road, Jasidih, Deoghar</span>
              <span className="text-emerald-700 font-bold">🟢 Zone 1: Express 1-2h | 🟡 Zone 2: 2-3h | 🔵 Zone 3: Same Day</span>
            </div>
          </div>

          {/* Coverage Breakdown Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-2xl p-5 border-l-4 border-emerald-500 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Zone 1 (0 - 5 km)</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">1 - 2 Hours</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Jasidih Local Core</h4>
              <p className="text-xs text-slate-600 mt-1">
                Singhwa, Ratanpur, Jasidih Station Road, Tabhaghat, Koriyadih, Industrial Area.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-amber-500 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Zone 2 (5 - 12 km)</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">2 - 3 Hours</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Deoghar City & Rohini</h4>
              <p className="text-xs text-slate-600 mt-1">
                Baidyanathdham Temple area, Castairs Town, Williams Town, Bilasi Town, Kunda, Rohini.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border-l-4 border-blue-500 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Zone 3 (12 - 30 km)</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">Same Day</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Greater Deoghar & Suburbs</h4>
              <p className="text-xs text-slate-600 mt-1">
                AIIMS Deoghar (Devipur), Madhupur Road, Mohanpur, Sarath, Karon.
              </p>
            </div>

            {/* Direct Phone Dispatch Card */}
            <div className="bg-slate-900 text-white rounded-2xl p-5 shadow-md">
              <h4 className="font-bold text-sm text-amber-400">Need Immediate Site Dispatch?</h4>
              <p className="text-xs text-slate-300 mt-1">Call our Jasidih yard dispatch manager directly for priority truck loading:</p>
              <a 
                href="tel:+919431125489" 
                className="mt-3 inline-flex items-center gap-2 font-bold text-sm text-white bg-amber-500 hover:bg-amber-400 px-4 py-2 rounded-xl transition-colors active:scale-95"
              >
                <Phone className="w-4 h-4 text-slate-950" />
                <span>+91 94311 25489</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
