const { text } = require("express");

var contScreens = 0;


function createScreen(title, emailInput, PasswInput, textBtn){

    // DIV BOX
    var divScreen =  document.createElement("div");

    var styleDiv = [
        "width: 40%;"+
        "height: 500px;"+ 
        "background-color: #ffff;"+
        "border-radius: 20px;"+ 
        "box-shadow: 0px 5px 7px #666;"+ 
        "display: flex;"+
        "justify-content: center;"+
        "justify-self: center;"
    ];

    divScreen.setAttribute("style", styleDiv);
 

    // TITLE SCREEN
    var titleScreen = document.createElement("h1");
    titleScreen.innerText = title;


    /*
            CONFIG INPUTS
    */

        // EMAIL INPUT
        var email = document.createElement("input");
        email.setAttribute("type", "email");

        var styleEmailInput = [
            "width: 40%;"+
            "height: 30px;"+
            "border-radius: 20px;"
        ];

        email.setAttribute("style", styleEmailInput);

         

        // PASSWORD INPUT
        var password = document.createElement("input");
        password.setAttribute("type", "password");

        var stylePasswInput = [
            "width: 40%;"+
            "height: 30px;"+
            "border-radius: 20px;"
        ];

        password.setAttribute("style", stylePasswInput);
 

    //CONFIRM BUTTON
    var btnConfirm = document.createElement("button");

    if(textBtn == null){
        textBtn = "Confirmar";
        btnConfirm.innerText = textBtn;
    } else {
        btnConfirm.innerText = textBtn;
    }

    btnConfirm.setAttribute("type", "submit");

    var styleBtnConfirm = [
        "width: 60px;"+
        "height: 30px;"+
        "position: absolute;"+
        "top: 450px;"
    ];

    btnConfirm.setAttribute("style", styleBtnConfirm);



 
    // EXIT BUTTON
    var exitButton = document.createElement("button");
    exitButton.innerText = "X";

    var styleBtn = ["width: 40px;"+
    "height: 40px;"+
    "backgrond-color: #222;"+
    "border-radius: 10px;"+
    "position: relative;"+
    "right: 2%;"+
    "top: 20px;"+
    "border: none;"];

    exitButton.setAttribute("style", styleBtn);
 
    exitButton.addEventListener("click", function(){
        divScreen.remove(this);
    });



    // SCREEN ITENS APPEND CHILD
    document.body.appendChild(divScreen);
    divScreen.appendChild(titleScreen);
    divScreen.appendChild(exitButton);
    divScreen.appendChild(email);
    divScreen.appendChild(password);
    divScreen.appendChild(btnConfirm);



    // FUNÇÃO DE CONTAGEM DE PÁGINAS CRIADAS
    contScreens = contScreens + 1;


    

}