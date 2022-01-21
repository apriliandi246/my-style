function toggleCollapse(event) {
	const collapseBtn = event.target;
	const collapseContent = collapseBtn.nextElementSibling;
	const displayValue = collapseContent.style.display;

	collapseBtn.classList.toggle("collapse--active");

	if (displayValue === "" || displayValue === "none") {
		collapseContent.style.display = "block";
	} else {
		collapseContent.style.display = "none";
	}
}
