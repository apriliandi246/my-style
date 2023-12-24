import EventDelegation from "../../js/utils/eventDelegation.js";

class Switch {
	#rootElement;
	#COMPONENT_NAME;
	#switchDataAttr;
	#switchesActive;
	#eventDelegationRootElement;

	constructor() {
		/*
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
		this.#toggleClick();
		this.#toggleKeyboard();
	}

	#toggleClick() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
				this.#toggle(currentTargetElement);
			}
		});
	}

	#toggleKeyboard() {
		this.#rootElement.addEventListener("keydown", (event) => {
			const keyboardKey = event.key;

			/*
				Enter and Space key
			*/
			if (keyboardKey === "Enter" || keyboardKey === " ") {
				const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
				const { currentTargetElement, currentTargetElementName } = elementTargetData;

				if (currentTargetElementName === this.#COMPONENT_NAME && currentTargetElement !== null) {
					this.#toggle(currentTargetElement);
				}
			}
		});
	}

	/*
		Toggle make the switch to be on or off
	*/
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
