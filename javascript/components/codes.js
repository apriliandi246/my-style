class CodeBlock {
	#codeBlocks;

	constructor() {
		this.#codeBlocks = document.getElementsByClassName("code");

		this.#main();
	}

	#main() {
		this.#copyToClipboard();
	}

	#copyToClipboard() {
		const totalCodeBlocks = this.#codeBlocks.length;

		for (let index = 0; index < totalCodeBlocks; index++) {
			const blockOfCode = this.#codeBlocks[index].querySelector(".code__block");
			const buttonCopy =
				this.#codeBlocks[index].querySelector("#code-copy-btn");

			buttonCopy.addEventListener("click", async () => {
				let copiedDelay;

				await navigator.clipboard.writeText(blockOfCode.textContent);

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
