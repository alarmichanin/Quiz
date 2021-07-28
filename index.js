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
            num = getRandomIntInclusive(0, 252);
            
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

let flags=document.querySelectorAll("#flag")
console.log(flag)
/*background-image: url("./images/ab.png");*/
document.addEventListener("DOMContentLoaded",()=>{
    $.getScript("./countries.js", function(){
            let temp = getRandomFlags();
            console.log(temp)
            
            for(let i=0;i<4;i++)
            {
                console.log(`url("./images/${array[temp[i]][0]}.png")`)
                /*
                array[temp[i]]
                 */
                let name=array[temp[i]][0]
                console.log(name+"!@!!!")
                flags[i].style.backgroundImage =`url("./images/${name.toLowerCase()}.png")`
            }
            temp.forEach(function(elem)
            {
                console.log(array[elem]);
            });
    });

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


