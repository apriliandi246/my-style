class Collapses {
	constructor() {
		this.collapses = document.getElementById("collapses");
		this.addEventListener();
	}

	addEventListener() {
		this.collapses.addEventListener("click", (event) => {
			if (event.target.tagName === "BUTTON") {
				const collapseBtn = event.target;
				const collapseMsg = collapseBtn.nextElementSibling;

				collapseBtn.classList.toggle("collapse--active");
				collapseMsg.classList.toggle("collapse-message--active");
			}
		});
	}
}

new Collapses();
