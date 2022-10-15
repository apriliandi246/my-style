class Alert {
	constructor() {
		this.alerts = document.getElementsByClassName("alert");
		this.triggerListeners();
	}

	triggerListeners() {
		this.close();
	}

	close() {
		for (let index = 0; index < this.alerts.length; index++) {
			const currentAlertBtn = this.alerts[index].lastElementChild;

			currentAlertBtn.addEventListener("click", (event) => {
				event.target.parentElement.remove();
			});
		}
	}
}

new Alert();
