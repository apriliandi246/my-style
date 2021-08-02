export function toggleMenu() {
	const navItems = this.parentElement.querySelector(".navbar__items");
	const navMenuIcon = this.parentElement.querySelector(".toggle-menu");

	navItems.classList.toggle("navbar--slide");

	if (navItems.classList.contains("navbar--slide") === true) {
		navMenuIcon.firstElementChild.style.display = "none";
		navMenuIcon.lastElementChild.style.display = "inline-block";
	} else {
		navMenuIcon.lastElementChild.style.display = "none";
		navMenuIcon.firstElementChild.style.display = "inline-block";
	}
}
