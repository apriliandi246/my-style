const nav = document.querySelector('nav ul');
const menuToggle = document.querySelector('.menu-toggle input');

menuToggle.addEventListener('click', function () {
   nav.classList.toggle('slide');
});