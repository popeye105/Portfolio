// Skills data
const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    // Add more skills as needed
];

// Experience data
const experiences = [
    {
        role: '[Your Role]',
        company: '[Company Name]',
        period: '[Start Year] - [End Year]',
        description: 'Description of your responsibilities and achievements.'
    },
    // Add more experiences as needed
];

// Social links data
const socialLinks = [
    { platform: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/yourusername' },
    { platform: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://linkedin.com/in/yourusername' },
    // Add more social links as needed
];

// Populate skills section
function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <p>${skill.name}</p>
        `;
        skillsGrid.appendChild(skillItem);
    });
}

// Populate experience section
function populateExperience() {
    const experienceTimeline = document.querySelector('.experience-timeline');
    experiences.forEach(exp => {
        const expCard = document.createElement('div');
        expCard.className = 'experience-card';
        expCard.innerHTML = `
            <h3>${exp.role}</h3>
            <h4>${exp.company}</h4>
            <p class="period">${exp.period}</p>
            <p>${exp.description}</p>
        `;
        experienceTimeline.appendChild(expCard);
    });
}

// Populate social links
function populateSocialLinks() {
    const socialLinksContainer = document.querySelector('.social-links');
    socialLinks.forEach(social => {
        const link = document.createElement('a');
        link.href = social.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.innerHTML = `<i class="${social.icon}"></i>`;
        socialLinksContainer.appendChild(link);
    });
}

// Handle resume download
document.querySelector('.resume-btn').addEventListener('click', () => {
    // Replace with actual resume file path
    window.open('path/to/your/resume.pdf', '_blank');
});

// Loading screen management
function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingVideo = document.getElementById('loading-video');
    
    if (loadingVideo) {
        // Force video properties
        loadingVideo.muted = true;
        loadingVideo.playsInline = true;
        
        // Immediate play attempt
        const attemptPlay = () => {
            loadingVideo.play().then(() => {
                console.log('Loading video started');
                // Update text when video starts
                const loadingText = document.querySelector('#loading-screen div');
                if (loadingText) loadingText.textContent = 'LOADING...';
            }).catch((error) => {
                console.log('Loading video needs user interaction');
            });
        };
        
        // Try to play when video can play
        loadingVideo.addEventListener('canplay', attemptPlay, { once: true });
        
        // Also try immediately
        setTimeout(attemptPlay, 100);
    }
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease-out';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                initializeBackgroundVideo();
            }, 500);
        }
    }, 2000);
}

// Background video initialization
function initializeBackgroundVideo() {
    const video = document.getElementById('bg-video');
    
    if (video) {
        // Force video properties
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        
        // Immediate play attempt
        const attemptPlay = () => {
            video.play().then(() => {
                console.log('Background video started');
            }).catch((error) => {
                console.log('Background video needs user interaction');
                
                // Add click anywhere to start background video
                const startBgVideo = () => {
                    video.play().then(() => {
                        console.log('Background video started on click');
                    }).catch(e => console.log('Background video click failed'));
                };
                
                document.addEventListener('click', startBgVideo, { once: true });
                document.addEventListener('touchstart', startBgVideo, { once: true });
            });
        };
        
        // Try to play when video can play
        video.addEventListener('canplay', attemptPlay, { once: true });
        
        // Also try immediately
        setTimeout(attemptPlay, 100);
    }
}

// Simple video background (legacy function)
function initializeVideo() {
    // This is now handled by initializeBackgroundVideo
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeLoading();
    initializeVideo();
    populateSkills();
    populateEducation();
    populateExperience();
    populateSocialLinks();
});
