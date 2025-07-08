// Modo escuro com transição
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function setTheme(dark) {
  body.classList.add('theme-transition');
  setTimeout(() => body.classList.remove('theme-transition'), 400);
  if (dark) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    document.getElementById('theme-icon').className = 'fa-solid fa-sun';
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    document.getElementById('theme-icon').className = 'fa-solid fa-moon';
  }
}

// Inicialização do tema
(function () {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') setTheme(true);
  else setTheme(false);
})();

themeToggle.addEventListener('click', () => {
  setTheme(!body.classList.contains('dark'));
});

// Botão de voltar ao topo
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navegação suave
const navLinks = document.querySelectorAll('.navbar nav a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animação ao rolar para seções
function animateOnScroll() {
  const elements = document.querySelectorAll('.skill-card, .project-card');
  const trigger = window.innerHeight * 0.85;
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < trigger) {
      el.style.opacity = 1;
      el.style.transform = 'none';
    } else {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// Efeito de clique nos cards
const cards = document.querySelectorAll('.skill-card, .project-card');
cards.forEach(card => {
  card.addEventListener('mousedown', () => {
    card.style.transform += ' scale(0.97)';
  });
  card.addEventListener('mouseup', () => {
    card.style.transform = card.style.transform.replace(' scale(0.97)', '');
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = card.style.transform.replace(' scale(0.97)', '');
  });
});

// Microinteração: transição de tema
const style = document.createElement('style');
style.innerHTML = `
  .theme-transition {
    transition: background 0.4s, color 0.4s;
  }
`;
document.head.appendChild(style);

// Animação das barras de skill
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-progress').forEach(bar => {
    const width = bar.getAttribute('style').match(/width:\s*([0-9]+%)/);
    if (width) {
      bar.style.width = '0';
      setTimeout(() => {
        bar.style.width = width[1];
      }, 400);
    }
  });
});

// Carrossel de projetos
const track = document.querySelector('.carousel-track');
const carouselCards = Array.from(document.querySelectorAll('.carousel-track .project-card'));
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const indicators = Array.from(document.querySelectorAll('.carousel-indicators .indicator'));
let current = 0;

function showProject(idx) {
  carouselCards.forEach((card, i) => {
    card.classList.toggle('active', i === idx);
  });
  indicators.forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
    dot.setAttribute('aria-current', i === idx ? 'true' : 'false');
  });
  current = idx;
}

prevBtn.addEventListener('click', () => {
  showProject((current - 1 + carouselCards.length) % carouselCards.length);
});
nextBtn.addEventListener('click', () => {
  showProject((current + 1) % carouselCards.length);
});
indicators.forEach((dot, i) => {
  dot.addEventListener('click', () => showProject(i));
});
// Teclado acessível
track.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevBtn.click();
  if (e.key === 'ArrowRight') nextBtn.click();
});
// Inicialização
showProject(0);

// Scrollspy para menu ativo
const spyNavLinks = Array.from(document.querySelectorAll('.navbar nav a'));
const sections = spyNavLinks.map(link => document.querySelector(link.getAttribute('href')));

function onScrollSpy() {
  let idx = 0;
  const scrollY = window.scrollY + 120; // offset para header fixo
  for (let i = 0; i < sections.length; i++) {
    if (sections[i] && sections[i].offsetTop <= scrollY) {
      idx = i;
    }
  }
  spyNavLinks.forEach((link, i) => {
    if (i === idx) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}
window.addEventListener('scroll', onScrollSpy);
window.addEventListener('DOMContentLoaded', onScrollSpy);

// Reveal animation on scroll
function revealOnScroll() {
  const revealEls = document.querySelectorAll('.revealed, .progress-item, .about-card, .project-card');
  const observer = new window.IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Animação das barras de progresso
        if (entry.target.classList.contains('progress-item')) {
          const fill = entry.target.querySelector('.progress-fill');
          if (fill) {
            const width = fill.style.width || fill.getAttribute('data-width') || '0%';
            fill.style.width = width;
          }
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => {
    observer.observe(el);
  });
}
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Efeito de digitação na hero section
window.addEventListener('DOMContentLoaded', () => {
  const typingElement = document.getElementById('typing-effect');
  if (!typingElement) return;
  
  const texts = ['Desenvolvedora Web', 'Analista de SEO', 'Desenvolvedora Front-End'];
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typingElement.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typingElement.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
      typingSpeed = 2000; // Pausa no final
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pausa antes de começar nova palavra
    }
    
    setTimeout(type, typingSpeed);
  }
  
  type();
});

// Animação dos números das estatísticas
function animateNumbers() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const finalNumber = parseInt(target.textContent);
        const suffix = target.textContent.replace(/\d+/g, '');
        
        let currentNumber = 0;
        const increment = finalNumber / 50;
        const timer = setInterval(() => {
          currentNumber += increment;
          if (currentNumber >= finalNumber) {
            currentNumber = finalNumber;
            clearInterval(timer);
          }
          target.textContent = Math.floor(currentNumber) + suffix;
        }, 30);
        
        observer.unobserve(target);
      }
    });
  }, { threshold: 0.5 });
  
  statNumbers.forEach(number => observer.observe(number));
}

window.addEventListener('DOMContentLoaded', animateNumbers); 

// MENU HAMBÚRGUER MOBILE
window.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar nav');
  const navUl = nav.querySelector('ul');



  if (menuToggle && navUl) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navUl.classList.toggle('active');
      menuToggle.classList.toggle('active', isOpen);
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      console.log('Menu clicked, isOpen:', isOpen);
      console.log('Menu element:', navUl);
      console.log('Menu classes:', navUl.className);
      if (isOpen) {
        navUl.setAttribute('tabindex', '-1');
        navUl.focus();
      }
    });

    // Fecha o menu ao clicar em um link
    navUl.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navUl.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Fecha o menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (window.innerWidth <= 900 && navUl.classList.contains('active')) {
        if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
          navUl.classList.remove('active');
          menuToggle.classList.remove('active');
          menuToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });

    // Fecha o menu com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navUl.classList.contains('active')) {
        navUl.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.focus();
      }
    });
  }
}); 