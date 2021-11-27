const changeImg = (imgSelector) => {
    const blocks = document.querySelectorAll(imgSelector);

    blocks.forEach((item)=>{

        item.addEventListener("mouseover" , ()=> {
            const img = item.querySelector("img");
            // assets/img/sizes-3.png
            img.src = img.src.slice( 0 , -4) + "-1.png"
            item.querySelectorAll("p:not(.sizes-hit)").forEach((i)=>{
                i.style.display = "none"
            })
        })

        item.addEventListener("mouseout" , ()=> {
            const img = item.querySelector("img");
            // assets/img/sizes-3-1.png
            img.src = img.src.slice( 0 , -6) + ".png"
            item.querySelectorAll("p:not(.sizes-hit)").forEach((i)=>{
                i.style.display = "block"
            })
        })
    })
}

export default changeImg;