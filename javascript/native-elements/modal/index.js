import BaseComponent from "../../base/index.js";

class Modal extends BaseComponent {
	#rootElement;
	#bodyElement;
	#componentName;
	#closeBtnClassname;
	#dataAttributeComponent;
	#scrollBarHideClassname;
	#modalDataTargetAttribute;

	constructor() {
		super();

		this.#componentName = "modal";
		this.#bodyElement = document.body;
		this.#rootElement = this.getRootElement();
		this.#closeBtnClassname = "mys-modal__close-btn";
		this.#scrollBarHideClassname = "mys-modal--active";
		this.#modalDataTargetAttribute = "data-modal-target";
		this.#dataAttributeComponent = this.getDataAttributeComponent();

		this.#main();
	}

	#main() {
		this.#eventDelegation();
	}

	#eventDelegation() {
		this.#rootElement.addEventListener("click", (event) => {
			const currentElementTarget = event.target.closest(`[${this.#dataAttributeComponent}]`);

			if (currentElementTarget !== null) {
				const currentComponentName = currentElementTarget.getAttribute(this.#dataAttributeComponent).trim();

				if (currentComponentName === this.#componentName) {
					const modalTargetName = currentElementTarget.getAttribute(this.#modalDataTargetAttribute);
					const modal = document.getElementById(modalTargetName);

					this.#open(modal);
					this.#close(modal);
				}
			}
		});
	}

	#open(modal) {
		this.#bodyElement.style.overflow = "hidden";
		modal.showModal();
	}

	#close(modal) {
		const btnClose = modal.querySelector(`.${this.#closeBtnClassname}`);

		btnClose.addEventListener("click", () => {
			modal.close();
			this.#bodyElement.style.removeProperty("overflow");
		});
	}
}

new Modal();
