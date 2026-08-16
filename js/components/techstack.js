/**
 * TechStack Component
 * Section 5: Technologies Used featuring Qwen LLMs, Apsara OS, PolarDB & Live Typewriter Code Terminal Animation.
 */

export function renderTechStack(containerId = 'tech-stack-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="tech-stack" class="py-24 sm:py-32 relative overflow-hidden bg-section-navy border-b border-white/5">
      <!-- Background Cyber Grid Line -->
      <div class="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-40"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <!-- Section Header -->
        <div class="text-center space-y-4 max-w-3xl mx-auto mb-16 reveal">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold uppercase tracking-widest">
            <i class="fa-solid fa-microchip"></i> Technology & AI Stack
          </div>
          <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
            Proprietary <span class="text-gradient-cyan">Technology Stack</span>
          </h2>
          <p class="text-gray-300 text-base sm:text-lg font-light">
            Highlighting Alibaba's foundational AI models, Apsara cloud operating system, high-concurrency OceanBase/PolarDB database engines, and automated logistics robotics.
          </p>
        </div>

        <!-- 5 Core Tech Pillars Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-brain"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Qwen 2.5 / 3 LLM Series</h3>
            <p class="text-xs text-gray-300">Open-source foundation models ranging from 0.5B to 236B MoE parameters, leading global benchmarks in coding, math, and multi-modal vision.</p>
          </div>

          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <h3 class="text-lg font-bold text-white">Apsara Cloud Enterprise OS</h3>
            <p class="text-xs text-gray-300">Self-developed distributed cloud operating system managing millions of servers across 30 availability regions with 99.999% SLA reliability.</p>
          </div>

          <div class="glass-panel lift-card p-6 rounded-3xl border border-white/10 space-y-3">
            <div class="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg font-bold">
              <i class="fa-solid fa-database"></i>
            </div>
            <h3 class="text-lg font-bold text-white">PolarDB & OceanBase DB</h3>
            <p class="text-xs text-gray-300">Cloud-native relational database handling extreme 100M+ QPS concurrency during peak 11.11 global shopping traffic without downtime.</p>
          </div>

        </div>

        <!-- Typewriter Terminal Interactive Box -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div class="lg:col-span-5 space-y-6">
            <h3 class="text-2xl font-bold font-display text-white">
              Live Qwen AI Code Terminal
            </h3>
            <p class="text-sm text-gray-300 leading-relaxed font-light">
              Watch Qwen's Python SDK execute real-time inference calls. Alibaba Cloud's Bailian Model Studio serves over 90,000 enterprise applications with ultra-low latency token generation.
            </p>

            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <i class="fa-solid fa-terminal text-[#00F0FF]"></i>
                <span class="text-xs text-gray-200 font-mono">DashScope API Client SDK</span>
              </div>
              <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <i class="fa-solid fa-bolt text-[#FF6A00]"></i>
                <span class="text-xs text-gray-200 font-mono">Streaming Speed: 142 Tokens/sec</span>
              </div>
            </div>
          </div>

          <!-- Terminal Box with Typewriter Animation -->
          <div class="lg:col-span-7">
            <div class="glass-panel lift-card rounded-3xl p-6 sm:p-8 border border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative font-mono-code text-xs text-gray-200">
              
              <!-- Window Top Bar -->
              <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  <span class="ml-2 text-xs font-bold text-gray-400">qwen_enterprise_agent.py</span>
                </div>
                <span class="text-[10px] text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/30 font-bold">LIVE INTERACTIVE TERMINAL</span>
              </div>

              <!-- Typewriter Code Content Element -->
              <div id="typewriter-terminal" class="bg-[#050508] p-5 rounded-xl border border-white/5 min-h-[220px] overflow-x-auto whitespace-pre leading-relaxed text-[#00F0FF]">
                <span id="typewriter-text"></span><span class="typewriter-cursor"></span>
              </div>

              <div class="mt-4 flex items-center justify-between text-[11px] text-gray-400 pt-2 border-t border-white/10">
                <span>SDK: DashScope v1.14</span>
                <span class="text-green-400">Status: 200 OK (0.14s)</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;

  // Attach typewriter scroll trigger
  const codeSnippet = `from dashscope import Generation

def run_qwen_ai_agent():
    print("🚀 Initializing Qwen-2.5-72B-Instruct Model...")
    response = Generation.call(
        model="qwen-2.5-72b-instruct",
        prompt="Optimize supply chain dispatch for Cainiao eHubs",
        temperature=0.2
    )
    print("✅ Output Generated: 142 tokens/sec | Accuracy: 92.4%")

run_qwen_ai_agent()`;

  const typewriterText = container.querySelector('#typewriter-text');
  let hasTyped = false;

  function typeCode() {
    if (hasTyped || !typewriterText) return;
    hasTyped = true;
    let i = 0;

    const timer = setInterval(() => {
      if (i < codeSnippet.length) {
        typewriterText.textContent += codeSnippet.charAt(i);
        i++;
      } else {
        clearInterval(timer);
      }
    }, 25);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        typeCode();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(container);
}
