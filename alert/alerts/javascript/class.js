class Alert {
	constructor() {
		this.alerts = document.getElementsByClassName("alert");
		this.addEventListener();
	}

	addEventListener() {
		const totalAlertElements = this.alerts.length;

		for (let index = 0; index < totalAlertElements; index++) {
			const currentAlertBtn = this.alerts[index].lastElementChild;

			currentAlertBtn.addEventListener("click", (event) => {
				event.target.parentElement.remove();
			});
		}
	}
}

new Alert();
