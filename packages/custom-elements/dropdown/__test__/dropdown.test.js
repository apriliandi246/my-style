import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Dropdown from "../script";

const DROPDOWNS = `
<div class="han-dropdown">
	<button
		type="button"
		id="dropdown--1--id"
		aria-expanded="false"
		data-han-element-name="dropdown"
		class="dropdown__button"
		aria-controls="dropdown--1">
		Dropdown 1
	</button>

	<ul id="dropdown--1" class="han-dropdown__menu" aria-labelledby="dropdown--1--id" style="display: none">
		<li class="han-dropdown__item">
			<a href="#">Home</a>
		</li>

		<li class="han-dropdown__item">
			<a href="#">About</a>
		</li>

		<li class="han-dropdown__item">
			<a href="#">Partner</a>
		</li>

		<li class="han-dropdown__item">
			<a href="#">Register</a>
		</li>
	</ul>
</div>

<div class="han-dropdown">
	<button
		type="button"
		id="dropdown--2--id"
		aria-expanded="false"
		data-han-element-name="dropdown"
		class="dropdown__button"
		aria-controls="dropdown--2">
		Dropdown 2
	</button>

	<ul id="dropdown--2" class="han-dropdown__menu" aria-labelledby="dropdown--2--id" style="display: none">
		<li class="han-dropdown__item">
			<button>Like</button>
		</li>

		<li class="han-dropdown__item">
			<button>Dislike</button>
		</li>

		<li class="han-dropdown__item">
			<button>Subscribe</button>
		</li>

		<li class="han-dropdown__item">
			<button>Report</button>
		</li>
	</ul>
</div>
`;

describe("Dropdown", () => {
	test("the dropdown currently clicked become active", () => {
		document.body.innerHTML = DROPDOWNS;

		new Dropdown();

		const btnElement = screen.getByText("Dropdown 1");
		const contentElement = btnElement.nextElementSibling;

		fireEvent.click(btnElement);

		expect(btnElement).toHaveAttribute("aria-expanded", "true");
		expect(contentElement).not.toHaveStyle({ display: "none" });
	});

	test("the dropdown currently clicked become active and become unactive if the dropdown got click again", () => {
		document.body.innerHTML = DROPDOWNS;

		new Dropdown();

		const btnElement = screen.getByText("Dropdown 1");
		const contentElement = btnElement.nextElementSibling;

		fireEvent.click(btnElement);

		expect(btnElement).toHaveAttribute("aria-expanded", "true");
		expect(contentElement).not.toHaveStyle({ display: "none" });

		fireEvent.click(btnElement);

		expect(btnElement).toHaveAttribute("aria-expanded", "false");
		expect(contentElement).toHaveStyle({ display: "none" });
	});

	test("the dropdown currently clicked become active and the others one become unactive", () => {
		document.body.innerHTML = DROPDOWNS;

		new Dropdown();

		const prevBtnElement = screen.getByText("Dropdown 1");
		const prevContentElement = prevBtnElement.nextElementSibling;

		const nextBtnElement = screen.getByText("Dropdown 2");
		const nextContentElement = nextBtnElement.nextElementSibling;

		fireEvent.click(prevBtnElement);

		expect(prevBtnElement).toHaveAttribute("aria-expanded", "true");
		expect(prevContentElement).not.toHaveStyle({ display: "none" });

		fireEvent.click(nextBtnElement);

		expect(prevBtnElement).toHaveAttribute("aria-expanded", "false");
		expect(prevContentElement).toHaveStyle({ display: "none" });

		expect(nextBtnElement).toHaveAttribute("aria-expanded", "true");
		expect(nextContentElement).not.toHaveStyle({ display: "none" });
	});
});
