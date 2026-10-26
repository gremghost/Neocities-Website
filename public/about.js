var powerOn = 0;
var currentChannel = 0; //starting value for the array

const srcArray = ["fish.html", "tempsec.html", "grog1.html", "socialslinks.html"]

function changeSrcUp() {
    if (powerOn === 1) {
        console.log(currentChannel);
        currentChannel = (currentChannel + 1) % srcArray.length;
        document.getElementById("tvFrame").src = srcArray[currentChannel]; //push to iframe
    }
}

function power() {
    if (powerOn === 0) {
        currentChannel = 0;
        document.getElementById("tvFrame").src = "static.html";
        powerOn = 1;
        return
    }

    if (powerOn === 1) {
        document.getElementById("tvFrame").src = "";
        powerOn = 0;
        return;
    }
}

function changeSrcDown() {
    if (powerOn === 1) {
        if (currentChannel == 0) {
            console.log(currentChannel);
            currentChannel = srcArray.length - 1;
            document.getElementById("tvFrame").src = srcArray[currentChannel]; //push to iframe
        } else {
            console.log(currentChannel);
            currentChannel = currentChannel - 1;
            document.getElementById("tvFrame").src = srcArray[currentChannel]; //push to iframe
        }
    }
}

