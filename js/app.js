/**
 * App Controller
 * Main entry point bootstrapping all enterprise portal modules, theme switcher,
 * scroll-driven chrome (progress bar, nav shrink, active-link tracking),
 * reveal-on-scroll animation, and universal scroll-triggered counters.
 */

import { initShaderBackground } from './components/ShaderBackground.js';
import { renderNavigation } from './components/Navigation.js';
import { renderHero } from './components/Hero.js';
import { renderMarquee } from './components/MarqueeStrip.js';
import { renderOverview } from './components/Overview.js';
import { renderServices } from './components/Services.js';
import { renderEcosystem } from './components/Ecosystem.js';
import { renderInnovationAI } from './components/InnovationAI.js';
import { renderTargetCustomers } from './components/TargetCustomers.js';
import { renderRevenueModel } from './components/RevenueModel.js';
import { renderTechStack } from './components/TechStack.js';
import { renderCompetitiveAdvantages } from './components/CompetitiveAdvantages.js';
import { renderNewsroom } from './components/Newsroom.js';
import { renderTestimonials } from './components/Testimonials.js';
import { renderChallenges } from './components/Challenges.js';
import { renderStrategicRecommendations } from './components/StrategicRecommendations.js';
import { renderGlobalImpact } from './components/GlobalImpact.js';
import { renderFAQBanner } from './components/FAQBanner.js';
import { renderInvestorContact } from './components/InvestorContact.js';
import { initModals } from './components/Modal.js';

/**
 * Universal Scroll-Triggered Counter Animation Engine
 * Animates numbers, percentages, currencies, and metrics across the entire page.
 */
function initScrollCounters() {
  const counters = document.querySelectorAll('.stat-counter, [data-counter-target]');

  function animateCounter(elem) {
    if (elem.dataset.counterDone === 'true') return;
    elem.dataset.counterDone = 'true';

    const rawTarget = elem.getAttribute('data-target') || elem.getAttribute('data-counter-target') || '0';
    const targetVal = parseFloat(rawTarget);
    if (isNaN(targetVal)) return;

    const decimals = parseInt(elem.getAttribute('data-decimals') || (rawTarget.includes('.') ? '1' : '0'), 10);
    const prefix = elem.getAttribute('data-prefix') || '';
    const suffix = elem.getAttribute('data-suffix') || '';
    const duration = 1800; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // EaseOutQuart easing formula for smooth acceleration & decelerating count-up
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      const currentVal = (targetVal * easeProgress).toFixed(decimals);

      elem.textContent = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        elem.textContent = `${prefix}${targetVal.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.15 });

  counters.forEach(c => observer.observe(c));
}

/**
 * Reveal-on-scroll engine: fades/slides `.reveal` and `.reveal-stagger`
 * elements into view once, driven by IntersectionObserver so it stays cheap.
 */
function initRevealAnimations() {
  const targets = document.querySelectorAll('.reveal, .reveal-stagger');
  if (!targets.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

  targets.forEach(t => observer.observe(t));
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ Alibaba Group Enterprise Application initializing...');

  // Initialize saved theme (Light or Dark)
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.classList.remove('light', 'dark');
  document.documentElement.classList.add(savedTheme);

  // 1. Initialize Ambient WebGL Shader Canvas
  initShaderBackground('shader-container');

  // 2. Render Component Tree (in page order)
  renderNavigation('nav-container');
  renderHero('hero-container');
  renderMarquee('marquee-container');
  renderOverview('overview-container');
  renderServices('services-container');
  renderEcosystem('ecosystem-container');
  renderInnovationAI('qwen-ai-container');
  renderTargetCustomers('target-customers-container');
  renderRevenueModel('revenue-container');
  renderTechStack('tech-stack-container');
  renderCompetitiveAdvantages('advantages-container');
  renderNewsroom('newsroom-container');
  renderTestimonials('testimonials-container');
  renderChallenges('challenges-container');
  renderGlobalImpact('metrics-container');
  renderStrategicRecommendations('strategic-recommendations-container');
  renderFAQBanner('faq-container');
  renderInvestorContact('contact-container');

  // 3. Initialize Universal Counter Animations, Reveal Animations & Modals
  initScrollCounters();
  initRevealAnimations();
  initModals('modal-container');
  initScrollChrome();

  // Re-run counter/reveal observers after user interacts with sliders or tab switches
  window.initScrollCounters = initScrollCounters;
  window.refreshRevealObserver = initRevealAnimations;

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElem = document.querySelector(targetId);
        if (targetElem) {
          e.preventDefault();
          targetElem.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  console.log('✅ Enterprise Application fully operational!');
});

/**
 * Scroll progress bar + nav shrink + active-section link highlighting.
 * These are the small chrome details that make a page feel like a live
 * product rather than an exported slide deck.
 */
function initScrollChrome() {
  const progressBar = document.getElementById('scroll-progress');
  const sections = Array.from(document.querySelectorAll('main > div[id$="-container"] section[id]'));
  const navLinks = Array.from(document.querySelectorAll('#nav-container nav a[href^="#"]'));

  function onScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) progressBar.style.width = `${Math.min(pct, 100)}%`;

    const headerEl = document.querySelector('#nav-container header');
    if (headerEl) {
      if (scrollTop > 40) headerEl.classList.add('nav-shrink');
      else headerEl.classList.remove('nav-shrink');
    }

    // Active-link tracking: whichever section's top has most recently passed
    // the nav line becomes the active nav item.
    let currentId = null;
    for (const sec of sections) {
      const rect = sec.getBoundingClientRect();
      if (rect.top <= 140) currentId = sec.id;
    }

    navLinks.forEach(link => {
      const isMatch = currentId && link.getAttribute('href') === `#${currentId}`;
      link.classList.toggle('nav-link-active', !!isMatch);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
