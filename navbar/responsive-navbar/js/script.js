const nav = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle input');

menuToggle.addEventListener('click', () => {
   nav.classList.toggle('slide');
});