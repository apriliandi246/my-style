class Alert {
	#alertCloseBtn;

	constructor() {
		this.#alertCloseBtn = document.getElementById("alert-btn-close");

		this.#main();
	}

	#main() {
		this.#close();
	}

	#close() {
		this.#alertCloseBtn.addEventListener("click", () => {
			this.#alertCloseBtn.parentElement.remove();
		});
	}
}

new Alert();
