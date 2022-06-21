(function () {
	const dropdownBtn = document.getElementById("dropdown");
	const dropdownMenus = dropdownBtn.nextElementSibling;

	dropdownBtn.addEventListener("click", () => {
		dropdownMenus.classList.toggle("dropdown--collapse");

		if (dropdownMenus.classList.contains("dropdown--collapse")) {
			dropdownBtn.setAttribute("aria-expanded", true);
		} else {
			dropdownBtn.setAttribute("aria-expanded", false);
		}

		document.body.addEventListener("click", (event) => {
			const dropdown = dropdownBtn.parentElement;

			if (!dropdown.contains(event.target)) {
				dropdownBtn.setAttribute("aria-expanded", false);
				dropdownMenus.classList.remove("dropdown--collapse");
			}
		});
	});

	dropdownBtn.addEventListener("focusout", () => {
		if (!dropdownMenus.classList.contains("dropdown--collapse")) {
			dropdownBtn.setAttribute("aria-expanded", false);
			dropdownMenus.classList.remove("dropdown--collapse");
		}
	});

	dropdownBtn.addEventListener("keydown", (event) => {
		if (event.shiftKey && event.key.toLowerCase() === "tab") {
			dropdownBtn.setAttribute("aria-expanded", false);
			dropdownMenus.classList.remove("dropdown--collapse");
		}

		if (event.key.toLowerCase() === "escape") {
			dropdownBtn.setAttribute("aria-expanded", false);
			dropdownMenus.classList.remove("dropdown--collapse");
		}
	});

	dropdownMenus.addEventListener("keydown", (event) => {
		if (event.key.toLowerCase() === "escape") {
			dropdownBtn.setAttribute("aria-expanded", false);
			dropdownMenus.classList.remove("dropdown--collapse");
		}
	});

	dropdownMenus.lastElementChild.addEventListener("keydown", (event) => {
		if (event.shiftKey && event.key.toLowerCase() === "tab") return;

		if (event.key.toLowerCase() === "tab") {
			dropdownBtn.setAttribute("aria-expanded", false);
			dropdownMenus.classList.remove("dropdown--collapse");
		}
	});
})();
