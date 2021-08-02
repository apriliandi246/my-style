// Just for one collapse component
export function toggleCollapse() {
	const collapseContent = this.lastElementChild;
	const collapseIcons = this.querySelector(".collapse__icons");

	if (collapseContent.style.display === "block") {
		collapseContent.style.display = "none";
		collapseIcons.lastElementChild.style.display = "none";
		collapseIcons.firstElementChild.style.display = "block";
	} else {
		collapseContent.style.display = "block";
		collapseIcons.lastElementChild.style.display = "block";
		collapseIcons.firstElementChild.style.display = "none";
	}
}

// For more than one collapse component
export function collAccordion(event) {
	const some = event.currentTarget;
}
