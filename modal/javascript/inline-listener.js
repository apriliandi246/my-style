function showModal() {
	const modal = document.getElementById("modal");
	const modalOverlay = document.getElementById("modal-overlay");

	modal.classList.toggle("modal--active");
	modalOverlay.classList.toggle("modal--active");

	document.body.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			modal.classList.remove("modal--active");
			modalOverlay.classList.remove("modal--active");
		}
	});
}

function hideModal(event) {
	const modalOverlay = event.target;
	const modal = document.getElementById("modal");

	modal.classList.remove("modal--active");
	modalOverlay.classList.remove("modal--active");
}
