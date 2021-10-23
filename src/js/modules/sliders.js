"use strict";
const sliders = (slides , dir , prev, next ,time) => {
// по аргументам,слайды(все) ,направление анимаций, преведущий и следующий (кнопка),время автопрокрутки

    let slideIndex = 1,
         paused = false;

    const   items = document.querySelectorAll(slides);

    function showSlides(n){
        if(n > items.length){
            slideIndex = 1;
        }
        if(n < 1){
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        })

        items[slideIndex - 1].style.display = "block";
        // slideIndex начинаеться с 1,но слайды идут с 0 ,следовательно 0 слайд = 1

    }

    showSlides(slideIndex);

    function changeSlides(n) {
        showSlides(slideIndex = n + slideIndex)
    }

    try {
        const   prevBtn = document.querySelector(prev),
                    nextBtn = document.querySelector(next);
        prevBtn.addEventListener("click" , () => {
            changeSlides(-1);
            items[slideIndex - 1].classList.remove("slideInRight");
            items[slideIndex - 1].classList.add("slideInLeft");
            console.log(slideIndex);
        });

       nextBtn.addEventListener("click" , () => {
            changeSlides(1);
            items[slideIndex - 1].classList.remove("slideInLeft");
            items[slideIndex - 1].classList.add("slideInRight");

            console.log(slideIndex);
        });
    } catch(e){
        console.log("52")
    }
    function activateAnimation(){
        if(dir === "vertical"){
            paused = setInterval(function(){
                changeSlides(1);
                items[slideIndex -1].classList.add("slideInDown");
            }, time);
        }else{
            paused = setInterval(function(){
                changeSlides(1);
                items[slideIndex - 1].classList.remove("slideInRight");
                items[slideIndex - 1].classList.add("slideInLeft");
            }, time);
        }
    }

    activateAnimation();

    items[0].parentNode.addEventListener("mouseenter", () => {
        clearInterval(paused);
    });

    items[0].parentNode.addEventListener("mouseleave", () => {
        activateAnimation();
    })

// Если вкратце,то при наведении курсора на весь слайдер он останавливается,
// если курсор уводиться,то запускаеться функция activateAnimation и все запускаеться вновь

};

export default sliders;