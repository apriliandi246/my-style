(function () {
	const regexPattern = /^\d+$/;
	const numberInput = document.getElementById("number-input");

	numberInput.addEventListener("input", (event) => {
		const currentValue = event.target.value;

		if (!regexPattern.test(currentValue)) {
			const numberValue = currentValue.replace(/[^0-9]/g, "");

			numberInput.value = numberValue.trim();
			numberInput.classList.add("invalid-value");

			setTimeout(() => {
				numberInput.classList.remove("invalid-value");
			}, 500);
		} else {
			numberInput.classList.remove("invalid-value");
		}
	});

	numberInput.addEventListener("focusout", () => {
		numberInput.classList.remove("invalid-value");
	});
})();
