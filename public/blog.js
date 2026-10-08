//for detecting if clicking in or out of a specific element
var clickedElement = "";

const idArray = ["start-menu", "start-button"]; //replace this with a better method of checking which element the event listener should be matching or not matching to

//detects click onto an element
document.body.addEventListener('click', function(element) {
    clickedElement = element.target.id; //stores inside of a variable for future use
    console.log ("clickedElement = ", clickedElement);
    
    //this is supposed to help run specific functions based on what was clicked
    switch (clickedElement) {
        case "start-button": {
            console.log("switch case 1");
            startFunc();
        }
    }
})

//do the check inside each function since i don't know of a way to have the check run once and somehow have it do the said specific things based on element

function startFunc() {
     //if (!idArray.includes(clickedElement)) {
        //document.getElementById("start-button").src = "images/blog/taskbar/start.png";
    //} else {
        //document.getElementById("start-button").src = "images/blog/taskbar/start_click.png";
    //}
}

function createWindowButton() {
//functionality needed:
//be able to check title bar text for name of window
//copy it to the taskbar button w the appropriate text
//be able to keep track of the clicked vs non clicked state with both text and the images
}

function activeWindow() {
//functionality needed:
//be able to keep track of the clicked vs non clicked state with both text and the images
//set the titlebar text and the appropriate color for it based on active vs inactive
}

