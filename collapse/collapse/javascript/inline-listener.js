function toggleCollapse(event) {
	const collapseMsg = event.target.parentElement.nextElementSibling.firstElementChild;

	event.target.classList.toggle("collapse--active");
	collapseMsg.classList.toggle("collapse-message--active");

	if (collapseMsg.classList.contains("collapse-message--active")) {
		event.target.setAttribute("aria-expanded", true);
	} else {
		event.target.setAttribute("aria-expanded", false);
	}
}
