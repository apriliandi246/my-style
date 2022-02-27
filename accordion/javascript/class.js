class Accordions {
	constructor() {
		this.previousAccordionMsg = "";
		this.accordions = document.getElementById("accordions");
		this.addEventListener();
	}

	addEventListener() {
		this.accordions.addEventListener("click", (event) => {
			if (event.target.tagName === "BUTTON") {
				const accordionBtn = event.target;
				const accordionMsg = accordionBtn.nextElementSibling;

				accordionBtn.classList.toggle("accordion--active");
				accordionMsg.classList.toggle("accordion-message--active");

				if (this.previousAccordionMsg === accordionMsg) {
					this.previousAccordionMsg = "";
				}

				if (!this.previousAccordionMsg) {
					this.previousAccordionMsg = accordionMsg;
				} else {
					this.previousAccordionMsg.previousElementSibling.classList.remove(
						"accordion--active"
					);
					this.previousAccordionMsg.classList.remove(
						"accordion-message--active"
					);
					this.previousAccordionMsg = accordionMsg;
				}
			}
		});
	}
}

new Accordions();
