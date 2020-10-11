// ! For more than one collapse components
const icons = document.querySelectorAll(".collapse__icon");
const collapseButtons = document.querySelectorAll(".collapse__button");

for (let index = 0; index < collapseButtons.length; index++) {
   collapseButtons[index].addEventListener("click", function () {
      const collapseContent = collapseButtons[index].nextElementSibling;

      this.classList.toggle("collapse__button--active");

      if (collapseContent.style.display === "block") {
         icons[index].innerHTML = "&#9650;";
         collapseContent.style.display = "none";
      } else {
         icons[index].innerHTML = "&#9660;";
         collapseContent.style.display = "block";
      }
   });
}
