const modalTrigger = document.querySelector(".modal-trigger-button");
const hideModal = document.querySelector(".modal__cancel-button");

modalTrigger.addEventListener("click", () => {
   document.querySelector(".modal").style.display = "block";

   return () =>
      modalTrigger.removeEventListener("click", () => {
         document.querySelector(".modal").style.display = "block";
      });
});

hideModal.addEventListener("click", () => {
   document.querySelector(".modal").style.display = "none";

   return () =>
      hideModal.removeEventListener("click", () => {
         document.querySelector(".modal").style.display = "none";
      });
});
