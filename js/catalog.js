/**
 * Lal Baba Traders - Products & Materials Catalog Data & Renderer
 */

const productsData = [
  // --- CEMENT CATEGORY ---
  {
    id: "cement-ultratech-super",
    category: "cement",
    name_en: "UltraTech Super Cement",
    name_hi: "अल्ट्राटेक सुपर सीमेंट",
    brand: "UltraTech Cement",
    tag_en: "India's No. 1 Cement",
    tag_hi: "भारत का नंबर 1 सीमेंट",
    badge: "Bestseller",
    grade_en: "PPC / Engineered Micro-particles",
    grade_hi: "पीपीसी / माइक्रो-पार्टिकल्स",
    application_en: "Roof casting, structural beams, pillars, durable plastering",
    application_hi: "छत ढलाई, बीम, पिलर और मजबूत प्लास्टर",
    packaging: "50 kg Tamper-proof Bag",
    features_en: ["Rapid early strength development", "Exceptional anti-crack resistance", "Low heat of hydration preventing thermal cracks"],
    features_hi: ["तेज शुरुआती मजबूती", "दरार-रोधी विशेष संरचना", "कम तापीय प्रभाव जिससे छत नहीं चटकती"],
    price_indicator: "₹360 - ₹385 / Bag",
    icon: "layers"
  },
  {
    id: "cement-dalmia-dsp",
    category: "cement",
    name_en: "Dalmia DSP Cement (Dhalai Special)",
    name_hi: "डालमिया डीएसपी सीमेंट (ढलाई स्पेशल)",
    brand: "Dalmia Bharat",
    tag_en: "Heavy-Duty Foundation & Slab",
    tag_hi: "नींव एवं ढलाई विशेषज्ञ",
    badge: "High Strength",
    grade_en: "Engineered Slag & Silica Composite",
    grade_hi: "इंजीनियर्ड स्लैग एवं सिलिका कम्पोजिट",
    application_en: "Critical slab casting, deep foundations, water-retaining tanks",
    application_hi: "छत ढलाई, गहरी नींव, पानी टंकी व सीपेज-मुक्त संरचना",
    packaging: "50 kg BOPP Laminated Bag",
    features_en: ["Dense micro-structure stops water penetration", "High chemical & sulphate resistance", "Long-term strength gain over 28+ days"],
    features_hi: ["सघन संरचना पानी के रिसाव को रोके", "नमी और सीलन से पूर्ण सुरक्षा", "लंबे समय तक निरंतर बढ़ती ताकत"],
    price_indicator: "₹370 - ₹395 / Bag",
    icon: "shield-check"
  },
  {
    id: "cement-acc-concrete-plus",
    category: "cement",
    name_en: "ACC Concrete+ Suraksha",
    name_hi: "एसीसी कंक्रीट+ सुरक्षा",
    brand: "ACC Limited (Adani Group)",
    tag_en: "Weather Resisting Cement",
    tag_hi: "मौसम-रोधी प्रीमियम सीमेंट",
    badge: "Corrosion Proof",
    grade_en: "PPC with Special Silane Additives",
    grade_hi: "पीपीसी विशेष सीलेन एडिटिव्स युक्त",
    application_en: "All residential construction, exterior walls, masonry work",
    application_hi: "सम्पूर्ण गृह निर्माण, बाहरी दीवारें व चिनाई",
    packaging: "50 kg Premium Moisture Bag",
    features_en: ["Water-repellent barrier keeps steel rust-free", "Smooth buttery workability", "Tested against severe rains"],
    features_hi: ["सरिया को जंग से बचाने वाला सुरक्षा कवच", "काम करने में आसान व चिकनी फिनिशिंग", "भारी बारिश व धूप में टिकाऊ"],
    price_indicator: "₹355 - ₹380 / Bag",
    icon: "shield"
  },
  {
    id: "cement-ambuja-kawach",
    category: "cement",
    name_en: "Ambuja Kawach Cement",
    name_hi: "अंबुजा कवच सीमेंट",
    brand: "Ambuja Cements",
    tag_en: "Anti-Seepage Specialist",
    tag_hi: "सीपेज-रोधी विशेष सीमेंट",
    badge: "Waterproof",
    grade_en: "Hydrophobic Specialized Composite",
    grade_hi: "हाइड्रोफोबिक सीपेज रोधी ग्रेड",
    application_en: "Roofs, basement walls, bathrooms, water reservoirs",
    application_hi: "छत, बेसमेंट, बाथरूम और पानी की टंकियां",
    packaging: "50 kg Sealed Pack",
    features_en: ["Active siloxane water repellent properties", "Reduces efflorescence (shora) on walls", "No need for external waterproofing chemicals in mix"],
    features_hi: ["पानी को सोखने से रोकने वाला सिलोक्सेन फॉर्मूला", "दीवारों पर शोरा (सफेद परत) से मुक्ति", "अलग से वाटरप्रूफिंग केमिकल की आवश्यकता नहीं"],
    price_indicator: "₹375 - ₹405 / Bag",
    icon: "droplet-off"
  },

  // --- TMT STEEL CATEGORY ---
  {
    id: "steel-tata-tiscon-550d",
    category: "steel",
    name_en: "Tata Tiscon 550D Superlinks",
    name_hi: "टाटा टिस्कॉन 550D सरिया",
    brand: "Tata Steel",
    tag_en: "Earthquake & Corrosion Resistant",
    tag_hi: "भूकंप रोधी व जंग प्रतिरोधी",
    badge: "Govt. Approved",
    grade_en: "Fe 550D (High Ductility)",
    grade_hi: "Fe 550D (उच्च डक्टिलिटी)",
    application_en: "Pillars, roof beams, multi-storey frames, foundation mesh",
    application_hi: "पिलर, बीम, बहुमंजिला फ्रेम व नींव की जाली",
    packaging: "Bundle with Holotag / Available in 8mm to 25mm",
    features_en: ["Strict phosphorus/sulphur control prevents brittleness", "Superior rib pattern for stronger concrete bonding", "100% digital weighbridge verified on every load"],
    features_hi: ["फास्फोरस व सल्फर की शुद्धता से सरिया टूटता नहीं", "कंक्रीट के साथ अटूट पकड़ बनाने वाली पसलियां", "धर्मकांटा पर्ची से सही वजन की पूरी गारंटी"],
    price_indicator: "Daily Market Rate / Ton",
    icon: "cpu"
  },
  {
    id: "steel-jindal-panther-550d",
    category: "steel",
    name_en: "Jindal Panther 550D TMT",
    name_hi: "जिंदल पैंथर 550D टीएमटी",
    brand: "Jindal Steel & Power",
    tag_en: "Virgin Iron Ore Steel",
    tag_hi: "शुद्ध लौह अयस्क से निर्मित",
    badge: "Heavy Duty",
    grade_en: "Fe 550D High Bendability",
    grade_hi: "Fe 550D उच्च लचीलापन",
    application_en: "Commercial complexes, residential homes, boundary pillars",
    application_hi: "व्यावसायिक भवन, रिहायशी मकान, बाउंड्री पिलर",
    packaging: "Factory Bundled with Barcode tag",
    features_en: ["Consistent diameter with zero gauge variation", "High fire resistance up to 600°C", "Easy on-site bending without micro-cracks"],
    features_hi: ["सटीक मोटाई व वजन में एकरूपता", "600 डिग्री तक आग सहने की क्षमता", "मोड़ने पर दरार नहीं पड़ती"],
    price_indicator: "Daily Market Rate / Ton",
    icon: "hammer"
  },
  {
    id: "steel-binding-wire",
    category: "steel",
    name_en: "GI & Black Annealed Binding Wire",
    name_hi: "बाइंडिंग वायर (सरिया बांधने का तार)",
    brand: "LBT Quality Grade",
    tag_en: "Soft & High Tensile",
    tag_hi: "मुलायम व मजबूत खिंचाव",
    badge: "Essential",
    grade_en: "18 Gauge / 20 Gauge Annealed",
    grade_hi: "18 गेज / 20 गेज",
    application_en: "Tying TMT rebar grids, beam stirrups, column cages",
    application_hi: "सरिया की जाली, रिंग व कॉलम बांधने हेतु",
    packaging: "25 kg Roll / Retail bundles",
    features_en: ["Annealed for easy hand twisting without snapping", "Rust-retardant coating", "Uniform thickness"],
    features_hi: ["हाथ से आसानी से मुड़ने वाला तार", "जंग से सुरक्षित कोटिंग", "एक समान मोटाई"],
    price_indicator: "₹65 - ₹78 / Kg",
    icon: "minimize-2"
  },

  // --- SAND & AGGREGATE CATEGORY ---
  {
    id: "sand-river-clean",
    category: "sand_gitti",
    name_en: "Clean River Sand (साफ नदी बालू)",
    name_hi: "धुला हुआ लाल नदी बालू (रेत)",
    brand: "Direct Quarry Supply",
    tag_en: "Zero Silt & Mud Guaranteed",
    tag_hi: "मिट्टी-मुक्त 100% साफ बालू",
    badge: "Prime Quality",
    grade_en: "Zone II Coarse & Medium Sand",
    grade_hi: "जोन II मोटा एवं मध्यम बालू",
    application_en: "Roof slab casting, pillar RCC, brick masonry, smooth plaster",
    application_hi: "छत ढलाई, आरसीसी पिलर, ईंट जोड़ाई व प्लास्टर",
    packaging: "Tractor Trolley / 10-Wheeler Hyva / CFT Basis",
    features_en: ["Directly dredged from clean river beds", "Natural sharp angular grains create tight concrete matrix", "No organic impurities or clay lumps"],
    features_hi: ["सीधे नदी के पट्टे से ताजा खनन", "दानेदार व नुकीले कण कंक्रीट को मजबूत बनाएं", "मिट्टी और कचरे से पूर्ण मुक्त"],
    price_indicator: "₹38 - ₹48 / CFT (Area dependent)",
    icon: "wind"
  },
  {
    id: "aggregate-20mm-gitti",
    category: "sand_gitti",
    name_en: "20mm Black Basalt Stone Aggregate (गिट्टी)",
    name_hi: "20mm काली पक्की पत्थर गिट्टी",
    brand: "Crushed Hard Basalt",
    tag_en: "High Crushing Strength",
    tag_hi: "उच्च भार वहन क्षमता",
    badge: "RCC Grade",
    grade_en: "20mm Machine Crushed Cubical Chips",
    grade_hi: "20 मिमी मशीन क्रशर क्यूबिकल",
    application_en: "Primary RCC roof slabs, grade beams, footing pads, column casting",
    application_hi: "छत ढलाई, फाउंडेशन, बीम और कॉलम का कंक्रीट",
    packaging: "Tractor / Truck Load / Cubic Feet",
    features_en: ["Machine-crushed angular shape gives maximum bond", "Dense volcanic basalt rock with high load bearing", "Washed to remove quarry dust"],
    features_hi: ["मशीन से टूटी चौकोर गिट्टी से सीमेंट की बेहतर पकड़", "काले मजबूत पत्थर से बनी भारी गिट्टी", "धूल व चूरा रहित"],
    price_indicator: "₹42 - ₹54 / CFT",
    icon: "box"
  },
  {
    id: "aggregate-10mm-gitti",
    category: "sand_gitti",
    name_en: "10mm Stone Chips (छोटा दाना गिट्टी)",
    name_hi: "10mm छोटा दाना पत्थर गिट्टी",
    brand: "Crushed Hard Basalt",
    tag_en: "Smooth Interlocking Matrix",
    tag_hi: "सघन आरसीसी भराव",
    badge: "Fine RCC",
    grade_en: "10mm Machine Crushed",
    grade_hi: "10 मिमी मशीन क्रशर",
    application_en: "Lintels, chajjas, thin RCC walls, mixed with 20mm for dense slab",
    application_hi: "लिंटेल, छज्जा, संकीर्ण बीम व 20mm के साथ मिक्सिंग",
    packaging: "Tractor / Hyva Load / CFT",
    features_en: ["Fills microscopic voids in concrete pour", "Prevents honeycomb formation in dense reinforcement", "Guaranteed hard stone"],
    features_hi: ["सरिया के बीच खाली जगह को पूरा भरती है", "छत में हनीकॉम्ब (गड्ढे) बनने से रोकती है", "कड़क हार्ड स्टोन"],
    price_indicator: "₹44 - ₹56 / CFT",
    icon: "grid"
  },

  // --- BRICKS & BLOCKS CATEGORY ---
  {
    id: "bricks-red-clay-no1",
    category: "bricks",
    name_en: "No. 1 Kiln Red Clay Bricks (पक्की लाल ईंट)",
    name_hi: "नंबर 1 भट्ठा की पक्की लाल ईंट",
    brand: "Traditional Coal Kiln",
    tag_en: "Deep Red, Metallic Ringing Sound",
    tag_hi: "गहरा लाल रंग व खनकती आवाज",
    badge: "Traditional Best",
    grade_en: "Class A Heavy Burned",
    grade_hi: "प्रथम श्रेणी पक्की ईंट",
    application_en: "Main load-bearing walls, foundation brickwork, boundary walls",
    application_hi: "लोड-बेयरिंग दीवारें, नींव चिनाई व बाउंड्री",
    packaging: "Per 1,000 Bricks / Tractor Delivery",
    features_en: ["Uniform sharp edges and standard rectangular size", "High compressive strength exceeding 10.5 N/mm²", "Low water absorption under 15%"],
    features_hi: ["सीधे कोने और सटीक माप", "दबाव सहने की जबरदस्त क्षमता", "पानी कम सोखती है जिससे दीवारें मजबूत रहती हैं"],
    price_indicator: "₹8.50 - ₹10.50 / Piece",
    icon: "columns"
  },
  {
    id: "bricks-fly-ash-eco",
    category: "bricks",
    name_en: "Hydraulic Fly Ash Bricks",
    name_hi: "हाइड्रोलिक फ्लाई ऐश ईंट",
    brand: "Green Building Grade",
    tag_en: "Smooth Surface, Less Plaster Needed",
    tag_hi: "सपाट सतह, कम सीमेंट-प्लास्टर की खपत",
    badge: "Cost Saver",
    grade_en: "High Compressive Hydraulic Press",
    grade_hi: "हाइड्रोलिक प्रेस्ड एक समान ईंट",
    application_en: "Partition walls, boundary walls, commercial complexes",
    application_hi: "पार्टीशन दीवार, बाउंड्री वॉल, बहुमंजिला इमारत",
    packaging: "Per 1,000 Bricks / Bulk Delivery",
    features_en: ["Saves 25% plaster cement due to ultra-smooth face", "Uniform dimensions with zero breakage during transit", "Eco-friendly thermal insulation"],
    features_hi: ["एकदम सीधी सतह जिससे प्लास्टर का खर्चा 25% बचता है", "साइज में 100% समानता, कम टूट-फूट", "कमरे को ठंडा रखने में सहायक"],
    price_indicator: "₹5.50 - ₹6.50 / Piece",
    icon: "feather"
  },
  {
    id: "blocks-aac-lightweight",
    category: "bricks",
    name_en: "AAC Lightweight Concrete Blocks",
    name_hi: "एएसी हल्के कंक्रीट ब्लॉक",
    brand: "Autoclaved Aerated Concrete",
    tag_en: "Lightweight & Thermal Proof",
    tag_hi: "हल्का वजन, तेज चिनाई",
    badge: "Modern Tech",
    grade_en: "Grade 1 Autoclaved Aerated",
    grade_hi: "ग्रेड 1 स्टीम क्योर्ड",
    application_en: "High-rise buildings, fast floor construction, top floor insulation",
    application_hi: "ऊंची इमारतें, कम समय में मकान व धूप से सुरक्षा",
    packaging: "Available in 4\", 6\", 8\" thickness",
    features_en: ["3x faster construction speed compared to red bricks", "Reduces dead load on building frame by 50%", "Superb sound and heat insulation"],
    features_hi: ["ईंट के मुकाबले 3 गुना तेज चिनाई", "मकान के पिलर पर 50% कम वजन", "गर्मी और आवाज को अंदर आने से रोकता है"],
    price_indicator: "₹55 - ₹85 / Block",
    icon: "square"
  },

  // --- CHEMICALS & PUTTY CATEGORY ---
  {
    id: "chem-drfixit-lw-plus",
    category: "chemicals",
    name_en: "Dr. Fixit 101 LW+ Waterproofing",
    name_hi: "डॉ. फिक्सिट 101 LW+ वाटरप्रूफिंग",
    brand: "Pidilite Industries",
    tag_en: "Essential for Every Slab & Plaster",
    tag_hi: "हर छत और प्लास्टर के लिए जरूरी",
    badge: "Waterproof Expert",
    grade_en: "Liquid Integral Waterproofing Compound",
    grade_hi: "इंटीग्रल लिक्विड वाटरप्रूफिंग",
    application_en: "Add to concrete mix during roof casting, columns, and exterior plaster",
    application_hi: "छत ढलाई व बाहरी प्लास्टर के मसाले में मिलाकर उपयोग",
    packaging: "1L, 5L, 10L & 20L Cans",
    features_en: ["Eliminates micro-pores and capillary channels in concrete", "Improves workability without extra water", "Protects reinforcing steel from corrosion"],
    features_hi: ["कंक्रीट के सूक्ष्म छिद्रों को बंद कर पानी का रिसाव रोके", "बिना ज्यादा पानी मिलाए कंक्रीट को लचीला बनाए", "सरिया को हमेशा जंग से सुरक्षित रखे"],
    price_indicator: "₹160 / 1L Can",
    icon: "shield-alert"
  },
  {
    id: "putty-birla-white",
    category: "chemicals",
    name_en: "Birla White Wall Care Putty",
    name_hi: "बिरला व्हाइट वालकेयर पुट्टी",
    brand: "UltraTech / Birla White",
    tag_en: "Silky Smooth Wall Base",
    tag_hi: "दीवारों को दे रेशमी चमक",
    badge: "Top Finishing",
    grade_en: "White Cement Based Polymer Putty",
    grade_hi: "व्हाइट सीमेंट आधारित पॉलिमर पुट्टी",
    application_en: "Interior and exterior plaster walls before painting",
    application_hi: "पेंट करने से पहले अंदरूनी व बाहरी दीवारों पर",
    packaging: "20 kg & 40 kg Bags",
    features_en: ["Binds strongly with base plaster", "Prevents paint flaking and water seepage blisters", "Provides ultra-bright smooth white canvas for paint"],
    features_hi: ["प्लास्टर के साथ मजबूत पकड़", "पेंट को पपड़ी बनकर छूटने से रोके", "पेंट के रंगों को दे शानदार चमक"],
    price_indicator: "₹720 - ₹820 / 40kg Bag",
    icon: "sparkles"
  }
];

