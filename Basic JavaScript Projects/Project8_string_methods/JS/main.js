function full_Sentence() {
    var part1 = "I have";
    var part2 = " made ";
    var part3 = "a full sentence.";
    var whole_sentence = part1.concat(part2, part3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "Summer is here!"
    var Section = Sentence.slice(8,9);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method1() {
    var x = 182;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

// A precision method
function precision_Method() {
    var x = 3.14169265358;
    document.getElementById("Precision").innerHTML = x.toPrecision(8);
}