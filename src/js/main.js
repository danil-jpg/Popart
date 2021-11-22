import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
// import mask from "./modules/mask"
import showMoreStyles from "./modules/showMoreStyles"
import calculator from "./modules/calculator";
import photoFilter from "./modules/photoFilter"

window.addEventListener("DOMContentLoaded" , () =>{
    "use strict";
    sliders(".feedback-slider-item", "horizontal" , ".main-prev-btn" , ".main-next-btn", 4000);
    sliders(".main-slider-item", "vertical", "","",4000 );
    modals();
    forms();
    showMoreStyles(".button-styles" , "#styles .row");
    calculator("#size","#material" , "#options", ".promocode" , ".calc-price"," .calc_form");
    photoFilter(".lovers",".lovers");
    photoFilter(".chef",".chef");
    photoFilter(".girl", ".girl");
    photoFilter(".guy",".guy");
    photoFilter(".grandmother",".portfolio-no");
    photoFilter(".granddad" , ".portfolio-no ");
    photoFilter(".all" , ".all")
    // mask("[name = 'phone']");
})