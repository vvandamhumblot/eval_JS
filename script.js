// faire des div invisibles qui change direct des quon passe la souris devant

// html maDiv.style.top == "200px"
// css: position: absolute; top: 200px; left: 20px;

//if(maDiv.style.top == "200px")

var OUI_OUI = document.getElementById("oui")
OUI_OUI.addEventListener("click", click_OUI)

var NON_NON = document.getElementById("non")
NON_NON.addEventListener("click", click_NON)

function click_OUI (evenement) {
    evenement.target.innerHTML = "Merciii !!! pas vraiment le choix ^^"
    setTimeout(() => {
        evenement.OUI_OUI.innerHTML = "OUI"
    }, 2000);
}

function click_NON (evenement) {
    evenement.NON_NON.innerHTML = "NOOOOOOOOOOOOOON !!!!!"
}

