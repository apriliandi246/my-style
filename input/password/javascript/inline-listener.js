function toggleInputPassword(event) {
	const input = event.target.previousElementSibling;
	const eyeIcon = event.target.firstElementChild;
	const disableEyeIcon = event.target.lastElementChild;

	if (input.type === "password") {
		input.type = "text";
		eyeIcon.classList.add("password-icon-unactive");
		disableEyeIcon.classList.remove("password-icon-unactive");
	} else {
		input.type = "password";
		disableEyeIcon.classList.add("password-icon-unactive");
		eyeIcon.classList.remove("password-icon-unactive");
	}
}
