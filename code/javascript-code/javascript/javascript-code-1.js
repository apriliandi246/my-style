class CodeBlock {
	constructor() {
		this.buttonCopy = document.getElementById("code-copy");
		this.codeBlock = this.buttonCopy.previousElementSibling.firstElementChild.textContent;
		this.addEventListener();
	}

	addEventListener() {
		this.buttonCopy.addEventListener("click", async () => {
			let copiedDelay;

			await navigator.clipboard.writeText(this.codeBlock);
			this.buttonCopy.textContent = "Copied";

			setTimeout(() => {
				this.buttonCopy.textContent = "Copy";
				clearTimeout(copiedDelay);
			}, 700);
		});
	}
}

new CodeBlock();
