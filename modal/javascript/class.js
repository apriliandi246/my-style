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
	}

	toggleModal = () => {
		this.modal.classList.toggle("active-modal");
		this.modalOverlay.classList.toggle("active-modal");
	};
}

new Modal();
