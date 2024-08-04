// Dynamic Hexa color code like #344343

// Generate Random color code 

function generateColor(){
    let hex = "0123456789ABCDEF";
    let color  = "#";
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let intervalId = null;
const StartChangingColor = ()=>{
    if(!intervalId){

        intervalId = setInterval(()=>document.body.style.backgroundColor = generateColor(),100)
    }
}

const StopChangingColor = ()=>{
    if(intervalId){
        clearInterval(intervalId)
        intervalId = null;
    }
}
let Start  = document.getElementById("Start").addEventListener("click",StartChangingColor)

let Stop  = document.getElementById("Stop").addEventListener("click",StopChangingColor)

