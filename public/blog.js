function startClick() {
    //create the images needed
    var menu = document.createElement("img");
    var neo = document.createElement("img");
    menu.src = "images/blog/taskbar/start-menu.png";
    neo.src = "images/blog/taskbar/neocities.png"


    //append them to the start button on click
    var menuSrc = document.getElementById("start-menu");
    var neoSrc = document.getElementById("neocities");
    menuSrc.appendChild(menu);
    neoSrc.appendChild(neo);

    //need to add reset functionality upon second click
    //which then would restart the function allowing it to loop effectively
}

function createWindowButton() {
//functionality needed:
//be able to check title bar text for name of window
//copy it to the taskbar button w appropriate text
}

function activeWindow() {
//functionality needed:
//check if window is the one being clicked on or not
//
}