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

// Populate education section (stub to avoid runtime errors)
function populateEducation() {
    // The template in index.html already contains a sample education card.
    // Extend this function later if dynamic content is desired.
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
    
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease-out';
            
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 2000);
}

// Background video initialization
function initializeBackgroundVideo() {
    const video = document.getElementById('bg-video');
    
    if (video) {
        console.log('Loading Portfolio Background video...');
        
        // Set video properties for optimal playback
        video.muted = true;
        video.defaultMuted = true;
        video.playsInline = true;
        video.loop = true;
        video.setAttribute('webkit-playsinline', '');
        
        // Handle successful video load
        video.addEventListener('loadeddata', () => {
            console.log('Portfolio Background video loaded successfully!');
            video.style.opacity = '1';
        });
        
        video.addEventListener('canplay', () => {
            console.log('Video ready to play');
            video.play().then(() => {
                console.log('Portfolio Background video playing successfully!');
                video.style.opacity = '1';
            }).catch(e => {
                console.log('Autoplay blocked, will play on user interaction:', e);
                // Add click listener to start video on user interaction
                document.addEventListener('click', () => {
                    video.play();
                    video.style.opacity = '1';
                }, { once: true });
            });
        });
        
        // Handle errors
        video.addEventListener('error', (e) => {
            console.log('Video loading failed:', e);
            video.style.display = 'none';
        });
        
        // Load the video
        video.load();
        
    } else {
        console.log('Video element not found');
    }
}


// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeBackgroundVideo();
    initializeLoading();
    populateSkills();
    populateEducation();
    populateExperience();
    populateSocialLinks();
});
