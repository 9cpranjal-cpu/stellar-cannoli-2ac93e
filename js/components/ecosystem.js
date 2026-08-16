/**
 * Ecosystem Component
 * Interactive tabbed & grid interface exploring Alibaba Group's 6 core business units.
 */

export const ECOSYSTEM_DATA = [
  {
    id: 'china-commerce',
    name: 'China Commerce',
    icon: 'fa-store',
    tagline: 'Domestic Consumer Ecosystem & Digital Marketplaces',
    color: '#FF6A00',
    brands: ['Taobao', 'Tmall', 'Taobao Deals', '1688.com', 'Freshippo'],
    revenueShare: '46%',
    activeUsers: '900M+',
    merchants: '10M+',
    description: 'The foundation of Alibaba Group, operating China’s premier digital retail platforms Taobao and Tmall, pioneering live-stream shopping, AI consumer personalization, and manufacturer-to-consumer (M2C) commerce.',
    highlights: [
      'Generative AI search and recommendations boosting conversion rates by 28%',
      'Taobao Live stream ecosystem powering over $75B in annual GMV',
      'Instant retail delivery integration through Taobao Now'
    ],
    details: {
      strategy: 'Enhancing user engagement through interactive content, live-streaming, and value-for-money propositions while empowering SMB merchants with AI marketing tools.',
      keyTech: 'Recommendation engines, high-concurrency peak load balancing (100M+ QPS during 11.11), visual search.',
      headquarters: 'Hangzhou, China'
    }
  },
  {
    id: 'intl-commerce',
    name: 'International Commerce',
    icon: 'fa-earth-americas',
    tagline: 'Cross-Border & Regional E-Commerce Platforms',
    color: '#FF9E00',
    brands: ['Lazada', 'AliExpress', 'Trendyol', 'Daraz', 'Miravia', 'Alibaba.com'],
    revenueShare: '12%',
    activeUsers: '300M+',
    merchants: '1M+',
    description: 'Connecting global brands and merchants with consumers across Southeast Asia, Europe, Turkey, South Asia, and worldwide B2B buyers through localized platforms and cross-border logistics.',
    highlights: [
      'AliExpress Choice offering guaranteed 5-day global delivery in key hubs',
      'Lazada leading digital commerce across 6 major Southeast Asian economies',
      'Trendyol driving market leadership in Turkey and expanding into EMEA'
    ],
    details: {
      strategy: 'Accelerating cross-border delivery speeds, expanding localized marketplace experiences, and scaling B2B wholesale via Alibaba.com.',
      keyTech: 'Multi-lingual real-time translation AI, localized payment gateway integrations, intelligent inventory distribution.',
      headquarters: 'Singapore & Hangzhou'
    }
  },
  {
    id: 'cloud-ai',
    name: 'Alibaba Cloud & Qwen AI',
    icon: 'fa-brain',
    tagline: 'Enterprise Cloud Computing & Open-Source AI Supremacy',
    color: '#00F0FF',
    brands: ['Alibaba Cloud', 'Qwen (Tongyi Qianwen)', 'Model Studio', 'MaxCompute', 'Elastic Compute Service'],
    revenueShare: '14%',
    activeUsers: '300,000+ Enterprise Clients',
    merchants: '80% of China Tech Unicorns',
    description: 'Asia-Pacific’s #1 cloud provider and global pioneer in AI foundation models. Home to the open-source Qwen LLM series, empowering enterprises, developers, and autonomous systems with high-density compute.',
    highlights: [
      'Qwen 2.5 & Qwen 3 LLMs outperforming leading benchmarks in coding, math, and multi-modal tasks',
      'Bailian (Model Studio) AI platform serving over 90,000 enterprise applications',
      'Carbon-neutral hyper-scale data centers across 30 region availability zones worldwide'
    ],
    details: {
      strategy: 'AI-First cloud infrastructure strategy, lowering developer LLM inference costs while offering full-stack compute, storage, and database solutions.',
      keyTech: 'Qwen foundation models, PAI (Platform for AI), Apsara Cloud OS, MaxCompute analytics.',
      headquarters: 'Hangzhou & Global Regions'
    }
  },
  {
    id: 'cainiao',
    name: 'Cainiao Smart Logistics',
    icon: 'fa-truck-fast',
    tagline: 'Global Logistics Network & Automated Supply Chain',
    color: '#A855F7',
    brands: ['Cainiao Express', 'Cainiao Global', 'Smart Station', 'Automated Hubs'],
    revenueShare: '11%',
    activeUsers: '100M+ Daily Packages',
    merchants: 'Worldwide Fulfillment',
    description: 'Operating a global smart logistics network providing 5-day cross-border delivery, automated sorting hubs, green packaging, and last-mile pickup points across 200+ countries.',
    highlights: [
      'Smart eHubs at key transport junctions including Hong Kong, Liege, and Kuala Lumpur',
      'Real-time IoT package tracking handling tens of billions of parcels annually',
      'Automated AGV robotics warehouses processing 2M+ units per day'
    ],
    details: {
      strategy: 'Strengthening global cross-border logistics leadership, expanding 72-hour worldwide delivery capabilities, and digitizing domestic last-mile stations.',
      keyTech: 'IoT package route optimization, autonomous delivery rovers, automated sorting robotics.',
      headquarters: 'Hangzhou, China'
    }
  },
  {
    id: 'digital-media',
    name: 'Digital Media & Entertainment',
    icon: 'fa-film',
    tagline: 'Streaming Content, Film Production & Ticketing',
    color: '#EC4899',
    brands: ['Youku', 'Alibaba Pictures', 'Damai', 'Shuqiu'],
    revenueShare: '7%',
    activeUsers: '250M+ Streaming Viewers',
    merchants: 'Top Entertainment Studios',
    description: 'Providing premium video streaming, cinematic distribution, live performance ticketing, and digital IP creation across Greater China and international content markets.',
    highlights: [
      'Youku leading premium series streaming and AI digital human content creation',
      'Alibaba Pictures co-producing top grossing global & domestic theatrical blockbusters',
      'Damai dominating China’s live concert and event ticketing sector'
    ],
    details: {
      strategy: 'Combining original IP creation with AI-powered video production tools and cross-ecosystem membership benefits.',
      keyTech: 'AI video upscaling, Virtual Production LED soundstages, smart ticketing anti-scalping.',
      headquarters: 'Beijing & Hangzhou'
    }
  },
  {
    id: 'innovation-ventures',
    name: 'Innovation & Local Services',
    icon: 'fa-compass-drafting',
    tagline: 'Navigation, On-Demand Delivery & Workplace SaaS',
    color: '#10B981',
    brands: ['Amap (Gaode Maps)', 'Ele.me', 'Fliggy', 'DingTalk', 'Quark'],
    revenueShare: '10%',
    activeUsers: '800M+ Amap Monthly Users',
    merchants: 'Millions of Local Merchants',
    description: 'Powering everyday consumer life and corporate productivity through Amap navigation, Ele.me local food/grocery delivery, Fliggy travel booking, and DingTalk enterprise collaboration.',
    highlights: [
      'Amap reaching over 160M daily active users for ride-hailing and location services',
      'DingTalk powering digital workplace workflows for over 700M corporate users',
      'Ele.me on-demand delivery expanding 30-minute instant retail coverage'
    ],
    details: {
      strategy: 'Building a unified local lifestyle ecosystem around Amap while scaling DingTalk as the AI enterprise workplace OS.',
      keyTech: 'LBS (Location-Based Services) routing algorithms, DingTalk AI Agent Studio, on-demand dispatch.',
      headquarters: 'Hangzhou & Beijing'
    }
  }
];

