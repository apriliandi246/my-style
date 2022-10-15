class Alert {
	constructor() {
		this.closeAlertButton = document.getElementById("info-btn-close");
		this.triggerListener();
	}

	triggerListener() {
		this.close();
	}

	close() {
		this.closeAlertButton.addEventListener("click", (event) => {
			event.target.parentElement.remove();
		});
	}
}

new Alert();
