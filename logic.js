"use strict";
//DOM???
const dateEl= document.getElementById('date');
const timeEl = document.getElementById('time');
//Functions Declaration
const getTodayDay = dayNumber =>{
    switch(dayNumber){
        case 0:
            return "Sun";
        case 1:
            return "Mon";
        case 2:
            return "Tue";
        case 3:
            return "Wed";
        case 4:
            return "Thu";
        case 5:
            return "Fri";
        case 6:
            return "Sat";
        default:
            return "Day";
        }
    }
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
console.log(clock);

//.getDay() returns current day of the week as a number (0-6) starting from Sunday.
const todayDay = getTodayDay(clock.getDay());
//.getMonth() returns current Month of as a number (0-11) starting from Jenuary.
const todayMonth = getTodayMonthNum(clock.getMonth())
const todayDate = clock.getDate();
const todayYear = clock.getFullYear();
const nowHours = clock.getHours();
const nowMinutes = clock.getMinutes();
const nowSeconds = clock.getSeconds();

console.log(`${todayDay} ${todayMonth}/${todayDate}/${todayYear}`);
dateEl.textContent = `${todayDay} ${todayMonth<10 ? ("0"+todayMonth) : todayMonth}/${todayDate<10 ? ('0'+todayDate) : todayDate}/${todayYear}`;
console.log(`${nowHours}:${nowMinutes}`);
timeEl.textContent = `${twoDigits(nowHours)}:${twoDigits(nowMinutes)}:${twoDigits(nowSeconds)}`

