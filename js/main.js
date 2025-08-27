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
    
    // Debug video loading
    if (loadingVideo) {
        console.log('Loading video element found');
        
        loadingVideo.addEventListener('loadstart', () => console.log('Loading video: loadstart'));
        loadingVideo.addEventListener('loadeddata', () => console.log('Loading video: loadeddata'));
        loadingVideo.addEventListener('canplay', () => console.log('Loading video: canplay'));
        loadingVideo.addEventListener('error', (e) => console.error('Loading video error:', e));
        
        // Force video properties
        loadingVideo.muted = true;
        loadingVideo.autoplay = true;
        loadingVideo.playsInline = true;
        
        loadingVideo.load();
        
        // Try to play immediately
        loadingVideo.play().then(() => {
            console.log('Loading video playing successfully');
        }).catch((error) => {
            console.error('Loading video play failed:', error);
            
            // Try again after a short delay
            setTimeout(() => {
                loadingVideo.play().catch(e => console.error('Loading video retry failed:', e));
            }, 500);
        });
        
        // User interaction fallback
        const playOnClick = () => {
            loadingVideo.play().then(() => {
                console.log('Loading video started on user interaction');
            }).catch(e => console.error('Loading video click play failed:', e));
        };
        
        document.addEventListener('click', playOnClick, { once: true });
        document.addEventListener('touchstart', playOnClick, { once: true });
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
        console.log('Background video element found');
        
        video.addEventListener('loadstart', () => console.log('Background video: loadstart'));
        video.addEventListener('loadeddata', () => console.log('Background video: loadeddata'));
        video.addEventListener('canplay', () => console.log('Background video: canplay'));
        video.addEventListener('error', (e) => console.error('Background video error:', e));
        
        // Force video properties
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.playsInline = true;
        
        video.load();
        
        // Try to play immediately
        video.play().then(() => {
            console.log('Background video playing successfully');
        }).catch((error) => {
            console.error('Background video play failed:', error);
            
            // Try again after a short delay
            setTimeout(() => {
                video.play().catch(e => console.error('Background video retry failed:', e));
            }, 500);
        });
        
        // User interaction fallback
        const playOnClick = () => {
            video.play().then(() => {
                console.log('Background video started on user interaction');
            }).catch(e => console.error('Background video click play failed:', e));
        };
        
        document.addEventListener('click', playOnClick, { once: true });
        document.addEventListener('touchstart', playOnClick, { once: true });
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
