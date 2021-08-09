
// var x = 6;
// var y = 15;
// var z = 10;

// if (x < y && x > z){
//     console.log("Positive")
// }
// else{
//     console.log("Negetive")
// }

var myBudget = 70000;
var cowPrice = 90000;

if (cowPrice < myBudget){
    console.log("Cow are ready to buy")
}
else{
    console.log("Insufficient Balance")
}

var isRainyday = true;

if(isRainyday == false){
    console.log("Rain Is Flowing")
}
else{
    console.log("Its Sunnydays")
}



var isRahthComes = false;
var isNovaComes = false;
var isBothParentsComes = false;

if(isRahthComes == true && isNovaComes == true && isBothParentsComes != isRahthComes){
    console.log("Congratulation Are You Ready To Enter Room")
}
else if(isRahthComes == true &&  isNovaComes == false && isBothParentsComes == false ){
    console.log("Sorry Nova & Both Parents are missing")
}
else if(isRahthComes == false &&  isNovaComes == false && isBothParentsComes != true ){
    console.log("Sorry Uncle Aunty")
}
else{
    console.log("Not acces")
}