class Collapse {
	constructor() {
		this.collapse = document.getElementById("collapse");
		this.collapseBtn = this.collapse.firstElementChild;
		this.collapseMsg = this.collapse.lastElementChild;
		this.addEventListener();
	}

	addEventListener() {
		this.collapseBtn.addEventListener("click", () => {
			this.collapseBtn.classList.toggle("collapse--active");
			this.collapseMsg.classList.toggle("collapse-message--active");
		});
	}
}

new Collapse();
