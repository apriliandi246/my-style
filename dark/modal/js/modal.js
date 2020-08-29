document.querySelector('.modal-trigger-button').addEventListener('click', () => {
   document.querySelector('.modal').style.display = 'block';
});

document.querySelector('.footer__cancel-button').addEventListener('click', () => {
   document.querySelector('.modal').style.display = 'none';
});