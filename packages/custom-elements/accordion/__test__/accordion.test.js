import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import AccordionGroup from "../script.js";

const ACCORDION_GROUP_ONE = `
<div id="accordionGroupOne" data-han-accordion-container="accordionGroupOne" class="han-accordion-group">
	<div class="han-accordion">
		<h3>
			<button
				type="button"
				id="accordion--1--id"
				aria-expanded="false"
				data-han-comp="accordion"
				aria-controls="accordion--1"
				class="han-accordion__button"
				data-han-content-target="accordion--1">
				What is HTML ????
			</button>
		</h3>

		<div
			role="region"
			id="accordion--1"
			class="han-accordion__body"
			aria-labelledby="accordion--1--id"
			data-han-accordion-content="accordion--1"
			style="display: none">
			<p>
				HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content
				could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title
				suggests, this article will give you a basic understanding of HTML and its functions.
			</p>
		</div>
	</div>

	<div class="han-accordion">
		<h3>
			<button
				type="button"
				id="accordion--2--id"
				aria-expanded="false"
				data-han-comp="accordion"
				aria-controls="accordion--2"
				class="han-accordion__button"
				data-han-content-target="accordion--2">
				What is CSS ????
			</button>
		</h3>

		<div
			role="region"
			id="accordion--2"
			class="han-accordion__body"
			aria-labelledby="accordion--2--id"
			data-han-accordion-content="accordion--2"
			style="display: none">
			<p>
				CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This
				article explains what CSS is, with a simple syntax example, and also covers some key terms about the language.
			</p>
		</div>
	</div>

	<div class="han-accordion">
		<h3>
			<button
				type="button"
				id="accordion--3--id"
				aria-expanded="false"
				data-han-comp="accordion"
				aria-controls="accordion--3"
				class="han-accordion__button"
				data-han-content-target="accordion--3">
				What is Javascript ????
			</button>
		</h3>

		<div
			role="region"
			id="accordion--3"
			class="han-accordion__body"
			aria-labelledby="accordion--3--id"
			data-han-accordion-content="accordion--3"
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

<div id="accordionGroupTwo" data-han-accordion-container="accordionGroupTwo" class="han-accordion-group">
	<div class="han-accordion">
		<h3>
			<button
				type="button"
				id="accordion--5--id"
				aria-expanded="false"
				data-han-comp="accordion"
				aria-controls="accordion--5"
				class="han-accordion__button"
				data-han-content-target="accordion--5">
				What is Svelte JS ????
			</button>
		</h3>

		<div
			role="region"
			id="accordion--5"
			class="han-accordion__body"
			aria-labelledby="accordion--5--id"
			data-han-accordion-content="accordion--5"
			style="display: none">
			<p>
				Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the
				bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app..
				Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of
				your app changes.
			</p>
		</div>
	</div>

	<div class="han-accordion">
		<h3>
			<button
				type="button"
				id="accordion--6--id"
				aria-expanded="false"
				data-han-comp="accordion"
				aria-controls="accordion--6"
				class="han-accordion__button"
				data-han-content-target="accordion--6">
				What is React JS ????
			</button>
		</h3>

		<div
			role="region"
			id="accordion--6"
			class="han-accordion__body"
			aria-labelledby="accordion--6--id"
			data-han-accordion-content="accordion--6"
			style="display: none">
			<p>
				React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is
				maintained by Meta and a community of individual developers and companies. React can be used to develop single-page,
				mobile, or server-rendered applications with frameworks like Next.js.
			</p>
		</div>
	</div>

	<div class="han-accordion">
		<h3>
			<button
				type="button"
				id="accordion--7--id"
				aria-expanded="false"
				data-han-comp="accordion"
				aria-controls="accordion--7"
				class="han-accordion__button"
				data-han-content-target="accordion--7">
				What is Vue JS ????
			</button>
		</h3>

		<div
			role="region"
			id="accordion--7"
			class="han-accordion__body"
			aria-labelledby="accordion--7--id"
			data-han-accordion-content="accordion--7"
			style="display: none">
			<p>
				Vue.js is an open-source model-view-viewmodel front end JavaScript library for building user interfaces and single-page
				applications.
			</p>
		</div>
	</div>
</div>
`;

const BUTTON_ACTIVE_CLASSNAME = "han-accordion__button--active";

describe("Accordion", () => {
	test("the accordion currently clicked become active", () => {
		document.body.innerHTML = ACCORDION_GROUP_ONE;

		new AccordionGroup();

		const buttonElement = screen.getByText("What is HTML ????");
		const contentElement = buttonElement.parentElement.nextElementSibling;

		fireEvent.click(buttonElement);

		expect(buttonElement).toHaveAttribute("aria-expanded", "true");
		expect(buttonElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(contentElement).not.toHaveStyle({ display: "none" });
	});

	test("the accordion currently clicked become active and become unactive if the accordion got click again", () => {
		document.body.innerHTML = ACCORDION_GROUP_ONE;

		new AccordionGroup();

		const buttonElement = screen.getByText("What is HTML ????");
		const contentElement = buttonElement.parentElement.nextElementSibling;

		fireEvent.click(buttonElement);

		expect(buttonElement).toHaveAttribute("aria-expanded", "true");
		expect(buttonElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(contentElement).not.toHaveStyle({ display: "none" });

		fireEvent.click(buttonElement);

		expect(buttonElement).toHaveAttribute("aria-expanded", "false");
		expect(buttonElement).not.toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(contentElement).toHaveStyle({ display: "none" });
	});

	test("the next accordion currently clicked become active and the previous one become unactive", () => {
		document.body.innerHTML = ACCORDION_GROUP_ONE;

		new AccordionGroup();

		const prevButtonElement = screen.getByText("What is HTML ????");
		const prevContentElement = prevButtonElement.parentElement.nextElementSibling;

		const nextButtonElement = screen.getByText("What is CSS ????");
		const nextContentElement = nextButtonElement.parentElement.nextElementSibling;

		fireEvent.click(prevButtonElement);

		fireEvent.click(nextButtonElement);

		expect(prevButtonElement).toHaveAttribute("aria-expanded", "false");
		expect(prevButtonElement).not.toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(prevContentElement).toHaveStyle({ display: "none" });

		expect(nextButtonElement).toHaveAttribute("aria-expanded", "true");
		expect(nextButtonElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(nextContentElement).not.toHaveStyle({ display: "none" });
	});

	test("interact with other accordion group and other accordion group doesn't got any impact", () => {
		document.body.innerHTML = ACCORDION_GROUP_ONE;

		new AccordionGroup();

		const groupOneButtonElement = screen.getByText("What is HTML ????");
		const groupOneContentElement = groupOneButtonElement.parentElement.nextElementSibling;

		const groupTwoButtonElement = screen.getByText("What is Svelte JS ????");
		const groupTwoContentElement = groupTwoButtonElement.parentElement.nextElementSibling;

		fireEvent.click(groupOneButtonElement);

		fireEvent.click(groupTwoButtonElement);

		expect(groupOneButtonElement).toHaveAttribute("aria-expanded", "true");
		expect(groupOneButtonElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(groupOneContentElement).not.toHaveStyle({ display: "none" });

		expect(groupTwoButtonElement).toHaveAttribute("aria-expanded", "true");
		expect(groupTwoButtonElement).toHaveClass(BUTTON_ACTIVE_CLASSNAME);
		expect(groupTwoContentElement).not.toHaveStyle({ display: "none" });
	});
});
