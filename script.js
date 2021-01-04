function timing()
{
    var today = new Date();
    var sec = today.getSeconds();
    var secDegree = (sec/60)*360 -90;
    var secHand = document.getElementById("sec");
    secHand.style.transform = `rotate(${secDegree}deg)`;

    var min = today.getMinutes();
    var minDegree = (min/60)*360 + (sec/60)*6 -90;
        var minHand = document.getElementById("min");
    minHand.style.transform = `rotate(${minDegree}deg)`;

    var hr = today.getHours();
    var hourDegree = (hr%12)*30 + (min/60)*0.5 + (sec/60)*(1/120) -90;
        var hrHand = document.getElementById("hour");
    hrHand.style.transform = `rotate(${hourDegree}deg)`;

}
setInterval(timing,1000);
window.addEventListener("load",()=>{
    const audio = document.querySelector("audio");
    if(audio)
    {
        audio.play();
        audio.loop = true;
    }
})