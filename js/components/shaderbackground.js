/**
 * ShaderBackground Component
 * Renders an ambient WebGL canvas background with fluid obsidian & Alibaba Orange waves.
 * Extracted & refactored from Stitch template with optimized resize observer & fallback.
 */

export function initShaderBackground(containerId = 'shader-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      <canvas id="shader-canvas-alibaba" class="w-full h-full block opacity-60"></canvas>
      <div class="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" 
           style="background: radial-gradient(circle at 50% 30%, transparent 20%, #0a0a0c 90%);"></div>
    </div>
  `;

  const canvas = document.getElementById('shader-canvas-alibaba');
  if (!canvas) return;

  function syncSize() {
    const w = window.innerWidth || 1280;
    const h = window.innerHeight || 720;
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
  }

  window.addEventListener('resize', syncSize);
  syncSize();

  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  if (!gl) {
    console.warn('WebGL not supported, rendering fallback CSS gradient.');
    canvas.style.background = 'radial-gradient(circle at 50% 20%, #20130d 0%, #0a0a0c 70%)';
    return;
  }

  const vs = `
    attribute vec2 a_position;
    varying vec2 v_texCoord;
    void main() {
      v_texCoord = a_position * 0.5 + 0.5;
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fs = `
    precision highp float;
    uniform float u_time;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    varying vec2 v_texCoord;

    void main() {
        vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        // Fluid Wave Mathematics
        float wave1 = sin(p.x * 1.8 + u_time * 0.4) * 0.45;
        float wave2 = cos(p.y * 2.2 + u_time * 0.3) * 0.35;
        float waveCombined = wave1 + wave2;

        // Vibrant Alibaba Color Palette
        vec3 colorObsidian = vec3(0.04, 0.04, 0.05);   // #0A0A0C
        vec3 colorOrange   = vec3(1.0, 0.416, 0.0);    // #FF6A00 Alibaba Orange
        vec3 colorAmber    = vec3(1.0, 0.72, 0.0);     // #FFB800 Vibrant Gold
        vec3 colorDeep     = vec3(0.12, 0.08, 0.05);

        float mask = smoothstep(0.15, 0.85, abs(p.y - waveCombined * 0.35));
        
        // Blend Orange & Amber into the wave peaks
        vec3 waveColor = mix(colorOrange, colorAmber, sin(p.x * 2.0 + u_time) * 0.5 + 0.5);
        vec3 finalColor = mix(waveColor * 0.22, colorObsidian, mask);
        
        // Subtle Digital Grain
        float noise = fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
        finalColor += noise * 0.015;

        // Vignette
        float vignette = 1.0 - length(p * 0.45);
        finalColor *= clamp(vignette, 0.2, 1.0);

        gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

  function createShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error('Shader compilation error:', gl.getShaderInfoLog(s));
      return null;
    }
    return s;
  }

  const vertShader = createShader(gl.VERTEX_SHADER, vs);
  const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
  if (!vertShader || !fragShader) return;

  const prog = gl.createProgram();
  gl.attachShader(prog, vertShader);
  gl.attachShader(prog, fragShader);
  gl.linkProgram(prog);
  gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);

  const pos = gl.getAttribLocation(prog, 'a_position');
  gl.enableVertexAttribArray(pos);
  gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_resolution');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
  window.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    if (rect.width && rect.height) {
      mouse.x = ((event.clientX - rect.left) / rect.width) * canvas.width;
      mouse.y = (1.0 - (event.clientY - rect.top) / rect.height) * canvas.height;
    }
  });

  let startTime = performance.now();
  function render() {
    const elapsed = (performance.now() - startTime) * 0.001;
    syncSize();
    gl.viewport(0, 0, canvas.width, canvas.height);
    if (uTime) gl.uniform1f(uTime, elapsed);
    if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
    if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(render);
  }
  render();
}
