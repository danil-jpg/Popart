const photoFilter =(trigger ,selector, allPhotoes = ".portfolio-block")=>{

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

export default photoFilter;