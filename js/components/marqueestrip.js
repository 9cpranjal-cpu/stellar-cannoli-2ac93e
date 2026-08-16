/**
 * MarqueeStrip Component
 * Infinite-scroll trust bar listing the brand network — a pattern borrowed from
 * real enterprise homepages to signal scale in a single glance, not a slide.
 */

const BRANDS = [
  'Taobao', 'Tmall', '1688.com', 'Alibaba Cloud', 'Qwen AI', 'Lazada',
  'AliExpress', 'Trendyol', 'Cainiao', 'DingTalk', 'Amap', 'Ele.me',
  'Youku', 'Alipay Network', 'Fliggy', 'Freshippo'
];

export function renderMarquee(containerId = 'marquee-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const items = [...BRANDS, ...BRANDS]; // duplicate for seamless loop

  container.innerHTML = `
    <div class="relative py-8 border-y border-white/5 bg-[#070709] overflow-hidden">
      <div class="marquee-mask">
        <div class="marquee-track flex items-center gap-14">
          ${items.map(b => `
            <span class="shrink-0 text-lg sm:text-xl font-bold font-display text-gray-500 hover:text-[#FF6A00] transition-colors tracking-tight whitespace-nowrap">
              ${b}
            </span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
