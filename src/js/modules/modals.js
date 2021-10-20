
const modals = () =>{
    function bindModal(triggerSelector, modalSelector, closeSelector,closeClickOverlay = true){
        const trigger =document.querySelectorAll(triggerSelector),
                  modal = document.querySelector(modalSelector),
                  close= document.querySelector(closeSelector),
                  windows = document.querySelectorAll("[data-modal]"),
                  scroll = calcScroll();
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

        trigger.forEach((i)=>{
            i.addEventListener("click" , (e)=>{
                if(e.target){

                    e.preventDefault();
                }
    
                windows.forEach(item =>{
                    item.style.display = "none";
                });
    
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = `${scroll}px`
            })
    
        });
    
    
        close.addEventListener("click" , (e)=>{
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
            windows.forEach(item =>{
                item.style.display = "none";
            });
        })
    
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                });
                document.body.style.marginRight = `0px`;
                modal.style.display = "none";
                document.body.style.overflow = ""; 
            }
        });
    
        }

    bindModal(".button-design",".popup-design",".popup-design .popup-close",);            
    bindModal(".button-consultation",".popup-consultation",".popup-design .popup-close")
    

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
                }

               
            },time)
        }
        showModalByTime(".popup-consultation" , 3000)
}

export  default modals;
    