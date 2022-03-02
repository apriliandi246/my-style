class Modal {
	constructor() {
		this.modal = document.getElementById("modal");
		this.modalOverlay = document.getElementById("modal-overlay");
		this.modalTriggerButton = document.getElementById("show-modal-btn");
		this.addEventListener();
	}

	addEventListener() {
		this.modalOverlay.addEventListener("click", this.toggleModal);
		this.modalTriggerButton.addEventListener("click", this.toggleModal);
		document.body.addEventListener("keydown", this.escapePress);
	}

	toggleModal = () => {
		this.modal.classList.toggle("modal--active");
		this.modalOverlay.classList.toggle("modal--active");
	};

	escapePress = (event) => {
		if (event.key === "Escape") {
			this.modal.classList.remove("modal--active");
			this.modalOverlay.classList.remove("modal--active");
		}
	};
}

new Modal();
