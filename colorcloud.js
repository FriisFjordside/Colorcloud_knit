

/*
var finalbanner = document.getElementById("finalbanner");


var bil8 = document.getElementById("billedeboks8");

function xhover(){
    
    console.log("jeg kommer fra hover()");
    
    document.getElementById("billedeboks8").innerHTML = "YOU";
    
}


xhover();
*/

document.getElementById("finalbanner_activate").onmouseover = function() {myFunction()};

// her er den funktion, der startes:
function myFunction() {
    console.log("hurra!");

    document
		.getElementById("finalbanner")
        .innerHTML = "ART <br> IMITATES <br> YOU";
     
}