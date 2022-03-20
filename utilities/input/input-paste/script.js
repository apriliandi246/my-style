(function () {
	const numberInput = document.getElementById("number-input");

	numberInput.addEventListener("keyup", (event) => {
		if (event.ctrlKey && event.key.toLowerCase() === "v") {
			console.log(event.target.value);
		}
	});
})();
