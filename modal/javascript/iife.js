(function () {
	const modal = document.getElementById("modal");
	const button = document.getElementById("show-modal-btn");
	const modalOverlay = document.getElementById("modal-overlay");

	button.addEventListener("click", () => {
		modal.classList.toggle("modal--active");
		modalOverlay.classList.toggle("modal--active");
	});

	modalOverlay.addEventListener("click", () => {
		modal.classList.toggle("modal--active");
		modalOverlay.classList.toggle("modal--active");
	});

	document.body.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			modal.classList.remove("modal--active");
			modalOverlay.classList.remove("modal--active");
		}
	});
})();
