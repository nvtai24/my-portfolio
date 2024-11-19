/*==================== toggle icon navbar ====================*/
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    const header = document.querySelector('header');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });

    window.addEventListener('scroll', () => {
        const top = window.scrollY;

        sections.forEach(sec => {
            const offset = sec.offsetTop - 150;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                });
            }
        });

        header.classList.toggle('sticky', top > 100);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });

    /*==================== scroll reveal ====================*/
    if (document.querySelector('.about-img')) {
        ScrollReveal({ 
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 200
        });

        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img, .contact-info', { origin: 'left' });
        ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
    } else {
        console.error('Phần tử .about-img không tồn tại trong DOM');
    }

    /*==================== typed js ====================*/
    new Typed('.multiple-text', {
        strings: [
            '<span class="text-color-1">Hello, nice to meet you!</span>',
            '<span class="text-color-2">こんにちは、はじめまして。</span>',
            '<span class="text-color-3">안녕하세요, 만나서 반갑습니다!</span>',
            '<span class="text-color-4">你好，很高兴认识你!</span>'
        ],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 500,
        loop: true
    });
});




