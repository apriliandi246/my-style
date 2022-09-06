(function () {
	const toggleBtn = document.getElementById("navbar-toggle-btn");
	const navbarMenus = toggleBtn.nextElementSibling;

	toggleBtn.addEventListener("click", () => {
		navbarMenus.classList.toggle("navbar__menus--collapse");

		if (navbarMenus.classList.contains("navbar__menus--collapse")) {
			toggleBtn.setAttribute("aria-expanded", true);
		} else {
			toggleBtn.setAttribute("aria-expanded", false);
		}
	});
})();
