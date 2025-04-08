/**
 * Main JavaScript file for Mihir Inamdar's Portfolio
 * Enhanced to align with AI2 application requirements
 */

document.addEventListener('DOMContentLoaded', function() {
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });
    
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Skills animation on scroll
    const skillTags = document.querySelectorAll('.skills-tags span');
    
    const animateSkills = function() {
        skillTags.forEach(tag => {
            const tagPosition = tag.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (tagPosition < screenPosition) {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Initialize skills with opacity 0 and transform
    skillTags.forEach(tag => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Call animation on scroll
    window.addEventListener('scroll', animateSkills);
    
    // Call once on load to animate visible skills
    animateSkills();
    
    // Research methodology toggle
    const methodologyHeadings = document.querySelectorAll('.methodology h5, .outcomes h5');
    
    methodologyHeadings.forEach(heading => {
        heading.style.cursor = 'pointer';
        heading.innerHTML += ' <i class="fas fa-chevron-down"></i>';
        
        const content = heading.nextElementSibling;
        content.style.maxHeight = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'max-height 0.3s ease';
        
        heading.addEventListener('click', function() {
            if (content.style.maxHeight === '0px') {
                content.style.maxHeight = content.scrollHeight + 'px';
                heading.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
            } else {
                content.style.maxHeight = '0';
                heading.querySelector('i').classList.replace('fa-chevron-up', 'fa-chevron-down');
            }
        });
    });
    
    // Publication metrics visualization
    const createCitationGraph = function() {
        // This would normally use a charting library like Chart.js
        // For now, we'll create a simple visual representation
        const citationCounts = document.querySelectorAll('.citation-count');
        
        citationCounts.forEach(count => {
            const countValue = parseInt(count.textContent.match(/\d+/)[0]);
            const maxCount = 10; // Assuming a maximum for scaling
            
            const graphContainer = document.createElement('div');
            graphContainer.className = 'citation-graph';
            graphContainer.style.width = '100%';
            graphContainer.style.height = '5px';
            graphContainer.style.backgroundColor = '#ecf0f1';
            graphContainer.style.marginTop = '10px';
            graphContainer.style.borderRadius = '2px';
            
            const graphBar = document.createElement('div');
            graphBar.style.width = `${(countValue / maxCount) * 100}%`;
            graphBar.style.height = '100%';
            graphBar.style.backgroundColor = '#3498db';
            graphBar.style.borderRadius = '2px';
            graphBar.style.transition = 'width 1s ease';
            
            graphContainer.appendChild(graphBar);
            count.parentNode.appendChild(graphContainer);
        });
    };
    
    // Call citation graph creation
    createCitationGraph();
    
    // Research interests highlighting
    const researchInterests = document.querySelectorAll('.research-interests li');
    
    researchInterests.forEach(interest => {
        interest.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e1f0fa';
            this.style.borderLeftWidth = '5px';
        });
        
        interest.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#f8f9fa';
            this.style.borderLeftWidth = '3px';
        });
    });
    
    // Project cards interaction
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
    });
    
    // Research metrics visualization
    const createResearchMetrics = function() {
        // This would normally use actual data and a visualization library
        // For demonstration purposes, we'll create a simple placeholder
        const researchSection = document.querySelector('#research');
        if (!researchSection) return;
        
        const metricsContainer = document.createElement('div');
        metricsContainer.className = 'research-metrics';
        metricsContainer.style.display = 'flex';
        metricsContainer.style.justifyContent = 'space-around';
        metricsContainer.style.flexWrap = 'wrap';
        metricsContainer.style.margin = '40px 0';
        metricsContainer.style.padding = '20px';
        metricsContainer.style.backgroundColor = 'white';
        metricsContainer.style.borderRadius = '5px';
        metricsContainer.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        
        const metrics = [
            { label: 'Publications', value: 2 },
            { label: 'Citations', value: 1 },
            { label: 'Research Projects', value: 3 },
            { label: 'Collaborators', value: 5 }
        ];
        
        metrics.forEach(metric => {
            const metricItem = document.createElement('div');
            metricItem.className = 'metric-item';
            metricItem.style.textAlign = 'center';
            metricItem.style.padding = '15px';
            
            const metricValue = document.createElement('div');
            metricValue.className = 'metric-value';
            metricValue.textContent = '0';
            metricValue.style.fontSize = '2.5rem';
            metricValue.style.fontWeight = 'bold';
            metricValue.style.color = '#3498db';
            
            const metricLabel = document.createElement('div');
            metricLabel.className = 'metric-label';
            metricLabel.textContent = metric.label;
            metricLabel.style.fontSize = '1rem';
            metricLabel.style.color = '#2c3e50';
            
            metricItem.appendChild(metricValue);
            metricItem.appendChild(metricLabel);
            metricsContainer.appendChild(metricItem);
            
            // Animate the counter
            let count = 0;
            const interval = setInterval(() => {
                count++;
                metricValue.textContent = count;
                if (count >= metric.value) {
                    clearInterval(interval);
                }
            }, 100);
        });
        
        // Insert after research overview
        const researchOverview = researchSection.querySelector('.research-overview');
        researchOverview.parentNode.insertBefore(metricsContainer, researchOverview.nextSibling);
    };
    
    // Call research metrics creation
    createResearchMetrics();
    
    // Add AI2 research alignment highlighting
    const highlightAI2Alignment = function() {
        const keywords = [
            'document understanding', 
            'multilingual', 
            'information extraction',
            'natural language processing',
            'computer vision',
            'multimodal',
            'knowledge representation',
            'low-resource'
        ];
        
        const contentElements = document.querySelectorAll('.about-content p, .research-overview p, .research-project p, .publication-item p');
        
        contentElements.forEach(element => {
            let content = element.innerHTML;
            
            keywords.forEach(keyword => {
                const regex = new RegExp(`(${keyword})`, 'gi');
                content = content.replace(regex, '<span class="ai2-highlight">$1</span>');
            });
            
            element.innerHTML = content;
        });
        
        // Add CSS for highlighted terms
        const style = document.createElement('style');
        style.textContent = `
            .ai2-highlight {
                background-color: rgba(52, 152, 219, 0.2);
                padding: 0 3px;
                border-radius: 3px;
            }
        `;
        document.head.appendChild(style);
    };
    
    // Call AI2 alignment highlighting
    highlightAI2Alignment();
});
