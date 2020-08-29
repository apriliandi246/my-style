const dropdownButton = document.querySelector('.dropdown__button');
const dropdownContent = document.querySelector('.dropdown__content');


dropdownButton.addEventListener('click', () => {
   if (dropdownContent.style.display === 'block') {
      setDisplayValue('none');
      setFontColor('white');

   } else {
      setDisplayValue('block');
      setFontColor('#8a2be2');
   }
});

function setDisplayValue(value) {
   dropdownContent.style.display = value;
}

function setFontColor(value) {
   dropdownButton.style.color = value;
}