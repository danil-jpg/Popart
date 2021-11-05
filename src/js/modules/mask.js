/* eslint-disable no-mixed-spaces-and-tabs */
const mask = (selector) => {
	let setCursorPostion = (pos , elem) => {
		elem.focus();

		if(elem.setSelectionRange){
			elem.setSelectionRange(pos, pos);
		} else if(elem.createTextRange){
			let range = elem.createTextRange();
		// Это полифил для старых браузеров
			range.collapse(true);
			range.moveEnd("character" , pos);
			range.moveStart("character", pos);
			range.select();
		}

	};

	function createMask(event){
		let matrix = "+7 (___) ___ __ __",
			 i = 0,
			 def = matrix.replace(/\D/gi , ""),
			 val = this.value.replace(/\D/g , "");
			// val = document.querySelector(selector).valu.replace(...) - тоже самое.
			console.log(def)
		if(def.length >= val.length){
			val = def;
		}
// This.value - то значение ,которое пользователь ввел прямо сейчас
		this.value = matrix.replace(/./g , function(a){
			// В этом случае переменная а - каждый перебераемый символ в матрице
			if(/[_\d]/.test(a)  && i < val.length){
				// сдесь все цифры и нижнее подчёркивание
				return val.charAt(i++)
			}else if(i >= val.length){
				return ""
			}else{
				return a
			}
			// return /[_\d]/.test(a)  && i < val.length ? val.charAt(i++) : i >= val.length ?  "" : a;
		});
		// console.log(this.value, this)
		if(event.type === "blur"){
			if(this.value.length == 2){
				// console.log(this.value)
				this.value = ""
			}
		}else{
			setCursorPostion(this.value.length, this)
			// console.log(this.value, this)
		}
 	}

	 let inputs = document.querySelectorAll(selector);

	 inputs.forEach(input => {
		 input.addEventListener("input" , createMask);
		 input.addEventListener("blur" , createMask);
		 input.addEventListener("focus" , createMask);
	 })
	//  В общем,тут this будет инпут см 50ые строки .Почему так - не знаю,когда-нибудь разберусь,возможно,forEach создаёт свой контекст вызова и вместо
	// глобал будет Инпут
}


export default mask;

// В общем в маске слишком много непоняток,оставил до лучших времён