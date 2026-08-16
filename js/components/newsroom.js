/**
 * Newsroom Component
 * Section: Press & Newsroom Highlights.
 * Editorial list layout (not another stat-card grid) — dateline, tag, headline, dek.
 */

const NEWS_ITEMS = [
  {
    date: 'Jul 28, 2026',
    tag: 'Product',
    tagColor: '#00F0FF',
    headline: 'Qwen 3 rolls out agentic tool-use to every Model Studio tier',
    dek: 'Enterprise developers can now chain multi-step tool calls natively, cutting custom orchestration code by half in early pilots.'
  },
  {
    date: 'Jul 14, 2026',
    tag: 'Logistics',
    tagColor: '#A855F7',
    headline: 'Cainiao opens its 9th smart eHub, this time in Nairobi',
    dek: 'The East Africa hub extends 5-day cross-border delivery coverage to a new set of markets ahead of the Q4 peak season.'
  },
  {
    date: 'Jun 30, 2026',
    tag: 'Sustainability',
    tagColor: '#10B981',
    headline: 'Group data centers hit 62% renewable-matched compute',
    dek: 'Progress against the 2030 carbon-neutral pledge, driven by new solar power purchase agreements across three regions.'
  },
  {
    date: 'Jun 09, 2026',
    tag: 'Earnings',
    tagColor: '#FFB800',
    headline: 'Q1 FY2027: Cloud segment margin turns double-digit',
    dek: 'Alibaba Cloud posted its strongest quarter yet on AI-inference demand, while international commerce narrowed losses.'
  }
];

export function renderNewsroom(containerId = 'newsroom-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="newsroom" class="py-24 sm:py-32 relative bg-section-charcoal border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div class="max-w-xl">
            <div class="section-kicker">
              <span class="kicker-index">05 — NEWSROOM</span>
              <span class="kicker-line"></span>
            </div>
            <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Latest from the <span class="text-gradient-orange">newsroom</span>
            </h2>
          </div>
          <a href="#" class="text-sm font-semibold text-[#FF6A00] hover:text-white flex items-center gap-2 transition-colors shrink-0">
            View all press releases <i class="fa-solid fa-arrow-right text-xs"></i>
          </a>
        </div>

        <div class="divide-y divide-white/10 border-t border-b border-white/10 reveal-stagger">
          ${NEWS_ITEMS.map(item => `
            <a href="#" class="group grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-7 items-baseline hover:bg-white/[0.03] transition-colors -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-xl">
              <span class="md:col-span-2 text-xs font-mono text-gray-500">${item.date}</span>
              <span class="md:col-span-2">
                <span class="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border" style="color: ${item.tagColor}; border-color: ${item.tagColor}40; background: ${item.tagColor}12;">
                  ${item.tag}
                </span>
              </span>
              <span class="md:col-span-6">
                <h3 class="text-lg font-bold text-white group-hover:text-[#FF6A00] transition-colors leading-snug">${item.headline}</h3>
                <p class="text-xs text-gray-400 mt-1.5 leading-relaxed max-w-lg">${item.dek}</p>
              </span>
              <span class="md:col-span-2 flex md:justify-end">
                <i class="fa-solid fa-arrow-up-right text-gray-500 group-hover:text-[#FF6A00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"></i>
              </span>
            </a>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
