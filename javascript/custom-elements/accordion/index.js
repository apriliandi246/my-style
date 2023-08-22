import BaseComponent from "../../base/index.js";

class AccordionGroup extends BaseComponent {
	#componentName;
	#accordionsActive;
	#CSSVariableVisibility;
	#classNameAccordionBtn;
	#classNameAccordionGroup;

	constructor() {
		super();

		this.#accordionsActive = {};
		this.#componentName = "accordion";
		this.#classNameAccordionGroup = "accordion-group";
		this.#classNameAccordionBtn = "accordion__button";
		this.#CSSVariableVisibility = "--mys-accordion-visibility-status";

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		const HTMLRootElement = this.getRootElement();

		HTMLRootElement.addEventListener("click", (event) => {
			const currentElementTarget = event.target.closest(`[${this.getDataAttributeComponent()}]`);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.getDataAttributeComponent()).trim();

				if (currentComponentName === this.#componentName) {
					this.#toggle(currentElementTarget);
				}
			}
		});
	}

	#toggle(element) {
		const accordionBtn = element;
		const accordionName = accordionBtn.getAttribute("data-mys-accordion-body");
		const accordionParentGroup = accordionBtn.closest(`.${this.#classNameAccordionGroup}`);
		const accordionParentGroupName = accordionParentGroup.getAttribute("id");
		const accordionBody = accordionParentGroup.querySelector(`#${accordionName}`);

		// There is no active accordion
		if (this.#accordionsActive.hasOwnProperty(accordionParentGroupName) === false) {
			accordionBody.style.setProperty(this.#CSSVariableVisibility, "block");
			accordionBtn.setAttribute("aria-expanded", "true");

			this.#accordionsActive[accordionParentGroupName] = accordionName;

			return;
		}

		// When clicking the same accordion
		if (this.#accordionsActive[accordionParentGroupName] === accordionName) {
			accordionBody.style.setProperty(this.#CSSVariableVisibility, "none");
			accordionBtn.setAttribute("aria-expanded", "false");

			delete this.#accordionsActive[accordionParentGroupName];

			return;
		}

		// When clicking another accordion while another is active
		if (this.#accordionsActive[accordionParentGroupName] !== accordionName) {
			const previousAccordionBody = accordionParentGroup.querySelector(
				`#${this.#accordionsActive[accordionParentGroupName]}`
			);
			const previousAccordionBtn = previousAccordionBody.parentElement.querySelector(`.${this.#classNameAccordionBtn}`);

			previousAccordionBody.style.setProperty(this.#CSSVariableVisibility, "none");
			previousAccordionBtn.setAttribute("aria-expanded", "false");

			accordionBody.style.setProperty(this.#CSSVariableVisibility, "block");
			accordionBtn.setAttribute("aria-expanded", "true");

			this.#accordionsActive[accordionParentGroupName] = accordionName;

			return;
		}
	}
}

new AccordionGroup();
