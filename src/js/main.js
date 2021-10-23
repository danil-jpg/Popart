import modals from "./modules/modals";
import sliders from "./modules/sliders"

window.addEventListener("DOMContentLoaded" , () =>{
    "use strict";
    sliders(".feedback-slider-item", "horizontal" , ".main-prev-btn" , ".main-next-btn", 4000);
    sliders(".main-slider-item", "vertical", "","",4000 );
    modals();
})