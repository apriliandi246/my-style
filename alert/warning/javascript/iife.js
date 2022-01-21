(function () {
	const btnClose = document.getElementById("warning-btn-close");

	btnClose.addEventListener("click", (event) => {
		event.target.parentElement.remove();
	});
})();
