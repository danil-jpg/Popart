const photoFilter =()=>{
	const filter = (trigger ,selector, allPhotoes = ".portfolio-block") => {
		const	btn = document.querySelector(trigger),
		allPic = document.querySelectorAll(allPhotoes),
		photoSelector = document.querySelectorAll(selector),
		allTheButtons = document.querySelectorAll(".portfolio-menu > li");

		btn.addEventListener("click" , ()=>{

		allTheButtons.forEach(i => {
			i.classList.remove("active");
		})

		btn.classList.add("active");

		allPic.forEach(i => {
			i.style.display ="none";
			i.classList.add("animated");
			i.classList.add("fadeIn")
		})

		photoSelector.forEach(i => {
			i.style.display = "flex"

		})
		})
	}

	filter(".lovers",".lovers");
    filter(".chef",".chef");
	filter(".girl", ".girl");
    filter(".guy",".guy");
    filter(".grandmother",".portfolio-no");
    filter(".granddad" , ".portfolio-no ");
    filter(".all" , ".all");
}

export default photoFilter;