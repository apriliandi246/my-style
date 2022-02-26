(function () {
	const dropdownBtn = document.getElementById("dropdown");
	const dropdownMenu = dropdownBtn.nextElementSibling;

	dropdownBtn.addEventListener("click", () => {
		dropdownMenu.classList.toggle("dropdown--collapse");
	});

	dropdownBtn.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});

	dropdownMenu.addEventListener("keydown", (event) => {
		if (event.key === "Escape") {
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});

	document.body.addEventListener("click", (event) => {
		const dropdown = dropdownBtn.parentElement;

		if (!dropdown.contains(event.target)) {
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});
})();
