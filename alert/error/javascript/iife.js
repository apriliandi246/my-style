(function () {
	const btnClose = document.getElementById("error-btn-close");

	btnClose.addEventListener("click", (event) => {
		event.target.parentElement.remove();
	});
})();
