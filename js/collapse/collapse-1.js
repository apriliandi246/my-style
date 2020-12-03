// ! For one collapse component

const collapseButton = document.querySelector(".collapse__button");
const collapseContent = collapseButton.nextElementSibling;

collapseButton.addEventListener("click", () => {
   collapseButton.classList.toggle("collapse__button--active");

   if (collapseContent.style.display === "block") {
      collapseContent.style.display = "none";
      document.querySelector(".collapse__icon").innerHTML = "&#9650;";
   } else {
      collapseContent.style.display = "block";
      document.querySelector(".collapse__icon").innerHTML = "&#9660;";
   }

   return () =>
      collapseButton.removeEventListener("click", () => {
         collapseButton.classList.toggle("collapse__button--active");

         if (collapseContent.style.display === "block") {
            collapseContent.style.display = "none";
            document.querySelector(".collapse__icon").innerHTML = "&#9650;";
         } else {
            collapseContent.style.display = "block";
            document.querySelector(".collapse__icon").innerHTML = "&#9660;";
         }
      });
});
