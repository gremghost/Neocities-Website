if (!localStorage["data-autoplay"]) {
    //grab all autoplaying audio elements
    const audioElements = documents.querySelectorAll("audio[autoplay]");
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