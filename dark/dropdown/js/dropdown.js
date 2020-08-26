const dropdownButton = document.querySelector('.dropdown__button');
const dropdownContent = document.querySelector('.dropdown__content');

dropdownButton.addEventListener('click', () => {
   if (dropdownContent.style.display === '' || dropdownContent.style.display === 'none') {
      setDisplayValue('block');
      setFontColor('#8a2be2');
   } else {
      setDisplayValue('none');
      setFontColor('white');
   }
});

document.addEventListener('click', (event) => {
   if (event.target !== dropdownButton) {
      setDisplayValue('none');
      setFontColor('white');
   }
});

function setDisplayValue(value) {
   dropdownContent.style.display = value;
}

function setFontColor(value) {
   dropdownButton.style.color = value;
}