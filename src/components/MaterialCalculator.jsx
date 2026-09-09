import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Calculator, RotateCcw, MessageCircle, Printer } from 'lucide-react';

const RATES = {
  cementBag: 375,     // Avg INR per 50kg bag
  steelTon: 64000,    // Avg INR per Metric Ton
  sandCft: 44,        // Avg INR per CFT
  aggregateCft: 48,   // Avg INR per CFT
  brickPcs: 9.5       // Avg INR per piece
};

const MULTIPLIERS = {
  economy: {
    cementPerSqFt: 0.38,
    steelKgPerSqFt: 3.2,
    sandCftPerSqFt: 1.7,
    aggregateCftPerSqFt: 1.25,
    bricksPerSqFt: 17
  },
  standard: {
    cementPerSqFt: 0.44,
    steelKgPerSqFt: 4.0,
    sandCftPerSqFt: 1.9,
    aggregateCftPerSqFt: 1.4,
    bricksPerSqFt: 19
  },
  premium: {
    cementPerSqFt: 0.50,
    steelKgPerSqFt: 4.8,
    sandCftPerSqFt: 2.1,
    aggregateCftPerSqFt: 1.55,
    bricksPerSqFt: 21
  }
};

export default function MaterialCalculator() {
  const { lang, t } = useLanguage();
  const [area, setArea] = useState(1000);
  const [floors, setFloors] = useState(1);
  const [grade, setGrade] = useState('standard');

  const estimate = useMemo(() => {
    const validArea = parseFloat(area) || 0;
    const validFloors = parseInt(floors, 10) || 1;
    const totalBuiltUpArea = validArea * validFloors;
    const mult = MULTIPLIERS[grade] || MULTIPLIERS.standard;

    const cementBags = Math.round(totalBuiltUpArea * mult.cementPerSqFt);
    const steelTons = parseFloat(((totalBuiltUpArea * mult.steelKgPerSqFt) / 1000).toFixed(2));
    const sandCft = Math.round(totalBuiltUpArea * mult.sandCftPerSqFt);
    const aggregateCft = Math.round(totalBuiltUpArea * mult.aggregateCftPerSqFt);
    const bricksPcs = Math.round(totalBuiltUpArea * mult.bricksPerSqFt);

    const cementCost = cementBags * RATES.cementBag;
    const steelCost = steelTons * RATES.steelTon;
    const sandCost = sandCft * RATES.sandCft;
    const aggregateCost = aggregateCft * RATES.aggregateCft;
    const bricksCost = bricksPcs * RATES.brickPcs;

    const totalCost = cementCost + steelCost + sandCost + aggregateCost + bricksCost;
    const costInLakhs = (totalCost / 100000).toFixed(2);

    return {
      totalBuiltUpArea,
      cementBags,
      steelTons,
      sandCft,
      aggregateCft,
      bricksPcs,
      cementCost,
      steelCost,
      sandCost,
      aggregateCost,
      bricksCost,
      totalCost,
      costInLakhs
    };
  }, [area, floors, grade]);

  const handleReset = () => {
    setArea(1000);
    setFloors(1);
    setGrade('standard');
  };

  const handleShareWhatsApp = () => {
    const text = lang === 'hi' 
      ? `*नमस्ते लाल बाबा ट्रेडर्स (जसीडीह, देवघर)*\n\nमुझे अपने निर्माण कार्य के लिए सामग्री का रेट चाहिए:\n` +
        `📐 *निर्मित क्षेत्रफल:* ${estimate.totalBuiltUpArea} Sq. Ft. (${floors} मंजिल)\n` +
        `🧱 *सामग्री अनुमान:*\n` +
        `• सीमेंट: ${estimate.cementBags} बैग (अल्ट्राटेक / डालमिया)\n` +
        `• टीएमटी सरिया: ${estimate.steelTons} टन (टाटा टिस्कॉन / जिंदल)\n` +
        `• नदी बालू: ${estimate.sandCft} CFT\n` +
        `• पत्थर गिट्टी: ${estimate.aggregateCft} CFT\n` +
        `• ईंट: ${estimate.bricksPcs} पीस\n` +
        `💰 *अनुमानित बजट:* ₹${estimate.costInLakhs} लाख\n\n` +
        `कृपया साइट डिलीवरी और आज का सबसे कम थोक रेट बताएं।`
      : `*Hello Lal Baba Traders (Jasidih, Deoghar)*\n\nI need a wholesale quote for my construction project:\n` +
        `📐 *Total Area:* ${estimate.totalBuiltUpArea} Sq. Ft. (${floors} Floor(s))\n` +
        `🧱 *Required Materials:*\n` +
        `• Cement: ${estimate.cementBags} Bags (UltraTech / Dalmia)\n` +
        `• TMT Steel: ${estimate.steelTons} Metric Tons (Tata / Jindal)\n` +
        `• River Sand: ${estimate.sandCft} CFT\n` +
        `• Stone Aggregate: ${estimate.aggregateCft} CFT\n` +
        `• Bricks: ${estimate.bricksPcs} Pcs\n` +
        `💰 *Estimated Material Cost:* ₹${estimate.costInLakhs} Lakhs\n\n` +
        `Please provide your best wholesale pricing and site delivery schedule for Deoghar.`;

    const waUrl = `https://wa.me/919431125489?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
  };

  const handlePrintSheet = () => {
    const printWindow = window.open('', '_blank');
    const now = new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });

    const printHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Material Estimate - Lal Baba Traders, Deoghar</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px; color: #1e293b; }
          .header { text-align: center; border-bottom: 2px solid #f59e0b; padding-bottom: 20px; margin-bottom: 25px; }
          .header h1 { margin: 0; color: #0f172a; font-size: 26px; text-transform: uppercase; letter-spacing: 1px; }
          .header p { margin: 5px 0 0; color: #64748b; font-size: 13px; }
          .details-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 25px; background: #f8fafc; padding: 15px; border-radius: 8px; font-size: 14px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
          th { background: #0f172a; color: #ffffff; text-align: left; padding: 10px 12px; font-size: 13px; }
          td { padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
          .total-box { background: #fffbeb; border: 1px solid #fde68a; padding: 15px; border-radius: 8px; text-align: right; margin-bottom: 30px; }
          .total-box strong { font-size: 20px; color: #92400e; }
          .footer { border-top: 1px dashed #cbd5e1; padding-top: 15px; font-size: 12px; color: #64748b; text-align: center; }
          @media print {
            button { display: none; }
            body { padding: 15px; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Lal Baba Traders (लाल बाबा ट्रेडर्स)</h1>
          <p>Singhwa Chamaridih Road, Jasidih, Deoghar, Jharkhand - 814142 | Tel: +91 94311 25489</p>
          <p>Govt. & Brand Authorized Wholesaler: UltraTech, Dalmia, ACC, Tata Tiscon, Jindal Panther</p>
        </div>

        <div class="details-grid">
          <div><strong>Date:</strong> ${now}</div>
          <div><strong>Estimate Ref:</strong> LBT-EST-${Date.now().toString().slice(-6)}</div>
          <div><strong>Plot Area:</strong> ${area} sq. ft.</div>
          <div><strong>Floors:</strong> ${floors} Floor(s)</div>
          <div><strong>Total Built-up:</strong> ${estimate.totalBuiltUpArea} sq. ft.</div>
          <div><strong>Construction Grade:</strong> ${grade.toUpperCase()}</div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Material Item</th>
              <th>Recommended Brands</th>
              <th>Required Quantity</th>
              <th>Approx. Market Rate</th>
              <th>Estimated Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Cement</strong> (PPC / Slab Grade)</td>
              <td>UltraTech Super / Dalmia DSP / ACC</td>
              <td><strong>${estimate.cementBags} Bags</strong> (50kg)</td>
              <td>₹${RATES.cementBag} / Bag</td>
              <td>₹${estimate.cementCost.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td><strong>TMT Steel Rebar</strong> (Fe 550D)</td>
              <td>Tata Tiscon / Jindal Panther</td>
              <td><strong>${estimate.steelTons} Tons</strong></td>
              <td>₹${RATES.steelTon.toLocaleString('en-IN')} / Ton</td>
              <td>₹${estimate.steelCost.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td><strong>River Sand</strong> (Cleaned Balu)</td>
              <td>Zone II Washed Coarse Sand</td>
              <td><strong>${estimate.sandCft} CFT</strong></td>
              <td>₹${RATES.sandCft} / CFT</td>
              <td>₹${estimate.sandCost.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td><strong>Stone Aggregate</strong> (Gitti 10/20mm)</td>
              <td>Machine Crushed Black Basalt</td>
              <td><strong>${estimate.aggregateCft} CFT</strong></td>
              <td>₹${RATES.aggregateCft} / CFT</td>
              <td>₹${estimate.aggregateCost.toLocaleString('en-IN')}</td>
            </tr>
            <tr>
              <td><strong>Bricks / Blocks</strong></td>
              <td>No. 1 Kiln Red Bricks / Fly Ash</td>
              <td><strong>${estimate.bricksPcs} Pcs</strong></td>
              <td>₹${RATES.brickPcs} / Pc</td>
              <td>₹${estimate.bricksCost.toLocaleString('en-IN')}</td>
            </tr>
          </tbody>
        </table>

        <div class="total-box">
          <span style="font-size: 14px; color: #78350f;">Estimated Total Material Cost:</span><br>
          <strong>₹${estimate.costInLakhs} Lakhs (Approx. ₹${estimate.totalCost.toLocaleString('en-IN')})</strong>
        </div>

        <div class="footer">
          <p>*Note: This calculation is generated according to standard IS 456 civil thumb rules for residential construction. Actual rates fluctuate with daily market indices. Visit Lal Baba Traders, Jasidih for spot booking discounts and full truckload transport subsidies.</p>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <button onclick="window.print()" style="padding: 10px 24px; background: #0f172a; color: #fff; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: bold;">Print Invoice / Save as PDF</button>
        </div>
      </body>
      </html>
    `;

    printWindow.document.open();
    printWindow.document.write(printHtml);
    printWindow.document.close();
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-white border-b border-slate-200 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 mb-3">
            {t('calc_badge')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t('calc_title')}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {t('calc_subtitle')}
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Inputs Column */}
            <div className="md:col-span-5 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-500" />
                <span>Project Parameters</span>
              </h3>

              {/* Built-up Area Input */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  {t('calc_input_area')}
                </label>
                <div className="relative">
                  <input 
                    type="number" 
                    inputMode="numeric" 
                    pattern="[0-9]*" 
                    value={area} 
                    onChange={(e) => setArea(e.target.value)}
                    min="100" 
                    max="50000" 
                    step="50"
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-base font-bold text-slate-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                  />
                  <span className="absolute right-4 top-3.5 text-xs font-bold text-slate-400">SQ. FT.</span>
                </div>
                
                {/* Area Preset Chips */}
                <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
                  <span className="text-xs text-slate-500 font-medium mr-1 py-1">Presets:</span>
                  {[600, 1000, 1500, 2000].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setArea(val)}
                      className={`area-preset-chip px-3 py-1.5 text-xs rounded-lg font-semibold transition-all border ${
                        Number(area) === val 
                          ? 'bg-amber-500 text-slate-900 border-amber-500 shadow-sm' 
                          : 'bg-white text-slate-700 border-slate-200 hover:border-amber-400'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Floors */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  {t('calc_input_floors')}
                </label>
                <select 
                  value={floors} 
                  onChange={(e) => setFloors(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="1">Ground Floor Only (G)</option>
                  <option value="2">Ground + 1st Floor (G+1)</option>
                  <option value="3">Ground + 2 Floors (G+2)</option>
                  <option value="4">Ground + 3 Floors (G+3)</option>
                </select>
              </div>

              {/* Construction Quality */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  {t('calc_input_type')}
                </label>
                <select 
                  value={grade} 
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  <option value="standard">{t('calc_type_standard')}</option>
                  <option value="economy">{t('calc_type_economy')}</option>
                  <option value="premium">{t('calc_type_premium')}</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button 
                  type="button" 
                  onClick={handleReset}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-sm bg-white border border-slate-300 text-slate-600 hover:bg-slate-100 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t('calc_btn_reset')}</span>
                </button>
              </div>
            </div>

            {/* Output Display Column */}
            <div className="md:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div>
                  <span className="text-xs font-bold uppercase text-amber-600 tracking-wider">Estimated Quantities</span>
                  <h4 className="text-lg font-bold text-slate-900">Total Material Summary</h4>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Total Area</span>
                  <span className="text-sm font-bold text-slate-800">
                    {estimate.totalBuiltUpArea.toLocaleString('en-IN')} sq. ft.
                  </span>
                </div>
              </div>

              {/* Results Grid */}
              <div className="calc-results-grid grid grid-cols-2 sm:grid-cols-3 gap-3.5 mb-6">
                {/* Cement */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 hover:border-amber-400 transition-all">
                  <span className="text-xs font-medium text-slate-500 block">{t('calc_res_cement')}</span>
                  <span className="text-xl font-black text-slate-900 block my-1">
                    {estimate.cementBags.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-600">{t('calc_res_cement_unit')}</span>
                </div>

                {/* Steel */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 hover:border-amber-400 transition-all">
                  <span className="text-xs font-medium text-slate-500 block">{t('calc_res_steel')}</span>
                  <span className="text-xl font-black text-slate-900 block my-1">
                    {estimate.steelTons.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-600">{t('calc_res_steel_unit')}</span>
                </div>

                {/* River Sand */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 hover:border-amber-400 transition-all">
                  <span className="text-xs font-medium text-slate-500 block">{t('calc_res_sand')}</span>
                  <span className="text-xl font-black text-slate-900 block my-1">
                    {estimate.sandCft.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-600">{t('calc_res_sand_unit')}</span>
                </div>

                {/* Stone Aggregate */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 hover:border-amber-400 transition-all">
                  <span className="text-xs font-medium text-slate-500 block">{t('calc_res_aggregate')}</span>
                  <span className="text-xl font-black text-slate-900 block my-1">
                    {estimate.aggregateCft.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-600">{t('calc_res_aggregate_unit')}</span>
                </div>

                {/* Bricks */}
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 hover:border-amber-400 transition-all">
                  <span className="text-xs font-medium text-slate-500 block">{t('calc_res_bricks')}</span>
                  <span className="text-xl font-black text-slate-900 block my-1">
                    {estimate.bricksPcs.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-600">{t('calc_res_bricks_unit')}</span>
                </div>

                {/* Approx Total Cost */}
                <div className="bg-amber-50 border border-amber-300 rounded-xl p-3.5">
                  <span className="text-xs font-medium text-amber-800 block">{t('calc_res_cost')}</span>
                  <span className="text-xl font-black text-amber-900 block my-1">
                    ₹{estimate.costInLakhs} Lakhs
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700">Estimated Total</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 italic mb-5">
                {t('calc_cost_note')}
              </p>

              {/* Export Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  type="button" 
                  onClick={handleShareWhatsApp}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>{t('calc_btn_whatsapp')}</span>
                </button>

                <button 
                  type="button" 
                  onClick={handlePrintSheet}
                  className="py-3 px-4 rounded-xl font-bold text-xs bg-slate-900 hover:bg-slate-800 text-white shadow transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Printer className="w-4 h-4" />
                  <span>{t('calc_btn_print')}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
