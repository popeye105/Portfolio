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
    const video = document.getElementById('background-video');
    
    // Wait for video to be ready before hiding loading screen
    if (video) {
        video.addEventListener('canplay', () => {
            setTimeout(() => {
                if (loadingScreen) {
                    loadingScreen.style.opacity = '0';
                    loadingScreen.style.transition = 'opacity 0.5s ease-out';
                    
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }
            }, 1000);
        });
        
        // Fallback: hide after 3 seconds even if video doesn't load
        setTimeout(() => {
            if (loadingScreen && loadingScreen.style.display !== 'none') {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
        }, 3000);
    } else {
        // No video, hide after 2 seconds
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
}

// Background video initialization
function initializeBackgroundVideo() {
    const video = document.getElementById('background-video');
    
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


// Simple video initialization
function initVideo() {
    const video = document.getElementById('background-video');
    if (video) {
        console.log('Video element found, src:', video.src);
        
        // Remove controls after testing
        setTimeout(() => {
            video.removeAttribute('controls');
        }, 3000);
        
        video.addEventListener('canplay', () => {
            console.log('Video can play');
            video.play().catch(e => console.log('Autoplay blocked:', e));
        });
        
        video.addEventListener('error', (e) => {
            console.error('Video error:', video.error);
        });
        
        // Manual play button for testing
        document.addEventListener('keydown', (e) => {
            if (e.key === ' ') {
                e.preventDefault();
                video.play();
            }
        });
    }
}

// Video sequence management
function initVideoSequence() {
    const introVideo = document.getElementById('intro-video');
    const loopVideo = document.getElementById('loop-video');
    
    if (introVideo && loopVideo) {
        // When intro video ends, switch to loop video
        introVideo.addEventListener('ended', () => {
            introVideo.style.display = 'none';
            loopVideo.style.display = 'block';
            loopVideo.play();
        });
        
        // Handle intro video errors
        introVideo.addEventListener('error', () => {
            console.log('Intro video failed, switching to loop');
            introVideo.style.display = 'none';
            loopVideo.style.display = 'block';
            loopVideo.play();
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initVideoSequence();
    initializeLoading();
    populateSkills();
    populateEducation();
    populateExperience();
    populateSocialLinks();
});
