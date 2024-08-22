let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function setTime(){
    let date = new Date();
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date. getSeconds();

    // To Positoned the hands according to time
    // hour's hand rotae at 30 deg after every hour
    // min and sec hands rotate at 6 deg after every min and sec
    let hourRotation = 30 * hours + minutes/2;
    let minutesRotation = 6 * minutes;
    let secondsRotation = 6 * seconds;


    // set hands positions on clock

    hr.style.transform = `rotate(${hourRotation}deg)`;
    min.style.transform = `rotate(${minutesRotation}deg)`;
    sec.style.transform = `rotate(${secondsRotation}deg)`;

}

setInterval(setTime,1000);