
const accordion = (triggerSelector , itemSelector) => {
	const	btns = document.querySelectorAll(triggerSelector),
				blocks = document.querySelectorAll(itemSelector);

		blocks.forEach(block => {
			block.classList.add("animated" , "fadeInDown");
		});

		btns.forEach(btn => {
			btn.addEventListener("click" , function() {
				if(!btn.classList.contains("active")){
					btns.forEach(btn => {
						btn.classList.remove("active", "active-style");
					})
					this.classList.add("active", "active-style");
				}
			});
		});

		// Проверить замену this на текущий елемент = true
}
export default accordion;