// Daily Benchmark Rates Table Data
const dailyRatesData = [
  {
    item_en: "UltraTech Super Cement (PPC)",
    item_hi: "अल्ट्राटेक सुपर सीमेंट (पीपीसी)",
    brand: "UltraTech",
    rate_en: "₹365 - ₹380 / Bag",
    rate_hi: "₹365 - ₹380 / बोरी",
    discount_en: "₹10/bag off on 100+ bags",
    discount_hi: "100+ बोरी पर ₹10/बोरी की विशेष छूट",
    category: "cement"
  },
  {
    item_en: "Dalmia DSP Heavy Duty (Dhalai Special)",
    item_hi: "डालमिया डीएसपी (ढलाई स्पेशल)",
    brand: "Dalmia Bharat",
    rate_en: "₹375 - ₹395 / Bag",
    rate_hi: "₹375 - ₹395 / बोरी",
    discount_en: "Free on-site delivery on full truckload",
    discount_hi: "फुल ट्रकलोड पर मुफ्त ऑन-साइट डिलीवरी",
    category: "cement"
  },
  {
    item_en: "ACC Concrete+ Suraksha",
    item_hi: "एसीसी कंक्रीट+ सुरक्षा",
    brand: "ACC Limited",
    rate_en: "₹360 - ₹378 / Bag",
    rate_hi: "₹360 - ₹378 / बोरी",
    discount_en: "Special Contractor bulk rate",
    discount_hi: "ठेकेदारों के लिए विशेष थोक दर",
    category: "cement"
  },
  {
    item_en: "Tata Tiscon 550D TMT Saria (10mm/12mm)",
    item_hi: "टाटा टिस्कॉन 550D सरिया (10mm/12mm)",
    brand: "Tata Steel",
    rate_en: "₹63 - ₹67 / Kg (Market Linked)",
    rate_hi: "₹63 - ₹67 / किग्रा (दैनिक भाव)",
    discount_en: "Zero weighbridge fee + free binding wire on 5T",
    discount_hi: "धर्मकांटा पर्ची फ्री + 5 टन पर बाइंडिंग वायर फ्री",
    category: "steel"
  },
  {
    item_en: "Jindal Panther Fe 550D TMT Rebar",
    item_hi: "जिंदल पैंथर Fe 550D सरिया",
    brand: "Jindal Steel",
    rate_en: "₹59 - ₹63 / Kg (Market Linked)",
    rate_hi: "₹59 - ₹63 / किग्रा (दैनिक भाव)",
    discount_en: "Bulk tier rate for residential builders",
    discount_hi: "गृह निर्माताओं के लिए थोक दर",
    category: "steel"
  },
  {
    item_en: "Clean Screened River Sand (बालू)",
    item_hi: "साफ नदी बालू (चालित रेत)",
    brand: "Direct Quarry",
    rate_en: "₹40 - ₹46 / CFT",
    rate_hi: "₹40 - ₹46 / सीएफटी",
    discount_en: "Discounted rates for 10-wheeler Hyva loads",
    discount_hi: "10-चक्का हाइवा लोड पर विशेष छूट",
    category: "sand_gitti"
  },
  {
    item_en: "20mm Black Basalt Stone Aggregate (गिट्टी)",
    item_hi: "20mm काली पक्की पत्थर गिट्टी",
    brand: "Crushed Basalt",
    rate_en: "₹44 - ₹52 / CFT",
    rate_hi: "₹44 - ₹52 / सीएफटी",
    discount_en: "Bundle sand + gitti combo discount",
    discount_hi: "बालू + गिट्टी कॉम्बो बुकिंग पर बचत",
    category: "sand_gitti"
  },
  {
    item_en: "No. 1 Kiln Red Clay Bricks (पक्की ईंट)",
    item_hi: "नंबर 1 भट्ठा पक्की लाल ईंट",
    brand: "Traditional Kiln",
    rate_en: "₹9.00 - ₹10.20 / Piece",
    rate_hi: "₹9.00 - ₹10.20 / पीस",
    discount_en: "Free unloading for 5,000+ pcs",
    discount_hi: "5,000+ ईंट पर अनलोडिंग फ्री",
    category: "bricks"
  }
];

