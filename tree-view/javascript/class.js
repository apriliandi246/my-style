class NestedDropdown {
	constructor() {
		this.nestedDropdownButtons = document.getElementsByClassName("tree-view__btn-menu");
		this.triggerListeners();
	}

	triggerListeners() {
		this.toggle();
	}

	toggle() {
		for (let index = 0; index < this.nestedDropdownButtons.length; index++) {
			this.nestedDropdownButtons[index].addEventListener("click", (event) => {
				const dropdownBtn = event.target;
				const dropdownDetails = dropdownBtn.nextElementSibling;

				dropdownBtn.classList.toggle("tree-view-btn__active");
				dropdownDetails.classList.toggle("tree-view__collapse");
			});
		}
	}
}

new NestedDropdown();
