const dropdownBtn = document.querySelector('button.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

dropdownBtn.addEventListener('click', () => {
   if (dropdownContent.style.display === '' || dropdownContent.style.display === 'none') {
      statusDisplay('block');
      setBgColor('red');
   } else {
      statusDisplay('none');
      setBgColor('inherit');
   }
});

function statusDisplay(value) {
   dropdownContent.style.display = value;
}

function setBgColor(value) {
   dropdownBtn.style.backgroundColor = value;
}