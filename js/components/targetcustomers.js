/**
 * TargetCustomers Component
 * Section 3: Target Customer Segmentation (MSMEs, Wholesale Buyers, Retail Consumers, Enterprise Cloud Clients).
 */

export function renderTargetCustomers(containerId = 'target-customers-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="target-customers" class="py-24 sm:py-32 relative overflow-hidden bg-section-obsidian border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-users-viewfinder"></i> Target Customer Segmentation
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Target Customer <span class="text-gradient-gold">Segmentation</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Mapping out the multi-sided market segments served across consumer marketplaces, B2B wholesale trade, and enterprise AI cloud infrastructure.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger">
          
          <!-- Segment 1: MSMEs & Brands -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-[#FF6A00]/40 transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-store"></i>
              </div>
              <span class="text-xs font-bold text-[#FF6A00] bg-[#FF6A00]/10 px-3 py-1 rounded-full border border-[#FF6A00]/30"><span class="stat-counter" data-target="10" data-suffix=" Million+ Merchants">0</span></span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">1. MSMEs & Brand Retailers</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Micro, Small, and Medium Enterprises (MSMEs) and Fortune 500 global brands utilizing Taobao, Tmall, and Lazada to establish storefronts, manage inventory, run AI advertising campaigns, and access millions of shoppers.
            </p>

            <div class="pt-4 border-t border-white/10 space-y-2">
              <div class="text-xs text-gray-400 font-semibold uppercase">Key Value Proposition:</div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-[#FF6A00]"></i> Zero-threshold digital storefront setup & Alimama AI marketing tools.
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-[#FF6A00]"></i> Direct access to 900M+ high-intent domestic consumer base.
              </div>
            </div>
          </div>

          <!-- Segment 2: Individual Retail Consumers -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-[#FFB800]/40 transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-cart-shopping"></i>
              </div>
              <span class="text-xs font-bold text-[#FFB800] bg-[#FFB800]/10 px-3 py-1 rounded-full border border-[#FFB800]/30"><span class="stat-counter" data-target="1.3" data-decimals="1" data-suffix=" Billion+ Consumers">0</span></span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">2. Global Retail Shoppers</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Individual consumers in China, Southeast Asia, Europe, and Latin America seeking high-quality domestic and cross-border goods with live-stream entertainment, instant escrow payments, and guaranteed fast delivery.
            </p>

            <div class="pt-4 border-t border-white/10 space-y-2">
              <div class="text-xs text-gray-400 font-semibold uppercase">Key Value Proposition:</div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-[#FFB800]"></i> Unmatched product variety, live-stream discounts, and 88VIP loyalty perks.
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-[#FFB800]"></i> 5-day global express delivery via AliExpress Choice & Cainiao.
              </div>
            </div>
          </div>

          <!-- Segment 3: Global B2B Wholesale Buyers -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-[#00F0FF]/40 transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-boxes-packing"></i>
              </div>
              <span class="text-xs font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-3 py-1 rounded-full border border-[#00F0FF]/30"><span class="stat-counter" data-target="200" data-suffix="+ Countries Sourcing">0</span></span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">3. Global B2B Wholesale Importers</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              International wholesale buyers, drop-shippers, and manufacturing procurement managers using Alibaba.com and 1688.com to source bulk inventory, custom OEM manufacturing, and trade assurance logistics.
            </p>

            <div class="pt-4 border-t border-white/10 space-y-2">
              <div class="text-xs text-gray-400 font-semibold uppercase">Key Value Proposition:</div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-[#00F0FF]"></i> Trade Assurance buyer protection & verified factory inspections.
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-[#00F0FF]"></i> Real-time AI translation & automated cross-border customs clearance.
              </div>
            </div>
          </div>

          <!-- Segment 4: Enterprise Cloud & AI Clients -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 space-y-4 hover:border-purple-400/40 transition-all">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-server"></i>
              </div>
              <span class="text-xs font-bold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/30"><span class="stat-counter" data-target="300000" data-suffix="+ Enterprise Clients">0</span></span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">4. Enterprise Cloud & AI Developers</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Corporations, financial institutions, tech unicorns (80% of China's tech unicorns), and AI developers deploying cloud infrastructure, databases, and Qwen 2.5/3 foundation models on Alibaba Cloud.
            </p>

            <div class="pt-4 border-t border-white/10 space-y-2">
              <div class="text-xs text-gray-400 font-semibold uppercase">Key Value Proposition:</div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-purple-400"></i> Full-stack AI compute, Bailian Model Studio RAG, and low-latency cloud.
              </div>
              <div class="flex items-center gap-2 text-xs text-gray-200">
                <i class="fa-solid fa-check text-purple-400"></i> Open-source Qwen LLM weights and carbon-neutral data centers.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
