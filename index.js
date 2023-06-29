var hourspan=document.getElementById('hour');
var minutespan= document.getElementById('minute');
var secondsspan=document.getElementById('seconds');
var AMorPMspan=document.getElementById('AMorPM');

function changeTime(){
    var date=new Date();
    console.log(date);
    let hour=date.getHours()
    let minute=date.getMinutes()
    let seconds=date.getSeconds()
    hourspan.textContent=hour
    minutespan.textContent=minute
    secondsspan.textContent=seconds
    if( hour<12){
        AMorPM="AM"
    }
    else{
        AMorPM='PM'
    }
    AMorPMspan.textContent=AMorPM
}
setInterval(changeTime,1)