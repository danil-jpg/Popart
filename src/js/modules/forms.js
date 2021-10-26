// import checkNumInputs from "./checkNumInputs";

const forms = () =>{
        const form = document.querySelectorAll("form"),
                  inputs = document.querySelectorAll("input");

            // checkNumInputs("input[name='user_phone']");

        const message = {
            loading: "Загрузка",
            success: "Спасибо! Скоро мы с вами свяжемся!",
            fail: "Что-то пошло не так...",
            spinner : "assets/img/spinner.gif",
            ok : "assets/img/ok.png",
            failure : "assets/img/fail.png"
        };

        const path = {
            designer : "assets/server.php",
            question : "assets/question.php"
        }

        const postData = async (url , data ) =>{
            let res = await fetch(url , {
                method: "POST",
                body: data
            });

            return await res.text()
        }

        const clearInputs = ()=>{
            inputs.forEach(i =>{
                i.valuse = "";
            });
        }

        form.forEach(item =>{
            item.addEventListener("submit" , (e)=>{
                e.preventDefault();

                let formData = new FormData(item),
                     api;
                item.closest(".popup-design") ? api = path.designer :api = path.question;
                // если попар тру,мы присваеваем апи путь,если нет то questijon

                let statusMessage = document.createElement("div");
                statusMessage.classList.add("status");
                item.parentNode.appendChild(statusMessage);

                item.classList.add("animated" , "fadeOutUp");
                setTimeout(()=>{
                    item.style.display = "none";
                }, 400);

                let statusImg = document.createElement("img");
                statusImg.setAttribute("src", message.spinner);
                statusImg.classList.add("animated", "fadeInUp");
                statusMessage.appendChild(statusImg);

                let textMessage = document.createElement("div");
                textMessage.textContent = message.loading;

                statusMessage.appendChild(textMessage);

                postData(api, formData)
                .then(res =>{
                    console.log(res);
                    statusImg.setAttribute("src" , message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(()=>{
                    console.log(1)
                    textMessage.textContent = message.fail;
                    statusImg.setAttribute("src", message.fail);
                })
                .finally(()=>{
                    clearInputs();
                    setTimeout(()=>{
                        statusMessage.remove();
                    },3000)
                })
            })
        })
};

export default forms;