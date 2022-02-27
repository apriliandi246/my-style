function toggleCollapses(event) {
	if (event.target.tagName === "BUTTON") {
		const collapseBtn = event.target;
		const collapseMsg = collapseBtn.nextElementSibling;

		collapseBtn.classList.toggle("collapse--active");
		collapseMsg.classList.toggle("collapse-message--active");
	}
}
