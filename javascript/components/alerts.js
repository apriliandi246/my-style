class Alert {
	#alerts;

	constructor() {
		this.#alerts = document.getElementsByClassName("alert");

		this.#main();
	}

	#main() {
		this.#close();
	}

	#close() {
		const totalAlerts = this.#alerts.length;

		for (let index = 0; index < totalAlerts; index++) {
			const currentAlertBtn = this.#alerts[index].lastElementChild;

			currentAlertBtn.addEventListener("click", () => {
				currentAlertBtn.parentElement.remove();
			});
		}
	}
}

new Alert();
