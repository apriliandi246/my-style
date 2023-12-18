import EventDelegation from "../../js/utils/eventDelegation.js";

class AccordionGroup {
	#rootElement;
	#COMPONENT_NAME;
	#accordionsActive;
	#accordionBtnSelector;
	#accordionBodyDataAttribute;
	#eventDelegationRootElement;
	#accordionParentGroupSelector;
	#accordionBodyCSSVariableVisibility;

	constructor() {
		// component state
		this.#accordionsActive = {};

		this.#COMPONENT_NAME = "accordion";
		this.#accordionBtnSelector = "mys-accordion__button";
		this.#accordionParentGroupSelector = "mys-accordion-group";
		this.#accordionBodyDataAttribute = "data-mys-accordion-body";
		this.#accordionBodyCSSVariableVisibility = "--mys-accordion-visibility-status";

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
		const accordionBtnElement = element;
		const accordionParentGroupElement = accordionBtnElement.closest(`.${this.#accordionParentGroupSelector}`);
		const accordionParentGroupID = accordionParentGroupElement.getAttribute("id");
		const accordionBodyDataAttribute = accordionBtnElement.getAttribute(this.#accordionBodyDataAttribute);
		const accordionBodyElement = accordionParentGroupElement.querySelector(`#${accordionBodyDataAttribute}`);

		if (this.#accordionsActive.hasOwnProperty(accordionParentGroupID) === false) {
			accordionBodyElement.style.setProperty(this.#accordionBodyCSSVariableVisibility, "block");
			accordionBtnElement.setAttribute("aria-expanded", "true");

			this.#accordionsActive[accordionParentGroupID] = accordionBodyDataAttribute;

			return;
		}

		if (this.#accordionsActive[accordionParentGroupID] === accordionBodyDataAttribute) {
			accordionBodyElement.style.setProperty(this.#accordionBodyCSSVariableVisibility, "none");
			accordionBtnElement.setAttribute("aria-expended", "false");

			delete this.#accordionsActive[accordionParentGroupID];

			return;
		}

		if (this.#accordionsActive[accordionParentGroupID] !== accordionBodyDataAttribute) {
			const prevAccordionBodySelector = `#${this.#accordionsActive[accordionParentGroupID]}`;
			const prevAccordionBodyElement = accordionParentGroupElement.querySelector(prevAccordionBodySelector);
			const prevAccordionParentElement = prevAccordionBodyElement.parentElement;
			const prevAccordionBtnElement = prevAccordionParentElement.querySelector(`.${this.#accordionBtnSelector}`);

			prevAccordionBodyElement.style.setProperty(this.#accordionBodyCSSVariableVisibility, "none");
			prevAccordionBtnElement.setAttribute("aria-expended", "false");

			accordionBodyElement.style.setProperty(this.#accordionBodyCSSVariableVisibility, "block");
			accordionBtnElement.setAttribute("aria-expanded", "true");

			this.#accordionsActive[accordionParentGroupID] = accordionBodyDataAttribute;

			return;
		}
	}
}

new AccordionGroup();
