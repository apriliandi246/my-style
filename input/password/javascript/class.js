class PasswordToggle {
	constructor() {
		this.passwordButtonToggle = document.getElementById("password-toogle-btn");
		this.passwordInput = this.passwordButtonToggle.previousElementSibling;
		this.triggerListeners();
	}

	triggerListeners() {
		this.passwordToggleEvent();
	}

	passwordToggleEvent() {
		this.passwordButtonToggle.addEventListener("click", () => {
			const eyeIcon = this.passwordButtonToggle.firstElementChild;
			const eyeOffIcon = this.passwordButtonToggle.lastElementChild;
			const currentInputType = this.passwordInput.type;

			if (currentInputType === "password") {
				this.passwordInput.type = "text";
				eyeIcon.classList.add("password-icon-unactive");
				eyeOffIcon.classList.remove("password-icon-unactive");
			} else {
				this.passwordInput.type = "password";
				eyeOffIcon.classList.add("password-icon-unactive");
				eyeIcon.classList.remove("password-icon-unactive");
			}
		});
	}
}

new PasswordToggle();
