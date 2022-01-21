(function () {
	const btn = document.getElementById("password-toogle-btn");
	const eyeIcon = btn.firstElementChild;
	const disableEyeIcon = btn.lastElementChild;
	const input = btn.previousElementSibling;

	btn.addEventListener("click", () => {
		if (input.type === "password") {
			input.type = "text";
			eyeIcon.classList.add("password-icon-unactive");
			disableEyeIcon.classList.remove("password-icon-unactive");
		} else {
			input.type = "password";
			disableEyeIcon.classList.add("password-icon-unactive");
			eyeIcon.classList.remove("password-icon-unactive");
		}
	});
})();
