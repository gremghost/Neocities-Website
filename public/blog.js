//for detecting if clicking in or out of a specific element
var clickedElement = "";
var funcElement = "";

document.body.addEventListener('click', (element) => {
    clickedElement = element.target;
    console.log ("clickedElement = " + clickedElement);
})


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

