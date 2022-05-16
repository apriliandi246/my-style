(function () {
	const dropdownBtn = document.getElementById("dropdown");
	const dropdownMenu = dropdownBtn.nextElementSibling;

	dropdownBtn.addEventListener("click", () => {
		dropdownMenu.classList.toggle("dropdown--collapse");

		if (dropdownMenu.classList.contains("dropdown--collapse")) {
			dropdownBtn.setAttribute("aria-expanded", true);
		} else {
			dropdownBtn.setAttribute("aria-expanded", false);
		}
	});

	dropdownBtn.addEventListener("keyup", (event) => {
		if (event.key === "Escape") {
			dropdownMenu.classList.remove("dropdown--collapse");
			dropdownBtn.setAttribute("aria-expanded", false);
		}
	});

	dropdownMenu.addEventListener("keyup", (event) => {
		if (event.key === "Escape") {
			dropdownMenu.classList.remove("dropdown--collapse");
			dropdownBtn.setAttribute("aria-expanded", false);
		}
	});

	document.body.addEventListener("click", (event) => {
		const dropdown = dropdownBtn.parentElement;

		if (!dropdown.contains(event.target)) {
			dropdownMenu.classList.remove("dropdown--collapse");
			dropdownBtn.setAttribute("aria-expanded", false);
		}
	});
})();
