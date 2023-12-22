import { screen, fireEvent, prettyDOM } from "@testing-library/dom";
import "@testing-library/jest-dom";

import Tabs from "../script.js";

const TABS = `
<div class="han-tabs-group" data-han-tabs-container="tabs-group--one">
	<div role="tablist">
		<button
			role="tab"
			id="tab--1"
			type="button"
			aria-selected="true"
			data-han-comp="tabs"
			aria-controls="tabpanel--1"
			data-han-content-target="tabpanel--1">
			What is HTML ????
		</button>

		<button
			role="tab"
			id="tab--2"
			type="button"
			tabindex="-1"
			data-han-comp="tabs"
			aria-selected="false"
			aria-controls="tabpanel--2"
			data-han-content-target="tabpanel--2">
			What is CSS ????
		</button>

		<button
			role="tab"
			id="tab--3"
			tabindex="-1"
			type="button"
			data-han-comp="tabs"
			aria-selected="false"
			aria-controls="tabpanel--3"
			data-han-content-target="tabpanel--3">
			What is Javascript ????
		</button>
	</div>

	<div>
		<div role="tabpanel" id="tabpanel--1" tabindex="0" aria-labelledby="tab--1" data-han-tabpanel-content="tabpanel--1">
			<div>
				HTML (Hypertext Markup Language) is the code that is used to structure a web page and its content. For example, content
				could be structured within a set of paragraphs, a list of bulleted points, or using images and data tables. As the title
				suggests, this article will give you a basic understanding of HTML and its functions.
			</div>
		</div>

		<div
			tabindex="0"
			role="tabpanel"
			id="tabpanel--2"
			aria-labelledby="tab--2"
			data-han-tabpanel-content="tabpanel--2"
			style="display: none">
			<div>
				CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This
				article explains what CSS is, with a simple syntax example, and also covers some key terms about the language.
			</div>
		</div>

		<div
			tabindex="0"
			role="tabpanel"
			id="tabpanel--3"
			aria-labelledby="tab--3"
			data-han-tabpanel-content="tabpanel--3"
			style="display: none">
			<div>
				Javascript is a scripting or programming language that allows you to implement complex features on web pages — every time
				a web page does more than just sit there and display static information for you to look at — displaying timely content
				updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is
				probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we
				have covered in much more detail in other parts of the Learning Area.
			</div>
		</div>
	</div>
</div>

<div class="han-tabs-group" data-han-tabs-container="tabs-group--two">
	<div role="tablist">
		<button
			role="tab"
			id="tab--4"
			type="button"
			aria-selected="true"
			data-han-comp="tabs"
			aria-controls="tabpanel--4"
			data-han-content-target="tabpanel--4">
			What is Svelte JS ????
		</button>

		<button
			role="tab"
			id="tab--5"
			type="button"
			tabindex="-1"
			data-han-comp="tabs"
			aria-selected="false"
			aria-controls="tabpanel--5"
			data-han-content-target="tabpanel--5">
			What is React JS ????
		</button>

		<button
			role="tab"
			id="tab--6"
			tabindex="-1"
			type="button"
			data-han-comp="tabs"
			aria-selected="false"
			aria-controls="tabpanel--6"
			data-han-content-target="tabpanel--6">
			What is Vue JS ????
		</button>
	</div>

	<div>
		<div role="tabpanel" id="tabpanel--4" tabindex="0" aria-labelledby="tab--4" data-han-tabpanel-content="tabpanel--4">
			<div>
				Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the
				bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app..
				Instead of using techniques like virtual DOM diffing, Svelte writes code that surgically updates the DOM when the state of
				your app changes.
			</div>
		</div>

		<div
			tabindex="0"
			role="tabpanel"
			id="tabpanel--5"
			aria-labelledby="tab--5"
			data-han-tabpanel-content="tabpanel--5"
			style="display: none">
			<div>
				React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is
				maintained by Meta and a community of individual developers and companies. React can be used to develop single-page,
				mobile, or server-rendered applications with frameworks like Next.js.
			</div>
		</div>

		<div
			tabindex="0"
			role="tabpanel"
			id="tabpanel--6"
			aria-labelledby="tab--6"
			data-han-tabpanel-content="tabpanel--6"
			style="display: none">
			<div>
				Vue.js is an open-source model-view-viewmodel front end JavaScript library for building user interfaces and single-page
				applications.
			</div>
		</div>
	</div>
</div>
`;

