// ! For more than one alert

const closeButton = document.querySelectorAll(".alert__close-button");

// remove from DOM
for (let index = 0; index < closeButton.length; index++) {
   listen(closeButton[index], "click", "dom");
}

// just change the display style
for (let index = 0; index < closeButton.length; index++) {
   listen(closeButton[index], "click", "style");
}

function listen(node, event, type) {
   node.addEventListener(event, () => {
      type === "dom"
         ? node.parentElement.remove()
         : (node.parentElement.style.display = "none");

      return () =>
         node.removeEventListener("click", () => {
            type === "dom"
               ? node.parentElement.remove()
               : (node.parentElement.style.display = "none");
         });
   });
}
