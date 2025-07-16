// DOM Elements
const loadingScreen = document.getElementById('loading-screen');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const mainContent = document.getElementById('main-content');
const nav = document.getElementById('nav');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const scrollTopBtn = document.getElementById('scroll-top');
const contactForm = document.getElementById('contact-form');

// Loading Animation
let progress = 0;
const progressInterval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.floor(progress) + '%';
    
    if (progress >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transform = 'scale(0.9)';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                mainContent.style.display = 'block';
                // Trigger animations for visible elements
                animateOnLoad();
            }, 500);
        }, 500);
    }
}, 100);

// Animate elements on load
function animateOnLoad() {
    const heroElements = document.querySelectorAll('.hero-content > *');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.filter = 'blur(10px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            element.style.filter = 'blur(0px)';
        }, 500 + index * 200);
    });
}

// Navigation functionality
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    nav.classList.toggle('scrolled', scrolled);
    
    // Show/hide scroll to top button
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

// Mobile menu toggle
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    const icon = mobileMenuBtn.querySelector('i');
    if (mobileMenu.classList.contains('active')) {
        icon.className = 'ph ph-x';
    } else {
        icon.className = 'ph ph-list';
    }
});

// Smooth scroll to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80; // Account for fixed nav
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        mobileMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ph ph-list';
    }
}

// Scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Intersection Observer for animations
const observeElements = () => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Stagger animations for child elements
                const children = entry.target.querySelectorAll('.skill-item, .project-card, .contact-link');
                children.forEach((child, index) => {
                    setTimeout(() => {
                        child.style.opacity = '1';
                        child.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);

    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Prepare elements for animation
    const animatedElements = document.querySelectorAll('.skill-item, .project-card, .contact-link');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
    });
};

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    // Animate button
    submitBtn.innerHTML = '<i class="ph ph-circle-notch ph-spin"></i> Sending...';
    submitBtn.style.transform = 'scale(0.95)';
    
    // Simulate form submission
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="ph ph-check"></i> Message Sent!';
        submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.background = '';
            submitBtn.style.transform = '';
            contactForm.reset();
        }, 2000);
    }, 1500);
});

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', () => {
    // Profile image 3D effect
    const profileFrame = document.querySelector('.profile-frame');
    if (profileFrame) {
        profileFrame.addEventListener('mousemove', (e) => {
            const rect = profileFrame.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            profileFrame.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        profileFrame.addEventListener('mouseleave', () => {
            profileFrame.style.transform = '';
        });
    }

    // Project cards parallax effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(-10px)';
        });
    });

    // Floating animation for orbs
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 4 + Math.random() * 4;
        orb.style.animationDelay = `-${randomDelay}s`;
        orb.style.animationDuration = `${randomDuration}s`;
    });

    // Initialize observers
    observeElements();
});

// Parallax scrolling effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    // Parallax for floating orbs
    const orbs = document.querySelectorAll('.orb');
    orbs.forEach((orb, index) => {
        const speed = 0.2 + (index * 0.1);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
    
    // Parallax for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.transform = `translateY(${rate}px)`;
    }
});

// Smooth reveal animations for sections
const revealSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        if (scrollTop > sectionTop - windowHeight + 100) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealSections);

// Add CSS for revealed sections
const style = document.createElement('style');
style.textContent = `
    section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    section.revealed {
        opacity: 1;
        transform: translateY(0);
    }
    
    .hero-section {
        opacity: 1;
        transform: none;
    }
`;
document.head.appendChild(style);

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial progress
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    
    // Hide main content initially
    mainContent.style.display = 'none';
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        mobileMenuBtn.querySelector('i').className = 'ph ph-list';
    }
});

// Preload images
const preloadImages = () => {
    const imageUrls = [
        'public/lovable-uploads/f19680b0-e3ff-40ec-9b9b-2bd7bfdbb355.png',
        'public/lovable-uploads/2b00f27e-1ab0-4480-91d8-97b9746c2a7d.png',
        'public/lovable-uploads/f16fa640-5d62-4fee-b36c-dd51e0ee79c7.png',
        'public/lovable-uploads/d7bf0239-fa78-49d1-bafa-500fed6a13e6.png'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
};

// Initialize preloading
preloadImages();