(function () {
	const btnClose = document.getElementById("info-btn-close");

	btnClose.addEventListener("click", (event) => {
		event.target.parentElement.remove();
	});
})();
