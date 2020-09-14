// ! For more than one alert

const closeButton = document.querySelectorAll('.alert__close-button');

for (let index = 0; index < closeButton.length; index++) {
   closeButton[index].addEventListener('click', (event) => {
      event.preventDefault();
      closeButton[index].parentElement.remove();
   });
}