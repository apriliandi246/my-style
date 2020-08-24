const modal = document.querySelector('.modal-area');
const triggerButton = document.querySelector('.trigger');
const modalCancelButton = document.querySelector('button.cancel-btn');

triggerButton.addEventListener('click', () => {
   setDisplayValue('block');
});

modalCancelButton.addEventListener('click', () => {
   setDisplayValue('none');
});

function setDisplayValue(value) {
   document.querySelector('.modal-area').style.display = value;
}