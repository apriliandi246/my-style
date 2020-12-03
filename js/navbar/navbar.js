const toggleMenu = document.querySelector(".toggle-menu");

toggleMenu.addEventListener("click", () => {
   document.querySelector(".navbar__items").classList.toggle("navbar--slide");

   return () =>
      toggleMenu.removeEventListener("click", () => {
         document
            .querySelector(".navbar__items")
            .classList.toggle("navbar--slide");
      });
});
