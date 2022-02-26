function toggleCollapse(event) {
	const collapseMsg = event.target.nextElementSibling;

	event.target.classList.toggle("collapse--active");
	collapseMsg.classList.toggle("collapse-message--active");
}
