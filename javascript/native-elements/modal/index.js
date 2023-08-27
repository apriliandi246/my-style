import BaseComponent from "../../base/index.js";

class Modal extends BaseComponent {
	#bodyElement;
	#COMPONENT_NAME;
	#modalTargetDataAttr;
	#modalBtnCloseDataAttr;

	constructor() {
		super();

		this.#COMPONENT_NAME = "modal";
		this.#modalTargetDataAttr = "data-mys-modal-target";
		this.#modalBtnCloseDataAttr = "data-mys-modal-btn-close";

		this.#bodyElement = document.body;

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
					const modalTargetDataAttr = currentTargetElement.getAttribute(this.#modalTargetDataAttr);
					const modalElement = document.getElementById(modalTargetDataAttr);

					this.#open(modalElement);
					this.#btnCloseModal(modalElement);
				}
			}
		});
	}

	#open(modalElement) {
		this.#bodyElement.style.overflow = "hidden";
		modalElement.showModal();
	}

	#close(modalElement) {
		modalElement.close();
		this.#bodyElement.style.removeProperty("overflow");
	}

	#btnCloseModal(modalElement) {
		const modalElementIdAttr = modalElement.getAttribute("id");
		const modalBtnCloseSelector = `[${this.#modalBtnCloseDataAttr}=${modalElementIdAttr}]`;
		const modalBtnCloseElement = modalElement.querySelector(modalBtnCloseSelector);

		modalBtnCloseElement.addEventListener("click", () => {
			this.#close(modalElement);
		});
	}
}

new Modal();
