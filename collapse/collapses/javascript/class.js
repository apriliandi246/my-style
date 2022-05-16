class Collapses {
	constructor() {
		this.collapses = document.getElementById("collapses");
		this.addEventListener();
	}

	addEventListener() {
		this.collapses.addEventListener("click", (event) => {
			if (event.target.tagName === "BUTTON") {
				const collapseBtn = event.target;
				const collapseMsg = collapseBtn.parentElement.nextElementSibling.firstElementChild;

				collapseBtn.classList.toggle("collapse--active");
				collapseMsg.classList.toggle("collapse-message--active");

				if (collapseMsg.classList.contains("collapse-message--active")) {
					collapseBtn.setAttribute("aria-expanded", true);
				} else {
					collapseBtn.setAttribute("aria-expanded", false);
				}
			}
		});
	}
}

new Collapses();