export function renderEcosystem(containerId = 'ecosystem-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  let activeTabId = 'cloud-ai'; // Default featured tab

  function getTabMarkup() {
    const current = ECOSYSTEM_DATA.find(item => item.id === activeTabId) || ECOSYSTEM_DATA[0];

    return `
      <section id="ecosystem" class="py-24 sm:py-32 relative overflow-hidden bg-section-navy border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Section Header -->
          <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-bold uppercase tracking-widest">
              <i class="fa-solid fa-cubes"></i> Core Business Architecture
            </div>
            <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              The Alibaba <span class="text-gradient-orange">Digital Ecosystem</span>
            </h2>
            <p class="text-gray-300 text-base sm:text-lg font-light">
              Explore how our 6 core business groups collaborate seamlessly to deliver retail, cloud computing, AI, and global logistics solutions.
            </p>
          </div>

          <!-- Tab Selector Bar -->
          <div class="flex overflow-x-auto no-scrollbar gap-2.5 p-2 px-6 sm:px-8 mb-8 border-b border-white/10 justify-start md:justify-center flex-nowrap md:flex-wrap max-w-full scroll-pl-6">
            ${ECOSYSTEM_DATA.map(item => `
              <button 
                data-tab-id="${item.id}"
                class="ecosystem-tab-btn tab-btn shrink-0 px-5 py-3 rounded-xl font-medium text-sm whitespace-nowrap transition-all duration-300 flex items-center gap-2.5 ${item.id === activeTabId ? 'bg-white/10 text-white shadow-lg border border-white/20 active' : 'text-gray-400 hover:text-white hover:bg-white/5'}"
              >
                <i class="fa-solid ${item.icon}" style="color: ${item.color}"></i>
                <span>${item.name}</span>
              </button>
            `).join('')}
          </div>

          <!-- Tab Content Display Card -->
          <div class="glass-panel lift-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <!-- Left Detail Column -->
              <div class="lg:col-span-7 space-y-6">
                
                <div class="flex items-center gap-3">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-lg" style="background: ${current.color}20; color: ${current.color}; border: 1px solid ${current.color}40">
                    <i class="fa-solid ${current.icon}"></i>
                  </div>
                  <div>
                    <h3 class="text-2xl sm:text-3xl font-bold font-display text-white">${current.name}</h3>
                    <p class="text-xs text-gray-400 font-medium">${current.tagline}</p>
                  </div>
                </div>

                <p class="text-gray-300 text-base leading-relaxed">
                  ${current.description}
                </p>

                <!-- Key Highlights List -->
                <div class="space-y-3 pt-2">
                  <h4 class="text-xs uppercase font-bold text-gray-400 tracking-wider">Strategic Performance Highlights</h4>
                  ${current.highlights.map(hl => `
                    <div class="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                      <i class="fa-solid fa-circle-check text-[#FF6A00] text-sm mt-0.5"></i>
                      <span class="text-sm text-gray-200">${hl}</span>
                    </div>
                  `).join('')}
                </div>

                <!-- Brand Logos/Badges -->
                <div class="pt-4">
                  <h4 class="text-xs uppercase font-bold text-gray-400 tracking-wider mb-3">Key Ecosystem Brands</h4>
                  <div class="flex flex-wrap gap-2">
                    ${current.brands.map(brand => `
                      <span class="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-semibold text-white border border-white/10 hover:border-[#FF6A00]/50 transition-colors">
                        ${brand}
                      </span>
                    `).join('')}
                  </div>
                </div>

              </div>

              <!-- Right Metrics & Modal Trigger Column -->
              <div class="lg:col-span-5 space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                
                <h4 class="text-sm uppercase font-bold text-white tracking-wider flex items-center gap-2">
                  <i class="fa-solid fa-chart-line text-[#FF6A00]"></i> Segment Financial Overview
                </h4>

                <div class="space-y-4">
                  <div class="p-4 rounded-xl bg-[#0a0a0c]/60 border border-white/10 flex items-center justify-between">
                    <span class="text-xs text-gray-400">Group Revenue Share</span>
                    <span class="text-xl font-bold font-display text-white" style="color: ${current.color}">${current.revenueShare}</span>
                  </div>

                  <div class="p-4 rounded-xl bg-[#0a0a0c]/60 border border-white/10 flex items-center justify-between">
                    <span class="text-xs text-gray-400">Consumer / Client Scale</span>
                    <span class="text-base font-bold text-white">${current.activeUsers}</span>
                  </div>

                  <div class="p-4 rounded-xl bg-[#0a0a0c]/60 border border-white/10 flex items-center justify-between">
                    <span class="text-xs text-gray-400">Merchant Network</span>
                    <span class="text-base font-bold text-gray-200">${current.merchants}</span>
                  </div>
                </div>

                <!-- Deep-Dive Modal Button -->
                <button 
                  id="open-ecosystem-modal"
                  data-unit-id="${current.id}"
                  class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white font-bold text-sm shadow-lg hover:shadow-[0_0_25px_rgba(255,106,0,0.4)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Deep-Dive Strategy & Tech Specs</span>
                  <i class="fa-solid fa-angles-right text-xs"></i>
                </button>

              </div>

            </div>

          </div>

        </div>
      </section>
    `;
  }

  function bindEvents() {
    container.querySelectorAll('.ecosystem-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tabId = e.currentTarget.getAttribute('data-tab-id');
        if (tabId && tabId !== activeTabId) {
          activeTabId = tabId;
          updateView();
        }
      });
    });

    const modalBtn = container.querySelector('#open-ecosystem-modal');
    if (modalBtn) {
      modalBtn.addEventListener('click', () => {
        const unitId = modalBtn.getAttribute('data-unit-id');
        const unitData = ECOSYSTEM_DATA.find(u => u.id === unitId);
        if (unitData && window.openDetailModal) {
          window.openDetailModal(unitData);
        }
      });
    }
  }

  function updateView() {
    container.innerHTML = getTabMarkup();
    bindEvents();
  }

  window.setActiveEcosystemTab = function(tabId) {
    if (tabId && ECOSYSTEM_DATA.some(item => item.id === tabId)) {
      activeTabId = tabId;
      updateView();
    }
  };

  updateView();
}
