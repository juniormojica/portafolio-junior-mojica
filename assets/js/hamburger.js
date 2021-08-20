const cliker  = document.getElementById("touchButton");
const swipe = document.getElementById("swipeMenu")

   

  
console.log(swipe)
const toogle = ()=> { 
    if(swipe.className.includes("swipe-container")){
        swipe.classList.remove("swipe-container")
    }
    else { 
        swipe.classList.add("swipe-container")
    }
}


  
 


cliker.addEventListener("click",toogle)

