function onClickDropdown(event) {
	const dropdownBtn = event.target;
	const dropdownMenu = dropdownBtn.nextElementSibling;
	const menuDisplayValue = dropdownMenu.style.display;

	if (menuDisplayValue === "" || menuDisplayValue === "none") {
		dropdownMenu.style.display = "block";
	} else {
		dropdownMenu.style.display = "none";
	}

	document.body.addEventListener("click", (event) => {
		const dropdown = dropdownBtn.parentElement;
		if (!dropdown.contains(event.target)) dropdownMenu.style.display = "none";
	});

	document.body.removeEventListener("click", (event) => {
		const dropdown = dropdownBtn.parentElement;
		if (!dropdown.contains(event.target)) dropdownMenu.style.display = "none";
	});
}

function onEscapeDropdown(event, type) {
	if (event.key === "Escape") {
		if (type === "btn") event.target.nextElementSibling.style.display = "none";
		if (type === "menu") event.target.parentElement.style.display = "none";
	}
}
