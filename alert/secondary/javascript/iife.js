(function () {
	const btnClose = document.getElementById("secondary-btn-close");

	btnClose.addEventListener("click", (event) => {
		event.target.parentElement.remove();
	});
})();
