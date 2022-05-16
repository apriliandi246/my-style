function onClickDropdown(event) {
	const dropdownButton = event.target;
	const dropdownMenu = dropdownButton.nextElementSibling;

	dropdownMenu.classList.toggle("dropdown--collapse");

	if (dropdownMenu.classList.contains("dropdown--collapse")) {
		dropdownButton.setAttribute("aria-expanded", true);
	} else {
		dropdownButton.setAttribute("aria-expanded", false);
	}

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

function onEscapeDropdown(event) {
	if (event.key === "Escape") {
		const currentTagEl = event.target.tagName.toLowerCase();

		if (currentTagEl === "a") {
			event.target.parentElement.classList.remove("dropdown--collapse");
			event.target.parentElement.previousElementSibling.setAttribute("aria-expanded",false);
		}

		if (currentTagEl === "button") {
			event.target.nextElementSibling.classList.remove("dropdown--collapse");
			event.target.setAttribute("aria-expanded", false);
		}
	}
}
