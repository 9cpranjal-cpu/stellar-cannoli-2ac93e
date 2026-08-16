/**
 * Navigation Component
 * Enterprise sticky navbar featuring Mega Menus and a functional Light/Dark Theme Switcher.
 */

export function renderNavigation(containerId = 'nav-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentTheme = localStorage.getItem('theme') || 'dark';

  container.innerHTML = `
    <header class="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo -->
          <a href="#" class="flex items-center gap-3 group">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6A00] to-[#FF9E00] flex items-center justify-center shadow-[0_0_20px_rgba(255,106,0,0.4)] group-hover:scale-105 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c-2.4 0-4-1.2-4-3 0-1.8 1.4-2.8 3.6-3.1l2.4-.3v-.5c0-.9-.6-1.4-1.8-1.4-1.1 0-1.7.4-2 1.2l-1.8-.7c.6-1.5 2-2.3 3.9-2.3 2.5 0 3.8 1.2 3.8 3.2v4.7h-1.8v-1.1c-.6.8-1.5 1.3-2.3 1.3zm.4-1.6c1.1 0 2-.6 2-1.6v-.8l-2 .3c-1.3.2-2 .8-2 1.6 0 .8.7 1.2 1.5 1.2z"/></svg>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-bold font-display tracking-tight text-white flex items-center gap-1.5">
                ALIBABA <span class="text-[#FF6A00]">GROUP</span>
              </span>
              <span class="text-[10px] tracking-widest text-gray-400 uppercase font-medium">Corporate Investor Portal</span>
            </div>
          </a>

          <!-- Desktop Navigation with Mega Menus -->
          <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
            
            <a href="#overview" class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Overview</a>
            
            <!-- MEGA MENU ITEM 1: Ecosystem Units -->
            <div class="relative nav-item-has-mega">
              <button class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5">
                <span>Ecosystem Units</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
              </button>

              <div class="mega-menu absolute top-full left-0 w-[640px] rounded-2xl p-6 mt-2 grid grid-cols-2 gap-4">
                <a href="#ecosystem" data-ecosystem-target="china-commerce" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF6A00]/40 transition-all group">
                  <div class="flex items-center gap-2.5 mb-1">
                    <i class="fa-solid fa-store text-[#FF6A00]"></i>
                    <span class="text-sm font-bold text-white group-hover:text-[#FF6A00] transition-colors">China Commerce</span>
                  </div>
                  <p class="text-xs text-gray-400">Taobao, Tmall, Taobao Deals & 1688 wholesale.</p>
                </a>

                <a href="#ecosystem" data-ecosystem-target="intl-commerce" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF9E00]/40 transition-all group">
                  <div class="flex items-center gap-2.5 mb-1">
                    <i class="fa-solid fa-earth-americas text-[#FF9E00]"></i>
                    <span class="text-sm font-bold text-white group-hover:text-[#FF9E00] transition-colors">Intl. Commerce</span>
                  </div>
                  <p class="text-xs text-gray-400">Lazada, AliExpress, Trendyol & Miravia Europe.</p>
                </a>

                <a href="#ecosystem" data-ecosystem-target="cloud-ai" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#00F0FF]/40 transition-all group">
                  <div class="flex items-center gap-2.5 mb-1">
                    <i class="fa-solid fa-brain text-[#00F0FF]"></i>
                    <span class="text-sm font-bold text-white group-hover:text-[#00F0FF] transition-colors">Alibaba Cloud & Qwen</span>
                  </div>
                  <p class="text-xs text-gray-400">Qwen 2.5 LLMs, Model Studio & hyperscale compute.</p>
                </a>

                <a href="#ecosystem" data-ecosystem-target="cainiao" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-400/40 transition-all group">
                  <div class="flex items-center gap-2.5 mb-1">
                    <i class="fa-solid fa-truck-fast text-purple-400"></i>
                    <span class="text-sm font-bold text-white group-hover:text-purple-400 transition-colors">Cainiao Logistics</span>
                  </div>
                  <p class="text-xs text-gray-400">5-day global express & automated eHub robotics.</p>
                </a>
              </div>
            </div>

            <!-- MEGA MENU ITEM 2: Corporate Intelligence -->
            <div class="relative nav-item-has-mega">
              <button class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5">
                <span>Corporate Intelligence</span>
                <i class="fa-solid fa-chevron-down text-[10px] text-gray-400"></i>
              </button>

              <div class="mega-menu absolute top-full left-1/2 -translate-x-1/2 w-[720px] rounded-2xl p-6 mt-2 grid grid-cols-3 gap-3">
                <a href="#services" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div class="text-xs font-bold text-[#FF6A00] mb-1">Portfolio</div>
                  <div class="text-sm font-bold text-white">Services Offered</div>
                  <div class="text-[11px] text-gray-400">B2B/B2C, Alipay, Cloud & Media</div>
                </a>

                <a href="#target-customers" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div class="text-xs font-bold text-[#FF6A00] mb-1">Market Reach</div>
                  <div class="text-sm font-bold text-white">Target Customers</div>
                  <div class="text-[11px] text-gray-400">MSMEs, Retail & Enterprise</div>
                </a>

                <a href="#revenue" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div class="text-xs font-bold text-[#FF6A00] mb-1">Financials</div>
                  <div class="text-sm font-bold text-white">Revenue Model</div>
                  <div class="text-[11px] text-gray-400">P4P Ads, Commissions & Cloud</div>
                </a>

                <a href="#tech-stack" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div class="text-xs font-bold text-[#00F0FF] mb-1">Technology</div>
                  <div class="text-sm font-bold text-white">Tech Stack & AI</div>
                  <div class="text-[11px] text-gray-400">Qwen LLM & Terminal Demo</div>
                </a>

                <a href="#advantages" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div class="text-xs font-bold text-green-400 mb-1">Strategy</div>
                  <div class="text-sm font-bold text-white">Competitive Advantages</div>
                  <div class="text-[11px] text-gray-400">Network effects & Cainiao</div>
                </a>

                <a href="#strategic-recommendations" class="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all">
                  <div class="text-xs font-bold text-purple-400 mb-1">Roadmap</div>
                  <div class="text-sm font-bold text-white">Growth Recommendations</div>
                  <div class="text-[11px] text-gray-400">Cross-border, AI & Green</div>
                </a>
              </div>
            </div>

            <a href="#newsroom" class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Newsroom</a>

            <a href="#tech-stack" class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse"></span> Qwen Terminal
            </a>

            <a href="#contact" class="px-3.5 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors">Investor Contact</a>
          </nav>

          <!-- Quick Actions, Theme Switcher & CTA -->
          <div class="hidden sm:flex items-center space-x-3">
            
            <!-- Light/Dark Mode Toggle Switch -->
            <button id="theme-toggle-btn" class="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#FF6A00] transition-colors flex items-center justify-center" title="Toggle Light/Dark Theme">
              <i class="fa-solid ${currentTheme === 'light' ? 'fa-moon text-indigo-400' : 'fa-sun text-amber-400'} text-sm" id="theme-toggle-icon"></i>
            </button>

            <button id="search-trigger-btn" class="p-2.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors" title="Search Ecosystem">
              <i class="fa-solid fa-magnifying-glass text-sm"></i>
            </button>

            <a href="#contact" class="relative group inline-flex items-center justify-center p-0.5 overflow-hidden rounded-xl font-medium text-xs">
              <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-[#FF6A00] to-[#FF9E00] group-hover:from-[#FF9E00] group-hover:to-[#FF6A00] transition-all duration-300"></span>
              <span class="relative px-4 py-2 transition-all ease-in duration-75 bg-[#0a0a0c] rounded-[10px] group-hover:bg-opacity-0 text-white font-semibold flex items-center gap-2">
                <span>Investor Portal</span>
                <i class="fa-solid fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </span>
            </a>
          </div>

          <!-- Mobile Hamburger Toggle -->
          <div class="flex md:hidden items-center space-x-2">
            <button id="mobile-theme-toggle" class="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none">
              <i class="fa-solid ${currentTheme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg"></i>
            </button>
            <button id="mobile-menu-toggle" class="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none">
              <i class="fa-solid fa-bars text-xl" id="menu-icon"></i>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Drawer -->
      <div id="mobile-drawer" class="hidden md:hidden border-t border-white/10 bg-[#0a0a0c]/95 backdrop-blur-2xl px-4 pt-3 pb-6 space-y-2">
        <a href="#overview" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Overview & Vision</a>
        <a href="#services" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Services Offered</a>
        <a href="#ecosystem" data-ecosystem-target="china-commerce" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">China Commerce</a>
        <a href="#ecosystem" data-ecosystem-target="intl-commerce" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">International Commerce</a>
        <a href="#ecosystem" data-ecosystem-target="cloud-ai" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Alibaba Cloud & Qwen AI</a>
        <a href="#ecosystem" data-ecosystem-target="cainiao" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Cainiao Logistics</a>
        <a href="#target-customers" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Target Customer Segments</a>
        <a href="#revenue" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Revenue Architecture</a>
        <a href="#tech-stack" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Tech Stack & Qwen Terminal</a>
        <a href="#advantages" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Competitive Moats</a>
        <a href="#challenges" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Challenges & Risk Analysis</a>
        <a href="#strategic-recommendations" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-[#FF6A00] hover:bg-white/5">Strategic Growth Recommendations</a>
        <a href="#contact" class="mobile-link block px-3 py-2 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5">Investor Contact</a>
      </div>
    </header>
  `;

  // Synchronize ecosystem target links with window.setActiveEcosystemTab
  container.querySelectorAll('[data-ecosystem-target]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-ecosystem-target');
      if (targetId && window.setActiveEcosystemTab) {
        window.setActiveEcosystemTab(targetId);
      }
      const ecosystemSection = document.getElementById('ecosystem');
      if (ecosystemSection) {
        ecosystemSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Attach theme toggle behavior
  function toggleTheme() {
    const isLight = document.documentElement.classList.contains('light');
    if (isLight) {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }

    const icon = document.getElementById('theme-toggle-icon');
    const mobileIcon = container.querySelector('#mobile-theme-toggle i');
    const activeIsLight = document.documentElement.classList.contains('light');

    if (icon) icon.className = `fa-solid ${activeIsLight ? 'fa-moon text-indigo-400' : 'fa-sun text-amber-400'} text-sm`;
    if (mobileIcon) mobileIcon.className = `fa-solid ${activeIsLight ? 'fa-moon' : 'fa-sun'} text-lg`;
  }

  const themeBtn = container.querySelector('#theme-toggle-btn');
  const mobileThemeBtn = container.querySelector('#mobile-theme-toggle');

  if (themeBtn) themeBtn.addEventListener('click', toggleTheme);
  if (mobileThemeBtn) mobileThemeBtn.addEventListener('click', toggleTheme);

  // Mobile menu drawer toggle
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const menuIcon = document.getElementById('menu-icon');

  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isHidden = drawer.classList.contains('hidden');
      if (isHidden) {
        drawer.classList.remove('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-xmark text-xl';
      } else {
        drawer.classList.add('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
      }
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.add('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-xl';
      });
    });
  }
}
