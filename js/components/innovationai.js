/**
 * InnovationAI Component
 * Spotlight on Qwen 2.5 / 3 Open-Source LLMs, Model Studio, and AI Cloud Transformation.
 */

export function renderInnovationAI(containerId = 'qwen-ai-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <section id="qwen-ai" class="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a0a0c] via-[#0d1017] to-[#0a0a0c]">
      <!-- Background Cyber Light Beams -->
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left Specs & Copy -->
          <div class="lg:col-span-6 space-y-6">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 text-[#00F0FF] text-xs font-bold uppercase tracking-widest">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Open-Source AI Frontier
            </div>

            <h2 class="text-3xl sm:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
              Powering Global Intelligence with <span class="text-gradient-cyan">Qwen AI</span>
            </h2>

            <p class="text-gray-300 text-base sm:text-lg font-light leading-relaxed">
              Alibaba Cloud’s flagship Qwen 2.5 foundation model series leads global open-source benchmarks across coding, mathematical reasoning, multi-modal vision, and agentic workflows.
            </p>

            <!-- Feature Bullet Cards -->
            <div class="space-y-4 pt-2">
              
              <div class="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#00F0FF]/20 text-[#00F0FF] flex items-center justify-center text-lg flex-shrink-0">
                  <i class="fa-solid fa-code-branch"></i>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Full-Spectrum Model Family</h4>
                  <p class="text-xs text-gray-400">From 0.5B lightweight mobile models to 72B parameter dense & 236B MoE enterprise engines.</p>
                </div>
              </div>

              <div class="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-[#FF6A00]/20 text-[#FF6A00] flex items-center justify-center text-lg flex-shrink-0">
                  <i class="fa-solid fa-[#FF6A00] fa-[#FF6A00] fa-microchip"></i>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Bailian Model Studio Integration</h4>
                  <p class="text-xs text-gray-400">Zero-code AI Agent creation, RAG vector pipelines, and custom enterprise fine-tuning in minutes.</p>
                </div>
              </div>

              <div class="glass-panel p-4 rounded-2xl border border-white/10 flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center text-lg flex-shrink-0">
                  <i class="fa-solid fa-shield-cat"></i>
                </div>
                <div>
                  <h4 class="text-sm font-bold text-white">Open & Accessible Community</h4>
                  <p class="text-xs text-gray-400">Over 100 million downloads on HuggingFace and ModelScope powering developer innovations worldwide.</p>
                </div>
              </div>

            </div>

          </div>

          <!-- Right Interactive Code / AI Benchmark Console -->
          <div class="lg:col-span-6">
            <div class="glass-panel rounded-3xl p-6 sm:p-8 border border-[#00F0FF]/30 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative font-mono text-xs text-gray-300">
              
              <!-- Console Top Bar -->
              <div class="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-yellow-500 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
                  <span class="ml-2 text-xs font-bold text-gray-400">qwen-2.5-72b-instruct.py</span>
                </div>
                <span class="text-[10px] text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded border border-[#00F0FF]/30">STATUS: READY</span>
              </div>

              <!-- Live Code Snippet Display -->
              <div class="space-y-3 bg-[#050508] p-4 rounded-xl border border-white/5 overflow-x-auto">
                <div class="text-purple-400">from <span class="text-white">dashscope</span> import <span class="text-yellow-300">Generation</span></div>
                <div class="text-gray-500"># Call Qwen 2.5 Ultra High-Concurrency API</div>
                <div>
                  <span class="text-blue-400">response</span> = Generation.call(
                </div>
                <div class="pl-4">
                  model=<span class="text-green-300">'qwen-2.5-72b-instruct'</span>,<br/>
                  prompt=<span class="text-green-300">'Analyze enterprise supply chain logistics routing...'</span>,<br/>
                  temperature=<span class="text-orange-400">0.2</span>
                </div>
                <div>)</div>
                <div class="text-[#00F0FF] pt-2">// Output Token Speed: 142 tokens/sec</div>
                <div class="text-emerald-400">// Benchmark Accuracy: 92.4% (MMLU)</div>
              </div>

              <!-- Model Selector Badges -->
              <div class="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2">
                <span class="text-xs text-gray-400">Active Models:</span>
                <div class="flex gap-2">
                  <span class="px-2.5 py-1 rounded bg-[#00F0FF]/20 text-[#00F0FF] text-[11px] font-bold border border-[#00F0FF]/40">Qwen-2.5-Max</span>
                  <span class="px-2.5 py-1 rounded bg-white/10 text-gray-300 text-[11px] font-bold border border-white/10">Qwen-Coder</span>
                  <span class="px-2.5 py-1 rounded bg-white/10 text-gray-300 text-[11px] font-bold border border-white/10">Qwen-VL</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
