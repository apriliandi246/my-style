const dropdownContent = document.querySelector('.dropdown__content');

document.querySelector('.dropdown__button').addEventListener('click', () => {
   dropdownContent.style.display === 'block' ? setDisplayValue('none') : setDisplayValue('block');
});

function setDisplayValue(value) {
   dropdownContent.style.display = value;
}
