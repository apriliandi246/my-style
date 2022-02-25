class Collapse {
	constructor() {
		this.collapseComponents = document.getElementsByClassName("collapse__button");
		this.addEventListener();
	}

	addEventListener() {
		for (let index = 0; index < this.collapseComponents.length; index++) {
			this.collapseComponents[index].addEventListener("click", () => {
				this.toggleCollapse(this.collapseComponents[index]);
			});
		}
	}

	toggleCollapse(collapse) {
		const collapseMessage = collapse.nextElementSibling;

		collapse.classList.toggle("collapse--active");
		collapseMessage.classList.toggle("collapse-message--active");
	}
}

new Collapse();
