import EventDelegation from "../../js/utils/eventDelegation.js";

class AccordionGroup {
	#rootElement;
	#COMPONENT_NAME;
	#accordionsActive;
	#btnTargetDataAttr;
	#contentDataAttribute;
	#containerGroupDataAttr;
	#eventDelegationRootElement;

	constructor() {
		this.#accordionsActive = {};

		this.#COMPONENT_NAME = "accordion";
		this.#btnTargetDataAttr = "data-han-content-target";
		this.#contentDataAttribute = "data-han-accordion-content";
		this.#containerGroupDataAttr = "data-han-accordion-container";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				this.#toogle(currentTargetElement);
			}
		});
	}

	#toogle(element) {
		const btnElement = element;
		const btnContentTargetDataAttr = btnElement.getAttribute(`${this.#btnTargetDataAttr}`);

		const containerGroupElement = btnElement.closest(`[${this.#containerGroupDataAttr}]`);
		const containerGroupDataAttr = containerGroupElement.getAttribute(this.#containerGroupDataAttr);

		const bodyContentElement = containerGroupElement.querySelector(`[${this.#contentDataAttribute}=${btnContentTargetDataAttr}]`);
		const bodyDataAttr = bodyContentElement.getAttribute(`${this.#contentDataAttribute}`);

		if (this.#accordionsActive.hasOwnProperty(containerGroupDataAttr) === false) {
			this.#accordionsActive[containerGroupDataAttr] = bodyDataAttr;

			btnElement.classList.add("han-accordion__button--active");
			btnElement.setAttribute("aria-expanded", "true");
			bodyContentElement.style.display = "block";

			return;
		}

		if (this.#accordionsActive[containerGroupDataAttr] === bodyDataAttr) {
			delete this.#accordionsActive[containerGroupDataAttr];

			btnElement.classList.remove("han-accordion__button--active");
			btnElement.setAttribute("aria-expanded", "false");
			bodyContentElement.style.display = "none";

			return;
		}

		if (this.#accordionsActive[containerGroupDataAttr] !== bodyDataAttr) {
			const prevActiveBtnSelector = `button[${this.#btnTargetDataAttr}=${this.#accordionsActive[containerGroupDataAttr]}]`;
			const prevActiveBtnElement = containerGroupElement.querySelector(prevActiveBtnSelector);

			const prevActiveBodyContentSelector = `[${this.#contentDataAttribute}=${this.#accordionsActive[containerGroupDataAttr]}]`;
			const prevActiveBodyContentElement = containerGroupElement.querySelector(prevActiveBodyContentSelector);

			prevActiveBtnElement.classList.remove("han-accordion__button--active");
			prevActiveBtnElement.setAttribute("aria-expanded", "false");
			prevActiveBodyContentElement.style.display = "none";

			btnElement.classList.add("han-accordion__button--active");
			btnElement.setAttribute("aria-expanded", "true");
			bodyContentElement.style.display = "block";

			this.#accordionsActive[containerGroupDataAttr] = bodyDataAttr;

			return;
		}
	}
}

new AccordionGroup();
