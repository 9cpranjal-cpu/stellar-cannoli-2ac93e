/**
 * FAQBanner Component
 * Section: Frequently asked questions (accordion) + closing conversion banner.
 */

const FAQS = [
  {
    q: 'How is Alibaba Group structured today?',
    a: 'Since the 2023 restructuring, the Group operates as six primary business units — China Commerce, International Commerce, Cloud & Qwen AI, Cainiao, Digital Media, and Local Services & Innovation — each with its own leadership and the ability to raise outside capital or list independently.'
  },
  {
    q: 'Can I use Qwen models outside of Alibaba Cloud?',
    a: 'Yes. Qwen 2.5 and Qwen 3 weights are released open-source and can be self-hosted. For managed hosting, autoscaling, and enterprise SLAs, Bailian Model Studio wraps the same models with a hosted API.'
  },
  {
    q: 'What delivery times can international sellers expect via Cainiao?',
    a: 'Choice-tier cross-border shipments through AliExpress typically land within 5 business days to major hubs in Europe, North America, and Southeast Asia, backed by Cainiao\u2019s smart eHub network.'
  },
  {
    q: 'How does the Group approach data privacy across regions?',
    a: 'Data handling follows local requirements in each market of operation, including China\u2019s PIPL and the EU\u2019s GDPR, with regional data localization and encryption-at-rest across cloud availability zones.'
  }
];

export function renderFAQBanner(containerId = 'faq-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="faq" class="py-24 sm:py-32 relative bg-section-navy border-b border-white/5">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div class="text-center max-w-2xl mx-auto mb-14 reveal">
          <div class="section-kicker justify-center">
            <span class="kicker-index">08 — FAQ</span>
            <span class="kicker-line"></span>
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Questions, answered
          </h2>
        </div>

        <div id="faq-list" class="space-y-3 mb-24 reveal-stagger">
          ${FAQS.map((item, i) => `
            <div class="faq-item glass-panel rounded-2xl border border-white/10 overflow-hidden">
              <button data-faq="${i}" class="faq-trigger w-full flex items-center justify-between gap-4 text-left px-6 py-5">
                <span class="text-sm sm:text-base font-semibold text-white">${item.q}</span>
                <i class="fa-solid fa-plus text-[#FF6A00] text-sm shrink-0 transition-transform duration-300 faq-icon"></i>
              </button>
              <div class="faq-panel grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
                <div class="overflow-hidden">
                  <p class="px-6 pb-5 text-sm text-gray-400 leading-relaxed">${item.a}</p>
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Closing Conversion Banner -->
        <div class="relative rounded-[2rem] overflow-hidden border border-white/15 p-10 sm:p-16 text-center reveal">
          <div class="absolute inset-0 bg-gradient-to-br from-[#FF6A00]/20 via-transparent to-[#00F0FF]/10 -z-10"></div>
          <div class="absolute -top-24 -right-24 w-72 h-72 bg-[#FF6A00]/25 rounded-full blur-[100px] -z-10"></div>
          <h3 class="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight max-w-2xl mx-auto">
            Ready to build on the ecosystem?
          </h3>
          <p class="text-gray-300 text-sm sm:text-base mt-4 max-w-xl mx-auto font-light">
            Talk to our team about merchant onboarding, cloud enterprise agreements, or investor relations.
          </p>
          <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="#contact" class="px-8 py-4 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white font-bold text-sm shadow-[0_0_30px_rgba(255,106,0,0.4)] hover:shadow-[0_0_40px_rgba(255,106,0,0.6)] hover:scale-[1.02] transition-all duration-300">
              Talk to our team
            </a>
            <a href="#ecosystem" class="px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300">
              Explore business units
            </a>
          </div>
        </div>

      </div>
    </section>
  `;

  container.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.parentElement.querySelector('.faq-panel');
      const icon = btn.querySelector('.faq-icon');
      const isOpen = panel.style.gridTemplateRows === '1fr';

      container.querySelectorAll('.faq-panel').forEach(p => p.style.gridTemplateRows = '0fr');
      container.querySelectorAll('.faq-icon').forEach(i => i.style.transform = 'rotate(0deg)');

      if (!isOpen) {
        panel.style.gridTemplateRows = '1fr';
        icon.style.transform = 'rotate(45deg)';
      }
    });
  });
}
