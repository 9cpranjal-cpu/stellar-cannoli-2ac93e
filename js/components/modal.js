/**
 * Modal Component
 * Universal glassmorphism modal system for business deep-dives, global search, and submission alerts.
 */

export function initModals(containerId = 'modal-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <!-- Detail Deep-Dive Modal -->
    <div id="detail-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 sm:p-6 modal-backdrop opacity-0 transition-opacity duration-300">
      <div class="glass-panel w-full max-w-3xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6 transform scale-95 transition-transform duration-300" id="detail-modal-card">
        
        <!-- Modal Header -->
        <div class="flex items-center justify-between border-b border-white/10 pb-4">
          <div class="flex items-center gap-3">
            <div id="modal-icon-badge" class="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-lg">
              <i class="fa-solid fa-layer-group"></i>
            </div>
            <div>
              <h3 id="modal-title" class="text-2xl font-bold font-display text-white">Business Unit Title</h3>
              <p id="modal-subtitle" class="text-xs text-gray-400">Subtitle</p>
            </div>
          </div>
          
          <button id="close-detail-modal" class="w-9 h-9 rounded-full bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 flex items-center justify-center transition-colors">
            <i class="fa-solid fa-xmark text-base"></i>
          </button>
        </div>

        <!-- Modal Body Content -->
        <div class="space-y-6 text-gray-300 text-sm">
          
          <div>
            <h4 class="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">Executive Summary & Operational Scope</h4>
            <p id="modal-desc" class="leading-relaxed text-gray-200">Description text goes here.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 rounded-xl bg-white/5 border border-white/10">
              <div class="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-bullseye text-[#FF6A00]"></i> Strategic Focus
              </div>
              <p id="modal-strategy" class="text-xs text-gray-400">Strategy description...</p>
            </div>

            <div class="p-4 rounded-xl bg-white/5 border border-white/10">
              <div class="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                <i class="fa-solid fa-code text-[#00F0FF]"></i> Key Proprietary Tech
              </div>
              <p id="modal-tech" class="text-xs text-gray-400">Tech details...</p>
            </div>
          </div>

          <!-- Financial Share & Location -->
          <div class="pt-4 border-t border-white/10 flex flex-wrap justify-between text-xs text-gray-400 gap-2">
            <span>Headquarters: <strong id="modal-hq" class="text-white">Hangzhou, China</strong></span>
            <span>Group Revenue Share: <strong id="modal-rev" class="text-[#FF6A00]">46%</strong></span>
          </div>

        </div>

      </div>
    </div>

    <!-- Search Modal -->
    <div id="search-modal" class="fixed inset-0 z-50 hidden flex items-start justify-center pt-24 p-4 modal-backdrop opacity-0 transition-opacity duration-300">
      <div class="glass-panel w-full max-w-xl rounded-2xl p-6 border border-white/20 shadow-2xl relative space-y-4">
        
        <div class="flex items-center justify-between border-b border-white/10 pb-3">
          <div class="flex items-center gap-3 w-full">
            <i class="fa-solid fa-magnifying-glass text-[#FF6A00] text-lg"></i>
            <input 
              type="text" 
              id="search-input" 
              placeholder="Search Alibaba Ecosystem (e.g. Qwen AI, Taobao, Cainiao)..." 
              class="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-base font-medium"
            />
          </div>
          <button id="close-search-modal" class="text-gray-400 hover:text-white p-1">
            <i class="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        <div id="search-results" class="space-y-2 max-h-60 overflow-y-auto pt-2">
          <div class="text-xs text-gray-400 text-center py-4">Type a keyword above to search ecosystem business units, tech stacks, or investor files.</div>
        </div>

      </div>
    </div>

    <!-- Success Modal -->
    <div id="success-modal" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 modal-backdrop opacity-0 transition-opacity duration-300">
      <div class="glass-panel w-full max-w-md rounded-3xl p-8 border border-green-500/30 shadow-[0_0_50px_rgba(34,197,94,0.2)] text-center space-y-4">
        
        <div class="w-16 h-16 rounded-full bg-green-500/20 text-green-400 mx-auto flex items-center justify-center text-3xl border border-green-500/40">
          <i class="fa-solid fa-circle-check"></i>
        </div>

        <h3 class="text-2xl font-bold font-display text-white">Transmission Confirmed</h3>

        <p class="text-xs text-gray-300 leading-relaxed">
          Your inquiry has been successfully encrypted and routed to Alibaba Group's Corporate Investor Relations & Strategic Partnership desk.
        </p>

        <button id="close-success-modal" class="w-full py-3 rounded-xl bg-green-600 hover:bg-green-500 text-white font-bold text-xs uppercase tracking-wider transition-colors">
          Acknowledge & Close
        </button>

      </div>
    </div>
  `;

  // Attach modal trigger functions to window global for easy access
  const detailModal = document.getElementById('detail-modal');
  const detailCard = document.getElementById('detail-modal-card');
  const closeDetailBtn = document.getElementById('close-detail-modal');

  window.openDetailModal = (unitData) => {
    if (!detailModal || !unitData) return;

    document.getElementById('modal-title').textContent = unitData.name;
    document.getElementById('modal-subtitle').textContent = unitData.tagline;
    document.getElementById('modal-desc').textContent = unitData.description;
    document.getElementById('modal-strategy').textContent = unitData.details?.strategy || 'Expanding ecosystem scale and monetization.';
    document.getElementById('modal-tech').textContent = unitData.details?.keyTech || 'Proprietary cloud & AI infrastructure.';
    document.getElementById('modal-hq').textContent = unitData.details?.headquarters || 'Hangzhou, China';
    document.getElementById('modal-rev').textContent = unitData.revenueShare;

    const iconBadge = document.getElementById('modal-icon-badge');
    if (iconBadge) {
      iconBadge.style.color = unitData.color;
      iconBadge.style.background = `${unitData.color}20`;
      iconBadge.innerHTML = `<i class="fa-solid ${unitData.icon}"></i>`;
    }

    detailModal.classList.remove('hidden');
    setTimeout(() => {
      detailModal.classList.remove('opacity-0');
      if (detailCard) detailCard.classList.remove('scale-95');
    }, 10);
  };

  const closeDetail = () => {
    if (!detailModal) return;
    detailModal.classList.add('opacity-0');
    if (detailCard) detailCard.classList.add('scale-95');
    setTimeout(() => detailModal.classList.add('hidden'), 300);
  };

  if (closeDetailBtn) closeDetailBtn.addEventListener('click', closeDetail);
  if (detailModal) {
    detailModal.addEventListener('click', (e) => {
      if (e.target === detailModal) closeDetail();
    });
  }

  // Search Modal Bindings
  const searchModal = document.getElementById('search-modal');
  const searchTriggerBtn = document.getElementById('search-trigger-btn');
  const closeSearchBtn = document.getElementById('close-search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  const openSearch = () => {
    if (!searchModal) return;
    searchModal.classList.remove('hidden');
    setTimeout(() => {
      searchModal.classList.remove('opacity-0');
      if (searchInput) searchInput.focus();
    }, 10);
  };

  const closeSearch = () => {
    if (!searchModal) return;
    searchModal.classList.add('opacity-0');
    setTimeout(() => searchModal.classList.add('hidden'), 300);
  };

  if (searchTriggerBtn) searchTriggerBtn.addEventListener('click', openSearch);
  if (closeSearchBtn) closeSearchBtn.addEventListener('click', closeSearch);

  if (searchInput && searchResults) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        searchResults.innerHTML = `<div class="text-xs text-gray-400 text-center py-4">Type a keyword above to search ecosystem business units, tech stacks, or investor files.</div>`;
        return;
      }

      // Filter dummy ecosystem topics
      const topics = [
        { name: 'Qwen 2.5 / 3 LLM', category: 'Alibaba Cloud AI', link: '#qwen-ai' },
        { name: 'Taobao & Tmall Group', category: 'China Commerce', link: '#ecosystem' },
        { name: 'Cainiao Smart Logistics Network', category: 'Global Logistics', link: '#ecosystem' },
        { name: 'Lazada Southeast Asia', category: 'International Commerce', link: '#ecosystem' },
        { name: 'Financial Revenue Model & Calculator', category: 'Investor Relations', link: '#revenue' },
        { name: 'Amap / Gaode Maps & Ele.me', category: 'Local Services', link: '#ecosystem' }
      ];

      const matches = topics.filter(t => t.name.toLowerCase().includes(query) || t.category.toLowerCase().includes(query));

      if (matches.length === 0) {
        searchResults.innerHTML = `<div class="text-xs text-gray-400 text-center py-4">No matching ecosystem nodes found for "${query}".</div>`;
      } else {
        searchResults.innerHTML = matches.map(m => `
          <a href="${m.link}" onclick="document.getElementById('search-modal').click()" class="block p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors">
            <div class="text-sm font-bold text-white">${m.name}</div>
            <div class="text-xs text-[#FF6A00] font-medium">${m.category}</div>
          </a>
        `).join('');
      }
    });
  }

  // Success Modal Bindings
  const successModal = document.getElementById('success-modal');
  const closeSuccessBtn = document.getElementById('close-success-modal');

  window.openSuccessModal = () => {
    if (!successModal) return;
    successModal.classList.remove('hidden');
    setTimeout(() => successModal.classList.remove('opacity-0'), 10);
  };

  const closeSuccess = () => {
    if (!successModal) return;
    successModal.classList.add('opacity-0');
    setTimeout(() => successModal.classList.add('hidden'), 300);
  };

  if (closeSuccessBtn) closeSuccessBtn.addEventListener('click', closeSuccess);
}
