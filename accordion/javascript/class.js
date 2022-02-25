class Collapse {
	constructor() {
		this.previousAccordionMsg = "";
		this.accordionComponents = document.getElementsByClassName("accordion__button");
		this.addEventListener();
	}

	addEventListener() {
		for (let index = 0; index < this.accordionComponents.length; index++) {
			this.accordionComponents[index].addEventListener("click", () => {
				this.toggleAccordion(this.accordionComponents[index]);
			});
		}
	}

	toggleAccordion(accordion) {
		const accrodionMessage = accordion.nextElementSibling;

		accordion.classList.toggle("accordion--active");
		accrodionMessage.classList.toggle("accordion-message--active");
		this.hidePreviousAccordion(accrodionMessage);
	}

	hidePreviousAccordion(accordionMsg) {
		if (this.previousAccordionMsg === accordionMsg) {
			this.previousAccordionMsg = "";
		}

		if (!this.previousAccordionMsg) {
			this.previousAccordionMsg = accordionMsg;
		} else {
			this.previousAccordionMsg.previousElementSibling.classList.remove("accordion--active");
			this.previousAccordionMsg.classList.remove("accordion-message--active");
			this.previousAccordionMsg = accordionMsg;
		}
	}
}

new Collapse();
