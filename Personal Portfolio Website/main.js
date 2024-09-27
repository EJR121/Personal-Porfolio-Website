// This is how a clock (counter to be specific) JUST WORKS!!!!!! :D!!

const time = {
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0
 };
// 
window.setInterval(function(){
    clock();
  }, 1000);

const clock = () => {

    // grabs the ids of the spans
    document.getElementById("dayTime").innerHTML= time.days;
    document.getElementById("hourTime").innerHTML= time.hours;
    document.getElementById("minuteTime").innerHTML= time.minutes;
    document.getElementById("secondTime").innerHTML= time.seconds;
    time.seconds+=1;
    // function
    if (time.seconds == 61) {//Clock in 60 seconds 
        time.seconds = 0;
        document.getElementById("secondTime").innerHTML= time.seconds;
        time.minutes+=1;
        document.getElementById("minuteTime").innerHTML= time.minutes;
    }

    if (time.minutes == 61) {//Clock in 60 minutes
        time.minutes = 0;
        document.getElementById("minuteTime").innerHTML= time.minutes;
        time.hours +=1;
        document.getElementById("hourTime").innerHTML= time.hours;
    }

    if (time.hours == 24) {//Clock in 24 hours
        time.hours = 0;
        document.getElementById("hourTime").innerHTML= time.hours;
        time.days +=1;
        document.getElementById("dayTime").innerHTML= time.days;
    };//
    }
