/*
Массив делаем длинной в 20 , потому что каждых 5 ходов флаги , которые были , точно не повторяются 
getRandomFlags() - делает массив из 4 случайных цифр так, что б они не повторились и потом это всё дело запушиваеться в 2 массива 
(тот, который на 4 и тот, который очередь)
*/
let arrUsed = [];
arrUsed.length = 20;
function getRandomFlags()
{
    let mass = [];
    for(let i = 0; i < 4; i++)
    {
        let num;

        do 
        {
            num = getRandomIntInclusive(0, 255);
            
            if(arrUsed == null)
            {
                arrUsed.unshift(num);
                mass.unshift(num);
                break;
            }

        } while (arrUsed.indexOf(num) != -1);
        arrUsed.unshift(num);
        mass.unshift(num);
    }
    arrUsed.length = 20;

    return mass;
}

/*
Начало игры , функция , в которой описана логика игры 
*/
let flags=document.querySelectorAll("#flag")
let countryName=document.querySelector("#country")
let score=0
/*
 FullName - записано имя переменной , которая выбрана пользователем
 fullName - записано имя переменной, которая выбрана рандомом
 */
let fullName=''
let FullName=''
let scoreHtml=''
let clockFunc
function startQuiz(){
    /*
вытягиваем с помощью JQuery файл с записаными странами (сокращение + полное название)
*/
$.getScript("./countries.js", function(){
 let temp = getRandomFlags();
 let elementQuiz = getRandomIntInclusive(0,3);
 scoreHtml = document.querySelector("#score")
 fullName=array[temp[elementQuiz]][1]
 scoreHtml.innerHTML=score
 countryName.innerHTML=fullName
 clockFunc = clock(29) 
 for(let i=0;i<4;i++)
 {
     let shortName=array[temp[i]][0]
    FullName =array[temp[i]][1]
     flags[i].className=FullName
     flags[i].style.backgroundImage =`url("./images/${shortName.toLowerCase()}.png")`
 }
});

}

document.addEventListener("DOMContentLoaded",()=>{
    for(let i=0;i<4;i++){
    flags[i].addEventListener('click',()=>{
        if(flags[i].className===fullName){
            console.log(flags[i].className)
            console.log(fullName)
        startQuiz()
        score++
        scoreHtml.innerHTML=score
        clearInterval(clockFunc)
       }
        else{
            console.log(FullName)
            console.log(fullName)
           startQuiz()
       score--
       scoreHtml.innerHTML=score
       clearInterval(clockFunc)
       }
    })
}
    startQuiz()
}
)


/*
функция таймера
*/ 
function clock(seconds){
    let inter = setInterval(()=>{
        let main = document.querySelector("#main")
        let timer = main.querySelector("#timer")
        timer.innerHTML=seconds
        if(seconds!==0)
        seconds--
        else{
        alert("TIME IS UP")
        clearInterval(inter)
    }
    },1000)
    return inter
}

/*
функция выбора рандомного числа 
*/ 
function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}