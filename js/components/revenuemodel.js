/**
 * RevenueModel Component
 * Monetization Architecture featuring Animated SVG Donut Chart & Universal Scroll-Triggered Counters.
 */

export function renderRevenueModel(containerId = 'revenue-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  let baseGMV = 1300; 

  function calculateBreakdown(gmv) {
    const p4p = Math.round(gmv * 0.032 * 10) / 10;        // ~$41.6B at 1300 base
    const commission = Math.round(gmv * 0.027 * 10) / 10; // ~$35.1B at 1300 base
    const cloud = Math.round(gmv * 0.015 * 10) / 10;      // ~$19.5B at 1300 base
    const logistics = Math.round(gmv * 0.014 * 10) / 10;  // ~$18.2B at 1300 base
    const totalRev = Math.round((p4p + commission + cloud + logistics) * 10) / 10; // ~$114.4B

    return { p4p, commission, cloud, logistics, totalRev };
  }

  function getMarkup() {
    const stats = calculateBreakdown(baseGMV);

    return `
      <section id="revenue" class="py-24 sm:py-32 relative overflow-hidden bg-section-charcoal border-b border-white/5">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <!-- Header -->
          <div class="text-center space-y-4 max-w-3xl mx-auto mb-16">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold uppercase tracking-widest">
              <i class="fa-solid fa-chart-pie"></i> Monetization Engine
            </div>
            <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Enterprise <span class="text-gradient-gold">Revenue Architecture</span>
            </h2>
            <p class="text-gray-300 text-base sm:text-lg font-light">
              Analyzing Alibaba's four primary revenue drivers: merchant search advertising (P4P), marketplace commissions, cloud subscription licensing, and Cainiao fulfillment fees.
            </p>
          </div>

          <!-- Top Row: Animated SVG Donut Chart & Revenue Driver Breakdown -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            
            <!-- Animated Responsive SVG Donut Chart -->
            <div class="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/15 flex flex-col items-center justify-center space-y-6">
              <h3 class="text-base font-bold text-white flex items-center gap-2">
                <i class="fa-solid fa-chart-donut text-[#FF6A00]"></i> Revenue Distribution Breakout
              </h3>

              <div class="relative w-64 h-64 flex items-center justify-center" id="donut-chart-container">
                <svg viewBox="0 0 100 100" class="w-full h-full transform -rotate-90">
                  <!-- Segment 1: P4P Ads (36%) -->
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FF6A00" stroke-width="14" stroke-dasharray="36 64" stroke-dashoffset="0" class="donut-slice animate-donut-slice hover:opacity-80 transition-opacity cursor-pointer"></circle>
                  <!-- Segment 2: Commissions (31%) -->
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#FFB800" stroke-width="14" stroke-dasharray="31 69" stroke-dashoffset="-36" class="donut-slice animate-donut-slice hover:opacity-80 transition-opacity cursor-pointer"></circle>
                  <!-- Segment 3: Cloud (17%) -->
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#00F0FF" stroke-width="14" stroke-dasharray="17 83" stroke-dashoffset="-67" class="donut-slice animate-donut-slice hover:opacity-80 transition-opacity cursor-pointer"></circle>
                  <!-- Segment 4: Logistics (16%) -->
                  <circle cx="50" cy="50" r="38" fill="transparent" stroke="#A855F7" stroke-width="14" stroke-dasharray="16 84" stroke-dashoffset="-84" class="donut-slice animate-donut-slice hover:opacity-80 transition-opacity cursor-pointer"></circle>
                </svg>

                <div class="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                  <span class="text-xs text-gray-400 font-semibold uppercase">Total Revenue</span>
                  <span class="text-2xl font-extrabold font-display text-white">
                    $<span class="stat-counter" data-target="${stats.totalRev}" data-decimals="1" data-suffix="B">0</span>
                  </span>
                </div>
              </div>

              <!-- Legend with Animated Percentages -->
              <div class="grid grid-cols-2 gap-3 text-xs w-full pt-2 border-t border-white/10">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#FF6A00]"></span>
                  <span class="text-gray-300 font-medium">P4P Ads (<span class="stat-counter" data-target="36" data-suffix="%">0</span>)</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#FFB800]"></span>
                  <span class="text-gray-300 font-medium">Commissions (<span class="stat-counter" data-target="31" data-suffix="%">0</span>)</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-[#00F0FF]"></span>
                  <span class="text-gray-300 font-medium">Cloud AI (<span class="stat-counter" data-target="17" data-suffix="%">0</span>)</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-purple-500"></span>
                  <span class="text-gray-300 font-medium">Cainiao (<span class="stat-counter" data-target="16" data-suffix="%">0</span>)</span>
                </div>
              </div>

            </div>

            <!-- Detailed Monetization Mechanics Grid with Animated Counters -->
            <div class="lg:col-span-7 space-y-4">
              
              <!-- Driver 1 -->
              <div class="glass-panel lift-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center font-bold">
                    <i class="fa-solid fa-rectangle-ad"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Merchant Search Ads & P4P Auctions</h4>
                    <p class="text-xs text-gray-400">Pay-for-Performance keyword bidding and Alimama live-stream promotion.</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-lg font-extrabold font-display text-[#FF6A00]">
                    $<span class="stat-counter" data-target="${stats.p4p}" data-decimals="1" data-suffix="B">0</span>
                  </span>
                  <div class="text-[10px] text-gray-400 font-mono">Share: <span class="stat-counter" data-target="36" data-suffix="%">0</span></div>
                </div>
              </div>

              <!-- Driver 2 -->
              <div class="glass-panel lift-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center font-bold">
                    <i class="fa-solid fa-percent"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Marketplace Commission Fees</h4>
                    <p class="text-xs text-gray-400">Percentage transaction fee take rate on completed sales across Tmall & Lazada.</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-lg font-extrabold font-display text-[#FFB800]">
                    $<span class="stat-counter" data-target="${stats.commission}" data-decimals="1" data-suffix="B">0</span>
                  </span>
                  <div class="text-[10px] text-gray-400 font-mono">Share: <span class="stat-counter" data-target="31" data-suffix="%">0</span></div>
                </div>
              </div>

              <!-- Driver 3 -->
              <div class="glass-panel lift-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center font-bold">
                    <i class="fa-solid fa-server"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Cloud Subscriptions & Qwen AI Compute</h4>
                    <p class="text-xs text-gray-400">Enterprise cloud hosting, database capacity, and per-token LLM inference API fees.</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-lg font-extrabold font-display text-[#00F0FF]">
                    $<span class="stat-counter" data-target="${stats.cloud}" data-decimals="1" data-suffix="B">0</span>
                  </span>
                  <div class="text-[10px] text-gray-400 font-mono">Share: <span class="stat-counter" data-target="17" data-suffix="%">0</span></div>
                </div>
              </div>

              <!-- Driver 4 -->
              <div class="glass-panel lift-card p-4 rounded-2xl border border-white/10 flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold">
                    <i class="fa-solid fa-truck-ramp-box"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Cainiao Supply Chain Fulfillment Fees</h4>
                    <p class="text-xs text-gray-400">Cross-border express freight, smart warehousing, and last-mile logistics delivery.</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-lg font-extrabold font-display text-purple-400">
                    $<span class="stat-counter" data-target="${stats.logistics}" data-decimals="1" data-suffix="B">0</span>
                  </span>
                  <div class="text-[10px] text-gray-400 font-mono">Share: <span class="stat-counter" data-target="16" data-suffix="%">0</span></div>
                </div>
              </div>

            </div>

          </div>

          <!-- Bottom: Interactive Revenue Simulator Slider -->
          <div class="glass-panel lift-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl relative space-y-6">
            <div class="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 class="text-lg font-bold text-white flex items-center gap-2">
                <i class="fa-solid fa-sliders text-[#FF6A00]"></i> Ecosystem GMV Simulator
              </h3>
              <span class="text-xs text-[#FF6A00] bg-[#FF6A00]/10 px-2.5 py-1 rounded-full border border-[#FF6A00]/30 font-semibold">Real-Time Calculation</span>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div class="lg:col-span-7 space-y-4">
                <div class="flex justify-between items-center">
                  <label for="gmv-slider" class="text-xs font-semibold text-gray-300 uppercase tracking-wider">
                    Adjust Ecosystem GMV Projection ($ Billion)
                  </label>
                  <span id="gmv-display" class="text-2xl font-extrabold font-display text-[#FF6A00]">$${baseGMV}B</span>
                </div>

                <input 
                  type="range" 
                  id="gmv-slider" 
                  min="500" 
                  max="2500" 
                  step="50" 
                  value="${baseGMV}"
                  class="w-full"
                />

                <div class="flex justify-between text-[11px] text-gray-400 font-mono">
                  <span>$500B</span>
                  <span>$1,300B (Current Base)</span>
                  <span>$2,500B</span>
                </div>
              </div>

              <div class="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 text-center space-y-2">
                <div class="text-xs font-bold uppercase tracking-widest text-gray-300">Projected Total Revenue Output</div>
                <div id="total-rev-display" class="text-4xl sm:text-5xl font-extrabold font-display text-gradient-orange">
                  $${stats.totalRev} Billion
                </div>
                <div class="text-[11px] text-gray-400">Calculated via ~8.8% blended ecosystem monetization take rate</div>
              </div>

            </div>
          </div>

        </div>
      </section>
    `;
  }

  container.innerHTML = getMarkup();

  const slider = container.querySelector('#gmv-slider');
  if (slider) {
    slider.addEventListener('input', (e) => {
      baseGMV = parseInt(e.target.value, 10);
      container.innerHTML = getMarkup();
      renderRevenueModel(containerId);
    });
  }
}
