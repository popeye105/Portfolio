
// My skills and tech stack
const skills = [
    { name: 'HTML', image: 'TS Logo/HTML5.png' },
    { name: 'CSS', image: 'TS Logo/CSS3.png' },
    { name: 'PYTHON', image: 'TS Logo/PYTHON.png' },
    { name: 'JAVA', image: 'TS Logo/JAVA.png' },
    { name: 'JS', image: 'TS Logo/JAVASCRIPT.png' },
    { name: 'GITHUB', image: 'TS Logo/GITHUB.png' },
];


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



function initVideoSequence() {
    const video = document.getElementById('background-video');
    if (!video) return;
    
    // Loop only first 14 seconds with smooth transition
    video.addEventListener('timeupdate', () => {
        if (video.currentTime >= 14) {
            video.currentTime = 0;
        }
    });
    
    // Ensure smooth playback
    video.addEventListener('loadeddata', () => {
        video.play();
    });
}

function toggleMobileMenu() {
    const mobileNav = document.querySelector('.mobile-nav');
    const hamburger = document.querySelector('.hamburger');
    
    mobileNav.classList.toggle('active');
    hamburger.innerHTML = mobileNav.classList.contains('active') 
        ? '<div class="x-symbol">X</div>' 
        : '<span></span><span></span><span></span>';
}

function closeMobileMenu() {
    document.querySelector('.mobile-nav').classList.remove('active');
    document.querySelector('.hamburger').innerHTML = '<span></span><span></span><span></span>';
}


function initTypingAnimation() {
    const typingText = document.getElementById('typing-text');
    const phrases = ['Tech Enthusiast', 'Problem Solver', 'Web Developer'];
    let currentPhrase = 0, currentChar = 0, isDeleting = false;
    
    function typeEffect() {
        const current = phrases[currentPhrase];
        typingText.textContent = current.substring(0, isDeleting ? currentChar-- : currentChar++);
        
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

function openEmail(event) {
    event.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.location.href = 'mailto:arbabrizviwork@gmail.com';
    } else {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=arbabrizviwork@gmail.com', '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initVideoSequence();
    initTypingAnimation();
    populateSkills();
    
    document.querySelector('.resume-btn')?.addEventListener('click', () => {
        alert('Error: Not Uploaded Yet');
    });
});

