const collapseButton = document.querySelector('.collapse-button');
const icon = document.querySelector('.collapse-button .collapse-icon');


// for one collapse component
collapseButton.addEventListener('click', () => {
   const collapseContent = collapseButton.nextElementSibling;

   collapseButton.classList.toggle('active');

   if (collapseContent.style.display === 'block') {
      icon.innerText = '+';
      collapseContent.style.display = 'none';

   } else {
      icon.innerText = '-';
      collapseContent.style.display = 'block'
   }
});


// for more than one collapse components
// for (let index = 0; index < collapse.length; index++) {
//    collapse[index].addEventListener('click', function () {
//       const collapseContent = this.nextElementSibling;

//       this.classList.toggle('active');

//       if (collapseContent.style.display === 'block') {
//          icon.innerText = '+';
//          collapseContent.style.display = 'none';

//       } else {
//          icon.innerText = '-';
//          collapseContent.style.display = 'block'
//       }
//    });
// }