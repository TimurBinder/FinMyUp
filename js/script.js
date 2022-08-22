
const circles = document.querySelectorAll(".circle");
const slider = document.querySelector("#slider");
const person = document.getElementsByClassName("review-person");
const sliderBlock = document.querySelector(".review-slider");
const sliderImg = document.getElementsByClassName("slider-img"); //Фотография
const sliderTitle = document.querySelectorAll(".review-person__offer__name"); //Имя
const sliderOld = document.querySelectorAll(".old"); //Возраст
const sliderProfession = document.querySelectorAll(".profession"); //Род деятельности
const sliderIntro = document.querySelectorAll(".review-person__offer__intro"); //Отзыв
const reviewImgArr = ["./img/review.png", "", "./img/review.png", "", ""]; //Список фотографий
const reviewImgArrOp = ["./img/reviewOp.png", "", "./img/reviewOp.png", "", ""];

let circleIndex = 0;
let circleIndexPast = circleIndex;

const firstScreenImg = document.getElementById("first-screen-img");

const speakerImg = document.getElementById("speaker-img");

const binanceImg = document.getElementById("binance");
const huobiImg = document.getElementById("huobi");
const krakenImg = document.getElementById("kraken");
const coinbaseImg = document.getElementById("coinbase");


// Смена прозрачности
const rbkImg = document.getElementById("rbk");
const tchImg = document.getElementById("tch");
const moneyImg = document.getElementById("money");
const unewsImg = document.getElementById("unews")

function firstScreenOpOff() {
    firstScreenImg.src = "img/firstScreenOp.png";

}

function firstScreenOpOn() {
    firstScreenImg.src = "img/firstScreen.png";
}

function speakerOpOff() {
    speakerImg.src = "img/speakerOp.png";

}

function speakerOpOn() {
    speakerImg.src = "img/speaker.png";
}

function binanceOpOff() {
    binanceImg.src = "img/Partners/binanceOp.png";

}

function binanceOpOn() {
    binanceImg.src = "img/Partners/binance.png";
}

function huobiOpOff() {
    huobiImg.src = "img/Partners/huobiOp.png";

}

function huobiOpOn() {
    huobiImg.src = "img/Partners/huobi.png";
}

function krakenOpOff() {
    krakenImg.src = "img/Partners/krakenOp.png";

}

function krakenOpOn() {
    krakenImg.src = "img/Partners/kraken.png";
}

function coinbaseOpOff() {
    coinbaseImg.src = "img/Partners/coinbaseOp.png";
}

function coinbaseOpOn() {
    coinbaseImg.src = "img/Partners/coinbase.png";
}

function rbkOpOff() {
    rbkImg.src = "img/Partners/rbkOp.png";
}

function rbkOpOn() {
    rbkImg.src = "img/Partners/rbk.png";
}

function tchOpOff() {
    tchImg.src = "img/Partners/tchOp.png";
}

function tchOpOn() {
    tchImg.src = "img/Partners/tch.png";
}

function moneyOpOff() {
    moneyImg.src = "img/Partners/moneyOp.png";
}

function moneyOpOn() {
    moneyImg.src = "img/Partners/money.png";
}

function unewsOpOff() {
    unewsImg.src = "img/Partners/unewsOp.png";
}

function unewsOpOn() {
    unewsImg.src = "img/Partners/unews.png";
}

function reviewOpOff() {
    sliderImg.src = reviewImgArrOp[circleIndex];
}

function reviewOpOn() {
    sliderImg.src = reviewImgArr[circleIndex];
}
// ------------------------------------------------------------

sliderBlock.addEventListener("touchstart", touchSlide);
sliderBlock.addEventListener("touchmove", moveSlide);
sliderBlock.addEventListener("touchend", endSlide);
sliderBlock.addEventListener("touchcancel", cancelSlide);
let touchLine = null;
let touchLineCheck = 0;
let touchLinePast = 0;

function touchSlide(event) {
    touchLine = event;
}

