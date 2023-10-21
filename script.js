let mphRef = document.getElementById("mphInput");
let timeRef = document.getElementById("timeInput");

function makeFixed(number) {
    // only show 2 decimal points, but don't round
    let asString = number.toString();
    let dotLocation = asString.indexOf(".");
    if(dotLocation != -1) {
        let fixed = asString.slice(0, dotLocation + 3);
        asString = fixed;
    }

    return asString;
}

function mphEntered(mph) {
    if(mph > 0) {
        let minutesPerMile = 60 / parseFloat(mph);
        let time = (minutesPerMile * 100) / 1609;
        time *= 60;
        
        timeRef.value = makeFixed(time);
    }
}

function timeEntered(time) {
    if(time > 0) {
        let timeInMinutes = time / 60;
        let minutesPerMile = (timeInMinutes * 1609) / 100;
        let mph = (60 / minutesPerMile);
    
        mphRef.value = makeFixed(mph);
    }
}