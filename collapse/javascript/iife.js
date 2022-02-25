(function () {
	const collapseComponents = document.getElementsByClassName("collapse__button");

	for (let index = 0; index < collapseComponents.length; index++) {
		collapseComponents[index].addEventListener("click", () => {
			const collapseMessage = collapseComponents[index].nextElementSibling;

			collapseComponents[index].classList.toggle("collapse--active");
			collapseMessage.classList.toggle("collapse-message--active");
		});
	}
})();
