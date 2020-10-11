document
   .querySelector(".modal-trigger-button")
   .addEventListener("click", function () {
      document.querySelector(".modal").style.display = "block";
   });

document
   .querySelector(".modal__cancel-button")
   .addEventListener("click", function () {
      document.querySelector(".modal").style.display = "none";
   });
