(function () {
	const regexPattern = /^\d+$/;
	const numberInput = document.getElementById("number-input");

	if (numberInput) {
		numberInput.addEventListener("input", (event) => {
			const currentValue = event.target.value;

			if (!regexPattern.test(currentValue)) {
				const numberValue = currentValue.replace(/[^0-9]/g, "");
				numberInput.value = numberValue;
			}
		});
	}
})();
