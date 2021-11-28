
const accordion = () => {
	const	trigger = document.querySelectorAll(".accordion-heading"),
				text = document.querySelectorAll(".accordion-block");

	text.forEach(i => {
		i.classList.add("noneDisplay");
	})

	trigger.forEach((item,index) =>{
		item.addEventListener("click" , ()=>{
			item.classList.toggle("colorR") ;
			text[index].classList.add("animated");
			text[index].classList.add("fadeIn");
			text[index].classList.toggle("display");
		})
	});

}
export default accordion;