// Portfolio JavaScript - Funcionalidades Interativas
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== NAVIGATION =====
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        } else {
            navbar.classList.remove('bg-white/95', 'backdrop-blur-sm', 'shadow-lg');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        
        // Change icon
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = isOpen ? 'fas fa-times text-2xl text-gray-700' : 'fas fa-bars text-2xl text-gray-700';
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    mobileMenuBtn.setAttribute('aria-expanded', 'false');
                    const icon = mobileMenuBtn.querySelector('i');
                    icon.className = 'fas fa-bars text-2xl text-gray-700';
                }
            }
        });
    });
    
    // ===== TYPING EFFECT =====
    const typingElement = document.getElementById('typing-effect');
    if (typingElement) {
        const texts = [
            'Desenvolvedora Full Stack',
            'Especialista em SEO',
            'Apaixonada por Frontend',
            'Focada em Acessibilidade'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typingElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typingElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            let typeSpeed = isDeleting ? 50 : 100;
            
            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; // Pause at end
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; // Pause before next word
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        typeWriter();
    }
    
    // ===== SCROLL ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ===== SKILL BARS ANIMATION =====
    const skillBars = document.querySelectorAll('.bg-primary, .bg-secondary');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                
                setTimeout(() => {
                    bar.style.transition = 'width 1.5s ease-in-out';
                    bar.style.width = width;
                }, 200);
                
                skillObserver.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
    
    // ===== BACK TO TOP BUTTON =====
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
            backToTopBtn.classList.add('opacity-100', 'visible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
            backToTopBtn.classList.remove('opacity-100', 'visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // ===== FORM HANDLING =====
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                showNotification('Por favor, preencha todos os campos.', 'error');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Por favor, insira um e-mail válido.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
            contactForm.reset();
        });
    }
    
    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full`;
        
        const colors = {
            success: 'bg-green-500 text-white',
            error: 'bg-red-500 text-white',
            info: 'bg-blue-500 text-white'
        };
        
        notification.className += ` ${colors[type]}`;
        notification.innerHTML = `
            <div class="flex items-center">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'} mr-2"></i>
                <span>${message}</span>
                <button class="ml-4 hover:opacity-75" onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }, 5000);
    }
    
    // ===== PROJECT CARDS HOVER EFFECTS =====
    const projectCards = document.querySelectorAll('.group');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // ===== PARALLAX EFFECT =====
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.animate-float');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // ===== THEME TOGGLE (if needed) =====
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.documentElement.classList.toggle('dark');
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Update icon
            const icon = themeToggle.querySelector('i');
            icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
        });
        
        // Check saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            const icon = themeToggle.querySelector('i');
            icon.className = 'fas fa-sun';
        }
    }
    
    // ===== LAZY LOADING FOR IMAGES =====
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('opacity-0');
                img.classList.add('opacity-100');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
    
    // ===== ACCESSIBILITY IMPROVEMENTS =====
    
    // Keyboard navigation for mobile menu
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars text-2xl text-gray-700';
            mobileMenuBtn.focus(); // Return focus to menu button
        }
    });
    
    // Focus management for mobile menu
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (index === mobileMenuLinks.length - 1 && !e.shiftKey) {
                    e.preventDefault();
                    mobileMenuBtn.focus();
                } else if (index === 0 && e.shiftKey) {
                    e.preventDefault();
                    mobileMenuBtn.focus();
                }
            }
        });
    });
    
    // Announce page changes to screen readers
    function announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }
    
    // Announce section changes when navigating
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const sectionName = link.textContent;
            announceToScreenReader(`Navegando para seção: ${sectionName}`);
        });
    });
    
    // Ensure proper focus management for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select');
    interactiveElements.forEach(element => {
        element.addEventListener('focus', () => {
            element.classList.add('focus-ring');
        });
        
        element.addEventListener('blur', () => {
            element.classList.remove('focus-ring');
        });
    });
    
    // Add skip link functionality
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('click', (e) => {
            e.preventDefault();
            const mainContent = document.getElementById('main-content');
            if (mainContent) {
                mainContent.focus();
                announceToScreenReader('Navegando para o conteúdo principal');
            }
        });
    }
    
    // ===== PERFORMANCE OPTIMIZATIONS =====
    
    // Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll events
    const debouncedScrollHandler = debounce(() => {
        // Scroll-based animations and effects
    }, 16); // ~60fps
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // ===== SEO & ANALYTICS =====
    
    // Track Core Web Vitals
    function trackCoreWebVitals() {
        // LCP (Largest Contentful Paint)
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                const lcp = entry.startTime;
                console.log('LCP:', lcp);
                trackEvent('core_web_vitals', { metric: 'lcp', value: lcp });
            }
        }).observe({ entryTypes: ['largest-contentful-paint'] });
        
        // FID (First Input Delay)
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                const fid = entry.processingStart - entry.startTime;
                console.log('FID:', fid);
                trackEvent('core_web_vitals', { metric: 'fid', value: fid });
            }
        }).observe({ entryTypes: ['first-input'] });
        
        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
            for (const entry of entryList.getEntries()) {
                if (!entry.hadRecentInput) {
                    clsValue += entry.value;
                }
            }
            console.log('CLS:', clsValue);
            trackEvent('core_web_vitals', { metric: 'cls', value: clsValue });
        }).observe({ entryTypes: ['layout-shift'] });
    }
    
    // Initialize Core Web Vitals tracking
    if ('PerformanceObserver' in window) {
        trackCoreWebVitals();
    }
    
    // Track page views and interactions
    function trackEvent(eventName, properties = {}) {
        // Google Analytics 4 event tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, properties);
        }
        
        // Console log for development
        console.log('Event tracked:', eventName, properties);
    }
    
    // Track page load performance
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        trackEvent('page_load', { load_time: loadTime });
        
        // Track if page is cached
        if (performance.getEntriesByType('navigation')[0].transferSize === 0) {
            trackEvent('page_cached');
        }
    });
    
    // Track important interactions
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        link.addEventListener('click', () => {
            trackEvent('external_link_click', {
                link_url: link.href,
                link_text: link.textContent
            });
        });
    });
    
    // Track form submissions
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            trackEvent('contact_form_submit');
        });
    }
    
    // Track project views
    document.querySelectorAll('.project-card a').forEach(link => {
        link.addEventListener('click', () => {
            const projectTitle = link.closest('.project-card').querySelector('h3').textContent;
            trackEvent('project_view', {
                project_title: projectTitle
            });
        });
    });
    
    console.log('Portfolio JavaScript loaded successfully! 🚀');
});

// ===== UTILITY FUNCTIONS =====

// Smooth scroll utility
function smoothScrollTo(element, offset = 0) {
    const elementPosition = element.offsetTop - offset;
    window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
    });
}

// Format phone number
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
}

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Copy to clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        console.error('Failed to copy text: ', err);
        return false;
    }
} 