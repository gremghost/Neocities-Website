//current bugs
    //egg command defaults text to the right (?)
    //inputted text does not sit at the same spot the stored text sits

//things needing to be implemented
    //links for the dir command, instead of social links let's make it page links :3333
    //crt screen effect
    //fake ai bot thing that harasses anyone that tries to talk to it
    //socials command to link to social medias and stuff

document.getElementById("inputTerm").focus();
    
    var input = "";
    var eggVar = false;

    const display = document.getElementsByClassName("displayTerm");
    const commands = ["help", "cls", "reset", "dir", "egg", "aboutme"];
    const choices = ["A", "B", "C", "D", "E"];

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

        //hack way of getting it to check commands
        //yeah i know a giant series of if statements is not the best shut up
        if (inputField == commands[1]) {
            cls();
            console.log("screen cleared")
        } else if (inputField == commands[0]) {
            displayTerm();
            help();
        } else if (inputField == commands[2]){
            displayTerm();
            resetScreen();
        } else if (inputField == commands[3]) {
            displayTerm();
            dir();   
        } else if (inputField == commands[4]) {
            displayTerm();
            egg();    
        } else if (inputField == commands[5]) {
            cls();
            aboutMe();                                      
        } else if (inputField != commands[0.5]) {
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
        display[0].innerHTML += "reset - Resets the terminal<br>cls - Clear the screen<br>dir - Lists the directory<br>egg - Egg<br>" + "<br>";
    }

    function dir() {
        display[0].innerHTML += "Will soon feature all the links for gremghost! Stay tuned :3<br>" + "<br>";
    }

    function egg() {
        console.log(eggVar)
        if (eggVar == false) {
            display[0].innerHTML += "You got an egg(???)<br>" + "<br>";
            eggVar = true;
        } else if (eggVar == true) {
            var eggImage = document.createElement("img");
            eggImage.setAttribute("src", "images/Instagram_egg-removebg-preview.png")
            display[0].appendChild(eggImage); 
        }

    }

    function resetScreen() {
        document.getElementById("boot").innerHTML = ("gremOS is not a registered trademark of any company because this doesn’t actually exist.<br>(c) Not copyrighted 2021 - 2025 gremghost, Incorporated<br>All rights are there. They exist.<br><br>Type <u>help</u> to begin");
        display[0].innerHTML = "";
    }

    function aboutMe() {
        display[0].innerHTML +=
        "What would you like to know?<br><br><br>"
        display[0].innerHTML +=
        "A: Bio<br><br>"
        display[0].innerHTML +=
        "B: Interests<br><br>"
        display[0].innerHTML +=
        "C: Socials and other links<br><br>"
        display[0].innerHTML +=
        "D: Things I want added to the website<br><br>"
        display[0].innerHTML +=
        "E: Manifesto (do not read if you're a government official pls and ty xoxoxo)<br>"

    }