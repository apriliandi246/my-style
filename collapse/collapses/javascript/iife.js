(function () {
	const collapses = document.getElementById("collapses");

	collapses.addEventListener("click", (event) => {
		const collapseBtn = event.target;

		if (
			collapseBtn.tagName === "BUTTON" &&
			collapseBtn.classList.contains("collapse__button")
		) {
			const collapseMsg = collapseBtn.parentElement.nextElementSibling.firstElementChild;

			collapseBtn.classList.toggle("collapse--active");
			collapseMsg.classList.toggle("collapse-message--active");

			if (collapseMsg.classList.contains("collapse-message--active")) {
				collapseBtn.setAttribute("aria-expanded", true);
			} else {
				collapseBtn.setAttribute("aria-expanded", false);
			}
		}
	});
})();
