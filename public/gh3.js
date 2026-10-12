var div = document.getElementById("selection") //gets the id of the element needed

window.addEventListener("load", () => {
    div.style.bottom = 435 + "px";
    div.style.left = 65 + "px";
    div.style.width = 255 + "px";
    div.style.height = 70 + "px";
})

window.addEventListener("keydown", (e) => {
    switch (e.key) {
        case "ArrowUp":
            div.style.bottom = parseInt(div.style.bottom) + 50 + "px";
        return;
        case "ArrowDown":
            div.style.bottom = parseInt(div.style.bottom) - 50 + "px";
        return;
    }
})

//functionality needed
//on key press (which works, so yippee) i need a div that moves behind the text || DONE
    //it needs to be able to change the color of the text its currently behind
    //it needs to be able to adjust its width and height based on which text its behind
    //reset the text box that it was behind once it moves on
//infinite loop type shit
    //if at very top and arrow up is pressed, loop to bottom text value
    //if at very bottom and arrow down is pressed, loop to top text value