function moveSlide(event) {
    event.preventDefault();
        for (let i = 0; i < person.length; i++) {
            let eventZero = event;
            let touchLineZero = touchLine;
            let touchLinePastZero = touchLinePast;
            for (let j = 0; j < event.changedTouches.length; j++) {
                touchSum = event.changedTouches[j].clientX - touchLine.changedTouches[0].clientX + touchLinePast;
                if (touchSum <= 0 && touchSum >= -(window.innerWidth * 4)) {
                person[i].style.transform = "translate(" + ( touchSum) + "px)";
                } else if (touchSum > 0 || touchSum < -(window.innerWidth * 4)) {
                    cancelSlide(event);
                }

            touchLineCheck = event.changedTouches[j].screenX;
            }
        } 
    console.log(touchLineCheck - touchLine.changedTouches[0].screenX)
    if (touchSum <= 0 && touchSum >= -(window.innerWidth - (window.innerWidth / 4))) {
        circleColor(0);
    } else if (touchSum <= -(window.innerWidth - (window.innerWidth / 5)) && touchSum >= -(window.innerWidth * 2 - (window.innerWidth / 4))) {
        circleColor(1);
    } else if (touchSum <= -(window.innerWidth - (window.innerWidth / 5)) * 2 && touchSum >= -(window.innerWidth * 3 - (window.innerWidth / 4))) {
        circleColor(2);
    } else if (touchSum <= -(window.innerWidth - (window.innerWidth / 5)) * 3 && touchSum >= -(window.innerWidth * 4 - (window.innerWidth / 4))) {
        circleColor(3);
    } else if (touchSum <= -(window.innerWidth - (window.innerWidth / 5)) * 4 && touchSum >= -(window.innerWidth * 5 - (window.innerWidth / 4))) {
        circleColor(4);
    }
    
}

function endSlide(event) {
    touchLinePast += touchLineCheck - touchLine.changedTouches[0].screenX;
    touchLine = event;
    
}

function cancelSlide(event) {
    event.preventDefault();
  console.log("touchcancel.");
  var touches = event.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
  }
}

function changeIndCircle(ind) {
    if (window.innerWidth > 1200) {
        circleIndex = ind;
        console.log(ind);
        slide(circleIndex);
        circleColor(circleIndex);
    }
}

function circleColor(ind) {
    for(let circle of circles) {
        circle.style.background = "#f0f0f0";
    }
    circles[ind].style.background = "#bebebe";
}

function slideInd(ind) { 
    circleIndex += ind;
    if (circleIndex < 0) {
        circleIndex = 4;
    } else if (circleIndex > 4) { // Количество отзывов. Если будет больше, то нужно заменить
        circleIndex = 0;
    }
    slide(circleIndex);
    circleColor(circleIndex);
}



function slide(ind) {
    for (let i = 0; i < person.length; i++) {
        person[i].classList.add("review-person__option");
    }
    if (ind == 0) {
        person[0].classList.remove("review-person__option");
    } else if (ind == 1) {
        person[1].classList.remove("review-person__option");
        
    } else if (ind == 2) {
        person[2].classList.remove("review-person__option");
        
    } else if (ind == 3) {
        person[3].classList.remove("review-person__option");
        
    } else if (ind == 4) {
        person[4].classList.remove("review-person__option");
        
    }
    circleIndexPast = ind;
}



// Таймер
const daysTime = document.getElementsByClassName("days");
const hoursTime = document.getElementsByClassName("hours");
const minutsTime = document.getElementsByClassName("minuts");
const secondsTime = document.getElementsByClassName("seconds");

var endDate = new Date("Jul 28, 2022 12:00:00").getTime(); //Конечная дата для таймера

var timer = setInterval(function() {
    let now = new Date().getTime(); 
    let t = endDate - now;

    if (t >= 0) {
        let days = Math.floor(t / (1000 * 60 * 60 * 24));
        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((t % (1000 * 60)) / 1000);

        for (let i = 0; i < daysTime.length; i++) {
            daysTime[i].innerHTML = days;
            hoursTime[i].innerHTML = ("0" + hours).slice(-2);
            minutsTime[i].innerHTML = ("0" + mins).slice(-2);
            secondsTime[i].innerHTML = ("0" + secs).slice(-2);
        }
    }


}, 1000);

// Анимация третьего блока
const statLine = document.querySelector('#stat-line-id');
const stat1 = document.getElementById('stat1');
const stat2 = document.getElementById("stat2");
const stat3 = document.getElementById("stat3");
const stat4 = document.getElementById("stat4");
let statCount1 = 0;
let statCount2 = 0;
let statCount3 = 0;
let statCount4 = 0;

