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

// Alternância de modo escuro
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      themeIcon.setAttribute('name', 'sunny-outline');
    } else {
      themeIcon.setAttribute('name', 'moon-outline');
    }
  });
}

// Efeito de digitação no título principal
const typedText = document.getElementById('typed-text');
const textToType = "I'm User Interface Designer & Developer.";
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
window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// === CARROSSEL DE PROJETOS ===
(function() {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const indicatorsContainer = document.querySelector('.carousel-indicators');
  let currentIndex = 0;

  // Criar indicadores
  slides.forEach((_, idx) => {
    const indicator = document.createElement('button');
    indicator.classList.add('indicator');
    if (idx === 0) indicator.classList.add('active');
    indicator.setAttribute('aria-label', `Ir para o projeto ${idx+1}`);
    indicator.addEventListener('click', () => goToSlide(idx));
    indicatorsContainer.appendChild(indicator);
  });
  const indicators = Array.from(indicatorsContainer.children);

  function updateCarousel() {
    const slideWidth = track.offsetWidth;
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    slides.forEach((slide, idx) => {
      slide.classList.toggle('active', idx === currentIndex);
    });
    indicators.forEach((ind, idx) => {
      ind.classList.toggle('active', idx === currentIndex);
    });
  }

  function goToSlide(index) {
    const maxIndex = slides.length - 1;
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    goToSlide(currentIndex - 1);
  });
  nextBtn.addEventListener('click', () => {
    goToSlide(currentIndex + 1);
  });

  window.addEventListener('resize', () => {
    updateCarousel();
  });

  // Inicializa
  goToSlide(0);
})();