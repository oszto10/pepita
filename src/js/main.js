import '../styles/main.scss';


const menuButton = document.querySelector('.js-menu-button');
const offcanvasMenu = document.querySelector('.js-offcanvas');
const overlay = document.querySelector('.js-overlay');

menuButton?.addEventListener('click', () => {
  offcanvasMenu.classList.toggle('is-open');
  overlay.classList.toggle('is-visible');
});

overlay?.addEventListener('click', () => {
  offcanvasMenu.classList.remove('is-open');
  overlay.classList.remove('is-visible');
});
