/**
 * Lal Baba Traders - Interactive Location & Delivery Coverage Map (Leaflet.js)
 * Depot Location: Singhwa Chamaridih Road, Jasidih, Deoghar, Jharkhand - 814142
 */

let depotMap = null;

const DEPOT_COORDS = [24.5184, 86.6392]; // Singhwa Chamaridih Road, Jasidih, Deoghar

function initDepotMap() {
  const mapElement = document.getElementById('depot-leaflet-map');
  if (!mapElement || depotMap) return;

  if (typeof L === 'undefined') {
    console.warn('Leaflet not loaded yet, retrying...');
    setTimeout(initDepotMap, 500);
    return;
  }

  // Initialize Leaflet Map
  depotMap = L.map('depot-leaflet-map', {
    center: DEPOT_COORDS,
    zoom: 12,
    scrollWheelZoom: false,
    tap: false,
    touchZoom: true
  });

  // Free OpenStreetMap Tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(depotMap);

  // Custom SVG Map Icon for Lal Baba Traders
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

  // Add Depot Marker
  const marker = L.marker(DEPOT_COORDS, { icon: depotIcon }).addTo(depotMap);
  marker.bindPopup(`
    <div style="font-family:sans-serif; padding:6px; max-width:240px;">
      <strong style="color:#0f172a; font-size:14px; display:block; margin-bottom:4px;">Lal Baba Traders (लाल बाबा ट्रेडर्स)</strong>
      <p style="margin:0 0 6px; font-size:12px; color:#475569;">Singhwa Chamaridih Road, Jasidih, Deoghar - 814142</p>
      <span style="display:inline-block; font-size:11px; background:#fef3c7; color:#92400e; padding:2px 8px; border-radius:4px; font-weight:bold; margin-bottom:8px;">Authorized Cement & Steel Depot</span><br/>
      <a href="https://www.google.com/maps/dir/?api=1&destination=24.5184,86.6392" target="_blank" style="display:inline-block; font-size:12px; color:#ffffff; background:#1e3a8a; text-decoration:none; padding:5px 12px; border-radius:6px; font-weight:bold;">Get Directions</a>
    </div>
  `).openPopup();

  // Delivery Zone 1 (0-5 km) - Green
  L.circle(DEPOT_COORDS, {
    color: '#10b981',
    fillColor: '#10b981',
    fillOpacity: 0.12,
    radius: 5000
  }).addTo(depotMap).bindTooltip("Zone 1: Jasidih Local (1-2 Hr Express Dispatch)");

  // Delivery Zone 2 (5-12 km) - Amber
  L.circle(DEPOT_COORDS, {
    color: '#f59e0b',
    fillColor: '#f59e0b',
    fillOpacity: 0.08,
    radius: 12000
  }).addTo(depotMap).bindTooltip("Zone 2: Deoghar City & Rohini (2-3 Hr Dispatch)");

  // Delivery Zone 3 (12-25 km) - Blue
  L.circle(DEPOT_COORDS, {
    color: '#3b82f6',
    fillColor: '#3b82f6',
    fillOpacity: 0.04,
    radius: 25000
  }).addTo(depotMap).bindTooltip("Zone 3: Greater Deoghar, AIIMS Devipur, Madhupur (Same Day Delivery)");

  // Key Locality Points in Deoghar
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
    }).addTo(depotMap).bindTooltip(`<b>${lm.name}</b><br><span style="font-size:11px;">${lm.desc}</span>`);
  });
}

window.initDepotMap = initDepotMap;
