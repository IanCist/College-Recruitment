document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById('overlay');
    const mainContent = document.querySelector('main');
    const navbar = document.querySelector('nav');
    const arrowContainer = document.querySelector('.arrow-container');

    overlay.classList.add('show');
    navbar.classList.add('blur-background');

    setTimeout(() => {
        overlay.classList.remove('show');
        mainContent.classList.remove('blur-background');
        navbar.classList.remove('blur-background');
    }, 5000);

});

document.addEventListener("DOMContentLoaded", function () {
    const arrowContainer = document.querySelector('.arrow-container');


    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            arrowContainer.classList.add('hide');
        } else {
            arrowContainer.classList.remove('hide');
        }
    });
});
