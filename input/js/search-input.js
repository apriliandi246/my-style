const searchInput = document.querySelector('.search-input input');
const clearButton = document.querySelector('.search-input span.clear-btn');

searchInput.addEventListener('input', () => {
   searchInput.value.length > 0 ? clearButton.style.opacity = 1 : clearButton.style.opacity = 0;
});

clearButton.addEventListener('click', () => {
   searchInput.value = "";
   clearButton.style.opacity = 0;
   searchInput.focus();
});