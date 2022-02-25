(function () {
	let previousAccordionMsg = "";
	const accordionComponents = document.getElementsByClassName("accordion__button");

	for (let index = 0; index < accordionComponents.length; index++) {
		accordionComponents[index].addEventListener("click", () => {
			const accordionMessage = accordionComponents[index].nextElementSibling;

			accordionComponents[index].classList.toggle("accordion--active");
			accordionMessage.classList.toggle("accordion-message--active");

			if (previousAccordionMsg === accordionMessage) {
				previousAccordionMsg = "";
			}

			if (!previousAccordionMsg) {
				previousAccordionMsg = accordionMessage;
			} else {
				previousAccordionMsg.previousElementSibling.classList.remove("accordion--active");
				previousAccordionMsg.classList.remove("accordion-message--active");
				previousAccordionMsg = accordionMessage;
			}
		});
	}
})();
