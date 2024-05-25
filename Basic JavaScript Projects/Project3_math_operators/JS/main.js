function math_function() {
    var result = 15*15;
    document.getElementById("Math").innerHTML = result;
}

function math_function1() {
    var division = 230/15;
    document.getElementById("Math1").innerHTML = division;
}

function math_function2() {
    var x = 230;
    x++;
    var y = 190;
    y--;
    var z = Math.random()* 1000;
    var w = (x+y-z)%y;
    let m = "(" + x + "+" + y + "-" + z + ")" + "%" + y
    document.getElementById("Math2").innerHTML = m + " = " + w;
}