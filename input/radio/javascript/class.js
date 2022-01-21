class RadioInput {
	constructor() {
		this.previousRadioInput = "";
		this.radioInputs = document.getElementsByClassName("radio-input");
		this.addEventListener();
	}

	addEventListener() {
		for (let index = 0; index < this.radioInputs.length; index++) {
			this.radioInputs.item(index).addEventListener("click", (event) => {
				if (!this.previousRadioInput) {
					this.previousRadioInput = event.target.nextElementSibling;
					this.previousRadioInput.classList.add("radio-visible");
				} else {
					const currentRadioInput = event.target.nextElementSibling;

					this.previousRadioInput.classList.remove("radio-visible");
					currentRadioInput.classList.add("radio-visible");
					this.previousRadioInput = currentRadioInput;
				}
			});
		}
	}
}

new RadioInput();
