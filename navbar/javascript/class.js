class Navbar {
	constructor() {
		this.navbarBtnMenus = document.getElementById("navbar-btn-menus");
		this.navbarMenus = this.navbarBtnMenus.nextElementSibling;
		this.navbar = this.navbarBtnMenus.parentElement;
		this.addEventListener();
	}

	addEventListener() {
		this.navbarBtnMenus.addEventListener("click", () => {
			this.navbar.classList.toggle("navbar__menus--collapse");
		});

		document.body.addEventListener("click", (event) => {
			const isContainNabarElements = this.navbar.contains(event.target);

			if (!isContainNabarElements) {
				this.navbarMenus.classList.remove("navbar__menus--collapse");
			}
		});
	}
}

new Navbar();
