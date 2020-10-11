// ! For one collapse component
const collapseButton = document.querySelector(".collapse__button");
const collapseContent = collapseButton.nextElementSibling;

collapseButton.addEventListener("click", function () {
   collapseButton.classList.toggle("collapse__button--active");
   collapseContent.style.display === "block"
      ? setStatusCollapseContent("none", "&#9650;")
      : setStatusCollapseContent("block", "&#9660;");
});

function setStatusCollapseContent(status, collapseIcon) {
   collapseContent.style.display = status;
   document.querySelector(".collapse__icon").innerHTML = collapseIcon;
}
