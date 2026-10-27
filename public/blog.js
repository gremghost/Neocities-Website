const desktopWidth = document.body.clientWidth;
const desktopHeight = document.body.clientHeight;

const taskbar = document.getElementById("bar-buttons");

var taskbarButton;

//--OBJECT DEFINITIONS--

//--WINDOW FUNCTIONALITY--

//variable defining
const desktopIcon = document.getElementsByClassName("desktop-icon");
const windowClass = document.getElementsByClassName("window")

//opening a window from an icon
for (const elem of desktopIcon) {
    elem.addEventListener("dblclick", (event) => {
        openWin(event.target);
    })
}

function openWin(elem) {
    const winOpen = document.getElementById(elem.getAttribute("data-win-id"));
    console.log(winOpen)
    const folderType = document.getElementById(elem.getAttribute("data-folder-type"));
    //check for folders to determine which type and if it's open or not already

    //opening window
    winOpen.style.display = "block";

    //create taskbar button
    //bugs: 
    //needs a check to see if one was already created and if so, dont create another one
    //works individually but not if both are minimized. again. (why does this keep happening.)
    taskbarButton = document.createElement("div");
    taskbarButton.className = "taskbar-button"
    taskbarButton.setAttribute("data-id", elem.dataset.winId);
    taskbarButton.style.position = "relative";
    taskbarButton.style.width = "160px";
    winOpen.style.setProperty("--taskbutton-width", taskbarButton.style.width)
    taskbarButton.style.height = "22px";
    taskbarButton.style.marginLeft = "3px;"
    taskbarButton.style.backgroundColor = "yellow";

    //put it in html inside taskbar
    taskbar.appendChild(taskbarButton);
    winOpen.style.setProperty("--taskbutton-top", taskbarButton.getBoundingClientRect().top)
    winOpen.style.setProperty("--taskbutton-left", taskbarButton.getBoundingClientRect().left)

}
//--ACTIVE vs INACTIVE STATE
const actWindow = document.getElementsByClassName("window")
var previousWin;

for (const elem of actWindow) {
    elem.addEventListener("mousedown", (event) => {
        activeElem(event.currentTarget);
    })
}

//bugs:
function activeElem(elem) {
    if (previousWin) {
        previousWin.style.zIndex = 0;
        elem.style.zIndex = 1;
        previousWin = elem;
    } else {
        previousWin = elem;
    }
}

// --WINDOW DRAGGABILITY (courtesy of w3schools as i did not write this code)--

// Make the DIV element draggable:
dragElement(document.getElementById("folwin"));
dragElement(document.getElementById("win1"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.setProperty("--win-top", Math.max(0, Math.min(elmnt.offsetTop - pos2, desktopHeight - elmnt.clientHeight)) + "px");
    elmnt.style.setProperty("--win-left", Math.max(0, Math.min(elmnt.offsetLeft - pos1, desktopWidth - elmnt.clientWidth)) + "px");
    elmnt.style.setProperty("--resize-top", Math.max(0, Math.min(elmnt.offsetTop - pos2, desktopHeight - elmnt.clientHeight)) + "px");
    elmnt.style.setProperty("--resize-left", Math.max(0, Math.min(elmnt.offsetLeft - pos1, desktopWidth - elmnt.clientWidth)) + "px");
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


// --MIN, MAX, CLOSE BUTTON FUNCTIONALITY--
//minimizing a window function
const minimizeButton =  document.getElementsByClassName("minimize-button");
const taskClose = document.getElementsByClassName("taskbar-button")

for (const elem of minimizeButton) {
    elem.addEventListener("click", (event) => {
        minimize(event.target);
    })
}

function minimize(elem) {
    const min = document.getElementById(elem.getAttribute("data-id"));
    const titleBar = min.querySelector(".title-bar-anim");
    const title = min.querySelector(".title-anim");
    //console.log(min);

    //change style of element on html side to be display: none
    titleBar.style.display = "flex";
    title.style.display = "flex";
    titleBar.classList.add("min-shrink");
    title.classList.add("min-shrink");

    setTimeout(() => {
        min.style.setProperty("display", "none")
        titleBar.style.display = "none";
        title.style.display = "none";
        titleBar.classList.remove("min-shrink");
        title.classList.remove("min-shrink");
    }, 500)

    //for each one, go to exist and make it exist again once clicked
    for (const elem of taskClose) {
        elem.addEventListener("click", (event) => {
            exist(event.currentTarget);
        })
    }
}

function exist(elem) {
    const win = document.getElementById(elem.getAttribute("data-id"));
    //console.log(win);

    //change style of element on html side to be display: block
    win.style.display = "block";
}

//maximizing a window
const maxButton = document.getElementsByClassName("maximize-button");

var previousWidth;
var previousHeight;
var previousTop;
var previousLeft;

var maxClicked = false;

for (const elem of maxButton) {
    elem.addEventListener("click", (event) => {
        maximize(event.target)
    })
}

function maximize(elem) {
    console.log(elem);

    const max = document.getElementById(elem.getAttribute("data-id"));
    console.log(max)
    const titleBar = max.querySelector(".title-bar-anim");
    const title = max.querySelector(".title-anim");

    if (maxClicked != true) {
        //store previous width and height
        previousWidth = max.style.getPropertyValue("--win-width")
        previousHeight = max.style.getPropertyValue("--win-height");
        previousTop = max.style.getPropertyValue("--win-top")
        previousLeft = max.style.getPropertyValue("--win-left")

        //maximize window
        titleBar.style.display = "flex";
        titleBar.classList.add("max-grow");
        title.style.display = "flex";
        title.classList.add("max-grow");

        setTimeout(() => {
            max.style.setProperty("--win-width", "100%");
            max.style.setProperty("--win-height", "calc(100% - 28px)");
            max.style.setProperty("--win-top", "0");
            max.style.setProperty("--win-left", "0");
            max.style.setProperty("resize", "none")
            titleBar.style.display = "none";
            title.style.display = "none";
            titleBar.classList.remove("max-grow");
            title.classList.remove("max-grow");
        }, 500)

        maxClicked = true;
    } else {
        titleBar.style.display = "flex";
        title.style.display = "flex";
        titleBar.classList.add("max-shrink");
        title.classList.add("max-shrink");

        setTimeout(() => {
            max.style.setProperty("--win-width", previousWidth);
            max.style.setProperty("--win-height", previousHeight);
            max.style.setProperty("--win-top", previousTop);
            max.style.setProperty("--win-left", previousLeft);
            max.style.setProperty("resize", "both")
            titleBar.style.display = "none";
            title.style.display = "none";
            titleBar.classList.remove("max-shrink");
            title.classList.remove("max-shrink");
        }, 500)
        maxClicked = false;
    }
}

//closing a window
const closeButton = document.getElementsByClassName("close-button");

for (const elem of closeButton) {
    elem.addEventListener("click", (event) => {
        close(event.target);
    })
}

function close(elem) {
    console.log(elem)
    const close = document.getElementById(elem.getAttribute("data-id"));

    //remove element from html
    close.style.display = "none";

    //references class and deletes the first one in the class, which happens to be the one thats closed out first so it works
    taskClose[0].remove();
}