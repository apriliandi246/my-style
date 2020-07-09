document.querySelectorAll('.alert span')
   .forEach((el) => {
      el.addEventListener('click', function () {
         el.parentElement.remove();
      });
   });