const collapseButton = document.querySelector('.collapse__button');
const icon = document.querySelector('.collapse-button__icon');


// for one collapse component
collapseButton.addEventListener('click', () => {
   const collapseContent = collapseButton.nextElementSibling;

   collapseButton.classList.toggle('collapse__button--active');

   if (collapseContent.style.display === 'block') {
      icon.innerText = '+';
      collapseContent.style.display = 'none';

   } else {
      icon.innerText = '-';
      collapseContent.style.display = 'block'
   }
});


// ! For more than one collapse components
// for (let index = 0; index < collapse.length; index++) {
//    collapse[index].addEventListener('click', function () {
//       const collapseContent = this.nextElementSibling;

//       this.classList.toggle('collapse__button--active');

//       if (collapseContent.style.display === 'block') {
//          icon.innerText = '+';
//          collapseContent.style.display = 'none';

//       } else {
//          icon.innerText = '-';
//          collapseContent.style.display = 'block'
//       }
//    });
// }