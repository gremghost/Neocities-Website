document.getElementById("inputTerm").focus();
    
    var input = "";
    const display = document.getElementsByClassName("displayTerm");
    const commands = ["help", "cls", "music"];

    const node = document.getElementById("inputTerm")
    node.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        inputStore();
    }
    }
    );

    function inputStore() {
        //simple form of storing what the user types
        var inputField = document.getElementById("inputTerm").value;
        console.log("inputField: " + inputField);
        console.log("input: " + input);
        input = inputField;

        document.getElementById("inputTerm").value = "";

        if (inputField == commands[1]) {
            cls();
            console.log("screen cleared")
            displayTerm();
        } else if (inputField == commands[0]) {
            help();
            displayTerm();
        } else if (inputField != commands[0.3]) {
            display[0].innerHTML += "Invalid command: " + input + "<br>" + "<br>";
        }
    }

    function displayTerm() {
        display[0].innerHTML += input + "<br>" + "<br>";
        console.log(display[0].innerHTML);
    
    }

    function cls() {
        document.getElementById("boot").innerHTML = "";
        display[0].innerHTML = "";
    }

    function help() {
        display[0].innerHTML += "CLS - Clear the screen<br>" + "<br>";
    }