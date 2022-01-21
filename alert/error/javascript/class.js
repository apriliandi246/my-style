class Alert {
	constructor() {
		this.closeAlertButton = document.getElementById("error-btn-close");
		this.addEventListener();
	}

	addEventListener() {
		this.closeAlertButton.addEventListener("click", (event) => {
			event.target.parentElement.remove();
		});
	}
}

new Alert();
