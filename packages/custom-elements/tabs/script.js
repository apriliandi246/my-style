import EventDelegation from "../../js/utils/eventDelegation.js";

class Tabs {
	#rootElement;
	#COMPONENT_NAME;
	#btnTargetDataAttr;
	#contentDataAttribute;
	#containerGroupDataAttr;
	#eventDelegationRootElement;

	constructor() {
		this.#COMPONENT_NAME = "tabs";
		this.#btnTargetDataAttr = "data-han-content-target";
		this.#contentDataAttribute = "data-han-tabpanel-content";
		this.#containerGroupDataAttr = "data-han-tabs-container";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		/*
			Click event
		*/
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				this.#toggle(currentTargetElement);
			}
		});

		/*
			Keyboard event
		*/
		this.#rootElement.addEventListener("keydown", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;
			const keyboardKey = event.key;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				if (keyboardKey === "ArrowRight") {
					const nextButtonElement = currentTargetElement.nextElementSibling;

					if (nextButtonElement !== null) {
						this.#toggle(nextButtonElement);
					}
				}

				if (keyboardKey === "ArrowLeft") {
					const prevtButtonElement = currentTargetElement.previousElementSibling;

					if (prevtButtonElement !== null) {
						this.#toggle(prevtButtonElement);
					}
				}

				if (keyboardKey === "Home") {
					const buttonsElement = currentTargetElement.parentElement.children;
					const firstButtonElement = buttonsElement[0];

					this.#toggle(firstButtonElement);
				}

				if (keyboardKey === "End") {
					const buttonsElement = currentTargetElement.parentElement.children;
					const lastButtonElement = buttonsElement[buttonsElement.length - 1];

					this.#toggle(lastButtonElement);
				}
			}
		});
	}

	#toggle(element) {
		const currentBtnElement = element;
		const containerGroup = currentBtnElement.closest(`[${this.#containerGroupDataAttr}]`);

		const currentBtnElementContentTarget = currentBtnElement.getAttribute(this.#btnTargetDataAttr);
		const buttonElements = currentBtnElement.parentElement.children;

		const currentContentElementSelector = `[${this.#contentDataAttribute}=${currentBtnElementContentTarget}]`;
		const currentContentElement = containerGroup.querySelector(currentContentElementSelector);

		currentBtnElement.removeAttribute("tabindex");
		currentBtnElement.setAttribute("aria-selected", "true");
		currentContentElement.style.removeProperty("display");
		currentBtnElement.focus();

		for (let btnIdx = 0; btnIdx < buttonElements.length; btnIdx++) {
			if (buttonElements[btnIdx] !== currentBtnElement) {
				const btnElement = buttonElements[btnIdx];
				const btnElementContentTarget = btnElement.getAttribute(this.#btnTargetDataAttr);

				const contentElementSelector = `[${this.#contentDataAttribute}=${btnElementContentTarget}]`;
				const contentElement = containerGroup.querySelector(contentElementSelector);

				btnElement.setAttribute("tabindex", "-1");
				btnElement.setAttribute("aria-selected", "false");
				contentElement.style.setProperty("display", "none");
			}
		}
	}
}

export default Tabs;
