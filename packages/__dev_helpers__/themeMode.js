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

rootHTML.style.colorScheme = "light";

buttonElement.addEventListener("click", () => {
	const currentTheme = rootHTML.getAttribute("data-han-theme").trim();

	if (currentTheme === "light") {
		rootHTML.style.colorScheme = "dark";
		rootHTML.setAttribute("data-han-theme", "dark");
	} else {
		rootHTML.style.colorScheme = "light";
		rootHTML.setAttribute("data-han-theme", "light");
	}
});
