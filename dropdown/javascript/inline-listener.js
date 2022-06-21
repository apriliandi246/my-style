function dropdownFunc(event) {
	const dropdownButton = event.target;
	const dropdownMenu = dropdownButton.nextElementSibling;

	dropdownMenu.classList.toggle("dropdown--collapse");

	if (dropdownMenu.classList.contains("dropdown--collapse")) {
		dropdownButton.setAttribute("aria-expanded", true);
	} else {
		dropdownButton.setAttribute("aria-expanded", false);
	}

	dropdownButton.addEventListener("keydown", (event) => {
		if (event.shiftKey && event.key.toLowerCase() === "tab") {
			dropdownButton.setAttribute("aria-expanded", false);
			dropdownMenu.classList.remove("dropdown--collapse");
		}

		if (event.key.toLowerCase() === "escape") {
			dropdownButton.setAttribute("aria-expanded", false);
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});

	dropdownMenu.addEventListener("keydown", (event) => {
		if (event.key.toLowerCase() === "escape") {
			dropdownButton.setAttribute("aria-expanded", false);
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});

	dropdownMenu.lastElementChild.addEventListener("keydown", (event) => {
		if (event.shiftKey && event.key.toLowerCase()) return;

		if (event.key.toLowerCase() === "tab") {
			dropdownButton.setAttribute("aria-expanded", false);
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});

	document.body.addEventListener("click", (event) => {
		const dropdownMenusStatus = dropdownMenu.classList.contains("dropdown--collapse");

		if (dropdownMenusStatus) {
			if (!dropdownMenu.parentElement.contains(event.target)) {
				dropdownMenu.classList.remove("dropdown--collapse");
				dropdownButton.setAttribute("aria-expanded", false);
			}
		}
	});
}
