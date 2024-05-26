document.write(typeof [1, 2, 3]);
document.write("5" + 5);

function my_Function1() {
    document.getElementById("Test1").innerHTML = 0/0;
};

function my_Function2() {
    document.getElementById("Test2").innerHTML = isNaN("Hello");
};

function my_Function3() {
    document.getElementById("Test3").innerHTML = isNaN("100");
};

document.write(2E310);
document.write(-2E310);

document.write(100>99);
document.write(0>99);

console.log(8*18);

document.write(0===0);
document.write("s"===0);
document.write("0"===0);
document.write(5===0);

document.write(5==0);
document.write(5===0 && 10<5);
document.write(5===0 || 10<5);
document.write(!5===0);
