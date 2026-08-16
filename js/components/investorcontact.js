/**
 * InvestorContact Component
 * Authentic corporate investor relations & strategic inquiry portal.
 */

export function renderInvestorContact(containerId = 'contact-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="contact" class="py-24 sm:py-32 relative overflow-hidden bg-section-charcoal border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF6A00]/10 border border-[#FF6A00]/30 text-[#FF6A00] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-handshake"></i> Corporate Engagement
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Investor & <span class="text-gradient-orange">Partnership Portal</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Connect directly with Alibaba Group's investor relations, ESG compliance teams, and strategic business unit leaders worldwide.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <!-- Left Corporate Headquarters Information -->
          <div class="lg:col-span-5 space-y-6">
            
            <div class="glass-panel p-6 rounded-3xl border border-white/10 space-y-6">
              <h3 class="text-xl font-bold font-display text-white border-b border-white/10 pb-4 flex items-center gap-2">
                <i class="fa-solid fa-building text-[#FF6A00]"></i> Global Corporate Headquarters
              </h3>

              <div class="space-y-4">
                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Hangzhou Global Campus</h4>
                    <p class="text-xs text-gray-400">969 West Wenyi Road, Yuhang District, Hangzhou 310098, China</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fa-solid fa-building-flag"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Hong Kong Corporate Office</h4>
                    <p class="text-xs text-gray-400">c/o Alibaba Group Services, 26/F Tower One, Times Square, Causeway Bay, HK</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <i class="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-bold text-white">Investor Relations Contact</h4>
                    <p class="text-xs text-gray-400">ir@alibaba-inc.com | ESG: esg@alibaba-inc.com</p>
                  </div>
                </div>
              </div>

              <!-- Stock Exchange Listing Badges -->
              <div class="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div class="text-xs font-bold text-white">NYSE Listing</div>
                  <div class="text-xs text-[#FF6A00] font-mono font-bold">Ticker: BABA</div>
                </div>
                <div class="h-8 w-[1px] bg-white/10"></div>
                <div>
                  <div class="text-xs font-bold text-white">HKEX Listing</div>
                  <div class="text-xs text-[#00F0FF] font-mono font-bold">Ticker: 9988</div>
                </div>
              </div>

            </div>

          </div>

          <!-- Right Interactive Inquiry Form -->
          <div class="lg:col-span-7">
            <div class="glass-panel p-8 rounded-3xl border border-white/15 shadow-2xl relative">
              
              <form id="investor-form" class="space-y-6">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="contact-name" class="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      required 
                      placeholder="e.g. Michael Vance"
                      class="w-full px-4 py-3 rounded-xl bg-[#0a0a0c]/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label for="contact-email" class="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Corporate Email *
                    </label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      required 
                      placeholder="m.vance@assetmanagement.com"
                      class="w-full px-4 py-3 rounded-xl bg-[#0a0a0c]/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label for="contact-org" class="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Organization / Firm
                    </label>
                    <input 
                      type="text" 
                      id="contact-org" 
                      placeholder="e.g. BlackRock Global Equity"
                      class="w-full px-4 py-3 rounded-xl bg-[#0a0a0c]/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label for="contact-type" class="block text-xs font-semibold uppercase text-gray-300 mb-2">
                      Inquiry Category *
                    </label>
                    <select 
                      id="contact-type" 
                      required
                      class="w-full px-4 py-3 rounded-xl bg-[#0a0a0c]/80 border border-white/10 text-white focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors text-sm"
                    >
                      <option value="institutional">Institutional Equity Research & Earnings</option>
                      <option value="esg">ESG & Net-Zero Sustainability Disclosure</option>
                      <option value="cloud-ai">Alibaba Cloud & Qwen AI Enterprise Deal</option>
                      <option value="media">Global Press & Corporate Media</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label for="contact-message" class="block text-xs font-semibold uppercase text-gray-300 mb-2">
                    Inquiry Message *
                  </label>
                  <textarea 
                    id="contact-message" 
                    rows="4" 
                    required 
                    placeholder="Specify inquiry details or requested financial reporting schedule..."
                    class="w-full px-4 py-3 rounded-xl bg-[#0a0a0c]/80 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF6A00] focus:ring-1 focus:ring-[#FF6A00] transition-colors text-sm"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  id="submit-form-btn"
                  class="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6A00] to-[#FF8533] text-white font-bold text-base shadow-[0_0_25px_rgba(255,106,0,0.3)] hover:shadow-[0_0_35px_rgba(255,106,0,0.5)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Transmit Official Inquiry</span>
                  <i class="fa-solid fa-paper-plane text-sm"></i>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;

  const form = container.querySelector('#investor-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = container.querySelector('#submit-form-btn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `
          <i class="fa-solid fa-spinner animate-spin"></i>
          <span>Transmitting & Encrypting...</span>
        `;

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `
            <span>Transmit Official Inquiry</span>
            <i class="fa-solid fa-paper-plane text-sm"></i>
          `;
          
          if (window.openSuccessModal) {
            window.openSuccessModal();
          } else {
            alert('Thank you! Your official inquiry has been logged with Alibaba Group Investor Relations.');
          }
          form.reset();
        }, 1200);
      }
    });
  }
}
