// Neonfolio - Premium Portfolio Templates - Vanilla JavaScript

// Template Data
const templateCategories = [
    {
        id: 'uiux',
        name: 'UI/UX Design',
        icon: '🎨',
        count: 12,
        templates: [
            { id: 1, name: 'Modern UX Portfolio', price: '₹299', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400' },
            { id: 2, name: 'Minimalist Design', price: '₹399', image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400' },
            { id: 3, name: 'Creative Agency', price: '₹499', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400' },
            { id: 4, name: 'Product Designer', price: '₹349', image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400' },
            { id: 5, name: 'UX Researcher', price: '₹299', image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?w=400' },
            { id: 6, name: 'Design System', price: '₹449', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400' },
        ]
    },
    {
        id: 'graphic',
        name: 'Graphic Design',
        icon: '🎭',
        count: 10,
        templates: [
            { id: 7, name: 'Brand Identity', price: '₹399', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400' },
            { id: 8, name: 'Logo Designer', price: '₹299', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400' },
            { id: 9, name: 'Print Design', price: '₹349', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400' },
            { id: 10, name: 'Packaging Design', price: '₹449', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400' },
            { id: 11, name: 'Visual Identity', price: '₹399', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400' },
            { id: 12, name: 'Creative Studio', price: '₹499', image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=400' },
        ]
    },
    {
        id: '3dart',
        name: '3D Art',
        icon: '🗿',
        count: 8,
        templates: [
            { id: 13, name: '3D Artist Portfolio', price: '₹549', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400' },
            { id: 14, name: 'Digital Sculpture', price: '₹449', image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400' },
            { id: 15, name: 'Character Design', price: '₹499', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400' },
            { id: 16, name: 'Environment Art', price: '₹549', image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400' },
            { id: 17, name: 'Product Visualization', price: '₹449', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400' },
            { id: 18, name: 'Animation Reel', price: '₹599', image: 'https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?w=400' },
        ]
    },
    {
        id: 'motion',
        name: 'Motion Design',
        icon: '📹',
        count: 9,
        templates: [
            { id: 19, name: 'Motion Graphics', price: '₹499', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400' },
            { id: 20, name: 'Video Editor', price: '₹399', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400' },
            { id: 21, name: 'Animation Studio', price: '₹549', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400' },
            { id: 22, name: 'After Effects', price: '₹449', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400' },
            { id: 23, name: 'Cinema 4D', price: '₹599', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400' },
            { id: 24, name: 'VFX Artist', price: '₹649', image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400' },
        ]
    },
    {
        id: 'brand',
        name: 'Brand Identity',
        icon: '🏷️',
        count: 7,
        templates: [
            { id: 25, name: 'Brand Strategist', price: '₹449', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400' },
            { id: 26, name: 'Corporate Identity', price: '₹399', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
            { id: 27, name: 'Brand Designer', price: '₹349', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400' },
            { id: 28, name: 'Logo Portfolio', price: '₹299', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
            { id: 29, name: 'Visual Branding', price: '₹449', image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400' },
            { id: 30, name: 'Brand Consultant', price: '₹499', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400' },
        ]
    },
    {
        id: 'web',
        name: 'Web Design',
        icon: '💻',
        count: 11,
        templates: [
            { id: 31, name: 'Web Developer', price: '₹399', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400' },
            { id: 32, name: 'Frontend Portfolio', price: '₹349', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400' },
            { id: 33, name: 'Fullstack Developer', price: '₹499', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400' },
            { id: 34, name: 'React Developer', price: '₹449', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400' },
            { id: 35, name: 'UI Developer', price: '₹399', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400' },
            { id: 36, name: 'Agency Portfolio', price: '₹549', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400' },
        ]
    }
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Sarah Chen',
        role: 'UI/UX Designer',
        company: 'Design Studio SF',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=150',
        rating: 5,
        text: "Neonfolio's templates are absolutely stunning! The glassmorphism effects and attention to detail helped me land 3 new clients within a month. The code quality is exceptional."
    },
    {
        id: 2,
        name: 'Marcus Rodriguez',
        role: '3D Artist',
        company: 'Freelancer',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
        rating: 5,
        text: "The 3D Artist template perfectly showcased my work. The interactive elements and smooth animations impressed my clients. Definitely worth every penny!"
    },
    {
        id: 3,
        name: 'Emily Watson',
        role: 'Brand Designer',
        company: 'Creative Agency NYC',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
        rating: 5,
        text: "Professional, modern, and easy to customize. The documentation was clear and the support was outstanding. My portfolio has never looked better!"
    },
    {
        id: 4,
        name: 'David Kim',
        role: 'Motion Designer',
        company: 'Media House LA',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
        rating: 5,
        text: "The motion design template is perfect for showcasing video work. The embedded players and smooth transitions create an amazing user experience."
    },
    {
        id: 5,
        name: 'Anna Kowalski',
        role: 'Web Developer',
        company: 'Tech Startup Berlin',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150',
        rating: 5,
        text: "Clean code, excellent documentation, and beautiful design. As a developer, I appreciate the attention to performance and accessibility. Highly recommended!"
    },
    {
        id: 6,
        name: 'James Thompson',
        role: 'Graphic Designer',
        company: 'Print & Digital Co.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150',
        rating: 5,
        text: "The variety of templates is impressive. I've used 3 different ones for various projects and each one helped me win new business. Excellent investment!"
    }
];

// FAQ Data
const faqs = [
    {
        id: 1,
        question: "What's included with each template?",
        answer: "Each template includes complete source code (HTML, CSS, JavaScript), comprehensive documentation, image assets, font files, and a commercial use license. You also get free email support and setup instructions."
    },
    {
        id: 2,
        question: "How do I customize the templates?",
        answer: "All templates are built with clean, well-commented code. You can easily customize colors, fonts, layouts, and content. Each template comes with detailed documentation explaining how to make common modifications. No advanced coding skills required!"
    },
    {
        id: 3,
        question: "What payment methods do you accept?",
        answer: "I accept UPI payments (neonfolio@upi) for instant processing. You can also call me at +91 98765 43210 for alternative payment arrangements. After payment, send the screenshot via email and your templates will be delivered within the promised timeframe."
    },
    {
        id: 4,
        question: "How quickly will I receive my templates?",
        answer: "Single templates are delivered within 24 hours, Premium Pack within 12 hours, and Full Access within 6 hours. All templates are sent via email with download links and setup instructions."
    },
    {
        id: 5,
        question: "Can I use these templates for client projects?",
        answer: "Yes! All templates come with a commercial license, meaning you can use them for your own business and client projects. You can also resell websites built with these templates to your clients."
    },
    {
        id: 6,
        question: "Do you provide customization services?",
        answer: "Yes, I offer custom modifications for Full Access plan customers. For other plans, customization services are available at an additional cost. Contact me to discuss your specific requirements and get a quote."
    },
    {
        id: 7,
        question: "What if I'm not satisfied with my purchase?",
        answer: "I offer a 100% satisfaction guarantee. If you're not happy with your template within 7 days of purchase, I'll provide a full refund, no questions asked. Your satisfaction is my priority."
    },
    {
        id: 8,
        question: "Are the templates mobile-responsive?",
        answer: "Absolutely! All templates are fully responsive and optimized for mobile, tablet, and desktop devices. They're built with modern CSS techniques and tested across all major browsers and devices."
    },
    {
        id: 9,
        question: "Do you provide ongoing support?",
        answer: "Yes! Email support is included with all plans. Premium Pack and Full Access customers get priority support. I typically respond within 24 hours and help with setup, customization questions, and technical issues."
    },
    {
        id: 10,
        question: "Can I get updates to the templates?",
        answer: "Premium Pack customers get free updates for 6 months, and Full Access customers get updates for 1 year. Updates include bug fixes, new features, and design improvements. You'll be notified via email when updates are available."
    }
];

// Global Variables
let currentTestimonialIndex = 0;
let testimonialAutoPlay = true;
let testimonialInterval;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Initialize EmailJS
    emailjs.init("TYIBa9hQVwc70H0Za");
});

// Initialize App
function initializeApp() {
    setupNavigation();
    setupScrollEffects();
    populateTemplates();
    populateTestimonials();
    populateFAQ();
    setupContactForm();
    startTestimonialAutoPlay();
}

// Navigation Functions
function setupNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(0, 0, 0, 0.82)';
        } else {
            navbar.style.background = 'transparent';
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger
        const hamburger = mobileMenuBtn.querySelector('.hamburger');
        hamburger.classList.toggle('active');
    });
    
    // Close mobile menu when clicking nav links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Smooth scroll for all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"], .nav-link, .mobile-nav-link, .footer-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
}

// Scroll Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.section-header, .glass-card, .category-card, .template-card, .pricing-card, .faq-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

// Template Functions
function populateTemplates() {
    const categoryGrid = document.getElementById('categoryGrid');
    
    // Populate category cards
    categoryGrid.innerHTML = templateCategories.map((category, index) => `
        <div class="category-card" onclick="showTemplates('${category.id}')" style="animation-delay: ${index * 0.1}s">
            <div class="category-icon">${category.icon}</div>
            <h3 class="category-name">${category.name}</h3>
            <p class="category-count">${category.count} Premium Templates</p>
            <button class="btn-neon" style="width: 100%;">
                Explore ${category.name}
            </button>
        </div>
    `).join('');
}

function showTemplates(categoryId) {
    const category = templateCategories.find(cat => cat.id === categoryId);
    if (!category) return;
    
    const categoryGrid = document.getElementById('categoryGrid');
    const templateGrid = document.getElementById('templateGrid');
    const templateTitle = document.getElementById('templateTitle');
    const templateCards = document.getElementById('templateCards');
    
    // Hide category grid and show template grid
    categoryGrid.classList.add('hidden');
    templateGrid.classList.remove('hidden');
    
    // Update title
    templateTitle.textContent = `${category.name} Templates`;
    
    // Populate template cards
    templateCards.innerHTML = category.templates.map((template, index) => `
        <div class="template-card" style="animation-delay: ${index * 0.1}s">
            <div style="margin-bottom: 1.5rem; overflow: hidden; border-radius: 0.75rem;">
                <img src="${template.image}" alt="${template.name}" class="template-image">
            </div>
            
            <h4 class="template-name">${template.name}</h4>
            
            <div class="template-pricing">
                <span class="template-price">${template.price}</span>
                <span class="template-period">One-time payment</span>
            </div>

            <div class="template-buttons">
                <button class="btn-neon" onclick="handlePreview('${template.name}')">
                    Live Preview
                </button>
                <button class="btn-neon-secondary" onclick="scrollToSection('contact')">
                    Buy Now
                </button>
            </div>
        </div>
    `).join('');
}

function showCategories() {
    const categoryGrid = document.getElementById('categoryGrid');
    const templateGrid = document.getElementById('templateGrid');
    
    // Show category grid and hide template grid
    categoryGrid.classList.remove('hidden');
    templateGrid.classList.add('hidden');
}

function handlePreview(templateName) {
    window.open('#', '_blank');
}

// Testimonial Functions
function populateTestimonials() {
    updateCurrentTestimonial();
    createTestimonialDots();
}

function updateCurrentTestimonial() {
    const currentTestimonial = document.getElementById('currentTestimonial');
    const testimonial = testimonials[currentTestimonialIndex];
    
    currentTestimonial.innerHTML = `
        <div class="testimonial-stars">
            ${'⭐'.repeat(testimonial.rating)}
        </div>
        
        <blockquote class="testimonial-text">
            "${testimonial.text}"
        </blockquote>
        
        <div class="testimonial-author">
            <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-avatar">
            <div class="testimonial-info">
                <div class="testimonial-name">${testimonial.name}</div>
                <div class="testimonial-role">${testimonial.role}</div>
                <div class="testimonial-company">${testimonial.company}</div>
            </div>
        </div>
    `;
}

function createTestimonialDots() {
    const dotsContainer = document.getElementById('testimonialDots');
    
    dotsContainer.innerHTML = testimonials.map((_, index) => `
        <button class="testimonial-dot ${index === currentTestimonialIndex ? 'active' : ''}" 
                onclick="goToTestimonial(${index})">
        </button>
    `).join('');
}

function goToTestimonial(index) {
    currentTestimonialIndex = index;
    updateCurrentTestimonial();
    createTestimonialDots();
    pauseTestimonialAutoPlay();
}

function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateCurrentTestimonial();
    createTestimonialDots();
    pauseTestimonialAutoPlay();
}

function previousTestimonial() {
    currentTestimonialIndex = currentTestimonialIndex === 0 ? testimonials.length - 1 : currentTestimonialIndex - 1;
    updateCurrentTestimonial();
    createTestimonialDots();
    pauseTestimonialAutoPlay();
}

function startTestimonialAutoPlay() {
    if (testimonialAutoPlay) {
        testimonialInterval = setInterval(() => {
            nextTestimonial();
        }, 5000);
    }
}

function pauseTestimonialAutoPlay() {
    testimonialAutoPlay = false;
    clearInterval(testimonialInterval);
    
    // Resume autoplay after 10 seconds
    setTimeout(() => {
        testimonialAutoPlay = true;
        startTestimonialAutoPlay();
    }, 10000);
}

// FAQ Functions
function populateFAQ() {
    const faqItems = document.getElementById('faqItems');
    
    faqItems.innerHTML = faqs.map((faq, index) => `
        <div class="faq-item" style="animation-delay: ${index * 0.1}s">
            <button class="faq-question" onclick="toggleFAQ(${faq.id})">
                <span>${faq.question}</span>
                <div class="faq-toggle">+</div>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-content">
                    <p>${faq.answer}</p>
                </div>
            </div>
        </div>
    `).join('');
}

function toggleFAQ(faqId) {
    const faqItem = document.querySelector(`[onclick="toggleFAQ(${faqId})"]`).closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const toggle = item.querySelector('.faq-toggle');
        toggle.textContent = '+';
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
        const toggle = faqItem.querySelector('.faq-toggle');
        toggle.textContent = '−';
    }
}

// Contact Form Functions
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        handleContactSubmit(e);
    });
}

function handleContactSubmit(e) {
    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        template: formData.get('template'),
        message: formData.get('message')
    };
    
    // Send email using EmailJS
    emailjs.send('NeonFolio', 'template_whhtu5j', {
        from_name: data.name,
        from_email: data.email,
        to_email: 'rangashyamkumar@gmail.com',
        template_interest: data.template || 'Not specified',
        message: data.message,
        reply_to: data.email
    })
    .then((response) => {
        console.log('Email sent successfully:', response);
        showToast('Message Sent! 🚀', "Thanks for reaching out! I'll get back to you within 24 hours.");
        // Reset form
        e.target.reset();
    })
    .catch((error) => {
        console.error('Email send failed:', error);
        showToast('Error', 'Failed to send message. Please try calling directly: +91 98765 43210');
    });
}

// Utility Functions
function showToast(title, description) {
    const toast = document.getElementById('toast');
    const toastTitle = toast.querySelector('.toast-title');
    const toastDescription = toast.querySelector('.toast-description');
    
    toastTitle.textContent = title;
    toastDescription.textContent = description;
    
    toast.classList.remove('hidden');
    toast.classList.add('show');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 300);
    }, 5000);
}

function showUPIInfo() {
    showToast('UPI Payment', 'UPI ID: neonfolio@upi - After payment, send screenshot via email or WhatsApp!');
}

// Additional utility functions for specific interactions
function handleNewsletterSubscribe() {
    const emailInput = document.querySelector('.newsletter-input');
    const email = emailInput.value.trim();
    
    if (email && isValidEmail(email)) {
        showToast('Subscribed! 📧', 'Thank you for subscribing to our newsletter!');
        emailInput.value = '';
    } else {
        showToast('Invalid Email', 'Please enter a valid email address.');
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add newsletter subscription handler
document.addEventListener('DOMContentLoaded', () => {
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleNewsletterSubscribe();
        });
    }
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Performance optimization: Lazy loading for images
if ('IntersectionObserver' in window) {
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

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}