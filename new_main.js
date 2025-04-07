// JavaScript for Mihir Inamdar's Portfolio
// Targeting Allen AI Predoctoral Position

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        });
    });
    
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Active navigation highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add active class to nav links
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .nav-link.active {
                background-color: var(--secondary-color);
                color: white;
            }
        </style>
    `);
    
    // Add animation to research areas on scroll
    const researchAreas = document.querySelectorAll('.research-area');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    researchAreas.forEach(area => {
        observer.observe(area);
    });
    
    // Add animation styles
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .research-area {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .research-area.animate {
                opacity: 1;
                transform: translateY(0);
            }
            
            .research-area:nth-child(1) {
                transition-delay: 0.1s;
            }
            
            .research-area:nth-child(2) {
                transition-delay: 0.3s;
            }
            
            .research-area:nth-child(3) {
                transition-delay: 0.5s;
            }
            
            .research-area:nth-child(4) {
                transition-delay: 0.7s;
            }
        </style>
    `);
    
    // Mobile navigation toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        const nav = document.querySelector('nav');
        
        // Create mobile nav toggle button
        const mobileNavToggle = document.createElement('button');
        mobileNavToggle.classList.add('mobile-nav-toggle');
        mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
        header.insertBefore(mobileNavToggle, nav);
        
        // Add mobile nav styles
        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @media (max-width: 768px) {
                    nav {
                        display: none;
                        width: 100%;
                    }
                    
                    nav.active {
                        display: block;
                    }
                    
                    nav ul {
                        flex-direction: column;
                    }
                    
                    nav li {
                        width: 100%;
                        margin: 0.25rem 0;
                    }
                    
                    .nav-link {
                        display: block;
                        text-align: center;
                    }
                    
                    .mobile-nav-toggle {
                        display: block;
                        background: transparent;
                        border: none;
                        color: white;
                        font-size: 1.5rem;
                        cursor: pointer;
                        margin: 0 auto 1rem;
                    }
                }
                
                @media (min-width: 769px) {
                    .mobile-nav-toggle {
                        display: none;
                    }
                }
            </style>
        `);
        
        // Toggle mobile nav
        mobileNavToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.innerHTML = nav.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile nav when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    nav.classList.remove('active');
                    mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            });
        });
    };
    
    // Initialize mobile nav
    createMobileNav();
    
    // Handle window resize
    window.addEventListener('resize', function() {
        const nav = document.querySelector('nav');
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        
        if (window.innerWidth > 768 && nav.classList.contains('active')) {
            nav.classList.remove('active');
            if (mobileNavToggle) {
                mobileNavToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        }
    });
});
