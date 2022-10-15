class Modal {
	constructor() {
		this.modal = document.getElementById("modal");
		this.modalOverlay = document.getElementById("modal-overlay");
		this.modalTriggerButton = document.getElementById("show-modal-btn");
		this.triggerListeners();
	}

	triggerListeners() {
		this.show();
		this.escPress();
		this.clickOutside();
	}

	show() {
		this.modalTriggerButton.addEventListener("click", () => {
			this.modal.classList.toggle("active-modal");
			this.modalOverlay.classList.toggle("active-modal");
		});
	}

	clickOutside() {
		this.modalOverlay.addEventListener("click", () => {
			this.modal.classList.toggle("active-modal");
			this.modalOverlay.classList.toggle("active-modal");
		});
	}

	escPress() {
		document.addEventListener("keydown", (event) => {
			if (event.key.toLowerCase() === "escape") {
				this.modal.classList.remove("active-modal");
				this.modalOverlay.classList.remove("active-modal");
			}
		});
	}
}

new Modal();
