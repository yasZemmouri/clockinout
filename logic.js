"use strict";
//DOM???
const dateEl= document.getElementById('date');
const timeEl = document.getElementById('time');
const buttonEl = document.getElementsByTagName('button')[0];
const hoursEl = document.getElementById('hours');

//Functions Declaration

const getTodayMonthLetters = monthNumber =>{
    switch(monthNumber){
        case 0:
            return "Jen";
        case 1:
            return "Feb";
        case 2:
            return "Mar";
        case 3:
            return "Apr";
        case 4:
            return "May";
        case 5:
            return "Jun";
        case 6:
            return "Jul";
        case 7:
            return "Aug";
        case 8:
            return "Sep";
        case 9:
            return "Oct";
        case 10:
            return "Nov";
        case 11:
            return "Dec";
        default:
            return "Month";
        }
    }
const getTodayMonthNum = monthNumber =>{
        return monthNumber + 1;
    }
//if number has 1 digit add 0 to the left.
const twoDigits = number =>(number<10)?('0'+number):number;
let clock= new Date();

// console.log(clock);




// Function Declarations
function nowTime(){
    const clock= new Date();

    const dateElements=Date().split(' ')
    // console.log(dateElements);
    const todayDay = dateElements[0];
    //.getMonth() returns current Month of as a number (0-11) starting from Jenuary.
    const todayMonth = getTodayMonthNum(clock.getMonth())
    const todayDate = parseInt(dateElements[2]);
    const todayYear = parseInt(dateElements[3]);
    
    // console.log(`${todayDay} ${todayMonth}/${todayDate}/${todayYear}`);
    
    const hh = clock.getHours();
    const mm = clock.getMinutes();
    const ss = clock.getSeconds();
    return [todayDay, todayMonth,todayDate, todayYear, hh, mm, ss];
}

function displayTime(){
    dateEl.textContent = `${nowTime()[0]} ${nowTime()[1]<10 ? ("0"+nowTime()[1]) : nowTime()[1]}/${nowTime()[2]<10 ? ('0'+nowTime()[2]) : nowTime()[2]}/${nowTime()[3]}`;
    timeEl.textContent = `${twoDigits(nowTime()[4])}:${twoDigits(nowTime()[5])}:${twoDigits(nowTime()[6])}`
}

setInterval(displayTime, 1000);

function buttonChange(x){
    if(x.textContent==="Clock In") x.textContent="Clock Out";
    else x.textContent="Clock In";
}

// nowTime();
function clockInOut(){
    const x = this;
    const time = nowTime();
    buttonChange(x);
    const node = document.createElement('p');
    const textnode = document.createTextNode(`${time[0]} ${time[1]<10 ? ("0"+time[1]) : time[1]}/${time[2]<10 ? ('0'+time[2]) : time[2]}/${time[3]} ${twoDigits(time[4])}:${twoDigits(time[5])}:${twoDigits(time[6])}`);
    node.appendChild(textnode);
    hoursEl.appendChild(node);

}

buttonEl.addEventListener('click', clockInOut)



