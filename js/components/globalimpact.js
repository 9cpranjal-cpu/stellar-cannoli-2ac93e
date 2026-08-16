/**
 * GlobalImpact Component
 * Live animated stats ticker & responsive embedded SVG growth trend chart.
 */

export function renderGlobalImpact(containerId = 'metrics-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="metrics" class="py-24 sm:py-32 relative overflow-hidden bg-section-navy border-b border-white/5">
      <!-- Background Decorative Grid -->
      <div class="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Section Title -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-earth-asia"></i> Scale & Trust Architecture
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Global Impact & <span class="text-gradient-orange">Scale Metrics</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Connecting commerce networks, logistics nodes, and cloud availability zones across six continents.
          </p>
        </div>

        <!-- 4 Key Stat Tickers Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 reveal-stagger">
          
          <!-- Metric 1 -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 text-center space-y-2 group hover:border-[#FF6A00]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#FF6A00]/10 text-[#FF6A00] mx-auto flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-sack-dollar"></i>
            </div>
            <div class="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              $<span class="stat-counter" data-target="130" data-suffix="B+">0</span>
            </div>
            <div class="text-xs font-bold text-gray-300 uppercase tracking-wider">Annual Group Revenue</div>
            <p class="text-[11px] text-gray-400">Consolidated across FY2025/2026 reporting</p>
          </div>

          <!-- Metric 2 -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 text-center space-y-2 group hover:border-[#FFB800]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#FFB800]/10 text-[#FFB800] mx-auto flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-users text-[#FFB800]"></i>
            </div>
            <div class="text-4xl sm:text-5xl font-extrabold font-display text-[#FFB800] tracking-tight">
              <span class="stat-counter" data-target="1300" data-suffix="M+">0</span>
            </div>
            <div class="text-xs font-bold text-gray-300 uppercase tracking-wider">Global Active Consumers</div>
            <p class="text-[11px] text-gray-400">Domestic China & international cross-border shoppers</p>
          </div>

          <!-- Metric 3 -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 text-center space-y-2 group hover:border-[#00F0FF]/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-[#00F0FF]/10 text-[#00F0FF] mx-auto flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-globe"></i>
            </div>
            <div class="text-4xl sm:text-5xl font-extrabold font-display text-[#00F0FF] tracking-tight">
              <span class="stat-counter" data-target="200" data-suffix="+">0</span>
            </div>
            <div class="text-xs font-bold text-gray-300 uppercase tracking-wider">Countries & Territories</div>
            <p class="text-[11px] text-gray-400">Served by Cainiao global express network</p>
          </div>

          <!-- Metric 4 -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-white/10 text-center space-y-2 group hover:border-purple-400/40 transition-all">
            <div class="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 mx-auto flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform">
              <i class="fa-solid fa-building-user"></i>
            </div>
            <div class="text-4xl sm:text-5xl font-extrabold font-display text-purple-400 tracking-tight">
              <span class="stat-counter" data-target="300" data-suffix="K+">0</span>
            </div>
            <div class="text-xs font-bold text-gray-300 uppercase tracking-wider">Enterprise Cloud Clients</div>
            <p class="text-[11px] text-gray-400">Leveraging Alibaba Cloud & Qwen AI infrastructure</p>
          </div>

        </div>

        <!-- Embedded SVG Growth Trend Line Chart -->
        <div class="glass-panel lift-card p-8 rounded-3xl border border-white/15 shadow-2xl relative space-y-6">
          <div class="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 class="text-lg font-bold text-white flex items-center gap-2">
              <i class="fa-solid fa-chart-line text-[#FF6A00]"></i> Global Ecosystem Growth Trend (2018 - 2026)
            </h3>
            <span class="text-xs text-[#00F0FF] font-mono">Consolidated GMV ($ Billions)</span>
          </div>

          <div class="w-full h-64 relative">
            <svg viewBox="0 0 600 200" class="w-full h-full">
              <!-- Grid Lines -->
              <line x1="40" y1="30" x2="580" y2="30" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"></line>
              <line x1="40" y1="80" x2="580" y2="80" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"></line>
              <line x1="40" y1="130" x2="580" y2="130" stroke="rgba(255,255,255,0.08)" stroke-dasharray="4"></line>
              <line x1="40" y1="170" x2="580" y2="170" stroke="rgba(255,255,255,0.15)"></line>

              <!-- Gradient Fill Under Curve -->
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#FF6A00" stop-opacity="0.4"/>
                  <stop offset="100%" stop-color="#FF6A00" stop-opacity="0.0"/>
                </linearGradient>
              </defs>

              <path d="M 50 150 Q 150 120, 250 90 T 450 40 L 550 30 L 550 170 L 50 170 Z" fill="url(#chartGradient)"></path>
              <!-- Trend Line -->
              <path d="M 50 150 Q 150 120, 250 90 T 450 40 L 550 30" fill="none" stroke="#FF6A00" stroke-width="4" stroke-linecap="round"></path>

              <!-- Data Point Markers -->
              <circle cx="50" cy="150" r="5" fill="#FF6A00" stroke="#FFF" stroke-width="2"></circle>
              <circle cx="175" cy="115" r="5" fill="#FF6A00" stroke="#FFF" stroke-width="2"></circle>
              <circle cx="300" cy="80" r="5" fill="#FF6A00" stroke="#FFF" stroke-width="2"></circle>
              <circle cx="425" cy="45" r="5" fill="#FF6A00" stroke="#FFF" stroke-width="2"></circle>
              <circle cx="550" cy="30" r="6" fill="#00F0FF" stroke="#FFF" stroke-width="2"></circle>

              <!-- Axis Labels -->
              <text x="45" y="190" fill="#9CA3AF" font-size="10">2018 ($768B)</text>
              <text x="170" y="190" fill="#9CA3AF" font-size="10">2020 ($1,000B)</text>
              <text x="295" y="190" fill="#9CA3AF" font-size="10">2022 ($1,200B)</text>
              <text x="420" y="190" fill="#9CA3AF" font-size="10">2024 ($1,310B)</text>
              <text x="535" y="190" fill="#00F0FF" font-size="10" font-weight="bold">2026 Projection</text>
            </svg>
          </div>
        </div>

      </div>
    </section>
  `;

  // Animate stat counters using IntersectionObserver
  const counters = container.querySelectorAll('.stat-counter');
  let animated = false;

  function runCounters() {
    if (animated) return;
    animated = true;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 2000;
      const stepTime = 30;
      const increment = Math.ceil(target / (duration / stepTime));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        counter.textContent = current.toLocaleString() + suffix;
      }, stepTime);
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        runCounters();
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
}
