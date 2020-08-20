const coll = document.getElementsByClassName('collapsible');
const icon = document.querySelector('.collapsible span');

for (let i = 0; i < coll.length; i++) {
   coll[i].addEventListener('click', function () {
      const collapseContent = this.nextElementSibling;

      this.classList.toggle('active');

      if (collapseContent.style.display === 'block') {
         icon.innerHTML = '&#65291';
         collapseContent.style.display = 'none';

      } else {
         icon.innerHTML = '&#8212';
         collapseContent.style.display = 'block'
      }
   });
}