class PasswordToggle {
	#passwordInput;
	#passwordButtonToggle;

	constructor() {
		this.#passwordButtonToggle = document.getElementById("password-toogle-btn");
		this.#passwordInput = this.#passwordButtonToggle.previousElementSibling;

		this.#main();
	}

	#main() {
		this.#passwordToggleEvent();
	}

	#passwordToggleEvent() {
		this.#passwordButtonToggle.addEventListener("click", () => {
			const eyeIcon = this.#passwordButtonToggle.firstElementChild;
			const eyeOffIcon = this.#passwordButtonToggle.lastElementChild;
			const currentInputType = this.#passwordInput.getAttribute("type");

			if (currentInputType === "password") {
				this.#passwordInput.setAttribute("type", "text");
				eyeIcon.classList.add("password-icon-unactive");
				eyeOffIcon.classList.remove("password-icon-unactive");
			} else {
				this.#passwordInput.setAttribute("value", "password");
				eyeOffIcon.classList.add("password-icon-unactive");
				eyeIcon.classList.remove("password-icon-unactive");
			}
		});
	}
}

new PasswordToggle();
