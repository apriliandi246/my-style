(function () {
	const navbarToggleBtn = document.getElementById("navbar-btn-menus");
	const navbarMenus = navbarToggleBtn.nextElementSibling;
	const navbar = navbarToggleBtn.parentElement;

	navbarToggleBtn.addEventListener("click", () => {
		navbarMenus.classList.toggle("navbar__menus--collapse");

		if (navbarMenus.classList.contains("navbar__menus--collapse")) {
			navbarToggleBtn.setAttribute("aria-expanded", true);
		} else {
			navbarToggleBtn.setAttribute("aria-expanded", false);
		}
	});

	document.body.addEventListener("click", (event) => {
		if (!navbar.contains(event.target)) {
			navbarMenus.classList.remove("navbar__menus--collapse");
		}
	});
})();
