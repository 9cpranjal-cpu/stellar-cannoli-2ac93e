/**
 * Overview Component
 * Section 1: Company Overview, Founding History in Hangzhou (1999), Mission & Corporate Vision.
 */

export function renderOverview(containerId = 'overview-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="overview" class="py-24 sm:py-32 relative overflow-hidden bg-section-charcoal border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-building"></i> Corporate Overview & Heritage
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Company Overview & <span class="text-gradient-orange">Founding Vision</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Founded in a Hangzhou apartment in 1999 by Jack Ma and 17 co-founders, Alibaba Group evolved from a modest B2B marketplace into the world's premier digital commerce and AI cloud conglomerate.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <!-- Mission Statement & Core Values Card -->
          <div class="lg:col-span-6 space-y-6">
            
            <div class="glass-panel lift-card p-8 rounded-3xl border border-white/15 relative overflow-hidden space-y-4">
              <div class="w-12 h-12 rounded-2xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-xl font-bold border border-[#FF6A00]/30">
                <i class="fa-solid fa-quote-left"></i>
              </div>

              <h3 class="text-2xl font-bold font-display text-white">Our Enduring Mission</h3>

              <blockquote class="text-xl text-[#FF6A00] font-semibold italic leading-snug">
                "To make it easy to do business anywhere."
              </blockquote>

              <p class="text-sm text-gray-300 leading-relaxed font-light">
                Alibaba Group provides the fundamental technology infrastructure and marketing reach to help merchants, brands, and creators leverage the power of new digital tools and AI intelligence to engage with their users and customers globally.
              </p>

              <div class="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>Vision Target: 102 Years (Spanning 3 Centuries)</span>
                <span class="text-[#FF6A00]">1999 — 2101</span>
              </div>
            </div>

            <!-- 3 Pillars Grid -->
            <div class="grid grid-cols-3 gap-4">
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div class="text-2xl font-extrabold text-[#FF6A00] font-display">1999</div>
                <div class="text-[11px] text-gray-400 mt-1 font-semibold">Hangzhou Launch</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div class="text-2xl font-extrabold text-[#FFB800] font-display">2014</div>
                <div class="text-[11px] text-gray-400 mt-1 font-semibold">Record NYSE IPO</div>
              </div>
              <div class="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
                <div class="text-2xl font-extrabold text-[#00F0FF] font-display">2026+</div>
                <div class="text-[11px] text-gray-400 mt-1 font-semibold">AI-First Leader</div>
              </div>
            </div>

          </div>

          <!-- Evolutionary History Timeline Rail -->
          <div class="lg:col-span-6 space-y-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-2 mb-6">
              <i class="fa-solid fa-clock-rotate-left text-[#FF6A00]"></i> Milestone Evolution Timeline
            </h3>

            <div class="timeline-rail">

              <div class="timeline-node">
                <div class="text-xs font-mono text-[#FF6A00] font-bold mb-1">1999 · Hangzhou</div>
                <h4 class="text-sm font-bold text-white">Alibaba.com B2B Marketplace Launch</h4>
                <p class="text-xs text-gray-400 mt-1 max-w-md">Founded by Jack Ma in Hangzhou to connect Chinese small manufacturers with global international buyers.</p>
              </div>

              <div class="timeline-node">
                <div class="text-xs font-mono text-[#FFB800] font-bold mb-1">2003 – 2004</div>
                <h4 class="text-sm font-bold text-white">Taobao Marketplace & Alipay Innovation</h4>
                <p class="text-xs text-gray-400 mt-1 max-w-md">Created Taobao C2C marketplace to empower domestic consumers and introduced Alipay escrow payments to resolve trust deficit.</p>
              </div>

              <div class="timeline-node">
                <div class="text-xs font-mono text-[#00F0FF] font-bold mb-1">2009</div>
                <h4 class="text-sm font-bold text-white">Alibaba Cloud & Inaugural 11.11 Shopping Festival</h4>
                <p class="text-xs text-gray-400 mt-1 max-w-md">Pioneered cloud computing in Asia and launched the world's largest annual global e-commerce shopping event.</p>
              </div>

              <div class="timeline-node">
                <div class="text-xs font-mono text-purple-400 font-bold mb-1">2024 – 2026</div>
                <h4 class="text-sm font-bold text-white">Qwen Open-Source AI Supremacy & Restructuring</h4>
                <p class="text-xs text-gray-400 mt-1 max-w-md">Transitioned to 6 independent business units and released Qwen 2.5/3 open-source LLMs powering developer ecosystems globally.</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
