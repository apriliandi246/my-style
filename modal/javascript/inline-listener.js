function showModal() {
	const modal = document.getElementById("modal");
	const modalOverlay = document.getElementById("modal-overlay");
	const modalOverlayDisplay = modalOverlay.style.display;

	if (modalOverlayDisplay === "" || modalOverlayDisplay === "none") {
		modalOverlay.style.display = "block";
		modal.style.display = "block";
	} else {
		modal.style.display = "none";
		modalOverlay.style.display = "none";
	}

	document.body.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			modal.style.display = "none";
			modalOverlay.style.display = "none";
		}
	});
}

function hideModal(event) {
	const modalOverlay = event.target;
	const modal = document.getElementById("modal");

	modal.style.display = "none";
	modalOverlay.style.display = "none";
}
