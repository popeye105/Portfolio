// My skills and tech stack
const skills = [
    { name: 'HTML', image: 'TS Logo/HTML5.png' },
    { name: 'CSS', image: 'TS Logo/CSS3.png' },
    { name: 'PYTHON', image: 'TS Logo/PYTHON.png' },
    { name: 'JAVA', image: 'TS Logo/JAVA.png' },
    { name: 'JS', image: 'TS Logo/JAVASCRIPT.png' },
    { name: 'GITHUB', image: 'TS Logo/GITHUB.png' },
];

// Work experience
const experiences = [
    {
        role: '[Your Role]',
        company: '[Company Name]',
        period: '[Start Year] - [End Year]',
        description: 'Description of your responsibilities and achievements.'
    },
];

// Social media links - REMOVED
// const socialLinks = [];

function populateSkills() {
    const skillsGrid = document.querySelector('.skills-grid');
    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.innerHTML = `
            <img src="${skill.image}" alt="${skill.name}" class="skill-logo">
            <p>${skill.name}</p>
        `;
        skillsGrid.appendChild(skillItem);
    });
}

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

function populateEducation() {
    // Education info is already in HTML
}

// populateSocialLinks function REMOVED - no longer needed

// Resume download handler - disabled for now

function initializeLoading() {
    const loadingScreen = document.getElementById('loading-screen');
    const video = document.getElementById('background-video');
    
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

function initVideoSequence() {
    const intro = document.getElementById('intro-video');
    const loop = document.getElementById('loop-video');
    
    if (!intro || !loop) return;
    
    // Preload and prepare loop video
    loop.load();
    loop.preload = 'auto';
    
    const switchToLoop = () => {
        // Wait for loop video to be ready before switching
        if (loop.readyState >= 3) {
            loop.style.display = 'block';
            loop.currentTime = 0;
            loop.play().then(() => {
                intro.style.display = 'none';
                // Start the 9-second interval immediately after first play
                setInterval(() => {
                    loop.currentTime = 0;
                    loop.play();
                }, 9000);
            });
        } else {
            loop.addEventListener('canplay', () => {
                loop.style.display = 'block';
                loop.currentTime = 0;
                loop.play().then(() => {
                    intro.style.display = 'none';
                    // Start the 9-second interval immediately after first play
                    setInterval(() => {
                        loop.currentTime = 0;
                        loop.play();
                    }, 9000);
                });
            }, { once: true });
        }
    };
    
    setTimeout(switchToLoop, 14000);
    intro.addEventListener('error', switchToLoop);
}

// Mobile menu functions
function toggleMobileMenu() {
    document.querySelector('.mobile-nav').classList.toggle('active');
    document.querySelector('.mobile-overlay').classList.toggle('active');
}

function closeMobileMenu() {
    document.querySelector('.mobile-nav').classList.remove('active');
    document.querySelector('.mobile-overlay').classList.remove('active');
}

// Resume download handler
document.addEventListener('DOMContentLoaded', () => {
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            alert('Error: Not Uploaded Yet');
        });
    }
});

// Start everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    initVideoSequence();
    initializeLoading();
    populateSkills();
    populateEducation();
    populateExperience();
    // populateSocialLinks(); // Removed to eliminate mini social icons
});
