document.getElementById("no-button").addEventListener("click", (event) => {
    localStorage["data-autoplay"] = false;
    console.log("localStorage['data-autoplay'] = ", localStorage["data-autoplay"])
})

document.getElementById("yes-button").addEventListener("click", (event) => {
    localStorage["data-autoplay"] = true;
})
