const burger =(burgerSelector , burgerSelectorList)=> {
	const	trigger = document.querySelector(burgerSelector),
				burgerItems = document.querySelector(burgerSelectorList),
				screenWidth =document.documentElement.scrollWidth;


	trigger.addEventListener("click" , ()=> {
		console.log(screenWidth)
		if(screenWidth > 992){
			burgerItems.classList.toggle("display");
		}
	})
}

export default burger;