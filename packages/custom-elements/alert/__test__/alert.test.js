import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Alert from "../script.js";

const ALERT = `
<div role="alert" class="han-alert">
	<p class="han-alert__message">Example alert message</p>
	<button type="button" aria-label="close" data-han-comp="alert" class="han-alert__close-btn"></button>
</div>
`;

describe("Alert", () => {
	test("remove alert from the DOM when click the close alert button", () => {
		document.body.innerHTML = ALERT;

		new Alert();

		const alertElement = screen.getByRole("alert");
		const btnCloseElement = screen.getByRole("button", { name: "close" });

		fireEvent.click(btnCloseElement);

		expect(alertElement).not.toBeInTheDocument();
		expect(document.body).not.toContainElement(alertElement);
	});
});
