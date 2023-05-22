class CodeBlock {
	#codeBlocks;

	constructor() {
		this.#codeBlocks = document.getElementsByClassName("code-block");

		this.#main();
	}

	#main() {
		this.#copyToClipboard();
	}

	#copyToClipboard() {
		const totalCodeBlocks = this.#codeBlocks.length;

		for (let index = 0; index < totalCodeBlocks; index++) {
			const blockOfCode = this.#codeBlocks[index].textContent;
			const buttonCopy =
				this.#codeBlocks[index].parentElement.nextElementSibling;

			buttonCopy.addEventListener("click", async () => {
				let copiedDelay;

				await navigator.clipboard.writeText(blockOfCode);

				buttonCopy.textContent = "Copied";

				copiedDelay = setTimeout(() => {
					buttonCopy.textContent = "Copy";
					clearTimeout(copiedDelay);
				}, 700);
			});
		}
	}
}

new CodeBlock();
