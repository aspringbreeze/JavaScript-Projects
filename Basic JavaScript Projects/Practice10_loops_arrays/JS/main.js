function Call_Loop() {
    var x = 10;
    var M = "";
    while (x > 0) {
        M += "<br>" + x;
        x--;
    }
    document.getElementById("Loop").innerHTML = M;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass"];
var Content = "";
function for_Loop(){
    for (Y = 0; Y < Instruments.length; Y ++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

// Put array in a function
function array_Function() {
    let Nu = [];
    Nu[0] = 0;
    Nu[1] = 1;
    Nu[2] = 2;
    Nu[3] = 3;
    document.getElementById("Array").innerHTML= Nu;
}

const K = 20;
function constant_function() {
    M = "Lucy is ";
    N = " years old.";
    document.getElementById("Constant").innerHTML = M + K + N;
}