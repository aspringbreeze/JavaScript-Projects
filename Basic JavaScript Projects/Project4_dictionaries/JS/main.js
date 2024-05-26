function my_Dictionary() {
    var Weather = {
        Temperature:"75 F",
        Wind:"15.5 mph",
        Pressure:"1017mBar",
        Humidity:"65%",
        Temperature:"80 F" //If two KVPs have identical key, the value of the key will show the latter one.
    };
    delete Weather.Humidity
    document.getElementById("Dictionary").innerHTML =Weather.Humidity;
}