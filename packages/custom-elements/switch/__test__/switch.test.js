import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Switch from "../script.js";

const SWITCHES_HTML = `
<div role="switch" aria-checked="false" tabindex="0" class="han-switch" data-han-switch="switch__one" data-han-element-name="switch">
	<span class="switch">
		<span></span>
	</span>
</div>

<div role="switch" aria-checked="false" tabindex="0" class="han-switch" data-han-switch="switch__two" data-han-element-name="switch">
	<span class="switch">
		<span></span>
	</span>
</div>
`;

describe("Switch element", () => {
	test("toggle the switch element to on and off using click event", () => {
		document.body.innerHTML = SWITCHES_HTML;

		new Switch();

		let switchStatus = "off";
		const switchElement = screen.getAllByRole("switch")[0];

		for (let ii = 0; ii < 20; ii++) {
			if (switchStatus === "off") {
				expect(switchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.click(switchElement);

				switchStatus = "on";
			} else {
				expect(switchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.click(switchElement);

				switchStatus = "off";
			}
		}
	});

	test("toggle the switch elements to on and off using click event", () => {
		document.body.innerHTML = SWITCHES_HTML;

		new Switch();

		const switchElements = screen.getAllByRole("switch");

		let firstSwitchStatus = "off";
		const firstSwitchElement = switchElements[0];

		let secondSwitchStatus = "off";
		const secondSwitchElement = switchElements[1];

		for (let ii = 0; ii < 20; ii++) {
			if (firstSwitchStatus === "off") {
				expect(firstSwitchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.click(firstSwitchElement);

				firstSwitchStatus = "on";
			} else {
				expect(firstSwitchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.click(firstSwitchElement);

				firstSwitchStatus = "off";
			}
		}

		for (let ii = 0; ii < 20; ii++) {
			if (secondSwitchStatus === "off") {
				expect(secondSwitchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.click(secondSwitchElement);

				secondSwitchStatus = "on";
			} else {
				expect(secondSwitchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.click(secondSwitchElement);

				secondSwitchStatus = "off";
			}
		}
	});

	test("toggle the switch element to on and off using Enter key event", () => {
		document.body.innerHTML = SWITCHES_HTML;

		new Switch();

		let switchStatus = "off";
		const switchElement = screen.getAllByRole("switch")[0];

		for (let ii = 0; ii < 21; ii++) {
			if (switchStatus === "off") {
				expect(switchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.keyDown(switchElement, {
					key: "Enter"
				});

				switchStatus = "on";
			} else {
				expect(switchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.keyDown(switchElement, {
					key: "Enter"
				});

				switchStatus = "off";
			}
		}
	});

	test("toggle the switch elements to on and off using Enter key event", () => {
		document.body.innerHTML = SWITCHES_HTML;

		new Switch();

		const switchElements = screen.getAllByRole("switch");

		let firstSwitchStatus = "off";
		const firstSwitchElement = switchElements[0];

		let secondSwitchStatus = "off";
		const secondSwitchElement = switchElements[1];

		for (let ii = 0; ii < 20; ii++) {
			if (firstSwitchStatus === "off") {
				expect(firstSwitchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.keyDown(firstSwitchElement, {
					key: "Enter"
				});

				firstSwitchStatus = "on";
			} else {
				expect(firstSwitchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.keyDown(firstSwitchElement, {
					key: "Enter"
				});

				firstSwitchStatus = "off";
			}
		}

		for (let ii = 0; ii < 20; ii++) {
			if (secondSwitchStatus === "off") {
				expect(secondSwitchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.keyDown(secondSwitchElement, {
					key: "Enter"
				});

				secondSwitchStatus = "on";
			} else {
				expect(secondSwitchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.keyDown(secondSwitchElement, {
					key: "Enter"
				});

				secondSwitchStatus = "off";
			}
		}
	});

	test("toggle the switch element to on and off using Space key event", () => {
		document.body.innerHTML = SWITCHES_HTML;

		new Switch();

		let switchStatus = "off";
		const switchElement = screen.getAllByRole("switch")[0];

		for (let ii = 0; ii < 20; ii++) {
			if (switchStatus === "off") {
				expect(switchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.keyDown(switchElement, {
					key: " "
				});

				switchStatus = "on";
			} else {
				expect(switchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.keyDown(switchElement, {
					key: " "
				});

				switchStatus = "off";
			}
		}
	});

	test("toggle the switch elements to on and off using Space key event", () => {
		document.body.innerHTML = SWITCHES_HTML;

		new Switch();

		const switchElements = screen.getAllByRole("switch");

		let firstSwitchStatus = "off";
		const firstSwitchElement = switchElements[0];

		let secondSwitchStatus = "off";
		const secondSwitchElement = switchElements[1];

		for (let ii = 0; ii < 20; ii++) {
			if (firstSwitchStatus === "off") {
				expect(firstSwitchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.keyDown(firstSwitchElement, {
					key: " "
				});

				firstSwitchStatus = "on";
			} else {
				expect(firstSwitchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.keyDown(firstSwitchElement, {
					key: " "
				});

				firstSwitchStatus = "off";
			}
		}

		for (let ii = 0; ii < 20; ii++) {
			if (secondSwitchStatus === "off") {
				expect(secondSwitchElement).toHaveAttribute("aria-checked", "false");

				fireEvent.keyDown(secondSwitchElement, {
					key: " "
				});

				secondSwitchStatus = "on";
			} else {
				expect(secondSwitchElement).toHaveAttribute("aria-checked", "true");

				fireEvent.keyDown(secondSwitchElement, {
					key: " "
				});

				secondSwitchStatus = "off";
			}
		}
	});
});
