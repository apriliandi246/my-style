(function () {
	const collapse = document.getElementById("collapse");
	const collapseBtn = collapse.firstElementChild;
	const collapseMsg = collapse.lastElementChild;

	collapseBtn.addEventListener("click", () => {
		collapseBtn.classList.toggle("collapse--active");
		collapseMsg.classList.toggle("collapse-message--active");
	});
})();
