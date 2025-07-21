let stopwatch = document.querySelector("#stopwatch");
let startButton = document.querySelector("#b1");
let pauseButton = document.querySelector("#b2");
let resetButton = document.querySelector("#b3");
let lapButton = document.querySelector("#b4");
let lapList = document.querySelector("#lapList");

let msec = 0;
let sec = 0;
let min = 0;
let timerid = null;


startButton.addEventListener('click', function() {
    if (timerid !== null) {
        clearInterval(timerid);
    }
    timerid = setInterval(startTimer, 10);
});


pauseButton.addEventListener('click', function() {
    clearInterval(timerid);
});


resetButton.addEventListener('click', function() {
    clearInterval(timerid);
    stopwatch.innerHTML = `00:00:00`;
    msec = sec = min = 0;
    lapList.innerHTML = ""; // clear laps
});


lapButton.addEventListener('click', function() {
    let msecS = msec < 10 ? `0${msec}` : msec;
    let secS = sec < 10 ? `0${sec}` : sec;
    let minS = min < 10 ? `0${min}` : min;

    let lapTime = `${minS}:${secS}:${msecS}`;
    let li = document.createElement("li");
    li.textContent = `Lap: ${lapTime}`;
    lapList.appendChild(li);
});


function startTimer() {
    msec++;
    if (msec === 100) {
        msec = 0;
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
    }

    let msecS = msec < 10 ? `0${msec}` : msec;
    let secS = sec < 10 ? `0${sec}` : sec;
    let minS = min < 10 ? `0${min}` : min;

    stopwatch.innerHTML = `${minS}:${secS}:${msecS}`;
}
