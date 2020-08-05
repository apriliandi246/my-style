const alerts = document.querySelectorAll('.alert span');

alerts.forEach((alert) => {
   alert.addEventListener('click', () => {
      alert.parentElement.remove();
   });
});