// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update URL hash without scrolling
                history.pushState(null, null, targetId);
                
                // Update active state
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
    
    // Get the scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top-btn');
    
    // Show/hide the scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        // Show/hide scroll to top button
        if (scrollPosition > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        // Add active class to navigation links based on scroll position
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
    
    // Scroll to top when the button is clicked
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add CSS for scroll button
    const style = document.createElement('style');
    style.textContent = `
        #scroll-top-btn {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: var(--primary-color);
            color: white;
            border: none;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease, background-color 0.3s ease;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            z-index: 99;
            font-size: 18px;
        }
        
        #scroll-top-btn.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        #scroll-top-btn:hover {
            background-color: var(--accent-color);
            transform: translateY(-5px);
            box-shadow: 0 8px 20px rgba(82, 113, 255, 0.3);
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease-in-out forwards;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .timeline-item, .project-card, .skills-category, .education-item, .publication-item, .research-interests {
            opacity: 0;
        }
        
        @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
        }
        
        .profile-img:hover {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(82, 113, 255, 0.4);
            }
            70% {
                transform: scale(1.05);
                box-shadow: 0 0 0 10px rgba(82, 113, 255, 0);
            }
            100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(82, 113, 255, 0);
            }
        }
        
        .social-btn:hover i {
            animation: wave 1s ease-in-out;
        }
    `;
    document.head.appendChild(style);
    
    // Add animation to elements when they come into view
    const observeElements = (elements, className, threshold = 0.1, rootMargin = '0px 0px -50px 0px', delay = 0) => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add(className);
                    }, delay * index);
                    
                    // Unobserve after animation is applied
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: threshold,
            rootMargin: rootMargin
        });
        
        elements.forEach(element => {
            observer.observe(element);
        });
    };
    
    // Observe elements for animation with staggered delays
    observeElements(document.querySelectorAll('.timeline-item'), 'fade-in', 0.1, '0px 0px -50px 0px', 150);
    observeElements(document.querySelectorAll('.project-card'), 'fade-in', 0.1, '0px 0px -50px 0px', 100);
    observeElements(document.querySelectorAll('.skills-category'), 'fade-in', 0.1, '0px 0px -50px 0px', 100);
    observeElements(document.querySelectorAll('.education-item'), 'fade-in', 0.1, '0px 0px -50px 0px', 150);
    observeElements(document.querySelectorAll('.publication-item'), 'fade-in', 0.1, '0px 0px -50px 0px', 150);
    observeElements(document.querySelectorAll('.research-interests'), 'fade-in', 0.1, '0px 0px -50px 0px', 150);
    
    // Add hover effects to skill tags
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(82, 113, 255, 0.3)';
        });
        
        tag.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Add hover effects to timeline-content
    document.querySelectorAll('.timeline-content').forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--box-shadow)';
        });
    });
    
    // Check for URL hash on page load and scroll to that section
    if (window.location.hash) {
        const targetSection = document.querySelector(window.location.hash);
        if (targetSection) {
            setTimeout(() => {
                window.scrollTo({
                    top: targetSection.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Update active state
                const activeLink = document.querySelector(`a[href="${window.location.hash}"]`);
                if (activeLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    activeLink.classList.add('active');
                }
            }, 500);
        }
    }
    
    // Add typing animation to the tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 40);
            }
        };
        
        // Start the typing animation after a delay
        setTimeout(typeWriter, 500);
    }
}); 