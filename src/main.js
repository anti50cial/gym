import './style.css';

// Navbar scroll logic
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('bg-black/90', 'backdrop-blur-md', 'py-4', 'border-white/10');
        navbar.classList.remove('py-6', 'border-white/0');
    } else {
        navbar.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-4', 'border-white/10');
        navbar.classList.add('py-6', 'border-white/0');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
};

mobileMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

// Reveal on scroll logic
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Initial check in case elements are already in view
revealOnScroll();

// Parallax effect for hero
const heroImg = document.querySelector('#hero img');
window.addEventListener('scroll', () => {
    const scrollValue = window.scrollY;
    heroImg.style.transform = `translateY(${scrollValue * 0.3}px) scale(${1.05 + scrollValue * 0.0001})`;
});

console.log('Neon Strength Landing Page Initialized');
