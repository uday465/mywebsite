/* ===== Visa Verse - Main JavaScript ===== */

(function () {
  'use strict';

  /* ---------- Configuration ---------- */
  const WHATSAPP_NUMBER = '918463944773';
  const WHATSAPP_MESSAGE = encodeURIComponent('Hi! I\'m interested in your visa services. Can you help me?');

  /* ---------- Utility: Detect base path for links ---------- */
  function getBasePath() {
    const path = window.location.pathname;
    if (path.includes('/countries/')) return '../';
    return '';
  }

  /* ---------- Navbar Injection ---------- */
  function injectNavbar() {
    const base = getBasePath();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    function isActive(page) {
      if (page === 'index.html' && (currentPage === 'index.html' || currentPage === '')) return true;
      if (page === 'services.html' && (currentPage === 'services.html' || window.location.pathname.includes('/countries/'))) return true;
      return currentPage === page;
    }

    const navLinks = [
      { href: `${base}index.html`, label: 'Home', page: 'index.html' },
      { href: `${base}services.html`, label: 'Services', page: 'services.html' },
      { href: `${base}about.html`, label: 'About', page: 'about.html' },
      { href: `${base}contact.html`, label: 'Contact', page: 'contact.html' },
    ];

    const linksHTML = navLinks.map(link =>
      `<a href="${link.href}" class="nav-link-animated py-2 px-1 text-sm font-medium ${isActive(link.page) ? 'text-blue-900 active' : 'text-gray-600 hover:text-blue-900'}">${link.label}</a>`
    ).join('');

    const mobileLinksHTML = navLinks.map(link =>
      `<a href="${link.href}" class="block px-4 py-3 text-base font-medium rounded-lg ${isActive(link.page) ? 'text-blue-900 bg-blue-50' : 'text-gray-600 hover:bg-gray-50 hover:text-blue-900'}">${link.label}</a>`
    ).join('');

    const navbar = document.createElement('header');
    navbar.id = 'site-header';
    navbar.className = 'fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50';
    navbar.innerHTML = `
      <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <a href="${base}index.html" class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-lg gradient-hero flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <span class="text-xl font-bold text-gray-900">Visa<span class="text-blue-600">Verse</span></span>
          </a>
          <div class="hidden md:flex items-center gap-8">
            ${linksHTML}
            <a href="${base}contact.html" class="ml-2 px-5 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/20">Get Started</a>
          </div>
          <button id="mobile-menu-btn" class="md:hidden p-2 text-gray-600 hover:text-gray-900" aria-label="Toggle menu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </button>
        </div>
      </nav>
    `;

    document.body.prepend(navbar);
    document.body.style.paddingTop = '64px';

    const overlay = document.createElement('div');
    overlay.id = 'mobile-overlay';
    overlay.className = 'mobile-menu-overlay md:hidden';

    const panel = document.createElement('div');
    panel.id = 'mobile-panel';
    panel.className = 'mobile-menu-panel md:hidden';
    panel.innerHTML = `
      <div class="p-5 space-y-1">
        ${mobileLinksHTML}
        <a href="${base}contact.html" class="block mt-4 px-4 py-3 bg-blue-600 text-white text-center font-semibold rounded-lg hover:bg-blue-700 transition-colors">Get Started</a>
      </div>
    `;

    document.body.appendChild(overlay);
    document.body.appendChild(panel);

    const btn = document.getElementById('mobile-menu-btn');

    function toggleMobileMenu() {
      const isOpen = panel.classList.contains('open');
      panel.classList.toggle('open');
      overlay.classList.toggle('open');
      document.body.style.overflow = isOpen ? '' : 'hidden';
      btn.innerHTML = isOpen
        ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>'
        : '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>';
    }

    btn.addEventListener('click', toggleMobileMenu);
    overlay.addEventListener('click', toggleMobileMenu);
  }

  /* ---------- Footer Injection ---------- */
  function injectFooter() {
    const base = getBasePath();
    const footer = document.createElement('footer');
    footer.className = 'bg-gray-900 text-gray-300';
    footer.innerHTML = `
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="${base}index.html" class="flex items-center gap-2 mb-4">
              <div class="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <span class="text-xl font-bold text-white">Visa<span class="text-blue-400">Verse</span></span>
            </a>
            <p class="text-sm leading-relaxed">Your trusted partner for hassle-free visa processing across 7+ countries. Expert guidance from application to approval.</p>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="${base}index.html" class="hover:text-white transition-colors">Home</a></li>
              <li><a href="${base}services.html" class="hover:text-white transition-colors">Services</a></li>
              <li><a href="${base}about.html" class="hover:text-white transition-colors">About Us</a></li>
              <li><a href="${base}contact.html" class="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Popular Destinations</h4>
            <ul class="space-y-2 text-sm">
              <li><a href="${base}countries/usa.html" class="hover:text-white transition-colors">United States</a></li>
              <li><a href="${base}countries/uk.html" class="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="${base}countries/canada.html" class="hover:text-white transition-colors">Canada</a></li>
              <li><a href="${base}countries/australia.html" class="hover:text-white transition-colors">Australia</a></li>
              <li><a href="${base}countries/schengen.html" class="hover:text-white transition-colors">Schengen / EU</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-white font-semibold mb-4">Get In Touch</h4>
            <ul class="space-y-3 text-sm">
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                <a href="mailto:uday@visa-verse.com" class="hover:text-white transition-colors">uday@visa-verse.com</a>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.527-1.476A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.336 0-4.512-.752-6.278-2.03l-.44-.33-3.065 1-1.02-3.04-.36-.47A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path></svg>
                <a href="https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}" target="_blank" class="hover:text-white transition-colors">WhatsApp Us</a>
              </li>
              <li class="flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                <span>Global Service - Work Remotely</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-sm">&copy; ${new Date().getFullYear()} VisaVerse. All rights reserved.</p>
          <div class="flex items-center gap-6 text-sm">
            <a href="#" class="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(footer);
  }

  /* ---------- WhatsApp Floating Button ---------- */
  function injectWhatsAppButton() {
    const btn = document.createElement('a');
    btn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;
    btn.target = '_blank';
    btn.className = 'whatsapp-float no-print';
    btn.setAttribute('aria-label', 'Chat on WhatsApp');
    btn.innerHTML = `<svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.616l4.527-1.476A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.336 0-4.512-.752-6.278-2.03l-.44-.33-3.065 1-1.02-3.04-.36-.47A9.965 9.965 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`;
    document.body.appendChild(btn);
  }

  /* ---------- FAQ Accordion ---------- */
  function initAccordion() {
    document.querySelectorAll('.faq-question').forEach(btn => {
      btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling;
        const isOpen = answer.classList.contains('open');

        document.querySelectorAll('.faq-answer.open').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.faq-question.open').forEach(q => q.classList.remove('open'));

        if (!isOpen) {
          answer.classList.add('open');
          btn.classList.add('open');
        }
      });
    });
  }

  /* ---------- Tabs (Country Pages) ---------- */
  function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(target)?.classList.add('active');
      });
    });
  }

  /* ---------- Testimonial Carousel ---------- */
  function initCarousel() {
    const track = document.querySelector('.testimonial-track');
    if (!track) return;

    const slides = track.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.testimonial-dot');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    let current = 0;
    let autoplayTimer;

    function goTo(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      current = index;
      track.style.transform = `translateX(-${current * 100}%)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    function startAutoplay() {
      autoplayTimer = setInterval(() => goTo(current + 1), 5000);
    }

    function stopAutoplay() {
      clearInterval(autoplayTimer);
    }

    if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoplay(); goTo(current - 1); startAutoplay(); });
    if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoplay(); goTo(current + 1); startAutoplay(); });
    dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAutoplay(); goTo(i); startAutoplay(); }));

    const container = track.closest('.testimonial-carousel');
    if (container) {
      container.addEventListener('mouseenter', stopAutoplay);
      container.addEventListener('mouseleave', startAutoplay);
    }

    startAutoplay();
  }

  /* ---------- Scroll Animations (Intersection Observer) ---------- */
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right').forEach(el => observer.observe(el));
  }

  /* ---------- Smooth Scroll for Anchor Links ---------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ---------- Navbar Scroll Effect ---------- */
  function initNavbarScroll() {
    const header = document.getElementById('site-header');
    if (!header) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md');
        header.classList.remove('shadow-sm');
      } else {
        header.classList.remove('shadow-md');
        header.classList.add('shadow-sm');
      }
    });
  }

  /* ---------- Initialize Everything ---------- */
  function init() {
    injectNavbar();
    injectFooter();
    injectWhatsAppButton();
    initAccordion();
    initTabs();
    initCarousel();
    initScrollAnimations();
    initSmoothScroll();
    initNavbarScroll();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
