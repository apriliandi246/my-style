(function () {
	const collapse = document.getElementById("collapse");
	const collapseBtn = collapse.firstElementChild.firstElementChild;
	const collapseMsg = collapse.lastElementChild.firstElementChild;

	collapseBtn.addEventListener("click", () => {
		collapseBtn.classList.toggle("collapse--active");
		collapseMsg.classList.toggle("collapse-message--active");

		if (collapseMsg.classList.contains("collapse-message--active")) {
			collapseBtn.setAttribute("aria-expanded", true);
		} else {
			collapseBtn.setAttribute("aria-expanded", false);
		}
	});
})();
