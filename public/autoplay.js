const audioElements = document.querySelectorAll("audio[autoplay]");

if (localStorage["data-autoplay"] === "false") {
    //grab all autoplaying audio elements
    for (const elem of audioElements) {
        //disable autoplay
        elem.autoplay = false;
        elem.controls = true;
    }
} else {
    for (const elem of audioElements) {
        //enable autoplay
        elem.autoplay = true;
        elem.controls = false;
    }
}