/**
 * StrategicRecommendations Component
 * Prominent corporate section placed right before the footer detailing forward-looking strategic advice for Alibaba Group.
 */

export function renderStrategicRecommendations(containerId = 'strategic-recommendations-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="strategic-recommendations" class="py-24 sm:py-32 relative overflow-hidden bg-section-obsidian border-b border-white/5">
      <!-- Decorative Background Glow -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#FF6A00]/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-compass-drafting"></i> Corporate Advisory & Roadmap
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Strategic Growth Recommendations for <span class="text-gradient-orange">Alibaba Group</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Forward-looking strategic imperatives designed to fortify market leadership across global cross-border commerce, enterprise AI agent monetization, and ecosystem data synergies.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 reveal-stagger">
          
          <!-- Pillar 1: Accelerating Global Cross-Border Expansion -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/15 space-y-6 hover:border-[#FF6A00]/50 transition-all flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6A00]/20 to-[#FF9E00]/20 text-[#FF6A00] flex items-center justify-center text-2xl font-bold border border-[#FF6A00]/30 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-earth-europe"></i>
              </div>

              <h3 class="text-2xl font-bold font-display text-white">1. Accelerating Global Cross-Border Expansion</h3>
              <p class="text-sm text-gray-300 leading-relaxed font-light">
                Scale localized fintech, escrow payment gateways, and Cainiao smart eHub logistics nodes across emerging markets in <strong class="text-white">Southeast Europe, Latin America, and Middle East</strong> to establish delivery superiority over regional rivals.
              </p>

              <ul class="space-y-2 pt-2 text-xs text-gray-300">
                <li class="flex items-center gap-2">
                  <i class="fa-solid fa-check-double text-[#FF6A00]"></i> Expand 5-Day Express Delivery via Cainiao Liege & Istanbul Hubs.
                </li>
                <li class="flex items-center gap-2">
                  <i class="fa-solid fa-check-double text-[#FF6A00]"></i> Localize Miravia & Trendyol seller fulfillment networks.
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span class="text-gray-400">Target Horizon: 2026 - 2028</span>
              <span class="text-[#FF6A00] font-bold">Priority: Critical</span>
            </div>
          </div>

          <!-- Pillar 2: Deepening Enterprise AI Integration -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/15 space-y-6 hover:border-[#00F0FF]/50 transition-all flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00F0FF]/20 to-[#70F3FF]/20 text-[#00F0FF] flex items-center justify-center text-2xl font-bold border border-[#00F0FF]/30 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-microchip"></i>
              </div>

              <h3 class="text-2xl font-bold font-display text-white">2. Deepening Enterprise AI Integration</h3>
              <p class="text-sm text-gray-300 leading-relaxed font-light">
                Expand Qwen AI monetized enterprise subscription tiers, low-code industrial agent suites, and RAG vector pipelines via <strong class="text-white">Bailian Model Studio</strong> to capture high-margin software & cloud revenues.
              </p>

              <ul class="space-y-2 pt-2 text-xs text-gray-300">
                <li class="flex items-center gap-2">
                  <i class="fa-solid fa-check-double text-[#00F0FF]"></i> Deploy Qwen 2.5 / 3 LLM agents across DingTalk enterprise OS.
                </li>
                <li class="flex items-center gap-2">
                  <i class="fa-solid fa-check-double text-[#00F0FF]"></i> Automate merchant ad creation & supply chain optimization.
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span class="text-gray-400">Target Horizon: Immediate</span>
              <span class="text-[#00F0FF] font-bold">Priority: High Margin</span>
            </div>
          </div>

          <!-- Pillar 3: Optimizing Core Ecosystem Synergy -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/15 space-y-6 hover:border-[#FFB800]/50 transition-all flex flex-col justify-between group">
            <div class="space-y-4">
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFB800]/20 to-[#FFD700]/20 text-[#FFB800] flex items-center justify-center text-2xl font-bold border border-[#FFB800]/30 group-hover:scale-110 transition-transform">
                <i class="fa-solid fa-infinity"></i>
              </div>

              <h3 class="text-2xl font-bold font-display text-white">3. Optimizing Core Ecosystem Synergy</h3>
              <p class="text-sm text-gray-300 leading-relaxed font-light">
                Enhance unified user identity passes and cross-platform data loops between <strong class="text-white">China Commerce (Taobao/Tmall)</strong> and international assets (Lazada/AliExpress) to maximize global customer lifetime value (LTV).
              </p>

              <ul class="space-y-2 pt-2 text-xs text-gray-300">
                <li class="flex items-center gap-2">
                  <i class="fa-solid fa-check-double text-[#FFB800]"></i> Integrate 88VIP loyalty privileges across global marketplaces.
                </li>
                <li class="flex items-center gap-2">
                  <i class="fa-solid fa-check-double text-[#FFB800]"></i> Synergize Amap LBS data with Ele.me on-demand logistics.
                </li>
              </ul>
            </div>

            <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
              <span class="text-gray-400">Target Horizon: Continuous</span>
              <span class="text-[#FFB800] font-bold">Priority: Retention</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
