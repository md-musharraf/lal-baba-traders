/**
 * Lal Baba Traders - Construction Material & Cost Estimator Engine
 * Compliant with IS 456 Indian Civil Construction Thumb Rules
 */

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

let lastCalculationResult = null;

function calculateEstimate() {
  const areaInput = document.getElementById('calc-area');
  const floorsInput = document.getElementById('calc-floors');
  const gradeInput = document.getElementById('calc-grade');

  if (!areaInput || !floorsInput || !gradeInput) return;

  const area = parseFloat(areaInput.value) || 1000;
  const floors = parseInt(floorsInput.value) || 1;
  const grade = gradeInput.value || 'standard';

  const totalBuiltUpArea = area * floors;
  const mult = MULTIPLIERS[grade] || MULTIPLIERS.standard;

  // Material Calculations
  const cementBags = Math.round(totalBuiltUpArea * mult.cementPerSqFt);
  const steelTons = parseFloat(((totalBuiltUpArea * mult.steelKgPerSqFt) / 1000).toFixed(2));
  const sandCft = Math.round(totalBuiltUpArea * mult.sandCftPerSqFt);
  const aggregateCft = Math.round(totalBuiltUpArea * mult.aggregateCftPerSqFt);
  const bricksPcs = Math.round(totalBuiltUpArea * mult.bricksPerSqFt);

  // Cost Projections
  const cementCost = cementBags * RATES.cementBag;
  const steelCost = steelTons * RATES.steelTon;
  const sandCost = sandCft * RATES.sandCft;
  const aggregateCost = aggregateCft * RATES.aggregateCft;
  const bricksCost = bricksPcs * RATES.brickPcs;

  const totalCost = cementCost + steelCost + sandCost + aggregateCost + bricksCost;
  const costInLakhs = (totalCost / 100000).toFixed(2);

  lastCalculationResult = {
    area,
    floors,
    totalBuiltUpArea,
    grade,
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

  // Update DOM Results
  updateElementText('res-cement', cementBags.toLocaleString('en-IN'));
  updateElementText('res-steel', steelTons.toLocaleString('en-IN'));
  updateElementText('res-sand', sandCft.toLocaleString('en-IN'));
  updateElementText('res-aggregate', aggregateCft.toLocaleString('en-IN'));
  updateElementText('res-bricks', bricksPcs.toLocaleString('en-IN'));
  updateElementText('res-cost-lakhs', `₹${costInLakhs} Lakhs`);
  updateElementText('res-total-area', `${totalBuiltUpArea.toLocaleString('en-IN')} sq. ft.`);

  // Show results container with smooth animation
  const resultsBox = document.getElementById('calculator-results');
  if (resultsBox) {
    resultsBox.classList.remove('hidden');
    resultsBox.classList.add('animate-fade-in');
  }
}

function updateElementText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function shareEstimateToWhatsApp() {
  if (!lastCalculationResult) {
    calculateEstimate();
  }
  const res = lastCalculationResult;
  const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';

  const text = currentLang === 'hi' 
    ? `*नमस्ते लाल बाबा ट्रेडर्स (जसीडीह, देवघर)*\n\nमुझे अपने निर्माण कार्य के लिए सामग्री का रेट चाहिए:\n` +
      `📐 *निर्मित क्षेत्रफल:* ${res.totalBuiltUpArea} Sq. Ft. (${res.floors} मंजिल)\n` +
      `🧱 *सामग्री अनुमान:*\n` +
      `• सीमेंट: ${res.cementBags} बैग (अल्ट्राटेक / डालमिया)\n` +
      `• टीएमटी सरिया: ${res.steelTons} टन (टाटा टिस्कॉन / जिंदल)\n` +
      `• नदी बालू: ${res.sandCft} CFT\n` +
      `• पत्थर गिट्टी: ${res.aggregateCft} CFT\n` +
      `• ईंट: ${res.bricksPcs} पीस\n` +
      `💰 *अनुमानित बजट:* ₹${res.costInLakhs} लाख\n\n` +
      `कृपया साइट डिलीवरी और आज का सबसे कम थोक रेट बताएं।`
    : `*Hello Lal Baba Traders (Jasidih, Deoghar)*\n\nI need a wholesale quote for my construction project:\n` +
      `📐 *Total Area:* ${res.totalBuiltUpArea} Sq. Ft. (${res.floors} Floor(s))\n` +
      `🧱 *Required Materials:*\n` +
      `• Cement: ${res.cementBags} Bags (UltraTech / Dalmia)\n` +
      `• TMT Steel: ${res.steelTons} Metric Tons (Tata / Jindal)\n` +
      `• River Sand: ${res.sandCft} CFT\n` +
      `• Stone Aggregate: ${res.aggregateCft} CFT\n` +
      `• Bricks: ${res.bricksPcs} Pcs\n` +
      `💰 *Estimated Material Cost:* ₹${res.costInLakhs} Lakhs\n\n` +
      `Please provide your best wholesale pricing and site delivery schedule for Deoghar.`;

  const waUrl = `https://wa.me/919431125489?text=${encodeURIComponent(text)}`;
  window.open(waUrl, '_blank');
}

function printEstimateSheet() {
  if (!lastCalculationResult) calculateEstimate();
  const res = lastCalculationResult;

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
        <div><strong>Plot Area:</strong> ${res.area} sq. ft.</div>
        <div><strong>Floors:</strong> ${res.floors} Floor(s)</div>
        <div><strong>Total Built-up:</strong> ${res.totalBuiltUpArea} sq. ft.</div>
        <div><strong>Construction Grade:</strong> ${res.grade.toUpperCase()}</div>
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
            <td><strong>${res.cementBags} Bags</strong> (50kg)</td>
            <td>₹${RATES.cementBag} / Bag</td>
            <td>₹${res.cementCost.toLocaleString('en-IN')}</td>
          </tr>
          <tr>
            <td><strong>TMT Steel Rebar</strong> (Fe 550D)</td>
            <td>Tata Tiscon / Jindal Panther</td>
            <td><strong>${res.steelTons} Tons</strong></td>
            <td>₹${RATES.steelTon.toLocaleString('en-IN')} / Ton</td>
            <td>₹${res.steelCost.toLocaleString('en-IN')}</td>
          </tr>
          <tr>
            <td><strong>River Sand</strong> (Cleaned Balu)</td>
            <td>Zone II Washed Coarse Sand</td>
            <td><strong>${res.sandCft} CFT</strong></td>
            <td>₹${RATES.sandCft} / CFT</td>
            <td>₹${res.sandCost.toLocaleString('en-IN')}</td>
          </tr>
          <tr>
            <td><strong>Stone Aggregate</strong> (Gitti 10/20mm)</td>
            <td>Machine Crushed Black Basalt</td>
            <td><strong>${res.aggregateCft} CFT</strong></td>
            <td>₹${RATES.aggregateCft} / CFT</td>
            <td>₹${res.aggregateCost.toLocaleString('en-IN')}</td>
          </tr>
          <tr>
            <td><strong>Bricks / Blocks</strong></td>
            <td>No. 1 Kiln Red Bricks / Fly Ash</td>
            <td><strong>${res.bricksPcs} Pcs</strong></td>
            <td>₹${RATES.brickPcs} / Pc</td>
            <td>₹${res.bricksCost.toLocaleString('en-IN')}</td>
          </tr>
        </tbody>
      </table>

      <div class="total-box">
        <span style="font-size: 14px; color: #78350f;">Estimated Total Material Cost:</span><br>
        <strong>₹${res.costInLakhs} Lakhs (Approx. ₹${res.totalCost.toLocaleString('en-IN')})</strong>
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
}

function initCalculator() {
  const calcBtn = document.getElementById('calc-submit-btn');
  const areaInput = document.getElementById('calc-area');
  const floorsInput = document.getElementById('calc-floors');
  const gradeInput = document.getElementById('calc-grade');
  const resetBtn = document.getElementById('calc-reset-btn');
  const waBtn = document.getElementById('calc-wa-btn');
  const printBtn = document.getElementById('calc-print-btn');

  if (calcBtn) calcBtn.addEventListener('click', calculateEstimate);

  // Area preset chips
  document.querySelectorAll('.area-preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const area = chip.getAttribute('data-area');
      if (areaInput) {
        areaInput.value = area;
        calculateEstimate();
      }
    });
  });

  // Auto calculate on input change
  if (areaInput) areaInput.addEventListener('input', calculateEstimate);
  if (floorsInput) floorsInput.addEventListener('change', calculateEstimate);
  if (gradeInput) gradeInput.addEventListener('change', calculateEstimate);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (areaInput) areaInput.value = '1000';
      if (floorsInput) floorsInput.value = '1';
      if (gradeInput) gradeInput.value = 'standard';
      calculateEstimate();
    });
  }

  if (waBtn) waBtn.addEventListener('click', shareEstimateToWhatsApp);
  if (printBtn) printBtn.addEventListener('click', printEstimateSheet);

  // Initial calculation on page load
  calculateEstimate();
}

window.initCalculator = initCalculator;
window.calculateEstimate = calculateEstimate;
window.shareEstimateToWhatsApp = shareEstimateToWhatsApp;
window.printEstimateSheet = printEstimateSheet;
