const alerts = document.querySelectorAll('.alert span');

alerts.forEach((el) => {
   el.addEventListener('click', function () {
      el.parentElement.remove();
   });
});