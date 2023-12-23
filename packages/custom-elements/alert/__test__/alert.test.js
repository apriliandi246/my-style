import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Alert from "../script.js";

const ALERT = `
<div role="alert" class="han-alert">
	<p class="han-alert__message">Example alert message</p>
</div>

<div role="alert" class="han-alert" data-han-alert-container="one">
	<p class="han-alert__message">Alert One</p>
	<button type="button" aria-label="close alert one" data-han-element-name="alert" class="han-alert__close-btn"></button>
</div>

<div role="alert" class="han-alert" data-han-alert-container="two">
	<p class="han-alert__message">Alert Two</p>
	<button type="button" aria-label="close alert two" data-han-element-name="alert" class="han-alert__close-btn"></button>
</div>
`;

describe("Alert", () => {
	test("remove alert from the DOM", () => {
		document.body.innerHTML = ALERT;

		new Alert();

		const btnCloseElement = screen.getByRole("button", { name: "close alert one" });
		const alertElement = btnCloseElement.parentElement;

		fireEvent.click(btnCloseElement);

		expect(alertElement).not.toBeInTheDocument();
		expect(document.body).not.toContainElement(alertElement);
	});

	test("remove alert from the DOM more than one alert", () => {
		document.body.innerHTML = ALERT;

		new Alert();

		const firstBtnCloseElement = screen.getByRole("button", { name: "close alert one" });
		const firstAlertElement = firstBtnCloseElement.parentElement;

		const secondBtnCloseElement = screen.getByRole("button", { name: "close alert two" });
		const secondAlertElement = secondBtnCloseElement.parentElement;

		const thirdAlertElement = screen.getByText("Example alert message").parentElement;

		fireEvent.click(firstBtnCloseElement);

		expect(secondAlertElement).toBeInTheDocument();
		expect(document.body).toContainElement(secondAlertElement);

		fireEvent.click(secondBtnCloseElement);

		expect(firstAlertElement).not.toBeInTheDocument();
		expect(document.body).not.toContainElement(firstAlertElement);

		expect(secondAlertElement).not.toBeInTheDocument();
		expect(document.body).not.toContainElement(secondAlertElement);

		expect(thirdAlertElement).toBeInTheDocument();
		expect(document.body).toContainElement(thirdAlertElement);
	});
});
