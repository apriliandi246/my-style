// ! For more than one alert
document.querySelectorAll('.alert').forEach((alert) => {
   alert.addEventListener('click', (event) => {
      if (event.target.className) {
         event.preventDefault();
         event.target.parentElement.remove();
      }
   });
});


// ! For one alert
// document.querySelector('.alert__close-button').addEventListener('click', (event) => {
//    event.target.parentElement.remove();
// });