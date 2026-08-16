/**
 * Testimonials Component
 * Section: Merchant & partner case studies.
 * Horizontal scroll-snap carousel — distinct interaction model from the static
 * card grids used elsewhere, closer to how real commerce sites show social proof.
 */

const CASES = [
  {
    quote: 'Switching our ad spend to Alimama\u2019s AI bidding cut acquisition cost by a third in the first quarter, without touching our team\u2019s headcount.',
    name: 'Mei Lin Chen',
    role: 'Head of Growth, homeware brand on Tmall',
    metric: '-33%',
    metricLabel: 'Acquisition cost'
  },
  {
    quote: 'We moved our inference workloads to Bailian Model Studio and shipped a support-agent product in three weeks instead of the two quarters we\u2019d budgeted.',
    name: 'Rafael Duarte',
    role: 'CTO, fintech scale-up on Alibaba Cloud',
    metric: '3 wks',
    metricLabel: 'Time to launch'
  },
  {
    quote: 'Cainiao\u2019s Istanbul hub took our average delivery window from eleven days to five. Return rates dropped because customers stopped cancelling out of impatience.',
    name: 'Ana Kowalski',
    role: 'Operations Lead, apparel seller on Trendyol',
    metric: '5 days',
    metricLabel: 'Avg. delivery time'
  },
  {
    quote: 'DingTalk\u2019s agent studio now handles first-line HR queries for our 4,000-person plant network. Our people team finally has room to do actual people work.',
    name: 'Sanjay Verma',
    role: 'VP People Ops, manufacturing group',
    metric: '4,000+',
    metricLabel: 'Employees served'
  }
];

export function renderTestimonials(containerId = 'testimonials-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="testimonials" class="py-24 sm:py-32 relative bg-section-obsidian border-b border-white/5 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-14 reveal">
          <div class="section-kicker">
            <span class="kicker-index">06 — PROOF</span>
            <span class="kicker-line"></span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Built for people running <span class="text-gradient-cyan">real operations</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light mt-4">
            A handful of the merchants, developers, and operators shipping on top of the ecosystem today.
          </p>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="testimonial-scroller" class="flex gap-6 overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 snap-x snap-mandatory no-scrollbar">
          ${CASES.map(c => `
            <div class="lift-card glass-panel snap-start shrink-0 w-[85%] sm:w-[420px] rounded-3xl p-8 border border-white/10 flex flex-col justify-between">
              <div>
                <i class="fa-solid fa-quote-left text-[#FF6A00]/40 text-2xl mb-4"></i>
                <p class="pull-quote text-lg text-gray-100 leading-relaxed font-medium">${c.quote}</p>
              </div>
              <div class="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div class="text-sm font-bold text-white">${c.name}</div>
                  <div class="text-xs text-gray-400">${c.role}</div>
                </div>
                <div class="text-right">
                  <div class="text-xl font-extrabold font-display text-[#FF6A00]">${c.metric}</div>
                  <div class="text-[10px] text-gray-500 uppercase tracking-wide">${c.metricLabel}</div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Scroll hint dots -->
        <div class="flex items-center justify-center gap-2 mt-2">
          ${CASES.map((_, i) => `<span class="w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#FF6A00]' : 'bg-white/15'}"></span>`).join('')}
        </div>
      </div>
    </section>
  `;
}
