(function () {
	const navbarToggleBtn = document.getElementById("navbar-btn-menus");
	const navbarMenus = navbarToggleBtn.nextElementSibling;
	const navbar = navbarToggleBtn.parentElement;

	navbarToggleBtn.addEventListener("click", () => {
		navbarMenus.classList.toggle("navbar__menus--collapse");
	});

	document.body.addEventListener("click", (event) => {
		if (!navbar.contains(event.target)) {
			navbarMenus.classList.remove("navbar__menus--collapse");
		}
	});
})();
