const modal = document.querySelector('.modal-area');
const triggerButton = document.querySelector('.trigger');
const modalCancelButton = document.querySelector('button.cancel-btn');

triggerButton.addEventListener('click', function () {
   modal.style.display = 'block';
});

modalCancelButton.addEventListener('click', function () {
   modal.style.display = 'none';
});