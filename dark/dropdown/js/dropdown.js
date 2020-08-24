const dropdownBtn = document.querySelector('button.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
   if (dropdownContent.style.display === '' || dropdownContent.style.display === 'none') {
      setDisplayValue('block');
      setFontColor('#8a2be2');
   } else {
      setDisplayValue('none');
      setFontColor('white');
   }
});

document.addEventListener('click', (event) => {
   if (event.target !== dropdownBtn) {
      setDisplayValue('none');
      setFontColor('white');
   }
});

function setDisplayValue(value) {
   dropdownContent.style.display = value;
}

function setFontColor(value) {
   dropdownBtn.style.color = value;
}