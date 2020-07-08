const close = document.querySelectorAll('.alert span');

close.forEach(el => {
   el.addEventListener('click', function () {
      el.parentElement.remove();
   });
});