// ! For one collapse component

const collapseButton = document.querySelector(".collapse__button");
const collapseContent = collapseButton.nextElementSibling;

collapseButton.addEventListener("click", () => {
   collapseButton.classList.toggle("collapse__button--active");

   if (collapseContent.style.display === "block") {
      setStatusCollapseContent("none", "&#9650;");
   } else {
      setStatusCollapseContent("block", "&#9660;");
   }
});

function setStatusCollapseContent(status, collapseIcon) {
   collapseContent.style.display = status;
   document.querySelector(".collapse__icon").innerHTML = collapseIcon;
}
