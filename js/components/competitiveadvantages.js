/**
 * CompetitiveAdvantages Component
 * Section 6: Competitive Advantages Matrix (Network Effects, Supply-Chain Integration, Ecosystem Loops, AI R&D).
 */

export function renderCompetitiveAdvantages(containerId = 'advantages-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="advantages" class="py-24 sm:py-32 relative overflow-hidden bg-section-obsidian border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-trophy"></i> Competitive Moats & Leadership
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Competitive <span class="text-gradient-orange">Moats & Advantages</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Evaluating the four strategic pillars that form Alibaba Group's formidable competitive moat in the global technology landscape.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger">
          
          <!-- Advantage 1: Network Effects -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-[#FF6A00]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-diagram-project"></i>
            </div>
            <h3 class="text-2xl font-bold font-display text-white">1. Massive Multi-Sided Network Effects</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              With over 1.3 billion active consumers and 10 million merchants, every new merchant attracts more consumers, and every consumer attracts more merchants, creating a self-reinforcing flywheel that drives down customer acquisition costs.
            </p>
            <div class="pt-2 text-xs text-[#FF6A00] font-mono font-bold">Moat Strength: High Flywheel Scale</div>
          </div>

          <!-- Advantage 2: Cainiao Supply Chain Integration -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-purple-400/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <h3 class="text-2xl font-bold font-display text-white">2. Deep Cainiao Supply Chain Integration</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Unlike pure marketplace competitors, Cainiao operates global smart eHubs (Belgium, Hong Kong, Malaysia) and automated AGV warehouses, enabling 5-day cross-border shipping at unmatched unit economics.
            </p>
            <div class="pt-2 text-xs text-purple-400 font-mono font-bold">Moat Strength: End-to-End Infrastructure</div>
          </div>

          <!-- Advantage 3: Localized Ecosystem Loops -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-[#FFB800]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-infinity"></i>
            </div>
            <h3 class="text-2xl font-bold font-display text-white">3. Closed-Loop Synergistic Ecosystem</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Seamless cross-pollination between Taobao shopping, Alipay escrow payments, Amap navigation, Youku entertainment, and 88VIP subscription memberships locks in consumer mindshare and loyalty.
            </p>
            <div class="pt-2 text-xs text-[#FFB800] font-mono font-bold">Moat Strength: High Switching Costs</div>
          </div>

          <!-- Advantage 4: Heavy R&D in Open-Source AI -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-[#00F0FF]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center text-xl font-bold">
              <i class="fa-solid fa-microchip"></i>
            </div>
            <h3 class="text-2xl font-bold font-display text-white">4. AI R&D Supremacy & Open Qwen LLM</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Continuous multi-billion dollar R&D investment in AI foundation models positions Alibaba Cloud as APAC's #1 cloud provider, capturing enterprise developer mindshare via the open Qwen ecosystem.
            </p>
            <div class="pt-2 text-xs text-[#00F0FF] font-mono font-bold">Moat Strength: Technological Leadership</div>
          </div>

        </div>

      </div>
    </section>
  `;
}
