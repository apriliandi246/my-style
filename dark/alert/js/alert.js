const alerts = document.querySelectorAll('.alert');

alerts.forEach((alert) => {
   alert.addEventListener('click', (event) => {
      if (event.target.className) {
         event.preventDefault();
         event.target.parentElement.remove();
      }
   });
});