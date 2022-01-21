class Collapse {
	constructor() {
		this.previousCollapseMsg = "";
		this.collapseComponents = document.getElementsByClassName("collapse__button");
		this.addEventListener();
	}

	addEventListener() {
		const collapseElements = this.collapseComponents.length;

		for (let index = 0; index < collapseElements; index++) {
			this.collapseComponents[index].addEventListener("click", () => {
				this.toggleCollapse(this.collapseComponents[index]);
			});
		}
	}

	toggleCollapse(collapse) {
		const collapseMessage = collapse.nextElementSibling;

		collapse.classList.toggle("collapse--active");
		collapseMessage.classList.toggle("collapse-message--active");
		this.hidePreviousCollapse(collapseMessage);
	}

	hidePreviousCollapse(collapseMsg) {
		if (this.previousCollapseMsg === collapseMsg) {
			this.previousCollapseMsg = "";
		}

		if (!this.previousCollapseMsg) {
			this.previousCollapseMsg = collapseMsg;
		} else {
			this.previousCollapseMsg.previousElementSibling.classList.remove("collapse--active");
			this.previousCollapseMsg.classList.remove("collapse-message--active");
			this.previousCollapseMsg = collapseMsg;
		}
	}
}

new Collapse();
