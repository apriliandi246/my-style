class Accordions {
	constructor() {
		this.previousAccordionBtn = "";
		this.previousAccordionMsg = "";
		this.accordions = document.getElementById("accordions");
		this.firstAccordion = this.accordions.firstElementChild.firstElementChild.firstElementChild;
		this.lastAccordion = this.accordions.lastElementChild.firstElementChild.firstElementChild;

		this.addEventListener();
	}

	addEventListener() {
		this.accordions.addEventListener("click", (event) => {
			if (event.target.tagName === "BUTTON") {
				let accordionBtn = event.target;
				const accordionMsg = accordionBtn.parentElement.nextElementSibling.firstElementChild;
				const ariaExpandedStatus = accordionBtn.getAttribute("aria-expanded");

				if (ariaExpandedStatus === "false") {
					accordionBtn.setAttribute("aria-expanded", true);
				}

				if (ariaExpandedStatus === "true" && this.previousAccordionMsg === accordionMsg) {
					accordionBtn.setAttribute("aria-expanded", false);
				}
				
				accordionBtn.classList.toggle("accordion--active");
				accordionMsg.classList.toggle("accordion-message--active");

				if (this.previousAccordionMsg === accordionMsg) {
					this.previousAccordionMsg = "";
				}

				if (!this.previousAccordionMsg) {
					this.previousAccordionBtn = accordionBtn;
					this.previousAccordionMsg = accordionMsg;
				} else {
					this.previousAccordionBtn.setAttribute("aria-expanded", false);
					this.previousAccordionBtn.classList.remove("accordion--active");
					this.previousAccordionMsg.classList.remove("accordion-message--active");
					this.previousAccordionBtn = accordionBtn;
					this.previousAccordionMsg = accordionMsg;
				}

				// keypress events
				if (accordionBtn === document.activeElement) {
					accordionBtn.addEventListener("keyup", (event) => {
						if (event.key === "Home") {
							this.firstAccordion.focus();
						}

						if (event.key === "End") {
							this.lastAccordion.focus();
						}

						if (event.key === "ArrowUp") {
							if (this.firstAccordion === accordionBtn) {
								this.lastAccordion.focus();
							} else {
								const nextAccordion = accordionBtn.parentElement.parentElement.previousElementSibling;
								nextAccordion.firstElementChild.firstElementChild.focus();
							}
						}

						if (event.key === "ArrowDown") {
							if (this.lastAccordion === accordionBtn) {
								this.firstAccordion.focus();
							} else {
								const nextAccordion = accordionBtn.parentElement.parentElement.nextElementSibling;
								nextAccordion.firstElementChild.firstElementChild.focus();
							}
						}
					});
				}
			}
		});
	}
}

new Accordions();
