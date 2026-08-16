/**
 * Challenges Component
 * Section 7: Challenges Faced & Risk Analysis (Regulatory, PDD/JD rivals, Cross-Border friction, Cybersecurity).
 */

export function renderChallenges(containerId = 'challenges-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="challenges" class="py-24 sm:py-32 relative overflow-hidden bg-section-charcoal border-b border-white/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-shield-halved"></i> Operational Risk & Compliance Analysis
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Key Operational <span class="text-gradient-orange">Challenges & Risks</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Critical analysis of regulatory oversight, aggressive domestic marketplace competition, cross-border trade headwinds, and data compliance mandates.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 reveal-stagger">
          
          <!-- Challenge 1: Domestic Rivals -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-red-500/20 space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold border border-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.25)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="text-red-400"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
              </div>
              <span class="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">High Impact</span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">1. Intense Domestic Competition</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Aggressive competition from PDD Holdings (Pinduoduo value pricing), Douyin / Kuaishou live-stream commerce, and JD.com direct fulfillment pressures Taobao and Tmall's GMV market share.
            </p>
            <div class="pt-2 text-xs text-red-400 font-mono">Competitors: PDD Holdings, Douyin, JD.com, Tencent</div>
          </div>

          <!-- Challenge 2: Regulatory Hurdles -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-red-500/20 space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-gavel"></i>
              </div>
              <span class="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">Regulatory Risk</span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">2. Anti-Monopoly & Regulatory Oversights</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Increased antitrust scrutiny on "choose one of two" merchant exclusivity policies and financial technology regulations impacting platform governance and corporate structure.
            </p>
            <div class="pt-2 text-xs text-red-400 font-mono">Focus: SAMR Compliance & Platform Openness</div>
          </div>

          <!-- Challenge 3: Cross-Border Trade Friction -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-red-500/20 space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-earth-americas"></i>
              </div>
              <span class="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">Global Headwinds</span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">3. Global Trade & Geopolitical Friction</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Tariff policy changes, de minimis customs threshold adjustments in North America and EU, and semiconductor export restrictions affecting advanced AI GPU hardware procurement.
            </p>
            <div class="pt-2 text-xs text-red-400 font-mono">Focus: Supply Chain Resilience & AI Chip Substitution</div>
          </div>

          <!-- Challenge 4: Data Privacy & Security -->
          <div class="glass-panel lift-card p-8 rounded-3xl border border-red-500/20 space-y-4">
            <div class="flex items-center justify-between">
              <div class="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center text-xl font-bold">
                <i class="fa-solid fa-shield-halved"></i>
              </div>
              <span class="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">Cyber Security</span>
            </div>

            <h3 class="text-2xl font-bold font-display text-white">4. Data Governance & Cybersecurity</h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Strict compliance requirements under China's PIPL (Personal Information Protection Law) and EU's GDPR, requiring heavy ongoing investment in data localization and encryption.
            </p>
            <div class="pt-2 text-xs text-red-400 font-mono">Focus: Zero-Trust Data Architecture & PIPL/GDPR</div>
          </div>

        </div>

      </div>
    </section>
  `;
}
