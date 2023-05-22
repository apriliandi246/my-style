class Dropdown {
	#dropdownMenus;
	#dropdownButton;

	constructor() {
		this.#dropdownButton = document.getElementById("dropdown");
		this.#dropdownMenus = this.#dropdownButton.nextElementSibling;

		this.#main();
	}

	#main() {
		this.#toggle();
		this.#clickOutside();
		this.#escapeKeyboardEvent();
		this.#shiftTabKeyboardEvent();
	}

	#toggle() {
		this.#dropdownButton.addEventListener("click", () => {
			this.#dropdownMenus.classList.toggle("dropdown--collapse");

			if (this.#dropdownMenus.classList.contains("dropdown--collapse")) {
				this.#dropdownButton.setAttribute("aria-expanded", true);
			} else {
				this.#dropdownButton.setAttribute("aria-expanded", false);
			}
		});
	}

	#escapeKeyboardEvent() {
		this.#dropdownButton.addEventListener("keydown", (event) => {
			const keyboardKey = event.key.toLowerCase();

			if (keyboardKey === "escape") {
				this.#dropdownButton.setAttribute("aria-expanded", false);
				this.#dropdownMenus.classList.remove("dropdown--collapse");
			}
		});

		this.#dropdownMenus.addEventListener("keydown", (event) => {
			const keyboardKey = event.key.toLowerCase();

			if (keyboardKey === "escape") {
				this.#dropdownButton.setAttribute("aria-expanded", false);
				this.#dropdownMenus.classList.remove("dropdown--collapse");
			}
		});
	}

	#shiftTabKeyboardEvent() {
		this.#dropdownButton.addEventListener("keydown", (event) => {
			const isShiftKeyboardKey = event.shiftKey;
			const keyboardKey = event.key.toLocaleLowerCase();

			if (isShiftKeyboardKey === true && keyboardKey === "tab") {
				this.#dropdownButton.setAttribute("aria-expanded", false);
				this.#dropdownMenus.classList.remove("dropdown--collapse");
			}
		});

		this.#dropdownMenus.lastElementChild.addEventListener(
			"keydown",
			(event) => {
				const isShiftKeyboardKey = event.shiftKey;
				const keyboardKey = event.key.toLocaleLowerCase();

				if (isShiftKeyboardKey === true && keyboardKey === "tab") return;

				if (keyboardKey === "tab") {
					this.#dropdownButton.setAttribute("aria-expanded", false);
					this.#dropdownMenus.classList.remove("dropdown--collapse");
				}
			}
		);
	}

	#clickOutside() {
		document.body.addEventListener("click", (event) => {
			const dropdownMenusStatus =
				this.#dropdownMenus.classList.contains("dropdown--collapse");

			if (dropdownMenusStatus === true) {
				const isContainDropdownEl = this.#dropdownButton.parentElement.contains(
					event.target
				);

				if (isContainDropdownEl === false) {
					this.#dropdownButton.setAttribute("aria-expanded", false);
					this.#dropdownMenus.classList.remove("dropdown--collapse");
				}
			}
		});
	}
}

new Dropdown();
