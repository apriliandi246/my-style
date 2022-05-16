class Collapse {
	constructor() {
		this.collapse = document.getElementById("collapse");
		this.collapseBtn = this.collapse.firstElementChild.firstElementChild;
		this.collapseMsg = this.collapse.lastElementChild.firstElementChild;
		this.addEventListener();
	}

	addEventListener() {
		this.collapseBtn.addEventListener("click", () => {
			this.collapseBtn.classList.toggle("collapse--active");
			this.collapseMsg.classList.toggle("collapse-message--active");

			if (this.collapseMsg.classList.contains("collapse-message--active")) {
				this.collapseBtn.setAttribute("aria-expanded", true);
			} else {
				this.collapseBtn.setAttribute("aria-expanded", false);
			}
		});
	}
}

new Collapse();
