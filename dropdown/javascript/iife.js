(function () {
	const dropdownBtn = document.getElementById("dropdown");
	const dropdownMenu = dropdownBtn.nextElementSibling;

	dropdownBtn.addEventListener("click", () => {
		const menuDisplayValue = dropdownMenu.style.display;

		if (menuDisplayValue === "" || menuDisplayValue === "none") {
			dropdownMenu.style.display = "block";
		} else {
			dropdownMenu.style.display = "none";
		}
	});

	dropdownBtn.addEventListener("keydown", (event) => {
		if (event.key === "Escape") dropdownMenu.style.display = "none";
	});

	dropdownMenu.addEventListener("keydown", (event) => {
		if (event.key === "Escape") dropdownMenu.style.display = "none";
	});

	document.body.addEventListener("click", (event) => {
		const dropdown = dropdownBtn.parentElement;
		if (!dropdown.contains(event.target)) dropdownMenu.style.display = "none";
	});
})();
