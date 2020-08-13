const dropdownBtn = document.querySelector('button.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
   if (dropdownContent.style.display === '' || dropdownContent.style.display === 'none') {
      statusDisplay('block');
      setFontColor('#8a2be2');
   } else {
      statusDisplay('none');
      setFontColor('white');
   }
});

window.addEventListener('click', (event) => {
   if (event.target !== dropdownBtn) {
      statusDisplay('none');
      setFontColor('white');
   }
});

function statusDisplay(value) {
   dropdownContent.style.display = value;
}

function setFontColor(value) {
   dropdownBtn.style.color = value;
}