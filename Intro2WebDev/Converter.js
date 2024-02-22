

function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}



// function weight(){
//     //To convert Kgs to pounds
//     // Kg * 2.2
//     var kg = document.getElementById("kilo").value;
//     var p = kg * 2.2
//     document.getElementById("pounds").value = p
// }


function weight() {
    var kg = document.getElementById("kilo").value;
    var poundsInput = document.getElementById("pounds").value;
    
    if (kg) {
        // Convert kilograms to pounds
        var pounds = parseFloat(kg) * 2.20462;
        document.getElementById("pounds").value = pounds.toFixed(2);
    }
    
    if (poundsInput) {
        // Convert pounds to kilograms
        var kilo =   parseFloat(poundsInput) / 2.20462;
           document.getElementById("kilo").value = kilo.toFixed(2);
    }
}

// For just km - miles
// function distance(){
//     //To convert KMs to Miles
//     // KM * 0.62137
//     var km = document.getElementById("km").value;
//     var m = km * 0.62137
//     document.getElementById("miles").value = m
// }


function distance() {
    var kmInput = document.getElementById("km").value;
    var milesInput = document.getElementById("miles").value;
    
    if (kmInput) {
        // Convert kilometers to miles
        var miles = parseFloat(kmInput) * 0.62137;
        document.getElementById("miles").value = miles.toFixed(2);
    }
    
    if (milesInput) {
        // Convert miles to kilometers
        var km = parseFloat(milesInput) * 1.60934;
        document.getElementById("km").value = km.toFixed(2);
    }
}