let statInterval1 = setInterval(function() {
    let windowDownPosition = window.innerHeight + window.scrollY;
    if(statLine.offsetTop < windowDownPosition && statLine.offsetTop > window.scrollY) {
            if (statCount1 < 112) {
                statCount1++;
                stat4.innerHTML = statCount1 + "%";
                if (statCount1 <= 49) {
                    stat2.innerHTML = statCount1;
                    if (statCount1 <= 15) {
                        stat3.innerHTML = statCount1;
                    }
                }
            }
        
    } else {
        statCount1 = 0;
    }  
}, 30) //Скорость роста цифр в третьем блоке

let statInterval2 = setInterval(function() {
    let windowDownPosition = window.innerHeight + window.scrollY;
    if(statLine.offsetTop < windowDownPosition && statLine.offsetTop > window.scrollY) {
        if (statCount2 < 1349) {
            statCount2 += 1;
            stat1.innerHTML = statCount2;
        } 
    } else {
        statCount2 = 0;
        
    }
}, 1) //Скорость роста цифр в третьем блоке


window.onscroll = function() {
    statInterval1();
    statInterval2();
    console.log(statInterval1);
};


const trafficDefinition = document.querySelectorAll(".traffic__table__definition");
const trafficValue = document.getElementsByClassName("traffic__table__value");
const newbieHead = document.getElementsByClassName("newbie-head");
const investorHead = document.getElementsByClassName("investor-head");
const traderHead = document.getElementsByClassName("trader-head");
const newbie = document.getElementsByClassName("newbie");
const investor = document.getElementsByClassName("investor");
const trader = document.getElementsByClassName("trader");

let trafficValueInd = 3;
for (let i = 1; i < trafficDefinition.length - 1; i++) {
    for (let j = 0; j < 3; j++) {
        let newHeight = trafficDefinition[i].getBoundingClientRect().height;
        trafficValue[trafficValueInd].style.height = newHeight + "px";
        trafficValueInd++;
        console.log("2");
    }
}

let newWidth = newbieHead[0].getBoundingClientRect().width;

for (let i = 1; i < newbie.length; i++) {
    let thisWidth = newbie[i].getBoundingClientRect().width;
    console.log("start " + i + " === " + newbie[i].innerHTML + "    " + newbie[newbie.length - 2] + " " + newbie[newbie.length - 2].getBoundingClientRect().width + " " + "newWidth = " + newWidth + " " + "thisWidth = " + thisWidth + " sum = " + ((newWidth - thisWidth) / 2));
    newbie[i].style.paddingLeft = ((newWidth - thisWidth) / 2) + "px";
    newbie[i].style.paddingRight = ((newWidth - thisWidth) / 2) + "px";
    console.log("end === " + i + " === " + newbie[i].innerHTML + "    " + newbie[newbie.length - 2] + " " + newbie[newbie.length - 2].getBoundingClientRect().width + " " + "newWidth = " + newWidth + " " + "thisWidth = " + thisWidth + " sum = " + ((newWidth - thisWidth) / 2));
}


for (let i = 1; i < investor.length; i++) {
    let newWidth = investorHead[0].getBoundingClientRect().width;
    let thisWidth = investor[i].getBoundingClientRect().width;
    investor[i].style.paddingLeft = ((newWidth - thisWidth) / 2) + "px";
    investor[i].style.paddingRight = ((newWidth - thisWidth) / 2) + "px";
    console.log(investor[i].getBoundingClientRect().width + " " + investorHead[0].getBoundingClientRect().width);

}


for (let i = 1; i < trader.length; i++) {
    let newWidth = traderHead[0].getBoundingClientRect().width;
    let thisWidth = trader[i].getBoundingClientRect().width;
    trader[i].style.paddingLeft = ((newWidth - thisWidth) / 2) + "px";
    trader[i].style.paddingRight = ((newWidth - thisWidth) / 2) + "px";
    console.log(trader[i].getBoundingClientRect().width + " " + thisWidth);
}

var detect = navigator.userAgent.toLowerCase();
if((detect.indexOf('safari')) != -1) 
{
document.write('<link href="style/safari.css" rel="stylesheet" type="text/css" />');
}