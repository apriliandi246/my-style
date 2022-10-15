class Dropdown {
	constructor() {
		this.dropdownButton = document.getElementById("dropdown");
		this.dropdownMenus = this.dropdownButton.nextElementSibling;
		this.triggerListeners();
	}

	triggerListeners() {
		this.toggle();
		this.keyboardEvent();
		this.clickOutside();
	}

	toggle() {
		this.dropdownButton.addEventListener("click", () => {
			this.dropdownMenus.classList.toggle("dropdown--collapse");

			if (this.dropdownMenus.classList.contains("dropdown--collapse")) {
				this.dropdownButton.setAttribute("aria-expanded", true);
			} else {
				this.dropdownButton.setAttribute("aria-expanded", false);
			}
		});
	}

	keyboardEvent() {
		this.dropdownButton.addEventListener("keydown", (event) => {
			if (event.shiftKey && event.key.toLocaleLowerCase() === "tab") {
				this.dropdownButton.setAttribute("aria-expanded", false);
				this.dropdownMenus.classList.remove("dropdown--collapse");
			}

			if (event.key.toLocaleLowerCase() === "escape") {
				this.dropdownButton.setAttribute("aria-expanded", false);
				this.dropdownMenus.classList.remove("dropdown--collapse");
			}
		});

		this.dropdownMenus.addEventListener("keydown", (event) => {
			if (event.key.toLocaleLowerCase() === "escape") {
				this.dropdownButton.setAttribute("aria-expanded", false);
				this.dropdownMenus.classList.remove("dropdown--collapse");
			}
		});

		this.dropdownMenus.lastElementChild.addEventListener("keydown", (event) => {
			if (event.shiftKey && event.key.toLocaleLowerCase() === "tab") return;

			if (event.key.toLocaleLowerCase() === "tab") {
				this.dropdownButton.setAttribute("aria-expanded", false);
				this.dropdownMenus.classList.remove("dropdown--collapse");
			}
		});
	}

	clickOutside() {
		document.body.addEventListener("click", (event) => {
			const dropdownMenusStatus = this.dropdownMenus.classList.contains("dropdown--collapse");

			if (dropdownMenusStatus) {
				const dropdownParentElement = this.dropdownButton.parentElement;

				if (!dropdownParentElement.contains(event.target)) {
					this.dropdownButton.setAttribute("aria-expanded", false);
					this.dropdownMenus.classList.remove("dropdown--collapse");
				}
			}
		});
	}
}

new Dropdown();
