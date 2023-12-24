import EventDelegation from "../../js/utils/eventDelegation.js";

class Switch {
	#rootElement;
	#COMPONENT_NAME;
	#switchDataAttr;
	#switchesActive;
	#eventDelegationRootElement;

	constructor() {
		/*
			The state of the switch elements....

			{
				switch__one: "on",
				switch__two: "on"
			}
		*/
		this.#switchesActive = {};

		this.#COMPONENT_NAME = "switch";
		this.#switchDataAttr = "data-han-switch";

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
				this.#toggle(currentTargetElement);
			}
		});

		this.#rootElement.addEventListener("keydown", (event) => {
			const keyboardKey = event.key;

			if (keyboardKey === "Enter" || keyboardKey === " ") {
				const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
				const { currentTargetElement, currentTargetElementName } = elementTargetData;

				if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
					this.#toggle(currentTargetElement);
				}
			}
		});
	}

	#toggle(element) {
		const switchElement = element;
		const switchElementDataAttr = switchElement.getAttribute(this.#switchDataAttr);

		if (this.#switchesActive.hasOwnProperty(switchElementDataAttr) === false) {
			this.#switchesActive[switchElementDataAttr] = "on";

			switchElement.setAttribute("aria-checked", "true");

			return;
		}

		if (this.#switchesActive[switchElementDataAttr] === "on") {
			delete this.#switchesActive[switchElementDataAttr];

			switchElement.setAttribute("aria-checked", "false");

			return;
		}
	}
}

export default Switch;
