(function () {
	const btnClose = document.getElementById("success-btn-close");

	btnClose.addEventListener("click", (event) => {
		event.target.parentElement.remove();
	});
})();