const tabsGroupDataAttr = "data-han-tabs-container";
const btnContentTargetDataAttr = "data-han-content-target";
const contentElementDataAttr = "data-han-tabpanel-content";

describe("Tabs", () => {
	test("the tab currently clicked become active", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const buttonElement = screen.getByText("What is CSS ????");
		const contentElementSelector = `[${contentElementDataAttr}=${buttonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const contentElement = document.querySelector(contentElementSelector);

		fireEvent.click(buttonElement);

		expect(buttonElement).toHaveAttribute("aria-selected", "true");
		expect(buttonElement).not.toHaveAttribute("tabindex", "-1");
		expect(contentElement).not.toHaveStyle({ display: "none" });
	});

	test("the tab currently clicked become active and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOnebuttonElement = screen.getByText("What is CSS ????");
		const groupOneContentElementSelector = `[${contentElementDataAttr}=${groupOnebuttonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const groupOneContentElement = document.querySelector(groupOneContentElementSelector);

		const groupTwobuttonElement = screen.getByText("What is Svelte JS ????");
		const groupTwoContentElementSelector = `[${contentElementDataAttr}=${groupTwobuttonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const groupTwoContentElement = document.querySelector(groupTwoContentElementSelector);

		fireEvent.click(groupOnebuttonElement);
		fireEvent.click(groupTwobuttonElement);

		expect(groupOnebuttonElement).toHaveAttribute("aria-selected", "true");
		expect(groupOnebuttonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupOneContentElement).not.toHaveStyle({ display: "none" });

		expect(groupTwobuttonElement).toHaveAttribute("aria-selected", "true");
		expect(groupTwobuttonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupTwoContentElement).not.toHaveStyle({ display: "none" });
	});

	test("the tab currently clicked become active and the previous one become unactive", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const nextButtonElement = screen.getByText("What is CSS ????");
		const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const nextContentElement = document.querySelector(nextContentElementSelector);

		const prevButtonElement = screen.getByText("What is HTML ????");
		const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const prevContentElement = document.querySelector(prevContentElementSelector);

		fireEvent.click(nextButtonElement);

		expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
		expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
		expect(prevContentElement).toHaveStyle({ display: "none" });

		expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
		expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(nextContentElement).not.toHaveStyle({ display: "none" });
	});

	test("the tab currently clicked become active and the previous one become unactive and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOneNextButtonElement = screen.getByText("What is CSS ????");
		const groupOneNextContentElementSelector = `
			[${contentElementDataAttr}=${groupOneNextButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupOneNextContentElement = document.querySelector(groupOneNextContentElementSelector);

		const groupOnePrevButtonElement = screen.getByText("What is HTML ????");
		const groupOnePrevContentElementSelector = `
			[${contentElementDataAttr}=${groupOnePrevButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupOnePrevContentElement = document.querySelector(groupOnePrevContentElementSelector);

		const groupTwoNextButtonElement = screen.getByText("What is React JS ????");
		const groupTwoNextContentElementSelector = `
			[${contentElementDataAttr}=${groupTwoNextButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupTwoNextContentElement = document.querySelector(groupTwoNextContentElementSelector);

		const groupTwoPrevButtonElement = screen.getByText("What is Svelte JS ????");
		const groupTwoPrevContentElementSelector = `
			[${contentElementDataAttr}=${groupTwoPrevButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupTwoPrevContentElement = document.querySelector(groupTwoPrevContentElementSelector);

		fireEvent.click(groupOneNextButtonElement);
		fireEvent.click(groupTwoNextButtonElement);

		expect(groupOnePrevButtonElement).toHaveAttribute("aria-selected", "false");
		expect(groupOnePrevButtonElement).toHaveAttribute("tabindex", "-1");
		expect(groupOnePrevContentElement).toHaveStyle({ display: "none" });

		expect(groupOneNextButtonElement).toHaveAttribute("aria-selected", "true");
		expect(groupOneNextButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupOneNextContentElement).not.toHaveStyle({ display: "none" });

		expect(groupTwoPrevButtonElement).toHaveAttribute("aria-selected", "false");
		expect(groupTwoPrevButtonElement).toHaveAttribute("tabindex", "-1");
		expect(groupTwoPrevContentElement).toHaveStyle({ display: "none" });

		expect(groupTwoNextButtonElement).toHaveAttribute("aria-selected", "true");
		expect(groupTwoNextButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupTwoNextContentElement).not.toHaveStyle({ display: "none" });
	});

	test("click tabs until the last tab", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const tabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--one']`);
		const buttonsElements = tabsContainerElement.firstElementChild.children;
		const totalButtonElements = buttonsElements.length;

		for (let btnIdx = 1; btnIdx < totalButtonElements; btnIdx++) {
			const nextButtonElement = buttonsElements[btnIdx];
			const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const nextContentElement = document.querySelector(nextContentElementSelector);

			const prevButtonElement = buttonsElements[btnIdx - 1];
			const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const prevContentElement = document.querySelector(prevContentElementSelector);

			fireEvent.click(nextButtonElement);

			expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
			expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
			expect(prevContentElement).toHaveStyle({ display: "none" });

			expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
			expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
			expect(nextContentElement).not.toHaveStyle({ display: "none" });
		}
	});

	test("click tabs until the last tab and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOnetabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--one']`);
		const groupOnebuttonsElements = groupOnetabsContainerElement.firstElementChild.children;
		const groupOneTotalButtonElements = groupOnebuttonsElements.length;

		const groupTwotabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--two']`);
		const groupTwoButtonsElements = groupTwotabsContainerElement.firstElementChild.children;
		const groupTwoTotalButtonElements = groupTwoButtonsElements.length;

		for (let btnIdx = 1; btnIdx < groupOneTotalButtonElements; btnIdx++) {
			const nextButtonElement = groupOnebuttonsElements[btnIdx];
			const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const nextContentElement = document.querySelector(nextContentElementSelector);

			const prevButtonElement = groupOnebuttonsElements[btnIdx - 1];
			const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const prevContentElement = document.querySelector(prevContentElementSelector);

			fireEvent.click(nextButtonElement);

			expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
			expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
			expect(prevContentElement).toHaveStyle({ display: "none" });

			expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
			expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
			expect(nextContentElement).not.toHaveStyle({ display: "none" });
		}

		for (let btnIdx = 1; btnIdx < groupTwoTotalButtonElements; btnIdx++) {
			const nextButtonElement = groupTwoButtonsElements[btnIdx];
			const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const nextContentElement = document.querySelector(nextContentElementSelector);

			const prevButtonElement = groupTwoButtonsElements[btnIdx - 1];
			const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const prevContentElement = document.querySelector(prevContentElementSelector);

			fireEvent.click(nextButtonElement);

			expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
			expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
			expect(prevContentElement).toHaveStyle({ display: "none" });

			expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
			expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
			expect(nextContentElement).not.toHaveStyle({ display: "none" });
		}
	});

	test("use ArrowRight key to go to next tabs", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const tabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--one']`);
		const buttonsElements = tabsContainerElement.firstElementChild.children;
		const firstButtonElement = buttonsElements[0];
		const totalButtonElements = buttonsElements.length;

		fireEvent.click(firstButtonElement);

		for (let btnIdx = 0; btnIdx < totalButtonElements; btnIdx++) {
			const nextButtonElement = buttonsElements[btnIdx + 1];

			if (nextButtonElement !== undefined) {
				const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
				const nextContentElement = document.querySelector(nextContentElementSelector);

				fireEvent.keyDown(buttonsElements[btnIdx], {
					key: "ArrowRight"
				});

				expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
				expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
				expect(nextContentElement).not.toHaveStyle({ display: "none" });
			}

			if (btnIdx !== 0) {
				const prevButtonElement = buttonsElements[btnIdx - 1];
				const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
				const prevContentElement = document.querySelector(prevContentElementSelector);

				expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
				expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
				expect(prevContentElement).toHaveStyle({ display: "none" });
			}
		}
	});

	test("use ArrowRight key to go to next tabs and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOneTabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--one']`);
		const groupOneButtonsElements = groupOneTabsContainerElement.firstElementChild.children;
		const groupOneFirstButtonElement = groupOneButtonsElements[0];
		const groupOneTotalButtonElements = groupOneButtonsElements.length;

		const groupTwoTabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--two']`);
		const groupTwoButtonsElements = groupTwoTabsContainerElement.firstElementChild.children;
		const groupTwoFirstButtonElement = groupTwoButtonsElements[0];
		const groupTwoTotalButtonElements = groupTwoButtonsElements.length;

		fireEvent.click(groupOneFirstButtonElement);
		fireEvent.click(groupTwoFirstButtonElement);

		for (let btnIdx = 0; btnIdx < groupOneTotalButtonElements; btnIdx++) {
			const nextButtonElement = groupOneButtonsElements[btnIdx + 1];

			if (nextButtonElement !== undefined) {
				const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
				const nextContentElement = document.querySelector(nextContentElementSelector);

				fireEvent.keyDown(groupOneButtonsElements[btnIdx], {
					key: "ArrowRight"
				});

				expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
				expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
				expect(nextContentElement).not.toHaveStyle({ display: "none" });
			}

			if (btnIdx !== 0) {
				const prevButtonElement = groupOneButtonsElements[btnIdx - 1];
				const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
				const prevContentElement = document.querySelector(prevContentElementSelector);

				expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
				expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
				expect(prevContentElement).toHaveStyle({ display: "none" });
			}
		}

		for (let btnIdx = 0; btnIdx < groupTwoTotalButtonElements; btnIdx++) {
			const nextButtonElement = groupTwoButtonsElements[btnIdx + 1];

			if (nextButtonElement !== undefined) {
				const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
				const nextContentElement = document.querySelector(nextContentElementSelector);

				fireEvent.keyDown(groupTwoButtonsElements[btnIdx], {
					key: "ArrowRight"
				});

				expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
				expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
				expect(nextContentElement).not.toHaveStyle({ display: "none" });
			}

			if (btnIdx !== 0) {
				const prevButtonElement = groupTwoButtonsElements[btnIdx - 1];
				const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
				const prevContentElement = document.querySelector(prevContentElementSelector);

				expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
				expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
				expect(prevContentElement).toHaveStyle({ display: "none" });
			}
		}
	});

	test("use ArrowLeft key to go to previous tabs", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const tabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--one']`);
		const buttonsElements = tabsContainerElement.firstElementChild.children;
		const totalButtonElements = buttonsElements.length;
		const lastButtonElement = buttonsElements[totalButtonElements - 1];

		fireEvent.click(lastButtonElement);

		fireEvent.keyDown(lastButtonElement, {
			key: "ArrowLeft"
		});

		for (let btnIdx = totalButtonElements - 1; btnIdx > 0; btnIdx--) {
			const nextButtonElement = buttonsElements[btnIdx - 1];
			const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const nextContentElement = document.querySelector(nextContentElementSelector);

			const prevButtonElement = buttonsElements[btnIdx];
			const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const prevContentElement = document.querySelector(prevContentElementSelector);

			expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
			expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
			expect(prevContentElement).toHaveStyle({ display: "none" });

			expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
			expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
			expect(nextContentElement).not.toHaveStyle({ display: "none" });

			fireEvent.keyDown(nextButtonElement, {
				key: "ArrowLeft"
			});
		}
	});

	test("use ArrowLeft key to go to previous tabs and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOneTabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--one']`);
		const groupOneButtonsElements = groupOneTabsContainerElement.firstElementChild.children;
		const groupOneTotalButtonElements = groupOneButtonsElements.length;
		const groupOneLastButtonElement = groupOneButtonsElements[groupOneTotalButtonElements - 1];

		const groupTwoTabsContainerElement = document.querySelector(`[${tabsGroupDataAttr}='tabs-group--two']`);
		const groupTwoButtonsElements = groupTwoTabsContainerElement.firstElementChild.children;
		const groupTwoTotalButtonElements = groupTwoButtonsElements.length;
		const groupTwoLastButtonElement = groupTwoButtonsElements[groupTwoTotalButtonElements - 1];

		fireEvent.click(groupOneLastButtonElement);
		fireEvent.keyDown(groupOneLastButtonElement, { key: "ArrowLeft" });

		fireEvent.click(groupTwoLastButtonElement);
		fireEvent.keyDown(groupTwoLastButtonElement, { key: "ArrowLeft" });

		for (let btnIdx = groupOneTotalButtonElements - 1; btnIdx > 0; btnIdx--) {
			const nextButtonElement = groupOneButtonsElements[btnIdx - 1];
			const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const nextContentElement = document.querySelector(nextContentElementSelector);

			const prevButtonElement = groupOneButtonsElements[btnIdx];
			const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const prevContentElement = document.querySelector(prevContentElementSelector);

			expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
			expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
			expect(prevContentElement).toHaveStyle({ display: "none" });

			expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
			expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
			expect(nextContentElement).not.toHaveStyle({ display: "none" });

			fireEvent.keyDown(nextButtonElement, {
				key: "ArrowLeft"
			});
		}

		for (let btnIdx = groupTwoTotalButtonElements - 1; btnIdx > 0; btnIdx--) {
			const nextButtonElement = groupTwoButtonsElements[btnIdx - 1];
			const nextContentElementSelector = `[${contentElementDataAttr}=${nextButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const nextContentElement = document.querySelector(nextContentElementSelector);

			const prevButtonElement = groupTwoButtonsElements[btnIdx];
			const prevContentElementSelector = `[${contentElementDataAttr}=${prevButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
			const prevContentElement = document.querySelector(prevContentElementSelector);

			expect(prevButtonElement).toHaveAttribute("aria-selected", "false");
			expect(prevButtonElement).toHaveAttribute("tabindex", "-1");
			expect(prevContentElement).toHaveStyle({ display: "none" });

			expect(nextButtonElement).toHaveAttribute("aria-selected", "true");
			expect(nextButtonElement).not.toHaveAttribute("tabindex", "-1");
			expect(nextContentElement).not.toHaveStyle({ display: "none" });

			fireEvent.keyDown(nextButtonElement, {
				key: "ArrowLeft"
			});
		}
	});

	test("use Home key to go to the first tab", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const firstButtonElement = screen.getByText("What is HTML ????");
		const firstContentElementSelector = `[${contentElementDataAttr}=${firstButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const firstContentElement = document.querySelector(firstContentElementSelector);

		const lastButtonElement = screen.getByText("What is Javascript ????");
		const lastContentElementSelector = `[${contentElementDataAttr}=${lastButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const lastContentElement = document.querySelector(lastContentElementSelector);

		fireEvent.click(lastButtonElement);

		fireEvent.keyDown(lastButtonElement, {
			key: "Home"
		});

		expect(lastButtonElement).toHaveAttribute("aria-selected", "false");
		expect(lastButtonElement).toHaveAttribute("tabindex", "-1");
		expect(lastContentElement).toHaveStyle({ display: "none" });

		expect(firstButtonElement).toHaveAttribute("aria-selected", "true");
		expect(firstButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(firstContentElement).not.toHaveStyle({ display: "none" });
	});

	test("use Home key to go to the first tab and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOnefirstButtonElement = screen.getByText("What is HTML ????");
		const groupOnefirstContentElementSelector = `
			[${contentElementDataAttr}=${groupOnefirstButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupOneFirstContentElement = document.querySelector(groupOnefirstContentElementSelector);

		const groupOneLastButtonElement = screen.getByText("What is Javascript ????");
		const groupOnelastContentElementSelector = `
			[${contentElementDataAttr}=${groupOneLastButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupOneLastContentElement = document.querySelector(groupOnelastContentElementSelector);

		const groupTwofirstButtonElement = screen.getByText("What is Svelte JS ????");
		const groupTwofirstContentElementSelector = `
			[${contentElementDataAttr}=${groupTwofirstButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupTwoFirstContentElement = document.querySelector(groupTwofirstContentElementSelector);

		const groupTwoLastButtonElement = screen.getByText("What is React JS ????");
		const groupTwolastContentElementSelector = `
			[${contentElementDataAttr}=${groupTwoLastButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupTwoLastContentElement = document.querySelector(groupTwolastContentElementSelector);

		fireEvent.click(groupOneLastButtonElement);
		fireEvent.keyDown(groupOneLastButtonElement, { key: "Home" });

		fireEvent.click(groupTwoLastButtonElement);
		fireEvent.keyDown(groupTwoLastButtonElement, { key: "Home" });

		expect(groupOneLastButtonElement).toHaveAttribute("aria-selected", "false");
		expect(groupOneLastButtonElement).toHaveAttribute("tabindex", "-1");
		expect(groupOneLastContentElement).toHaveStyle({ display: "none" });

		expect(groupOnefirstButtonElement).toHaveAttribute("aria-selected", "true");
		expect(groupOnefirstButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupOneFirstContentElement).not.toHaveStyle({ display: "none" });

		expect(groupTwoLastButtonElement).toHaveAttribute("aria-selected", "false");
		expect(groupTwoLastButtonElement).toHaveAttribute("tabindex", "-1");
		expect(groupTwoLastContentElement).toHaveStyle({ display: "none" });

		expect(groupTwofirstButtonElement).toHaveAttribute("aria-selected", "true");
		expect(groupTwofirstButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupTwoFirstContentElement).not.toHaveStyle({ display: "none" });
	});

	test("use End key to go to the last tab", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const firstButtonElement = screen.getByText("What is HTML ????");
		const firstContentElementSelector = `[${contentElementDataAttr}=${firstButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const firstContentElement = document.querySelector(firstContentElementSelector);

		const lastButtonElement = screen.getByText("What is Javascript ????");
		const lastContentElementSelector = `[${contentElementDataAttr}=${lastButtonElement.getAttribute(btnContentTargetDataAttr)}]`;
		const lastContentElement = document.querySelector(lastContentElementSelector);

		fireEvent.click(firstButtonElement);

		fireEvent.keyDown(firstButtonElement, {
			key: "End"
		});

		expect(lastButtonElement).toHaveAttribute("aria-selected", "true");
		expect(lastButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(lastContentElement).not.toHaveStyle({ display: "none" });

		expect(firstButtonElement).toHaveAttribute("aria-selected", "false");
		expect(firstButtonElement).toHaveAttribute("tabindex", "-1");
		expect(firstContentElement).toHaveStyle({ display: "none" });
	});

	test("use End key to go to the last tab and also for other tabs group", () => {
		document.body.innerHTML = TABS;

		new Tabs();

		const groupOneFirstButtonElement = screen.getByText("What is HTML ????");
		const groupOneFirstContentElementSelector = `
			[${contentElementDataAttr}=${groupOneFirstButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupOneFirstContentElement = document.querySelector(groupOneFirstContentElementSelector);

		const groupOneLastButtonElement = screen.getByText("What is Javascript ????");
		const groupOneLastContentElementSelector = `
			[${contentElementDataAttr}=${groupOneLastButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupOneLastContentElement = document.querySelector(groupOneLastContentElementSelector);

		const groupTwoFirstButtonElement = screen.getByText("What is Svelte JS ????");
		const groupTwoFirstContentElementSelector = `
			[${contentElementDataAttr}=${groupTwoFirstButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupTwoFirstContentElement = document.querySelector(groupTwoFirstContentElementSelector);

		const groupTwoLastButtonElement = screen.getByText("What is Javascript ????");
		const groupTwoLastContentElementSelector = `
			[${contentElementDataAttr}=${groupTwoLastButtonElement.getAttribute(btnContentTargetDataAttr)}]
		`;
		const groupTwoLastContentElement = document.querySelector(groupTwoLastContentElementSelector);

		fireEvent.click(groupOneFirstButtonElement);
		fireEvent.keyDown(groupOneFirstButtonElement, { key: "End" });

		fireEvent.click(groupTwoFirstButtonElement);
		fireEvent.keyDown(groupTwoFirstButtonElement, { key: "End" });

		expect(groupOneLastButtonElement).toHaveAttribute("aria-selected", "true");
		expect(groupOneLastButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupOneLastContentElement).not.toHaveStyle({ display: "none" });

		expect(groupOneFirstButtonElement).toHaveAttribute("aria-selected", "false");
		expect(groupOneFirstButtonElement).toHaveAttribute("tabindex", "-1");
		expect(groupOneFirstContentElement).toHaveStyle({ display: "none" });

		expect(groupTwoLastButtonElement).toHaveAttribute("aria-selected", "true");
		expect(groupTwoLastButtonElement).not.toHaveAttribute("tabindex", "-1");
		expect(groupTwoLastContentElement).not.toHaveStyle({ display: "none" });

		expect(groupTwoFirstButtonElement).toHaveAttribute("aria-selected", "false");
		expect(groupTwoFirstButtonElement).toHaveAttribute("tabindex", "-1");
		expect(groupTwoFirstContentElement).toHaveStyle({ display: "none" });
	});
});
