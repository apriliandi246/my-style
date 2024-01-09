const disabledButton = document.createElement("button");
const container = document.querySelector(".just-for-this-test");

disabledButton.id = "toggle-disabled";
disabledButton.textContent = "Toggle disabled";

container.appendChild(disabledButton);

function disableElement(elementSelector) {
	const elements = document.querySelectorAll(elementSelector);

	disabledButton.addEventListener("click", () => {
		for (let index = 0; index < elements.length; index++) {
			const btn = elements[index];
			const currentDisabledStatus = btn.disabled;

			if (currentDisabledStatus === false) {
				btn.disabled = true;
			} else {
				btn.disabled = false;
			}
		}
	});
}
