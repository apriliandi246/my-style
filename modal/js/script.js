const modal = document.querySelector('.modal-area');

document.querySelector('.trigger').addEventListener('click', opeModal);
document.querySelector('button.cancel-btn').addEventListener('click', closeModal);

function opeModal() {
   modal.style.display = 'block';
}

function closeModal() {
   modal.style.display = 'none';
}