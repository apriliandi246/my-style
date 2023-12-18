const rootHTML = document.documentElement;
const bodyElement = document.body;
const divElement = document.createElement("div");
const buttonElement = document.createElement("button");

divElement.className = "just-for-this-test";
divElement.style.marginBottom = "50px";

buttonElement.id = "btn-theme";
buttonElement.textContent = "Toggle theme";
buttonElement.style.cursor = "pointer";
buttonElement.style.marginRight = "20px";

divElement.appendChild(buttonElement);

bodyElement.insertBefore(divElement, bodyElement.firstChild);
bodyElement.style.padding = "100px";

buttonElement.addEventListener("click", () => {
	const currentTheme = rootHTML.getAttribute("data-mys-theme").trim();

	if (currentTheme === "light") {
		rootHTML.setAttribute("data-mys-theme", "dark");
	} else {
		rootHTML.setAttribute("data-mys-theme", "light");
	}
});
