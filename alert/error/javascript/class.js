class Alert {
	#closeAlertButton;

	constructor() {
		this.#closeAlertButton = document.getElementById("error-btn-close");

		this.#main();
	}

	#main() {
		this.#close();
	}

	#close() {
		this.#closeAlertButton.addEventListener("click", () => {
			this.#closeAlertButton.parentElement.remove();
		});
	}
}

new Alert();
