//current bugs
    //egg command defaults text to the right (?)
    //inputted text does not sit at the same spot the stored text sits
    //the text needs to behave more like how dos handles it

//things needing to be implemented
    //links for the dir command, instead of social links let's make it page links :3333
    //crt screen effect
    //fake ai bot thing that harasses anyone that tries to talk to it
    //socials command to link to social medias and stuff

document.getElementById("inputTerm").focus();
    
    var input = "";
    var eggVar = false;

    const display = document.getElementsByClassName("displayTerm");
    const commands = ["help", "cls", "reset", "dir", "egg", "abtme"];
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
            //clears screen
            cls();
            console.log("screen cleared")
        } else if (inputField == commands[0]) {
            //help command
            display[0].innerHTML += "C:&#92;&gt;" + input + "<br>" + "<br>";
            display[0].innerHTML += "For more information on a specific command, use it. It's all right here.<br>";
            display[0].innerHTML += "Promise you that I'm not THAT great of a JS coder LOL<br><br>";
            display[0].innerHTML += "ABTME⠀⠀⠀The easiest way to learn more about gremghost!<br>";
            display[0].innerHTML += "CLS⠀⠀⠀Clears the screen.<br>";   
            display[0].innerHTML += "DIR⠀⠀⠀Displays all the links and websites associated with gremghost.<br>";
            display[0].innerHTML += "EGG⠀⠀⠀???<br>";
            display[0].innerHTML += "HELP⠀⠀⠀Provides Help information for gremOS commands.<br>";
            display[0].innerHTML += "RESET⠀⠀⠀Resets the terminal.<br><br>";
        } else if (inputField == commands[2]){
            //resets the screen
            display[0].innerHTML += input + "<br>" + "<br>";
            resetScreen();
        } else if (inputField == commands[3]) {
            //directory command
            display[0].innerHTML += input + "<br>" + "<br>";
            dir();   
        } else if (inputField == commands[4]) {
            //egg
            display[0].innerHTML += input + "<br>" + "<br>";
            egg();    
        } else if (inputField == commands[5]) {
            //about me
            cls();
            aboutMe();                                      
        } else if (inputField != commands[0.5]) {
            display[0].innerHTML += "Invalid command: " + input + "<br>" + "<br>";
        }
    }

    function cls() {
        document.getElementById("boot").innerHTML = "";
        display[0].innerHTML = "";
    }

    function dir() {
        display[0].innerHTML += "<h3>gremghost inc. can be found at most retailers nationwide!</h3>";

        display[0].innerHTML += "Bandcamp<br><br>";
        display[0].innerHTML += "<a href='https://gremghost.bandcamp.com' target='_top'>https://gremghost.bandcamp.com</a><br><br><br>";

        display[0].innerHTML += "Newgrounds<br><br>";
        display[0].innerHTML += "<a href='https://gremghost.newgrounds.com/' target='_top'>https://gremghost.newgrounds.com/</a><br><br><br>";  
        
        display[0].innerHTML += "YouTube<br><br>";
        display[0].innerHTML += "<a href='https://www.youtube.com/@gremghost101/' target='_top'>https://www.youtube.com/@gremghost101</a><br><br><br>";

        display[0].innerHTML += "Github<br><br>";
        display[0].innerHTML += "<a href='https://github.com/gremghost' target='_top'>https://github.com/gremghost</a><br><br><br>";

        display[0].innerHTML += "Walmart (???)<br><br>";
        display[0].innerHTML += "<a href='https://www.walmart.com' target='_top'>https://www.walmart.com</a><br><br><br>";        
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