class NestedDropdown {
	#nestedDropdownButtons;

	constructor() {
		this.#nestedDropdownButtons = document.getElementsByClassName("tree-view__btn-menu");

		this.#main();
	}

	#main() {
		this.#toggle();
	}

	#toggle() {
		const totalDropdownButtons = this.#nestedDropdownButtons.length;

		for (let index = 0; index < totalDropdownButtons; index++) {
			this.#nestedDropdownButtons[index].addEventListener("click", (event) => {
				const dropdownBtn = event.target;
				const dropdownDetails = dropdownBtn.nextElementSibling;

				dropdownBtn.classList.toggle("tree-view-btn__active");
				dropdownDetails.classList.toggle("tree-view__collapse");
			});
		}
	}
}

new NestedDropdown();
