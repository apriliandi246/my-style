import EventDelegation from "../../js/utils/eventDelegation.js";

class Modal {
	#rootElement;
	#modalDataAttr;
	#COMPONENT_NAME;
	#modalTargetDataAttr;
	#btnCloseDataAttr;
	#eventDelegationRootElement;

	constructor() {
		this.#COMPONENT_NAME = "modal";
		this.#modalDataAttr = "data-han-modal";
		this.#modalTargetDataAttr = "data-han-modal-target";
		this.#btnCloseDataAttr = "data-han-modal-btn-close";

		this.#eventDelegationRootElement = new EventDelegation();
		this.#rootElement = this.#eventDelegationRootElement.getRootElement();

		this.#main();
	}

	#main() {
		this.#open();
		this.#close();
	}

	#open() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElement !== null && currentTargetElementName === "modal__trigger") {
				const modalTargetDataAttr = currentTargetElement.getAttribute(this.#modalTargetDataAttr);
				const modalElement = document.querySelector(`[${this.#modalDataAttr}=${modalTargetDataAttr}]`);

				modalElement.showModal();
				this.#rootElement.style.setProperty("overflow", "hidden");
			}
		});
	}

	#close() {
		this.#rootElement.addEventListener("click", (event) => {
			const elementTargetData = this.#eventDelegationRootElement.eventDelegationHTML(event.target);
			const { currentTargetElement, currentTargetElementName } = elementTargetData;

			if (currentTargetElement !== null && currentTargetElementName === "modal__close") {
				const modalSelector = `[${this.#modalDataAttr}=${currentTargetElement.getAttribute(this.#btnCloseDataAttr)}]`;
				const modalElement = currentTargetElement.closest(modalSelector);

				modalElement.close();
				this.#rootElement.style.removeProperty("overflow", "hidden");
			}
		});
	}
}

export default Modal;
