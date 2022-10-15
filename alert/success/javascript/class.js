class Alert {
	constructor() {
		this.closeAlertButton = document.getElementById("success-btn-close");
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
