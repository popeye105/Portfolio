
// Categorized tech stack
const techStack = {
    'programming-languages': [
        { name: 'PYTHON', image: 'TS Logo/PYTHON.png' },
        { name: 'JAVA', image: 'TS Logo/JAVA.png' },
        { name: 'JAVASCRIPT', image: 'TS Logo/JAVASCRIPT.png' }
    ],
    'web-technologies': [
        { name: 'HTML5', image: 'TS Logo/HTML5.png' },
        { name: 'CSS3', image: 'TS Logo/CSS3.png' }
    ],
    'databases': [
        { name: 'MYSQL', image: 'TS Logo/MYSQL.png' },
        { name: 'MONGODB', image: 'TS Logo/MONGODB.png' }
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

// Scroll to section function for hero button
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
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



function openEmail(event) {
    event.preventDefault();
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        window.location.href = 'mailto:arbabrizviwork@gmail.com';
    } else {
        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=arbabrizviwork@gmail.com', '_blank');
    }
}

// Blog button functionality
function showBlogMessage() {
    alert('Blog coming soon! I\'m currently working on some exciting articles about web development and AI. Stay tuned!');
}

// Toggle metrics function for education section
function toggleMetrics(metricsId) {
    const metricsDiv = document.getElementById(metricsId);
    if (metricsDiv.style.display === 'none' || metricsDiv.style.display === '') {
        metricsDiv.style.display = 'block';
    } else {
        metricsDiv.style.display = 'none';
    }
}

// View Certificate function
function viewCertificate(certificateId) {
    // Certificate PDF file paths
    const certificateUrls = {
        'ibm-ai': 'Certificates/IBM Foundational AI.pdf',
        'nvidia-nlp': 'Certificates/Nvidia Transformer-based NLP.pdf',
        'tata-analytics': 'Certificates/Tata GenAI.pdf'
    };
    
    const url = certificateUrls[certificateId];
    
    if (url) {
        // Open PDF at 80% zoom
        window.open(url + '#zoom=80&toolbar=0&navpanes=0', '_blank');
    } else {
        alert(`Certificate not found!`);
    }
}

// Smooth scrolling and active navigation
function initSmoothScrolling() {
    // Handle navigation links and hero contact button
    const navLinks = document.querySelectorAll('.nav-link, .hero-contact-btn');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Use same offset for both navigation and hero contact button
                const offset = 70;
                const offsetTop = targetSection.offsetTop - offset;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active navigation on scroll
    function updateActiveNavigation() {
        const scrollPosition = window.scrollY + 150; // Increased offset for better detection
        
        let activeSection = 'about'; // Default to 'about' section
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 200; // Earlier detection
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop) {
                activeSection = section.id;
            }
        });
        
        // Update active navigation link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${activeSection}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Throttled scroll event listener for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(updateActiveNavigation, 10);
    });
    
    // Initial call to set active navigation
    updateActiveNavigation();
}

// Mobile menu smooth scrolling
function closeMobileMenu() {
    document.querySelector('.mobile-nav').classList.remove('active');
    document.querySelector('.hamburger').innerHTML = '<span></span><span></span><span></span>';
}

// Update mobile menu links to use smooth scrolling
function initMobileNavigation() {
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                closeMobileMenu();
                setTimeout(() => {
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }, 300); // Wait for mobile menu to close
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    populateSkills();
    initSmoothScrolling();
    initMobileNavigation();
    initVideoSequence();
});

document.querySelector('.resume-btn')?.addEventListener('click', () => {
    alert('Error: Not Uploaded Yet');
});
