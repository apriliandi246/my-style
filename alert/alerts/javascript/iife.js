(function () {
	const alertCloseButtons = document.getElementsByClassName("secondary-alert__close");

	for (let index = 0; index < alertCloseButtons.length; index++) {
		alertCloseButtons[index].addEventListener("click", (event) => {
			event.target.parentElement.remove();
		});
	}
})();
