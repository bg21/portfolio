'use strict';



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Efeito de digitação no título principal
const typedText = document.getElementById('typed-text');
const textToType = "Desenvolvedora Web com foco em SEO e back-end em PHP/Laravel.";
let typeIndex = 0;
function typeEffect() {
  if (typedText && typeIndex <= textToType.length) {
    typedText.textContent = textToType.slice(0, typeIndex);
    typeIndex++;
    setTimeout(typeEffect, 60);
  }
}
window.addEventListener('DOMContentLoaded', typeEffect);

// Botão de voltar ao topo
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === CUSTOM CAROUSEL ===
(function() {
  const items = document.querySelectorAll('.custom-carousel .carousel-item');
  const prevBtn = document.querySelector('.custom-carousel .custom-prev');
  const nextBtn = document.querySelector('.custom-carousel .custom-next');
  const indicatorsContainer = document.querySelector('.custom-carousel .custom-indicators');
  let currentIndex = 0;

  // Criar indicadores
  items.forEach((_, idx) => {
    const indicator = document.createElement('button');
    indicator.classList.add('indicator');
    if (idx === 0) indicator.classList.add('active');
    indicator.setAttribute('aria-label', `Ir para o projeto ${idx+1}`);
    indicator.addEventListener('click', () => goToSlide(idx));
    indicatorsContainer.appendChild(indicator);
  });
  const indicators = Array.from(indicatorsContainer.children);

  function updateCarousel() {
    items.forEach((item, idx) => {
      item.classList.toggle('active', idx === currentIndex);
    });
    indicators.forEach((ind, idx) => {
      ind.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    const maxIndex = items.length - 1;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  // Inicializa
  goToSlide(0);
})();

// === FEEDBACK VISUAL FORMULÁRIO DE CONTATO ===
(function() {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const btn = form.querySelector('button[type="submit"]');
  const statusMsg = document.createElement('div');
  statusMsg.className = 'form-status-msg';
  form.appendChild(statusMsg);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    btn.classList.remove('success', 'error');
    btn.classList.add('loading');
    btn.disabled = true;
    statusMsg.textContent = 'Enviando...';
    statusMsg.style.color = '#4287f5';
    // Simulação de envio (substitua por AJAX real se desejar)
    setTimeout(() => {
      // Sucesso simulado
      btn.classList.remove('loading');
      btn.classList.add('success');
      btn.disabled = false;
      statusMsg.textContent = 'Mensagem enviada com sucesso!';
      statusMsg.style.color = '#4caf50';
      setTimeout(() => {
        btn.classList.remove('success');
        statusMsg.textContent = '';
      }, 2500);
    }, 1800);
    // Para simular erro, troque o bloco acima por:
    // btn.classList.remove('loading');
    // btn.classList.add('error');
    // btn.disabled = false;
    // statusMsg.textContent = 'Erro ao enviar. Tente novamente.';
    // statusMsg.style.color = '#e53935';
    // setTimeout(() => {
    //   btn.classList.remove('error');
    //   statusMsg.textContent = '';
    // }, 2500);
  });
})();

// === ACESSIBILIDADE CARROSSEL ===
(function() {
  const carousel = document.querySelector('.custom-carousel');
  if (!carousel) return;
  const prevBtn = carousel.querySelector('.custom-prev');
  const nextBtn = carousel.querySelector('.custom-next');
  const items = carousel.querySelectorAll('.carousel-item');
  const indicators = carousel.querySelectorAll('.custom-indicators .indicator');
  const inner = carousel.querySelector('.carousel-inner');
  inner.setAttribute('aria-live', 'polite');

  carousel.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
  });
  // Garante foco nos botões ao navegar por tab
  prevBtn.setAttribute('tabindex', '0');
  nextBtn.setAttribute('tabindex', '0');
})();

// === DARK MODE DINÂMICO POR VARIÁVEIS CSS ===
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const root = document.documentElement;

  // Paleta tema claro
  const lightTheme = {
    '--color-bg': '#f8fafc',
    '--color-surface': '#fff',
    '--color-text': '#232336',
    '--color-text-light': '#f3f3f3',
    '--color-primary': '#4287f5',
    '--color-secondary': '#7f53ac',
    '--color-accent': '#c44b6e',
    '--color-success': '#4caf50',
    '--color-error': '#e53935',
    '--color-border': '#e0e7ff',
    '--color-shadow': 'rgba(66,135,245,0.08)'
  };
  // Paleta tema escuro
  const darkTheme = {
    '--color-bg': '#101014',
    '--color-surface': '#181824',
    '--color-text': '#eaeaea',
    '--color-text-light': '#f3f3f3',
    '--color-primary': '#7f53ac',
    '--color-secondary': '#4287f5',
    '--color-accent': '#c44b6e',
    '--color-success': '#4caf50',
    '--color-error': '#e53935',
    '--color-border': '#232336',
    '--color-shadow': 'rgba(0,0,0,0.5)'
  };

  function setTheme(theme) {
    const palette = theme === 'dark' ? darkTheme : lightTheme;
    Object.entries(palette).forEach(([varName, value]) => {
      root.style.setProperty(varName, value);
    });
    if (themeIcon) themeIcon.setAttribute('name', theme === 'dark' ? 'sunny-outline' : 'moon-outline');
  }

  // Detecta preferência
  let theme = localStorage.getItem('theme');
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  setTheme(theme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      theme = (theme === 'dark') ? 'light' : 'dark';
      setTheme(theme);
      localStorage.setItem('theme', theme);
      document.body.style.transition = 'background 0.5s, color 0.5s';
      setTimeout(() => { document.body.style.transition = ''; }, 600);
    });
  }
})();