class Alert {
	#closeAlertButton;

	constructor() {
		this.#closeAlertButton = document.getElementById("success-btn-close");

		this.#main();
	}

	#main() {
		this.#close();
	}

	#close() {
		this.#closeAlertButton.addEventListener("click", (event) => {
			this.#closeAlertButton.parentElement.remove();
		});
	}
}

new Alert();
