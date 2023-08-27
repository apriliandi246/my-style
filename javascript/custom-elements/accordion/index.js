import BaseComponent from "../../base/index.js";

class AccordionGroup extends BaseComponent {
	#COMPONENT_NAME;
	#accordionsActive;
	#accordionBodyCSSVariableVisibility;
	#accordionBtnSelector;
	#accordionParentGroupSelector;
	#accordionBodyDataAttribute;

	constructor() {
		super();

		// component state
		this.#accordionsActive = {};

		this.#COMPONENT_NAME = "accordion";
		this.#accordionParentGroupSelector = "mys-accordion-group";
		this.#accordionBtnSelector = "mys-accordion__button";
		this.#accordionBodyDataAttribute = "data-mys-accordion-body";
		this.#accordionBodyCSSVariableVisibility = "--mys-accordion-visibility-status";

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		const HTMLRootElement = this.getRootElement();

		HTMLRootElement.addEventListener("click", (event) => {
			const currentTargetElementSelector = `[${this.getDataAttributeComponent()}]`;
			const currentTargetElement = event.target.closest(currentTargetElementSelector);

			if (currentTargetElement !== null) {
				const currentTargetElementName = currentTargetElement.getAttribute(this.getDataAttributeComponent()).trim();

				if (currentTargetElementName === this.#COMPONENT_NAME) {
					this.#toogle(currentTargetElement);
				}
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
