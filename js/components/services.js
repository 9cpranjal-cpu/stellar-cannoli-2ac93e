/**
 * Services Component
 * Section 2: Services Offered (B2B/B2C/C2C E-Commerce, Cloud, Cainiao Logistics, Alipay, Digital Media).
 */

export function renderServices(containerId = 'services-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="services" class="py-24 sm:py-32 relative overflow-hidden bg-section-obsidian border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-cubes"></i> Global Business Services
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Comprehensive <span class="text-gradient-cyan">Services Portfolio</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Alibaba Group operates an interconnected service stack spanning digital commerce, payment escrow, hyperscale cloud computing, smart logistics, and entertainment media.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-stagger">
          
          <!-- Service 1: B2B/B2C/C2C Commerce -->
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-4 group hover:border-[#FF6A00]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-bag-shopping"></i>
            </div>
            <h3 class="text-xl font-bold font-display text-white">Digital Commerce Platforms</h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Operating China's largest C2C marketplace (Taobao), premier B2C brand mall (Tmall), domestic B2B wholesale (1688), and international portals (Lazada, AliExpress, Miravia).
            </p>
            <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">B2C Retail</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">C2C Commerce</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Cross-Border</span>
            </div>
          </div>

          <!-- Service 2: Hyperscale Cloud & AI Infrastructure -->
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-4 group hover:border-[#00F0FF]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-cloud-bolt"></i>
            </div>
            <h3 class="text-xl font-bold font-display text-white">Alibaba Cloud & AI Infra</h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Providing elastic compute, high-performance database hosting (PolarDB/OceanBase), big data analytics (MaxCompute), and Qwen open-source LLM inference APIs globally.
            </p>
            <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-[#00F0FF] font-mono">Qwen 2.5 API</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">PolarDB</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Model Studio</span>
            </div>
          </div>

          <!-- Service 3: Cainiao Smart Logistics -->
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-4 group hover:border-purple-400/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <h3 class="text-xl font-bold font-display text-white">Cainiao Smart Logistics</h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Powering 5-day global express shipping, automated AGV robotics warehouses, smart package tracking, and last-mile pickup stations in 200+ countries.
            </p>
            <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-purple-400 font-mono">5-Day Global</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Smart eHubs</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">AGV Robotics</span>
            </div>
          </div>

          <!-- Service 4: Alipay Payment Integration -->
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-4 group hover:border-blue-400/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-wallet"></i>
            </div>
            <h3 class="text-xl font-bold font-display text-white">Digital Payments (Alipay)</h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Strategic partnership with Ant Group's Alipay escrow ecosystem, enabling seamless mobile payments, merchant credit, cross-border currency conversion, and instant settlement.
            </p>
            <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-blue-400 font-mono">Ant Group Partnership</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Escrow Trust</span>
            </div>
          </div>

          <!-- Service 5: Digital Media & Entertainment -->
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-4 group hover:border-pink-400/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-pink-500/20 text-pink-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-clapperboard"></i>
            </div>
            <h3 class="text-xl font-bold font-display text-white">Digital Media & Streaming</h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Operating Youku video streaming, Alibaba Pictures cinematic distribution, and Damai live performance ticketing, creating synergy with consumer retail memberships.
            </p>
            <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-pink-400 font-mono">Youku</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Damai</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Alibaba Pictures</span>
            </div>
          </div>

          <!-- Service 6: Local Lifestyle Services -->
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-4 group hover:border-emerald-400/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-location-arrow"></i>
            </div>
            <h3 class="text-xl font-bold font-display text-white">Local Services & Navigation</h3>
            <p class="text-xs text-gray-300 leading-relaxed">
              Amap (Gaode Maps) location-based navigation, Ele.me instant food & grocery delivery, Fliggy travel booking, and DingTalk enterprise AI workspace.
            </p>
            <div class="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-emerald-400 font-mono">Amap (Gaode)</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">Ele.me</span>
              <span class="px-2.5 py-1 rounded bg-white/5 text-[11px] text-gray-300 font-mono">DingTalk OS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
