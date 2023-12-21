import EventDelegation from "../../js/utils/eventDelegation.js";

class CollapsibleGroup {
	#rootElement;
	#COMPONENT_NAME;
	#contentDataAttr;
	#btnTargetDataAttr;
	#activeCollapsibles;
	#activeBtnClassname;
	#containerGroupDataAttr;
	#eventDelegationRootElement;

	constructor() {
		/*
			{
				collapsibleGroupOne: [collapsible--1, collapsible--2, ....],
				collapsibleGroupTwo: [collapsible--1, collapsible--2, ....]
			}
		*/
		this.#activeCollapsibles = {};

		this.#COMPONENT_NAME = "collapsible";
		this.#btnTargetDataAttr = "data-han-content-target";
		this.#contentDataAttr = "data-han-collapsible-content";
		this.#activeBtnClassname = "han-collapsible__button--active";
		this.#containerGroupDataAttr = "data-han-collapsible-container";

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

		const bodyContentElement = containerGroupElement.querySelector(`[${this.#contentDataAttr}=${btnContentTargetDataAttr}]`);
		const bodyDataAttr = bodyContentElement.getAttribute(`${this.#contentDataAttr}`);

		if (this.#activeCollapsibles.hasOwnProperty(containerGroupDataAttr) === false) {
			this.#activeCollapsibles[containerGroupDataAttr] = [bodyDataAttr];

			btnElement.classList.add(this.#activeBtnClassname);
			btnElement.setAttribute("aria-expanded", "true");
			bodyContentElement.style.display = "block";

			return;
		}

		if (this.#activeCollapsibles[containerGroupDataAttr].includes(bodyDataAttr) === true) {
			const collapsibleIdx = this.#activeCollapsibles[containerGroupDataAttr].indexOf(bodyDataAttr);

			this.#activeCollapsibles[containerGroupDataAttr].splice(collapsibleIdx, 1);

			btnElement.classList.remove(this.#activeBtnClassname);
			btnElement.setAttribute("aria-expanded", "false");
			bodyContentElement.style.display = "none";

			return;
		}

		if (this.#activeCollapsibles[containerGroupDataAttr].includes(bodyDataAttr) === false) {
			this.#activeCollapsibles[containerGroupDataAttr].push(bodyDataAttr);

			btnElement.classList.add(this.#activeBtnClassname);
			btnElement.setAttribute("aria-expanded", "true");
			bodyContentElement.style.display = "block";

			return;
		}
	}
}

export default CollapsibleGroup;
