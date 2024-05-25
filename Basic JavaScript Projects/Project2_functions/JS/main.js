function Button_Function() { //Defining a function and naming it
    var str = "This is the click text!";  //Define a variable and giving it a string value
    document.getElementById("Button_Text").innerHTML = str; //Putting the value of the vatiable into the HTML elementFromPoint with the "Button_Text" id
}

function myFunction() {
    var sentence = "I am learning a lot ";
    sentence += "from this book.";
    document.getElementById("Concatenate").innerHTML = sentence;
}