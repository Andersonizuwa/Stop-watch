const startbtn = document.getElementById("Play");
const resetbtn = document.getElementById("Reset");


let seconds = 0;
let minutes = 0;
let hours = 0;

let LeadingSeconds = 0;
let LeadingMinutes = 0;
let LeadingHours = 0;

let time = null;
let timestatus = "stopped";

// Here's The Stopwatch Function

function stopwatch(){
    seconds++;
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10){
        LeadingSeconds = "0" + seconds.toString();
    }else{
        LeadingSeconds = seconds;
    }

    if(minutes < 10){
        LeadingMinutes = "0" + minutes.toString();
    }else{
        LeadingMinutes = minutes;
    }

    if(hours < 10){
        LeadingHours = "0" + hours.toString();
    }else{
        LeadingHours = hours;
    }


    let displayTimer = document.getElementById("Timer").textContent = LeadingHours + ":" + LeadingMinutes + ":" + LeadingSeconds;
   
}
// 

startbtn.addEventListener("click", function(){
    if(timestatus === "stopped"){
        time = setInterval(stopwatch, 1000);
        document.getElementById("Play").innerHTML = `<i class="fa-solid fa-pause" id="pause"></i> `;
        timestatus = "started";  
    }else{
        window.clearInterval(time);
        document.getElementById("Play").innerHTML = `<i class="fa-solid fa-play" id="play"></i> `
        timestatus = "stopped";
    }
});

resetbtn.addEventListener("click", function(){
    window.clearInterval(time)
    seconds = 0;
    minutes = 0;
    hours = 0;

    let displayTimer = document.getElementById("Timer").innerHTML = "00:00:00";
})