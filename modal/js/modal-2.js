const modal = document.querySelector('.modal-area');
const triggerButton = document.querySelector('.trigger');
const modalCancelButton = document.querySelector('button.cancel-btn');

triggerButton.addEventListener('click', () => {
   modal.style.display = 'block';
});

modalCancelButton.addEventListener('click', () => {
   modal.style.display = 'none';
});