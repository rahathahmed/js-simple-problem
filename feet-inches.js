function inchTofeet(inches){
    var feet = inches/12;
    return feet
}

var feet = inchTofeet(200)
console.log(feet);

var dadiInches = 180;
var feet = inchTofeet(dadiInches)
console.log(feet);

var dadaInches = 220;
var feet = inchTofeet(dadaInches)
console.log(feet);


// km to miles 1km = 1.609 mile
// function kmTomilesConverter(miles){
//     var km = miles * 1.609;
//     return km;
// }
// // var dhakaTosylhet = 200;
// var miles = kmTomilesConverter(200);
// console.log("Dhakat to sylhet", miles);
function KmToMile(miles){ 
    var km = miles * 1.602;
    return km
}

var SylhetToDhaka =  KmToMile(30);
console.log(SylhetToDhaka);

