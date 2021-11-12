import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
// import mask from "./modules/mask"
import showMoreStyles from "./modules/showMoreStyles"

window.addEventListener("DOMContentLoaded" , () =>{
    "use strict";
    sliders(".feedback-slider-item", "horizontal" , ".main-prev-btn" , ".main-next-btn", 4000);
    sliders(".main-slider-item", "vertical", "","",4000 );
    modals();
    forms();
    showMoreStyles(".button-styles" , "#styles .row")
    // mask("[name = 'phone']");
})