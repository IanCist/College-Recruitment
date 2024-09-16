document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById('overlay');
    const welcomeText = document.getElementById('welcome-text');
    const mainContent = document.querySelector('main');
    const navbar = document.querySelector('nav');


    overlay.classList.add('show');
    setTimeout(() => {
        mainContent.classList.add('blur-background');
        navbar.classList.add('blur-background');
    }, 100); 

 
    setTimeout(() => {
        overlay.classList.remove('show');
        setTimeout(() => {
            mainContent.classList.remove('blur-background');
            navbar.classList.remove('blur-background');
        }, 2000); 
    }, 3000); 
});