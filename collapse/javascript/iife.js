(function () {
	let previousCollapseMsg = "";
	const collapseComponents = document.getElementsByClassName("collapse__button");

	for (let index = 0; index < collapseComponents.length; index++) {
		collapseComponents[index].addEventListener("click", () => {
			const collapseMessage = collapseComponents[index].nextElementSibling;

			collapseComponents[index].classList.toggle("collapse--active");
			collapseMessage.classList.toggle("collapse-message--active");

			if (previousCollapseMsg === collapseMessage) {
				previousCollapseMsg = "";
			}

			if (!previousCollapseMsg) {
				previousCollapseMsg = collapseMessage;
			} else {
				previousCollapseMsg.previousElementSibling.classList.remove("collapse--active");
				previousCollapseMsg.classList.remove("collapse-message--active");
				previousCollapseMsg = collapseMessage;
			}
		});
	}
})();
