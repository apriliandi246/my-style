function toggleInputPassword(event) {
	const input = event.target.previousElementSibling;
	const eyeIcon = event.target.firstElementChild;
	const disableEyeIcon = event.target.lastElementChild;

	if (input.type === "password") {
		input.type = "text";
		eyeIcon.style.display = "none";
		disableEyeIcon.style.display = "block";
	} else {
		input.type = "password";
		disableEyeIcon.style.display = "none";
		eyeIcon.style.display = "block";
	}
}
