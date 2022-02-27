(function () {
	let previousAccordionMsg = "";
	let accordions = document.getElementById("accordions");

	accordions.addEventListener("click", (event) => {
		if (event.target.tagName === "BUTTON") {
			const accordionBtn = event.target;
			const accordionMsg = accordionBtn.nextElementSibling;

			accordionBtn.classList.toggle("accordion--active");
			accordionMsg.classList.toggle("accordion-message--active");

			if (previousAccordionMsg === accordionMsg) {
				previousAccordionMsg = "";
			}

			if (!previousAccordionMsg) {
				previousAccordionMsg = accordionMsg;
			} else {
				previousAccordionMsg.previousElementSibling.classList.remove(
					"accordion--active"
				);
				previousAccordionMsg.classList.remove("accordion-message--active");
				previousAccordionMsg = accordionMsg;
			}
		}
	});
})();
