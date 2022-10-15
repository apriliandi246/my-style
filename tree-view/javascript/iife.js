(function () {
	const nestedDropdownButtons = document.getElementsByClassName("tree-view__btn-menu");

	for (let index = 0; index < nestedDropdownButtons.length; index++) {
		nestedDropdownButtons[index].addEventListener("click", (event) => {
			const dropdownBtn = event.target;
			const dropdownDetails = dropdownBtn.nextElementSibling;

			dropdownBtn.classList.toggle("tree-view-btn__active");
			dropdownDetails.classList.toggle("tree-view__collapse");
		});
	}
})();
