function toggleNavbar(event) {
	const navbar = event.target.parentElement;
	const navbarMenus = event.target.nextElementSibling;

	navbarMenus.classList.toggle("navbar__menus--collapse");

	document.body.addEventListener("click", (event) => {
		if (!navbar.contains(event.target)) {
			navbarMenus.classList.remove("navbar__menus--collapse");
		}
	});
}
