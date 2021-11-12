import {getResource} from "../modules/services/requests";

// const moreBlocks = () => {
// 	const btn = document.querySelector(".button-styles"),
// 			styleBlock = document.querySelectorAll(".styles-2"),
// 			styles =document.querySelectorAll(".styles-block");

// 			btn.addEventListener("click" , () => {
// 				btn.style.display = "none";

// 				styleBlock.forEach(item => {
// 					item.classList.remove("hidden-lg", "hidden-md" ,"hidden-sm" ,"hidden-xs");
// 				})

// 				styles.forEach(item => {
// 					item.style.display = "inline-block";
// 				});

// 			})
// }

// export default moreBlocks; - мой вариант реализации


const showMoreStyles = (trigger , wrapper) => {
	const	btn = document.querySelector(trigger);

			// cards.forEach(card => {
			// 	card.classList.add("animated" , "fadeInUp");
			// });

			// btn.addEventListener("click" , () => {
			// 	cards.forEach(card => {
			// 		card.classList.remove("hidden-lg", "hidden-md" ,"hidden-sm" ,"hidden-xs");
			// 		card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1");
			// 	});

			// 	btn.style.display = "none";
			// })

			btn.addEventListener("click" , function() {
				getResource("assets/db.json")
				// скомпилиный скрипт заходит в папку и берет датабес
				.then(res => createCards(res.styles))
				.catch(eror => console.log(eror));

				this.remove();
				// res это результат преведущей операции
			});


			function createCards(response){
				response.forEach(function({src , title , link}){
					let card = document.createElement("div");

					card.classList.add("col-sm-3", "col-sm-offset-0", "col-xs-10", "col-xs-offset-1","animated" , "fadeInUp");

					card.innerHTML = `
					<div class='styles-block'>
						<img src=${src} alt="style">
						<h4>${title}</h4>
						<a href="${link}">Подробнее</a>
					</div>
					`;

					document.querySelector(wrapper).appendChild(card);
				})
			}
};

export default showMoreStyles;