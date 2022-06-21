function showModal() {
	const modal = document.getElementById("modal");
	const modalOverlay = document.getElementById("modal-overlay");

	modal.classList.toggle("active-modal");
	modalOverlay.classList.toggle("active-modal");

	document.addEventListener("keydown", (event) => {
		if (event.key.toLocaleLowerCase() === "escape") {
			modal.classList.remove("active-modal");
			modalOverlay.classList.remove("active-modal");
		}
	});
}

function hideModal(event) {
	const modalOverlay = event.target;
	const modal = document.getElementById("modal");

	modal.classList.remove("active-modal");
	modalOverlay.classList.remove("active-modal");
}
