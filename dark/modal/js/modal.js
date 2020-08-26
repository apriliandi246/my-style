const triggerButton = document.querySelector('.modal-trigger-button');
const modalCancelButton = document.querySelector('.footer__cancel-button');

triggerButton.addEventListener('click', () => {
   setDisplayValue('block');
});

modalCancelButton.addEventListener('click', () => {
   setDisplayValue('none');
});

function setDisplayValue(value) {
   document.querySelector('.modal').style.display = value;
}