function renderCatalog(filter = 'all') {
  const container = document.getElementById('products-grid');
  if (!container) return;

  const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';
  
  const filtered = filter === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === filter);

  let html = '';

  filtered.forEach(prod => {
    const name = currentLang === 'hi' ? prod.name_hi : prod.name_en;
    const tag = currentLang === 'hi' ? prod.tag_hi : prod.tag_en;
    const grade = currentLang === 'hi' ? prod.grade_hi : prod.grade_en;
    const app = currentLang === 'hi' ? prod.application_hi : prod.application_en;
    const features = currentLang === 'hi' ? prod.features_hi : prod.features_en;
    const inquireText = currentLang === 'hi' ? 'व्हाट्सएप पर रेट पूछें' : 'Inquire Wholesale Price';
    const gradeLabel = currentLang === 'hi' ? 'ग्रेड / मानक:' : 'Grade / Spec:';
    const appLabel = currentLang === 'hi' ? 'उपयुक्तता:' : 'Ideal For:';

    const whatsappMsg = encodeURIComponent(
      `Hello Lal Baba Traders, I am inquiring about current price and delivery for: ${prod.name_en} (${prod.brand}) in Deoghar/Jasidih.`
    );

    html += `
      <div class="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-amber-500/40">
        <div>
          <!-- Card Header -->
          <div class="p-6 border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white relative">
            <div class="flex items-start justify-between gap-2 mb-2">
              <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                ${prod.brand}
              </span>
              <span class="inline-block px-3 py-1 text-xs font-bold rounded-full bg-amber-500/15 text-amber-800 border border-amber-500/30">
                ${prod.badge}
              </span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
              ${name}
            </h3>
            <p class="text-xs font-medium text-slate-500 mt-1 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-amber-500 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              ${tag}
            </p>
          </div>

          <!-- Specs Table -->
          <div class="p-6 space-y-3 text-sm text-slate-600">
            <div class="flex items-baseline justify-between border-b border-slate-100 pb-2">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">${gradeLabel}</span>
              <span class="font-semibold text-slate-800 text-right">${grade}</span>
            </div>
            <div class="flex items-baseline justify-between border-b border-slate-100 pb-2">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">${appLabel}</span>
              <span class="font-semibold text-slate-800 text-right text-xs max-w-[65%]">${app}</span>
            </div>
            <div class="flex items-baseline justify-between pb-2">
              <span class="text-xs font-medium text-slate-400 uppercase tracking-wider">Pack:</span>
              <span class="text-xs font-medium text-slate-700">${prod.packaging}</span>
            </div>

            <!-- Bullet highlights -->
            <div class="pt-2">
              <ul class="space-y-1.5 text-xs text-slate-600">
                ${features.map(f => `
                  <li class="flex items-start gap-1.5">
                    <svg class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>${f}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>

        <!-- Footer CTA -->
        <div class="p-6 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span class="text-[11px] block uppercase font-medium text-slate-400">${currentLang === 'hi' ? 'दैनिक भाव' : 'Benchmark'}</span>
            <span class="text-sm font-bold text-slate-900">${prod.price_indicator}</span>
          </div>
          <a href="https://wa.me/919431125489?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer" 
             class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm transition-all transform hover:-translate-y-0.5">
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.122-.533-1.825-.762-2.983-2.617-3.074-2.738-.09-.121-.738-.983-.738-1.874 0-.89.467-1.328.633-1.507.167-.179.365-.224.486-.224.122 0 .243.002.348.007.112.006.262-.042.41.314.152.366.52 1.272.565 1.364.046.091.076.198.016.319-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.47 1.01 1.009 1.49 1.157 1.031 1.408 1.031 1.606 1.198.197.167.313.142.435.002.121-.14.524-.611.664-.823.14-.212.28-.176.467-.107.188.069 1.189.561 1.393.663.204.102.34.152.39.237.05.086.05.498-.094.903z"/></svg>
            ${inquireText}
          </a>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderDailyRates() {
  const tbody = document.getElementById('daily-rates-tbody');
  const mobileContainer = document.getElementById('daily-rates-mobile-cards');
  if (!tbody && !mobileContainer) return;

  const currentLang = window.getCurrentLang ? window.getCurrentLang() : 'en';
  let tableHtml = '';
  let mobileHtml = '';

  dailyRatesData.forEach(row => {
    const item = currentLang === 'hi' ? row.item_hi : row.item_en;
    const rate = currentLang === 'hi' ? row.rate_hi : row.rate_en;
    const discount = currentLang === 'hi' ? row.discount_hi : row.discount_en;
    const btnText = currentLang === 'hi' ? 'व्हाट्सएप ऑर्डर' : 'Book on WhatsApp';

    const whatsappMsg = encodeURIComponent(
      `Hello Lal Baba Traders, I would like to book order for: ${row.item_en} at today's rate in Deoghar.`
    );

    // Desktop Table Row
    tableHtml += `
      <tr class="border-b border-slate-200/80 hover:bg-amber-50/40 transition-colors">
        <td class="py-4 px-6 font-semibold text-slate-900 flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0"></span>
          ${item}
        </td>
        <td class="py-4 px-6 text-slate-600 font-medium">
          <span class="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-semibold text-slate-700">
            ${row.brand}
          </span>
        </td>
        <td class="py-4 px-6 font-bold text-slate-900">
          ${rate}
        </td>
        <td class="py-4 px-6 text-emerald-700 text-xs font-bold">
          ${discount}
        </td>
        <td class="py-4 px-6 text-right">
          <a href="https://wa.me/919431125489?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer"
             class="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-amber-500 hover:text-slate-900 transition-colors">
            ${btnText}
            <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.122-.533-1.825-.762-2.983-2.617-3.074-2.738-.09-.121-.738-.983-.738-1.874 0-.89.467-1.328.633-1.507.167-.179.365-.224.486-.224.122 0 .243.002.348.007.112.006.262-.042.41.314.152.366.52 1.272.565 1.364.046.091.076.198.016.319-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.47 1.01 1.009 1.49 1.157 1.031 1.408 1.031 1.606 1.198.197.167.313.142.435.002.121-.14.524-.611.664-.823.14-.212.28-.176.467-.107.188.069 1.189.561 1.393.663.204.102.34.152.39.237.05.086.05.498-.094.903z"/></svg>
          </a>
        </td>
      </tr>
    `;

    // Mobile Card
    mobileHtml += `
      <div class="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col justify-between space-y-3">
        <div class="flex items-start justify-between gap-2">
          <div>
            <span class="inline-block px-2 py-0.5 rounded text-[11px] font-bold bg-slate-100 text-slate-700 mb-1">
              ${row.brand}
            </span>
            <h4 class="font-bold text-slate-900 text-sm sm:text-base leading-snug">
              ${item}
            </h4>
          </div>
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1"></span>
        </div>

        <div class="flex items-baseline justify-between pt-1 border-t border-slate-100">
          <div>
            <span class="text-[10px] uppercase font-bold text-slate-400 block">${currentLang === 'hi' ? 'दैनिक भाव' : 'Benchmark Rate'}</span>
            <span class="text-base font-extrabold text-slate-900">${rate}</span>
          </div>
          <div class="text-right">
            <span class="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded-md border border-emerald-200/60 inline-block">
              ${discount}
            </span>
          </div>
        </div>

        <a href="https://wa.me/919431125489?text=${whatsappMsg}" target="_blank" rel="noopener noreferrer"
           class="w-full py-2.5 rounded-xl font-bold text-xs bg-emerald-600 active:bg-emerald-700 text-white flex items-center justify-center gap-2 shadow-sm">
          <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-2.122-.533-1.825-.762-2.983-2.617-3.074-2.738-.09-.121-.738-.983-.738-1.874 0-.89.467-1.328.633-1.507.167-.179.365-.224.486-.224.122 0 .243.002.348.007.112.006.262-.042.41.314.152.366.52 1.272.565 1.364.046.091.076.198.016.319-.061.121-.092.197-.183.303-.091.106-.192.237-.274.318-.091.091-.186.19-.08.372.106.182.47 1.01 1.009 1.49 1.157 1.031 1.408 1.031 1.606 1.198.197.167.313.142.435.002.121-.14.524-.611.664-.823.14-.212.28-.176.467-.107.188.069 1.189.561 1.393.663.204.102.34.152.39.237.05.086.05.498-.094.903z"/></svg>
          <span>${btnText}</span>
        </a>
      </div>
    `;
  });

  if (tbody) tbody.innerHTML = tableHtml;
  if (mobileContainer) mobileContainer.innerHTML = mobileHtml;
}

function initCatalog() {
  renderCatalog('all');
  renderDailyRates();

  // Filter Buttons
  const filterBtns = document.querySelectorAll('.catalog-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-slate-900', 'shadow-md');
        b.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
      });
      btn.classList.add('bg-amber-500', 'text-slate-900', 'shadow-md');
      btn.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');

      const filterCategory = btn.getAttribute('data-filter');
      renderCatalog(filterCategory);
    });
  });

  // Re-render when language toggles
  window.addEventListener('languageChanged', () => {
    const activeBtn = document.querySelector('.catalog-filter-btn.bg-amber-500');
    const category = activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    renderCatalog(category);
    renderDailyRates();
  });
}

window.initCatalog = initCatalog;
window.renderCatalog = renderCatalog;
window.renderDailyRates = renderDailyRates;
