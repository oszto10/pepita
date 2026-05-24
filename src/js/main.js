import '../styles/main.scss';

const menuButton = document.querySelector('.hamburger__menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', (event) => {
    event.stopPropagation();
    menu.classList.toggle('menu-open');
});

window.addEventListener('click', (event) => {
    if (menu.classList.contains('menu-open')) {
        if (!menu.contains(event.target)) {
            menu.classList.remove('menu-open');
        }
    }
});