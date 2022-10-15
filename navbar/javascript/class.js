class Navbar {
	constructor() {
		this.toggleBtn = document.getElementById("navbar-toggle-btn");
		this.navbarMenus = this.toggleBtn.nextElementSibling;
		this.triggerListeners();
	}

	triggerListeners() {
		this.toggle();
	}

	toggle() {
		this.toggleBtn.addEventListener("click", () => {
			this.navbarMenus.classList.toggle("navbar__menus--collapse");

			if (this.navbarMenus.classList.contains("navbar__menus--collapse")) {
				this.toggleBtn.setAttribute("aria-expanded", true);
			} else {
				this.toggleBtn.setAttribute("aria-expanded", false);
			}
		});
	}
}

new Navbar();
