class Dropdown {
	constructor() {
		this.dropdownButton = document.getElementById("dropdown");
		this.dropdownMenus = this.dropdownButton.nextElementSibling;
		this.addEventListener();
	}

	addEventListener() {
		this.dropdownButton.addEventListener("click", this.toggleDropdownMenus);
		this.dropdownMenus.addEventListener("keyup", this.escapePress);
		this.dropdownButton.addEventListener("keyup", this.escapePress);

		document.body.addEventListener("click", (event) => {
			const dropdownMenusStatus = this.dropdownMenus.classList.contains("dropdown--collapse");

			if (dropdownMenusStatus) {
				const dropdownParentElement = this.dropdownButton.parentElement;

				if (!dropdownParentElement.contains(event.target)) {
					this.toggleDropdownMenus();
				}
			}
		});
	}

	escapePress = (event) => {
		const dropdownMenusStatus = this.dropdownMenus.classList.contains("dropdown--collapse");

		if (event.key === "Escape" && dropdownMenusStatus) {
			this.toggleDropdownMenus();
		}
	};

	toggleDropdownMenus = () => {
		this.dropdownMenus.classList.toggle("dropdown--collapse");

		if (this.dropdownMenus.classList.contains("dropdown--collapse")) {
			this.dropdownButton.setAttribute("aria-expanded", true);
		} else {
			this.dropdownButton.setAttribute("aria-expanded", false);
		}
	};
}

new Dropdown();
