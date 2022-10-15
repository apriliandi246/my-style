class Alert {
	constructor() {
		this.closeAlertButton = document.getElementById("error-btn-close");
		this.triggerListeners();
	}

	triggerListeners() {
		this.close();
	}

	close() {
		this.closeAlertButton.addEventListener("click", (event) => {
			event.target.parentElement.remove();
		});
	}
}

new Alert();
