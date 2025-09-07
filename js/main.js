
// Categorized tech stack
const techStack = {
    'programming-languages': [
        { name: 'PYTHON', image: 'TS Logo/PYTHON.png' },
        { name: 'JAVA', image: 'TS Logo/JAVA.png' },
        { name: 'JAVASCRIPT', image: 'TS Logo/JAVASCRIPT.png' }
    ],
    'web-development': [
        { name: 'HTML5', image: 'TS Logo/HTML5.png' },
        { name: 'CSS3', image: 'TS Logo/CSS3.png' }
    ],
    'databases-tools': [
        { name: 'MYSQL', image: 'TS Logo/MYSQL.png' },
        { name: 'MONGODB', image: 'TS Logo/MONGODB.png' },
        { name: 'SKLEARN', image: 'TS Logo/SKLEARN.png' }
    ],
    'dev-tools': [
        { name: 'GITHUB', image: 'TS Logo/GITHUB.png' },
        { name: 'DOCKER', image: 'TS Logo/DOCKER.png' }
    ]
};

function populateSkills() {
    Object.keys(techStack).forEach(categoryId => {
        const categoryGrid = document.getElementById(categoryId);
        if (categoryGrid) {
            techStack[categoryId].forEach(skill => {
                const skillItem = document.createElement('div');
                skillItem.className = 'skill-item';
                skillItem.innerHTML = `
                    <img src="${skill.image}" alt="${skill.name}" class="skill-logo red-border">
                    <p>${skill.name}</p>
                `;
                categoryGrid.appendChild(skillItem);
            });
        }
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
    const phrases = ['Frontend Developer', 'Tech Enthusiast', 'Problem Solver'];
    let currentPhrase = 0, currentChar = 0, isDeleting = false;
    
    function typeEffect() {
        const current = phrases[currentPhrase];
        
        if (isDeleting) {
            typingText.textContent = current.substring(0, currentChar);
            currentChar--;
        } else {
            typingText.textContent = current.substring(0, currentChar);
            currentChar++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentChar > current.length) {
            typeSpeed = 2000; // Pause after complete word
            isDeleting = true;
            currentChar = current.length;
        } else if (isDeleting && currentChar < 0) {
            isDeleting = false;
            currentPhrase = (currentPhrase + 1) % phrases.length;
            currentChar = 0;
            typeSpeed = 500; // Pause before new word
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

// Online status functionality
function initOnlineStatus() {
    const updateStatus = () => {
        const isOnline = navigator.onLine;
        const now = new Date();
        document.querySelector('.status-dot').className = `status-dot ${isOnline ? 'online' : 'offline'}`;
        document.querySelector('.status-text').textContent = isOnline ? 'ONLINE' : 'OFFLINE';
        document.getElementById('last-active-time').textContent = `LAST ACTIVE: ${now.toLocaleDateString()}`;
    };
    
    updateStatus();
    ['online', 'offline'].forEach(event => window.addEventListener(event, updateStatus));
    setInterval(updateStatus, 60000);
}

document.addEventListener('DOMContentLoaded', () => {
    initVideoSequence();
    initTypingAnimation();
    populateSkills();
    initOnlineStatus();
    
    document.querySelector('.resume-btn')?.addEventListener('click', () => {
        alert('Error: Not Uploaded Yet');
    });
});

