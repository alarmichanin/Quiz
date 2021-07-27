$.getScript("./countries.js", function(){
    console.log(array[0])
    });
document.addEventListener("DOMContentLoaded",()=>{
    function clock(seconds){
        let inter = setInterval(()=>{
            let main = document.querySelector("#main")
            let timer = main.querySelector("#timer")
            timer.innerHTML=seconds
            console.log(seconds)
            if(seconds!==0)
            seconds--
            else{
            alert("TIME IS UP")
            clearInterval(inter)
        }
        },1000)
    }
    clock(30) 
}
)