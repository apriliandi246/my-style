function toggleNavbar(event) {
	const navbar = event.target.parentElement;
	const navbarMenus = event.target.nextElementSibling;

	navbarMenus.classList.toggle("navbar__menus--collapse");

	if (navbarMenus.classList.contains("navbar__menus--collapse")) {
		event.target.setAttribute("aria-expanded", true);
	} else {
		event.target.setAttribute("aria-expanded", false);
	}

	document.body.addEventListener("click", (event) => {
		if (!navbar.contains(event.target)) {
			navbarMenus.classList.remove("navbar__menus--collapse");
		}
	});
}
