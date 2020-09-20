// ! For one alert
document.querySelector('.alert__close-button').addEventListener('click', (event) => {
   event.preventDefault();
   event.target.parentElement.remove();
});
