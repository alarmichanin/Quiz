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
            num = getRandomIntInclusive(0, 256);
            
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

$.getScript("./countries.js", function(){
        for(let i = 0; i < 5; i++)
        {
            let temp = getRandomFlags();
            temp.forEach(function(elem)
            {
                console.log(array[elem]);
            });

        }
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

function getRandomIntInclusive(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// function getRandomFlag()
// {
//     let num;
//     do
//     {
//         if (arrUsed == null)
//             break;
//         else
//         {
//             foo:
//             {
//                 nam = getRandomIntInclusive(0, 256);
//                 for(let inElem of arrUsed)
//                 {
//                     if(inElem == num)
//                         continue foo;
//                 }
//                 arrUsed.push(num);
//                 break;
//             }
//         }
//     } while(true);
//     return num;
// }

// function getFlag()
// {
//     for(let i = 0; i < 4; i++)
//     {
//         let num = getRandomIntInclusive(0, 256);

//         if(arrUsed.indexOf(num)+1)
//         {
//             getFlag();
//         }
//         else
//             arrUsed[i] = num;

//     }
// }


