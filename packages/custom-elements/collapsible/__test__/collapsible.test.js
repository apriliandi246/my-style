import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Collapsible from "../script.js";

const BUTTON_ACTIVE_CLASSNAME = "han-collapsible__button--active";

const COLLAPSIBLES = `
<div id="collapsibleGroupOne" data-han-collapsible-container="collapsibleGroupOne" class="han-collapsible-group">
	<div class="han-collapsible">
		<h3>
			<button
				type="button"
				aria-expanded="false"
				id="collapsible--1--id"
				data-han-comp="collapsible"
				aria-controls="collapsible--1"
				data-han-content-target="collapsible--1"
				class="han-collapsible__button">
				What is HTML ????
			</button>
		</h3>

		<div
			role="region"
			id="collapsible--1"
			class="han-collapsible__body"
			aria-labelledby="collapsible--1--id"
			data-han-collapsible-content="collapsible--1"
			style="display: none">
			<p>
				HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content
				could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title
				suggests, this article will give you a basic understanding of HTML and its functions.
			</p>
		</div>
	</div>

	<div class="han-collapsible">
		<h3>
			<button
				type="button"
				aria-expanded="false"
				id="collapsible--2--id"
				data-han-comp="collapsible"
				aria-controls="collapsible--2"
				class="han-collapsible__button"
				data-han-content-target="collapsible--2">
				What is CSS ????
			</button>
		</h3>

		<div
			role="region"
			id="collapsible--2"
			class="han-collapsible__body"
			aria-labelledby="collapsible--2--id"
			data-han-collapsible-content="collapsible--2"
			style="display: none">
			<p>
				CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This
				article explains what CSS is, with a simple syntax example, and also covers some key terms about the language.
			</p>
		</div>
	</div>

	<div class="han-collapsible">
		<h3>
			<button
				type="button"
				aria-expanded="false"
				id="collapsible---3--id"
				data-han-comp="collapsible"
				class="han-collapsible__button"
				aria-controls="collapsible---3"
				data-han-content-target="collapsible---3">
				What is Javascript ????
			</button>
		</h3>

		<div
			role="region"
			id="collapsible---3"
			class="han-collapsible__body"
			aria-labelledby="accordion--3--id"
			data-han-collapsible-content="collapsible---3"
			style="display: none">
			<p>
				JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time
				a web page does more than just sit there and display static information for you to look at — displaying timely content
				updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is
				probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we
				have covered in much more detail in other parts of the Learning Area.
			</p>
		</div>
	</div>
</div>

<div id="accordionGroupTwo" data-han-collapsible-container="accordionGroupTwo" class="han-collapsible-group">
	<div class="han-collapsible">
		<h3>
			<button
				type="button"
				aria-expanded="false"
				id="collapsible--5--id"
				data-han-comp="collapsible"
				aria-controls="collapsible--5"
				class="han-collapsible__button"
				data-han-content-target="collapsible--5">
				What is Svelte JS ????
			</button>
		</h3>

		<div
			role="region"
			id="collapsible--5"
			class="han-collapsible__body"
			aria-labelledby="accordion--5--id"
			data-han-collapsible-content="collapsible--5"
			style="display: none">
			<p>
				Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the
				bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app..
				Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of
				your app changes.
			</p>
		</div>
	</div>

	<div class="han-collapsible">
		<h3>
			<button
				type="button"
				aria-expanded="false"
				id="collapsible--6--id"
				data-han-comp="collapsible"
				aria-controls="collapsible--6"
				class="han-collapsible__button"
				data-han-content-target="collapsible--6">
				What is React JS ????
			</button>
		</h3>

		<div
			role="region"
			id="collapsible--6"
			class="han-collapsible__body"
			aria-labelledby="accordion--6--id"
			data-han-collapsible-content="collapsible--6"
			style="display: none">
			<p>
				React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is
				maintained by Meta and a community of individual developers and companies. React can be used to develop single-page,
				mobile, or server-rendered applications with frameworks like Next.js.
			</p>
		</div>
	</div>

	<div class="han-collapsible">
		<h3>
			<button
				type="button"
				aria-expanded="false"
				id="collapsible--7--id"
				data-han-comp="collapsible"
				aria-controls="collapsible--7"
				class="han-collapsible__button"
				data-han-content-target="collapsible--7">
				What is Vue JS ????
			</button>
		</h3>

		<div
			role="region"
			id="collapsible--7"
			class="han-collapsible__body"
			aria-labelledby="collapsible--7--id"
			data-han-collapsible-content="collapsible--7"
			style="display: none">
			<p>
				Vue.js is an open-source model-view-viewmodel front end JavaScript library for building user interfaces and single-page
				applications.
			</p>
		</div>
	</div>
</div>
`;

describe("Collapsible", () => {
	test("the collapsible currently clicked become active", () => {
		document.body.innerHTML = COLLAPSIBLES;

		new Collapsible();

		const btnElement = screen.getByText("What is HTML ????");
		const contentElement = btnElement.parentElement.nextElementSibling;

		fireEvent.click(btnElement);

		expect(btnElement).toHaveAttribute("aria-expanded", "true");
		expect(btnElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(contentElement).not.toHaveStyle({ display: "none" });
	});

	test("the collapsible currently clicked become active and become unactive if the collapsible got click again", () => {
		document.body.innerHTML = COLLAPSIBLES;

		new Collapsible();

		const btnElement = screen.getByText("What is HTML ????");
		const contentElement = btnElement.parentElement.nextElementSibling;

		fireEvent.click(btnElement);

		expect(btnElement).toHaveAttribute("aria-expanded", "true");
		expect(btnElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(contentElement).not.toHaveStyle({ display: "none" });

		fireEvent.click(btnElement);

		expect(btnElement).toHaveAttribute("aria-expanded", "false");
		expect(btnElement).not.toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(contentElement).toHaveStyle({ display: "none" });
	});

	test("interact with other collapsible group and other collapsible group doesn't got any impact", () => {
		document.body.innerHTML = COLLAPSIBLES;

		new Collapsible();

		const groupOneBtnElement = screen.getByText("What is HTML ????");
		const groupOneContentElement = groupOneBtnElement.parentElement.nextElementSibling;

		const groupTwoButtonElement = screen.getByText("What is Svelte JS ????");
		const groupTwoContentElement = groupTwoButtonElement.parentElement.nextElementSibling;

		fireEvent.click(groupOneBtnElement);

		fireEvent.click(groupTwoButtonElement);

		expect(groupOneBtnElement).toHaveAttribute("aria-expanded", "true");
		expect(groupOneBtnElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(groupOneContentElement).not.toHaveStyle({ display: "none" });

		expect(groupTwoButtonElement).toHaveAttribute("aria-expanded", "true");
		expect(groupTwoButtonElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(groupTwoContentElement).not.toHaveStyle({ display: "none" });
	});

	test("click all collapsibles", () => {
		document.body.innerHTML = COLLAPSIBLES;

		new Collapsible();

		const btnElements = screen.getAllByRole("button");
		const btnElementsTotal = btnElements.length;

		for (let btnIdx = 0; btnIdx < btnElementsTotal; btnIdx++) {
			const btnElement = btnElements[btnIdx];
			const contentElement = btnElement.parentElement.nextElementSibling;

			fireEvent.click(btnElement);

			expect(btnElement).toHaveAttribute("aria-expanded", "true");
			expect(btnElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
			expect(contentElement).not.toHaveStyle({ display: "none" });
		}
	});
});
