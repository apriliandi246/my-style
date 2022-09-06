function toggleNavbar(event) {
	const navbarMenus = event.target.nextElementSibling;
	navbarMenus.classList.toggle("navbar__menus--collapse");

	if (navbarMenus.classList.contains("navbar__menus--collapse")) {
		event.target.setAttribute("aria-expanded", true);
	} else {
		event.target.setAttribute("aria-expanded", false);
	}
}
