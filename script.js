const pic = document.querySelector('.picture');
const hamburger = document.querySelector('.hamburger');
const cross = document.querySelector('.cross');
const nav = document.querySelector('.heading');

function handleResponsiveMenu() {
    if (window.innerWidth <= 900) {
        nav.style.display = "none";
        hamburger.style.display = "block";
        cross.style.display = "none";
    } else {
        nav.style.display = "flex";
        hamburger.style.display = "none";
        cross.style.display = "none";
    }
}

window.addEventListener('resize', handleResponsiveMenu);
window.addEventListener('DOMContentLoaded', handleResponsiveMenu);

function hideHeading() {
    nav.style.display = "none";
    cross.style.display = "none";
    hamburger.style.display = "block";
}

function showHeading() {
    nav.style.display = "flex";
    hamburger.style.display = "none";
    cross.style.display = "block";
}

function main() {
    
    const aboutBtn = document.querySelector('#aboutBtn');
    const projectsBtn = document.querySelector('#projectsBtn');
    const contactBtn = document.querySelector('#contactBtn');
    const skillsBtn = document.querySelector('#skillsBtn');
    const educationBtn = document.querySelector('#educationBtn');

    aboutBtn.addEventListener('click', () => {
        if (window.innerWidth <= 900)
        hideHeading();
        document.querySelector('.container').scrollIntoView({ behavior: 'smooth' });
    });

    projectsBtn.addEventListener('click', () => {
        if (window.innerWidth <= 900)
        hideHeading();
        document.querySelector('.projects').scrollIntoView({ behavior: 'smooth' });
    });

    contactBtn.addEventListener('click', () => {
        if (window.innerWidth <= 900)
        hideHeading();
        document.querySelector('.contact').scrollIntoView({ behavior: 'smooth' });
    });

    skillsBtn.addEventListener('click', () => {
        if (window.innerWidth <= 900)
        hideHeading();
        document.querySelector('.skills').scrollIntoView({ behavior: 'smooth' });
    });

    educationBtn.addEventListener('click', () => {
        if (window.innerWidth <= 900)
        hideHeading();
        document.querySelector('.education').scrollIntoView({ behavior: 'smooth' });
    });

    pic.addEventListener('mouseenter', () => {
        document.querySelector('.picture').style.boxShadow = "0 16px 48px rgba(0,0,0,0.5), 0 1.5px 4px rgba(227, 192, 64, 0.834) inset";
    });

     pic.addEventListener('mouseleave', () => {
        pic.style.boxShadow = ""; // Removes the shadow
    });

    hamburger.addEventListener('click', () => { 
        showHeading();
    });

    cross.addEventListener('click', () => {
       hideHeading();
    });
}

main();