var secHand = document.querySelector('.second-hand');
var minHand = document.querySelector('.min-hand');
var hourHand = document.querySelector('.hour-hand');



function setDate(){
    
    var now = new Date();
    
    var sec = now.getSeconds();
    var secDegrees = (90+360*sec/60);
  
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    console.log(secDegrees);

    var min = now.getMinutes();
    var minDegrees = (90+360*min/60);
  
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    var hour = now.getHours();
    if (hour>12){hour-=12;}
    var hourDegrees = (90+360*hour/12);
   
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);