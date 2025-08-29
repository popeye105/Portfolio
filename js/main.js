// Video sequence handler
function initVideoSequence() {
    const introVideo = document.getElementById('intro-video');
    const loopVideo = document.getElementById('loop-video');
    
    if (introVideo && loopVideo) {
        // Set intro video to stop at 14 seconds
        introVideo.addEventListener('timeupdate', function() {
            if (introVideo.currentTime >= 14) {
                introVideo.pause();
                introVideo.style.display = 'none';
                loopVideo.style.display = 'block';
                loopVideo.currentTime = 0;
                loopVideo.play();
            }
        });
        
        // Set loop video to loop only first 9 seconds
        loopVideo.addEventListener('timeupdate', function() {
            if (loopVideo.currentTime >= 9) {
                loopVideo.currentTime = 0;
            }
        });
    }
}

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
    
    const smoothSwitchToLoop = () => {
        // Ensure loop video is ready
        if (loop.readyState >= 3) {
            loop.currentTime = 0;
            loop.play().then(() => {
                // Fade out intro, fade in loop
                intro.style.opacity = '0';
                loop.style.opacity = '1';
                
                // Remove intro after transition
                setTimeout(() => {
                    intro.style.display = 'none';
                }, 500);
                
                // Smooth loop transition
                let hasLooped = false;
                loop.addEventListener('timeupdate', () => {
                    if (loop.currentTime >= 8.5 && !hasLooped) {
                        hasLooped = true;
                        loop.style.opacity = '0';
                        setTimeout(() => {
                            loop.currentTime = 0;
                            loop.style.opacity = '1';
                            hasLooped = false;
                        }, 300);
                    }
                });
            });
        } else {
            loop.addEventListener('canplay', () => {
                loop.currentTime = 0;
                loop.play().then(() => {
                    // Fade out intro, fade in loop
                    intro.style.opacity = '0';
                    loop.style.opacity = '1';
                    
                    // Remove intro after transition
                    setTimeout(() => {
                        intro.style.display = 'none';
                    }, 500);
                    
                    // Smooth loop transition
                    let hasLooped = false;
                    loop.addEventListener('timeupdate', () => {
                        if (loop.currentTime >= 8.5 && !hasLooped) {
                            hasLooped = true;
                            loop.style.opacity = '0';
                            setTimeout(() => {
                                loop.currentTime = 0;
                                loop.style.opacity = '1';
                                hasLooped = false;
                            }, 300);
                        }
                    });
                });
            }, { once: true });
        }
    };
    
    // Switch at 13.5 seconds for smoother transition
    setTimeout(smoothSwitchToLoop, 13500);
    intro.addEventListener('error', smoothSwitchToLoop);
}

// Mobile menu functions
function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileNav.classList.toggle('active');
    
    if (mobileNav.classList.contains('active')) {
        hamburger.innerHTML = '<div class="x-symbol">X</div>';
    } else {
        hamburger.innerHTML = '<span></span><span></span><span></span>';
    }
}

function closeMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileNav.classList.remove('active');
    hamburger.innerHTML = '<span></span><span></span><span></span>';
}


// Typing animation
function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const phrases = ['Tech Enthusiast', 'Problem Solver', 'Web Developer'];
    let currentPhrase = 0;
    let currentChar = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            typingText.textContent = current.substring(0, currentChar - 1);
            currentChar--;
        } else {
            typingText.textContent = current.substring(0, currentChar + 1);
            currentChar++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentChar === current.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && currentChar === 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeEffect, typeSpeed);
    }
    
    typeEffect();
}

// Resume download handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize video sequence
    initVideoSequence();
    
    // Initialize typing animation
    initTypingAnimation();
    
    const resumeBtn = document.querySelector('.resume-btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            alert('Error: Not Uploaded Yet');
        });
    }
    
    populateSkills();
});

