import BaseComponent from "../../base/index.js";

class Modal extends BaseComponent {
	#bodyElement;
	#componentName;
	#modalDataTargetAttribute;
	#modalCloseBtnDataAttribute;

	constructor() {
		super();

		this.#componentName = "modal";
		this.#modalDataTargetAttribute = "data-mys-modal-target";
		this.#modalCloseBtnDataAttribute = "data-mys-modal-btn-close";

		this.#bodyElement = document.body;

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		const HTMLRootElement = this.getRootElement();

		HTMLRootElement.addEventListener("click", (event) => {
			const componentSelector = `[${this.getDataAttributeComponent()}]`;
			const currentElementTarget = event.target.closest(componentSelector);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.getDataAttributeComponent()).trim();

				if (currentComponentName === this.#componentName) {
					const modalTargetName = currentElementTarget.getAttribute(this.#modalDataTargetAttribute);
					const modal = document.getElementById(modalTargetName);

					this.#open(modal);
					this.#closeModalBtn(modal);
				}
			}
		});
	}

	#open(modal) {
		this.#bodyElement.style.overflow = "hidden";
		modal.showModal();
	}

	#close(modal) {
		modal.close();
		this.#bodyElement.style.removeProperty("overflow");
	}

	#closeModalBtn(modal) {
		const modalID = modal.getAttribute("id");
		const btnSelector = `[${this.#modalCloseBtnDataAttribute}=${modalID}]`;
		const btn = modal.querySelector(btnSelector);

		btn.addEventListener("click", () => {
			this.#close(modal);
		});
	}
}

new Modal();
