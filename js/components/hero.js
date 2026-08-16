/**
 * Hero Component
 * Immersive landing hero showcasing Alibaba Group's corporate mission, live AI status, and animated stat counters.
 */

export function renderHero(containerId = 'hero-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="hero" class="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-section-obsidian border-b border-white/5">
      <!-- Background Ambient Glow Orbs -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6A00]/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-glow"></div>
      <div class="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#00F0FF]/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Column: Mission & Hero Text -->
          <div class="lg:col-span-7 space-y-8 text-left reveal">
            
            <!-- Live Badge Ticker -->
            <div class="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border border-[#FF6A00]/30 shadow-[0_0_20px_rgba(255,106,0,0.15)]">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A00] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6A00]"></span>
              </span>
              <span class="text-xs font-semibold tracking-wide uppercase text-gray-200">
                FY2026 Enterprise Briefing & Ecosystem Architecture
              </span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.05]">
              Architecting Global <br />
              <span class="text-gradient-orange">Commerce & Cloud</span> <br />
              Intelligence.
            </h1>

            <!-- Subheading -->
            <p class="text-lg sm:text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
              Empowering over <strong class="text-white font-semibold"><span class="stat-counter" data-target="1.3" data-decimals="1" data-suffix=" Billion">0</span> Global Consumers</strong> and hundreds of thousands of enterprises worldwide through intelligent commerce, AI infrastructure, and end-to-end logistics.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap items-center gap-4 pt-2">
              <a href="#ecosystem" class="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white font-bold text-base shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] hover:scale-[1.02] transition-all duration-300 flex items-center gap-3">
                <span>Explore Business Units</span>
                <i class="fa-solid fa-arrow-down text-sm"></i>
              </a>

              <a href="#revenue" class="px-8 py-4 rounded-xl glass-panel text-white font-semibold text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2">
                <i class="fa-solid fa-chart-pie text-[#FF6A00]"></i>
                <span>Financial Model</span>
              </a>
            </div>

            <!-- Key Metric Highlights Row with Animated Counters -->
            <div class="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  $<span class="stat-counter" data-target="130.4" data-decimals="1" data-suffix="B+">0</span>
                </div>
                <div class="text-xs text-gray-400 font-medium">Annual Revenue</div>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold font-display text-[#FF6A00]">
                  <span class="stat-counter" data-target="1.3" data-decimals="1" data-suffix="B+">0</span>
                </div>
                <div class="text-xs text-gray-400 font-medium">Global Consumers</div>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-extrabold font-display text-[#00F0FF]">Qwen 2.5</div>
                <div class="text-xs text-gray-400 font-medium">Flagship AI Engine</div>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Ecosystem Hub Widget -->
          <div class="lg:col-span-5 relative reveal" style="transition-delay:0.15s">
            <div class="relative glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl animate-float">
              
              <div class="flex items-center justify-between pb-6 border-b border-white/10">
                <div class="flex items-center gap-3">
                  <div class="w-3 h-3 rounded-full bg-[#FF6A00]"></div>
                  <span class="text-xs font-bold tracking-widest text-gray-300 uppercase">Live Ecosystem Hub</span>
                </div>
                <span class="text-xs text-[#00F0FF] font-mono bg-[#00F0FF]/10 px-2.5 py-1 rounded-full border border-[#00F0FF]/30">Active Nodes: 6 Core</span>
              </div>

              <div class="grid grid-cols-2 gap-4 my-6">
                
                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/50 hover:bg-white/10 transition-all cursor-pointer group" onclick="if(window.setActiveEcosystemTab) window.setActiveEcosystemTab('china-commerce'); document.getElementById('ecosystem').scrollIntoView({behavior: 'smooth'})">
                  <div class="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-store text-lg"></i>
                  </div>
                  <h4 class="text-sm font-bold text-white mb-1">China Commerce</h4>
                  <p class="text-xs text-gray-400">Taobao & Tmall Group</p>
                </div>

                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/50 hover:bg-white/10 transition-all cursor-pointer group" onclick="if(window.setActiveEcosystemTab) window.setActiveEcosystemTab('cloud-ai'); document.getElementById('ecosystem').scrollIntoView({behavior: 'smooth'})">
                  <div class="w-10 h-10 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-cloud text-lg"></i>
                  </div>
                  <h4 class="text-sm font-bold text-white mb-1">Alibaba Cloud</h4>
                  <p class="text-xs text-gray-400">Qwen AI Infrastructure</p>
                </div>

                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/50 hover:bg-white/10 transition-all cursor-pointer group" onclick="if(window.setActiveEcosystemTab) window.setActiveEcosystemTab('intl-commerce'); document.getElementById('ecosystem').scrollIntoView({behavior: 'smooth'})">
                  <div class="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-earth-americas text-lg text-[#FFB800]"></i>
                  </div>
                  <h4 class="text-sm font-bold text-white mb-1">Intl. Commerce</h4>
                  <p class="text-xs text-gray-400">Lazada & AliExpress</p>
                </div>

                <div class="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF6A00]/50 hover:bg-white/10 transition-all cursor-pointer group" onclick="if(window.setActiveEcosystemTab) window.setActiveEcosystemTab('cainiao'); document.getElementById('ecosystem').scrollIntoView({behavior: 'smooth'})">
                  <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <i class="fa-solid fa-truck-fast text-lg"></i>
                  </div>
                  <h4 class="text-sm font-bold text-white mb-1">Cainiao Network</h4>
                  <p class="text-xs text-gray-400">Smart Logistics</p>
                </div>

              </div>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                <span class="flex items-center gap-1.5">
                  <i class="fa-solid fa-shield-halved text-[#FF6A00]"></i> Global Compliance Standard
                </span>
                <span class="text-gray-300 font-mono">NYSE: BABA | 9988.HK</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
