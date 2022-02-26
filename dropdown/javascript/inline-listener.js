function onClickDropdown(event) {
	const dropdownBtn = event.target;
	const dropdownMenu = dropdownBtn.nextElementSibling;

	dropdownMenu.classList.toggle("dropdown--collapse");

	document.body.addEventListener("click", (event) => {
		const dropdown = dropdownBtn.parentElement;

		if (!dropdown.contains(event.target)) {
			dropdownMenu.classList.remove("dropdown--collapse");
		}
	});
}

function onEscapeDropdown(event, type) {
	if (event.key === "Escape") {
		if (type === "btn") {
			event.target.nextElementSibling.classList.remove("dropdown--collapse");
		}

		if (type === "menu") {
			event.target.parentElement.classList.remove("dropdown--collapse");
		}
	}
}
