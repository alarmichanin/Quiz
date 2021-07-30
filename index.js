let main = document.querySelector("#main")
let flags = document.querySelectorAll("#flag")
let countryName = document.querySelector("#country")
let lose = document.querySelector("#lose")
let win = document.querySelector("#win")
let start = document.querySelector("#start")
let rules = document.querySelector("#rules")
let startBtn = document.querySelector("#startBtn")
let startBtn1 = document.querySelector("#startBtn1")
let rulesBtn = document.querySelector("#rulesBtn")
let clockStop = 0
let globalClockStop = 0
let score = 0

const startTime = 10
/*
Массив делаем длинной в 20 , потому что каждых 5 ходов флаги , которые были , точно не повторяются 
getRandomFlags() - делает массив из 4 случайных цифр так, что б они не повторились и потом это всё дело запушиваеться в 2 массива 
(тот, который на 4 и тот, который очередь)
*/
let arrUsed = [];
arrUsed.length = 20;
function getRandomFlags() {
    let mass = [];
    for (let i = 0; i < 4; i++) {
        let num;

        do {
            num = getRandomIntInclusive(0, 255);

            if (arrUsed == null) {
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
 FullName - записано имя переменной , которая выбрана пользователем (но лучше прямо сверять с классом блока)
 fullName - записано имя переменной, которая выбрана рандомом
 */
let fullName = ''
let FullName = ''
let scoreHtml = ''
let clockFunc

function startQuiz() {
    /*
вытягиваем с помощью JQuery файл с записаными странами (сокращение + полное название)
*/

    $.getScript("./countries.js", function () {
        let temp = getRandomFlags();
        let elementQuiz = getRandomIntInclusive(0, 3);
        scoreHtml = document.querySelector("#score")
        fullName = array[temp[elementQuiz]][1]
        scoreHtml.innerHTML = `Your score: ${score}`
        countryName.innerHTML = fullName
        let timer = document.querySelector("#timer")
        timer.innerHTML = startTime
        clockFunc = clock(9)
        clockStop = clockFunc
        for (let i = 0; i < 4; i++) {
            let shortName = array[temp[i]][0]
            FullName = array[temp[i]][1]
            flags[i].className = FullName
            flags[i].style.backgroundImage = `url("./images/${shortName.toLowerCase()}.png")`
        }
    });

}
function changeStartOnMain() {
    main = document.querySelector("#main")
    start = document.querySelector("#start")
    let tmp = start.innerHTML
    let tmp2 = start.id
    start.innerHTML = main.innerHTML
    start.id = main.id
    main.innerHTML = tmp
    main.id = tmp2
    main = document.querySelector("#main")
    flags = document.querySelectorAll("#flag")
    countryName = document.querySelector("#country")
    startGlobal = globalClock(89)
    globalClockStop = startGlobal
    startQuiz()
    for (let i = 0; i < 4; i++) {
        flags[i].addEventListener('click', () => {
            if (flags[i].className === fullName) {
                startQuiz()
                score++
                scoreHtml.innerHTML = `Your score: ${score}`
                checker(score)
                clearInterval(clockFunc)
            }
            else {
                startQuiz()
                score--
                checker(score)
                scoreHtml.innerHTML = `Your score: ${score}`
                clearInterval(clockFunc)
            }
        })
    }
}

function changeStartOnRules() {
    rules = document.querySelector("#rules")
    start = document.querySelector("#start")
    let tmp = start.innerHTML
    let tmp2 = start.id;
    start.innerHTML = rules.innerHTML
    start.id = rules.id
    rules.innerHTML = tmp;
    rules.id = tmp2;
    /*
    Кнопка старта , которая появляется в правилах
    */
    startBtn1 = document.querySelector("#startBtn1")
    startBtn1.onclick = () => {
        rules = document.querySelector("#rules")
        main = document.querySelector("#main");
        let tmp = rules.innerHTML
        let tmp2 = rules.id;
        rules.innerHTML = main.innerHTML
        rules.id = main.id
        main.innerHTML = tmp;
        main.id = tmp2;
        startGlobal = globalClock(89)
        globalClockStop = startGlobal
        startQuiz()
        main = document.querySelector("#main");
        flags = document.querySelectorAll("#flag")
        countryName = document.querySelector("#country")
        for (let i = 0; i < 4; i++) {
            flags[i].addEventListener('click', () => {
                if (flags[i].className === fullName) {
                    startQuiz()
                    score++
                    checker(score)
                    scoreHtml.innerHTML = `Your score: ${score}`
                    clearInterval(clockFunc)
                }
                else {
                    startQuiz()
                    score--
                    checker(score)
                    scoreHtml.innerHTML = `Your score: ${score}`
                    clearInterval(clockFunc)
                }
            })
        }

    }
}
function checker(sc) {
    if (sc < -4) {
        console.log("You lose")
        clearInterval(clockStop)
        clearInterval(globalClockStop)
        main = document.querySelector("#main")
        lose = document.querySelector("#lose")
        let tmp = main.innerHTML
        let tmp2 = main.id;
        main.innerHTML = lose.innerHTML
        main.id = lose.id
        lose.innerHTML = tmp;
        lose.id = tmp2;


        lose = document.querySelector("#lose")
        let restartBtn = lose.querySelector("#restartBtn")
        restartBtn.onclick = () => {
            score = 0
            lose = document.querySelector("#lose")
            start = document.querySelector("#start")
            let tmp = lose.innerHTML
            let tmp2 = lose.id;
            lose.innerHTML = start.innerHTML
            lose.id = start.id
            start.innerHTML = tmp;
            start.id = tmp2;
        }

    } else if (sc > 1) {
        console.log("You win")
        clearInterval(clockStop)
        clearInterval(globalClockStop)
        main = document.querySelector("#main")
        win = document.querySelector("#win")
        let tmp = main.innerHTML
        let tmp2 = main.id;
        main.innerHTML = win.innerHTML
        main.id = win.id
        lose.innerHTML = tmp;
        lose.id = tmp2;


        win = document.querySelector("#win")
        let restartBtn = win.querySelector("#restartBtn")
        restartBtn.onclick = () => {
            score = 0
            lose = document.querySelector("#win")
            start = document.querySelector("#start")
            let tmp = win.innerHTML
            let tmp2 = win.id;
            win.innerHTML = start.innerHTML
            win.id = start.id
            start.innerHTML = tmp;
            start.id = tmp2;
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    checker()
}
)
/*
функция таймера на каждый ответ (не общий таймер)
*/
function clock(seconds) {
    let inter = setInterval(() => {
        main = document.querySelector("#main")
        let timer = main.querySelector("#timer")
        timer.innerHTML = seconds
        if (seconds !== 0)
            seconds--
        else {
            clearInterval(inter)
            clearInterval(globalClockStop)
            lose = document.querySelector("#lose")
            main = document.querySelector("#main");
            let tmp = lose.innerHTML
            let tmp2 = lose.id;
            lose.innerHTML = main.innerHTML
            lose.id = main.id
            main.innerHTML = tmp;
            main.id = tmp2;

            main = document.querySelector("#main");
            lose = document.querySelector("#lose")
            start = document.querySelector("#start")

            let restartBtn = lose.querySelector("#restartBtn")
            restartBtn.onclick = () => {
                score = 0
                lose = document.querySelector("#lose")
                start = document.querySelector("#start")
                let tmp = lose.innerHTML
                let tmp2 = lose.id;
                lose.innerHTML = start.innerHTML
                lose.id = start.id
                start.innerHTML = tmp;
                start.id = tmp2;
            }
        }
    }, 1000)
    return inter
}
/*
таймер общий для всей игры
*/
function globalClock(seconds) {
    let play = setInterval(() => {
        if (seconds !== 0) {
            let globalTime = document.querySelector("#globalTime")
            globalTime.innerHTML = seconds
            seconds--
        } else {
            clearInterval(play)
            clearInterval(clockStop)
            main = document.querySelector("#main")
            lose = document.querySelector("#lose")
            let tmp = main.innerHTML
            let tmp2 = main.id;
            main.innerHTML = lose.innerHTML
            main.id = lose.id
            lose.innerHTML = tmp;
            lose.id = tmp2;


            lose = document.querySelector("#lose")
            let restartBtn = lose.querySelector("#restartBtn")
            restartBtn.onclick = () => {
                score = 0
                lose = document.querySelector("#lose")
                start = document.querySelector("#start")
                let tmp = lose.innerHTML
                let tmp2 = lose.id;
                lose.innerHTML = start.innerHTML
                lose.id = start.id
                start.innerHTML = tmp;
                start.id = tmp2;
            }
        }

    }, 1000)
    return play
}
/*
функция выбора рандомного числа 
*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}