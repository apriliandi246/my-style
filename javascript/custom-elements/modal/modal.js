class Modal {
	#modal;
	#modalOverlay;

	constructor() {
		this.#modal = document.getElementById("modal");
		this.#modalOverlay = document.getElementById("modal-overlay");

		this.#main();
	}

	#main() {
		this.#show();
		this.#escPress();
		this.#clickOutside();
	}

	#show() {
		this.#modal.classList.toggle("active-modal");
		this.#modalOverlay.classList.toggle("active-modal");
	}

	#clickOutside() {
		this.#modalOverlay.addEventListener("click", () => {
			this.#modal.classList.toggle("active-modal");
			this.#modalOverlay.classList.toggle("active-modal");
		});
	}

	#escPress() {
		document.addEventListener("keydown", event => {
			const keyboardKey = event.key.toLowerCase();

			if (keyboardKey === "escape") {
				this.#modal.classList.remove("active-modal");
				this.#modalOverlay.classList.remove("active-modal");
			}
		});
	}
}

new Modal();
