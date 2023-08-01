class CodeBlock {
	#codeBlock;
	#buttonCopy;

	constructor() {
		this.#buttonCopy = document.getElementById("code-copy-btn");
		this.#codeBlock = this.#buttonCopy.previousElementSibling.firstElementChild.textContent;

		this.#main();
	}

	#main() {
		this.#copyToClipboard();
	}

	#copyToClipboard() {
		this.#buttonCopy.addEventListener("click", async () => {
			let copiedDelay;

			await navigator.clipboard.writeText(this.#codeBlock);

			this.#buttonCopy.textContent = "Copied";

			setTimeout(() => {
				this.#buttonCopy.textContent = "Copy";
				clearTimeout(copiedDelay);
			}, 700);
		});
	}
}

new CodeBlock();
