const inputPassword = document.querySelector('.input-form__input');
const togglePassword = document.querySelector('.input-form__button');

togglePassword.addEventListener('click', () => {
   inputPassword.getAttribute('type') === 'password' ? changeInputType('text', 'hide') : changeInputType('password', 'show');
});

function changeInputType(type, toggle) {
   inputPassword.setAttribute('type', type);
   togglePassword.innerText = toggle;
   inputPassword.focus();
}
