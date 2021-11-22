import {postData} from "../modules/services/requests";

const calculator = (size , material , options ,promocode,result,form) => {
	const sizeBlock = document.querySelector(size),
			materialBlock = document.querySelector(material),
			optionsBlock = document.querySelector(options),
			promocodeBlock = document.querySelector(promocode),
			resultBlock = document.querySelector(result),
			formBlock = document.querySelector(form);

	let formData = new FormData(formBlock);

	let sum = 0,
			per =0;

	const calcFunction = () => {
		sum = Math.round(((+sizeBlock.value + +optionsBlock.value)*materialBlock.value) - per);

		if(sizeBlock.value == "" ||materialBlock.value == ""){
			resultBlock.textContent = "Выберите первые два поля"
		}else if(promocodeBlock.value === "IWANTPOPART"){
			resultBlock.textContent =Math.round(sum * 0.7);
		}else{
			resultBlock.textContent = sum;
		}
		postData("../../assets/server.php",formData).then((res)=> console.log(res));
	};

	sizeBlock.addEventListener("change", calcFunction);
	materialBlock.addEventListener("change", calcFunction);
	optionsBlock.addEventListener("change", calcFunction);
	promocodeBlock.addEventListener("input", calcFunction);



	
}
export default calculator