document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('main');
    const navbar = document.querySelector('nav');

    overlay.classList.add('show');
    navbar.classList.add('blur-background');

    setTimeout(() => {
        overlay.classList.remove('show');
        mainContent.classList.remove('blur-background');
        navbar.classList.remove('blur-background');
    }, 5000);
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
