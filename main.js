// Main JavaScript file for Johannes Theunissen Portfolio Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initScrollAnimations();
    initSkillBars();
    initTypewriter();
    initParticles();
    initProjectFilters();
    initProjectModals();
    initContactForm();
    initSmoothScrolling();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking on a link
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        observer.observe(element);
    });
}

// Skill Bars Animation
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    
    const skillObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.getAttribute('data-width');
                setTimeout(() => {
                    bar.style.width = width + '%';
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
}

// Typewriter Effect for Hero Section
function initTypewriter() {
    const typedElement = document.getElementById('typed-name');
    if (typedElement) {
        new Typed('#typed-name', {
            strings: ['Johannes Theunissen'],
            typeSpeed: 100,
            startDelay: 500,
            showCursor: false,
            onComplete: function() {
                // Add gradient animation after typing is complete
                typedElement.style.background = 'linear-gradient(135deg, #3b82f6, #1e40af, #3b82f6)';
                typedElement.style.backgroundSize = '200% 200%';
                typedElement.style.webkitBackgroundClip = 'text';
                typedElement.style.webkitTextFillColor = 'transparent';
                typedElement.style.animation = 'gradient-shift 3s ease-in-out infinite';
            }
        });
    }
}

// Particle Background Effect
function initParticles() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;
    
    let particles = [];
    let mouse = { x: 0, y: 0 };
    
    new p5(function(p) {
        p.setup = function() {
            p.createCanvas(p.windowWidth, p.windowHeight, canvas);
            
            // Create particles
            for (let i = 0; i < 50; i++) {
                particles.push({
                    x: p.random(p.width),
                    y: p.random(p.height),
                    vx: p.random(-0.5, 0.5),
                    vy: p.random(-0.5, 0.5),
                    size: p.random(2, 4)
                });
            }
        };
        
        p.draw = function() {
            p.clear();
            
            // Update and draw particles
            particles.forEach(particle => {
                // Update position
                particle.x += particle.vx;
                particle.y += particle.vy;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = p.width;
                if (particle.x > p.width) particle.x = 0;
                if (particle.y < 0) particle.y = p.height;
                if (particle.y > p.height) particle.y = 0;
                
                // Draw particle
                p.fill(255, 255, 255, 100);
                p.noStroke();
                p.ellipse(particle.x, particle.y, particle.size);
                
                // Draw connections
                particles.forEach(other => {
                    const distance = p.dist(particle.x, particle.y, other.x, other.y);
                    if (distance < 100) {
                        p.stroke(255, 255, 255, 50 * (1 - distance / 100));
                        p.strokeWeight(1);
                        p.line(particle.x, particle.y, other.x, other.y);
                    }
                });
            });
        };
        
        p.windowResized = function() {
            p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
        
        p.mouseMoved = function() {
            mouse.x = p.mouseX;
            mouse.y = p.mouseY;
        };
    });
}

// Project Filters
function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    anime({
                        targets: card,
                        opacity: [0, 1],
                        translateY: [30, 0],
                        duration: 500,
                        easing: 'easeOutQuad'
                    });
                } else {
                    anime({
                        targets: card,
                        opacity: 0,
                        translateY: 30,
                        duration: 300,
                        easing: 'easeInQuad',
                        complete: function() {
                            card.style.display = 'none';
                        }
                    });
                }
            });
        });
    });
}

// Project Modals
function initProjectModals() {
    const viewProjectBtns = document.querySelectorAll('.view-project');
    const modals = document.querySelectorAll('.modal');
    const closeBtns = document.querySelectorAll('.close');
    
    viewProjectBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');
            const modal = document.getElementById(projectId + '-modal');
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Animate modal content
                anime({
                    targets: modal.querySelector('.modal-content'),
                    scale: [0.8, 1],
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutQuad'
                });
            }
        });
    });
    
    closeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const modal = this.closest('.modal');
            closeModal(modal);
        });
    });
    
    // Close modal when clicking outside
    modals.forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });
    
    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            modals.forEach(modal => {
                if (modal.style.display === 'block') {
                    closeModal(modal);
                }
            });
        }
    });
    
    function closeModal(modal) {
        anime({
            targets: modal.querySelector('.modal-content'),
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 200,
            easing: 'easeInQuad',
            complete: function() {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showError('Please fill in all required fields.');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showError('Please enter a valid email address.');
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const submitText = submitBtn.querySelector('.submit-text');
        const loadingText = submitBtn.querySelector('.loading');
        
        submitBtn.disabled = true;
        submitText.style.display = 'none';
        loadingText.style.display = 'inline';
        
        // Simulate form submission (replace with actual endpoint)
        setTimeout(() => {
            // Reset form
            this.reset();
            
            // Show success message
            showSuccess('Thank you for your message! I\'ll get back to you soon.');
            
            // Reset button state
            submitBtn.disabled = false;
            submitText.style.display = 'inline';
            loadingText.style.display = 'none';
        }, 2000);
    });
    
    function showSuccess(message) {
        successMessage.querySelector('div').innerHTML = `
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            ${message}
        `;
        successMessage.style.display = 'block';
        errorMessage.style.display = 'none';
        
        // Hide after 5 seconds
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    function showError(message) {
        errorMessage.querySelector('div').innerHTML = `
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
            </svg>
            ${message}
        `;
        errorMessage.style.display = 'block';
        successMessage.style.display = 'none';
        
        // Hide after 5 seconds
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed nav
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Active Navigation Link Highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && 
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// Initialize active nav link on page load
document.addEventListener('DOMContentLoaded', updateActiveNavLink);

// Utility function for debouncing
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

// Optimized scroll handler
const optimizedScrollHandler = debounce(function() {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading animation for page transitions
function showLoadingAnimation() {
    const loader = document.createElement('div');
    loader.className = 'fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50';
    loader.innerHTML = `
        <div class="text-center">
            <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p class="text-slate-600">Loading...</p>
        </div>
    `;
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.remove();
    }, 1000);
}

// Add click handlers for all internal links
document.addEventListener('click', function(e) {
    const link = e.target.closest('a');
    if (link && link.href && !link.href.startsWith('http') && !link.href.startsWith('mailto:') && !link.href.startsWith('tel:')) {
        showLoadingAnimation();
    }
});

// Performance optimization: Lazy load images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if needed
document.addEventListener('DOMContentLoaded', initLazyLoading);

// Add CSS animations for better performance
const style = document.createElement('style');
style.textContent = `
    @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);

console.log('Portfolio website initialized successfully!');