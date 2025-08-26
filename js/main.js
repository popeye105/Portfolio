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

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateExperience();
    populateSocialLinks();
});
