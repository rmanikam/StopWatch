var startTimerButton = document.getElementById("start");
var stopTimerButton = document.getElementById("stop");
var resetTimerButton = document.getElementById("reset");

// initialized the values of variables such as counter, hours, minutes, seconds to zero.
let counter = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;

//  initialized value of isSet to null

let isSet = null;
// initially value of hours and minutes is set to 00
document.getElementById("hours").innerHTML = "00";
document.getElementById("minutes").innerHTML = "00";

// added event listener to startTimerButton. On click of this button initialized isSet value to true
// and called setTime function. stop watch will start on click of startTimer button
startTimerButton.addEventListener("click", function () {
    isSet = true;
    setTime();
});
// added event listener to stopTimerButton. On click of this button initialized isSet value to false
// stop watch will stop on click of startTimer button
stopTimerButton.addEventListener("click", function () {
    isSet = false;
});

// added event listener to resetTimerButton. On click of this button initialized isSet value to false
// stop watch will reset on click of resetTimer button
resetTimerButton.addEventListener("click", function () {
    isSet = false;
    counter = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
});

// function setTime is called
function setTime() {
    // if isSet is true we do counter++
    if (isSet) {
        counter++;
        // if counter is equal to 100
        // then we increment value of seconds
        if (counter == 100) {
            seconds++;
            counter = 0;
        }
        // if seconds is equal to 60
        // then we increment value of minutes
        if (seconds == 60) {
            minutes++;
            seconds = 0;
        }
        // if minutes is equal to 60
        // then we increment value of hours
        if (minutes == 60) {
            hours++;
            minutes = 0;
            seconds = 0;
        }

        // created four variables hoursSet, minutesSet, timerSet, secondsSet and initialized them value 0
        let hoursSet = 0;
        let minutesSet = 0;
        let timerSet = 0;
        let secondsSet = 0;
        // if hours value is less than 10 then we set hoursSet value in string format to single digit
        if (hours < 10) {
            hoursSet = "0" + hours;
        }
        // if minutes value is less than 10 then we set minutesSet value in string format to single digit
        if (minutes < 10) {
            minutesSet = "0" + minutes;
        }
        // if hours value is more than 10 then also we initialize hoursSet variable with hours
        hoursSet = hours;
        // if minutes value is more than 10 then also we initialize minutesSet variable with minutes
        minutesSet = minutes;

        // set value of hours to given value of hoursSet
        document.getElementById("hours").innerHTML = hoursSet;
        // set value of minutes to given value of minutesSet
        document.getElementById("minutes").innerHTML = minutesSet;
        // call setTime function after every 10 seconds
        setInterval(setTime, 10);
    }
}
