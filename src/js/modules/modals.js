
const modals = () =>{
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector,destroy = false){
        const trigger =document.querySelectorAll(triggerSelector),
                  modal = document.querySelector(modalSelector),
                  close= document.querySelector(closeSelector),
                  windows = document.querySelectorAll("[data-modal]"),
                  scroll = calcScroll();

        trigger.forEach((i) => {
            i.addEventListener("click" , (e)=>{
                if(e.target){
                    e.preventDefault();
                }

                btnPressed = true;
                if(destroy == true){
                    i.style.display = "none";
                }else if(destroy == false){
                    let gift = document.querySelector(".fixed-gift"),
                        giftRight = +getComputedStyle(gift).right.replace(/px/ , "");
                        gift.style.right = (giftRight + scroll) + "px";
                }

                windows.forEach( item =>{
                    item.style.display = "none";
                    item.classList.add("animated" , "fadeIn");
                });

                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`

            })

        });

        close.addEventListener("click" , ()=>{
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            windows.forEach(item =>{
                item.style.display = "none";
            });
            let gift = document.querySelector(".fixed-gift");
            gift.style.right = "2rem"
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal ) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.marginRight = `0px`;
                modal.style.display = "none";
                document.body.style.overflow = "";
                let gift = document.querySelector(".fixed-gift");
                gift.style.right = "2rem";
            }
        });

        }

        function calcScroll(){
            let div = document.createElement("div");

            div.style.width = "50px";
            div.style.height = "50px";
            div.style.overflow = "scroll";
            div.style.visibility = "hidden";


            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }

        function showModalByTime(selector,time){
            setTimeout(()=>{
                let display;

                document.querySelectorAll("[data-modal]").forEach(item => {
                    if(getComputedStyle(item).display !== "none"){
                        display = "block"
                    }
                });

                if(!display){
                    document.querySelector(selector).style.display = "block";
                    let  scroll = calcScroll();
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scroll}px`;
                }
// ! возвращает тру для каждого фолс
            },time)
        }

        function openByScroll(selector){
            window.addEventListener("scroll" , () => {
                if(!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) ){
                    document.querySelector(selector).click();
                    // вот этот клик - это программное использование событие,то есть,если условие выполниться
                    // тогда,на этот селектор автоматически кликнут.
                }
            })
        }
// pageYOffset - возвращает значение уже прокрученного по вертикали.(изначально = 0)
// clientHeight - елемент на текущем экране.
// scrollHeight - все елементы на текущем экране + невидимые из-за прокрутки страницы элементы
// Ps. все эти свойства есть либо на documentElement ,либо на window.
        showModalByTime(".popup-consultation" , 60000);

        bindModal(".button-design",".popup-design",".popup-design .popup-close");
        bindModal(".button-consultation",".popup-consultation",".popup-design .popup-close");
        bindModal(".fixed-gift",".popup-gift",".popup-gift .popup-close",true);
        openByScroll(".fixed-gift");
}



export  default modals;
//* eslint-disable no-mixed-spaces-and-tabs */
// const mask = (selector) => {
// 	let setCursorPostion = (pos , elem) => {
// 		elem.focus();

// 		if(elem.setSelectionRange){
// 			elem.setSelectionRange(pos, pos);
// 		} else if(elem.createTextRange){
// 			let range = elem.createTextRange();
// 		// Это полифил для старых браузеров
// 			range.collapse(true);
// 			range.moveEnd("character" , pos);
// 			range.moveStart("character", pos);
// 			range.select();
// 		}

// 	};

// 	function createMask(event){
// 		let matrix = "+7 (___) ___ __ __",
// 			 i = 0,
// 			 def = matrix.replace(/\D/gi , ""),
// 			 val = this.value.replace(/\D/g , "");
// 			// val = document.querySelector(selector).valu.replace(...) - тоже самое.
// 		if(def.length >= val.length){
// 			val = def;
// 		}

// // This.value - то значение ,которое пользователь ввел прямо сейчас
// 		this.value = matrix.replace(/./g , function(a){
// 			// В этом случае переменная а - каждый перебераемый символ
// 			return /[_\d]/.test(a)  && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
// 			// в 18 стр ВЕСЬКЛАССЦИФР.ПРАВДА/ЛОЖЬ(КАЖДАЯСимвол)
// 			// И І Больше чем ,то что ввел пользователь
// 		});
// 		// console.log(this.value, this)
// 		if(event.type === "blur"){
// 			if(this.value.length == 2){
// 				// console.log(this.value)
// 				this.value = ""
// 			}
// 		}else{
// 			setCursorPostion(this.value.length, this)
// 			// console.log(this.value, this)
// 		}
//  	}

// 	 let inputs = document.querySelectorAll(selector);

// 	 inputs.forEach(input => {
// 		 input.addEventListener("input" , createMask);
// 		 input.addEventListener("blur" , createMask);
// 		 input.addEventListener("focus" , createMask);
// 	 })
// 	//  В общем,тут this будет инпут см 50ые строки .Почему так - не знаю,когда-нибудь разберусь,возможно,forEach создаёт свой контекст вызова и вместо
// 	// глобал будет Инпут
// }
// export default mask;