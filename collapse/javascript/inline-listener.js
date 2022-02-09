function toggleCollapse(event) {
	const collapseMsg = event.target.nextElementSibling;
	const displayValue = collapseMsg.style.display;

	event.target.classList.toggle("collapse--active");

	if (displayValue === "" || displayValue === "none") {
		collapseMsg.style.display = "block";
	} else {
		collapseMsg.style.display = "none";
	}
}
