document.querySelector('.modal-trigger-button').addEventListener('click', () => {
   document.querySelector('.modal').style.display = 'block';
});

document.querySelector('.modal__cancel-button').addEventListener('click', () => {
   document.querySelector('.modal').style.display = 'none';
});
