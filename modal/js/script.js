const modal = document.querySelector('.modal-area');
const modalCancelButton = document.querySelector('button.cancel-btn');
const modalTrigger = document.querySelector('.trigger');

modalTrigger.addEventListener('click', opeModal);
modalCancelButton.addEventListener('click', closeModal);

function opeModal() {
   modal.style.display = 'block';
}

function closeModal() {
   modal.style.display = 'none';
}