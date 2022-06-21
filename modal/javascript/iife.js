(function () {
	const modal = document.getElementById("modal");
	const button = document.getElementById("show-modal-btn");
	const modalOverlay = document.getElementById("modal-overlay");

	button.addEventListener("click", () => {
		modal.classList.toggle("active-modal");
		modalOverlay.classList.toggle("active-modal");
	});

	modalOverlay.addEventListener("click", () => {
		modal.classList.toggle("active-modal");
		modalOverlay.classList.toggle("active-modal");
	});

	document.addEventListener("keydown", (event) => {
		if (event.key.toLocaleLowerCase() === "escape") {
			modal.classList.remove("active-modal");
			modalOverlay.classList.remove("active-modal");
		}
	});
})();
