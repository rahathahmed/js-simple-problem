// // function getResult(){
// //     var number1 = 165;
// //     var number2 = 15;
// //     var total =number1 +number2;
// //     document.write(total);
// // }
// // getResult();

// // function addNumber(firstnumber,secondnumber){
// //     var result = firstnumber+secondnumber;
// //     return result
// // }
// // var myResult = addNumber(10,25);
// // document.write(myResult);

// // var x = 6;
// // var y = 15;
// // var z = 10;

// // if (x < y && x > z){
// //     console.log("Positive")
// // }
// // else{
// //     console.log("Negetive")
// // }

// var myBudget = 70000;
// var cowPrice = 90000;

// if (cowPrice < myBudget){
//     console.log("Cow are ready to buy")
// }
// else{
//     console.log("Insufficient Balance")
// }

// var isRainyday = true;

// if(isRainyday == false){
//     console.log("Rain Is Flowing")
// }
// else{
//     console.log("Its Sunnydays")
// }



// var isRahthComes = false;
// var isNovaComes = false;
// var isBothParentsComes = false;

// if(isRahthComes == true && isNovaComes == true && isBothParentsComes != isRahthComes){
//     console.log("Congratulation Are You Ready To Enter Room")
// }
// else if(isRahthComes == true &&  isNovaComes == false && isBothParentsComes == false ){
//     console.log("Sorry Nova & Both Parents are missing")
// }
// else if(isRahthComes == false &&  isNovaComes == false && isBothParentsComes != true ){
//     console.log("Sorry Uncle Aunty")
// }
// else{
//     console.log("Not acces")
// }



// function addNumber(num1,num2){
//     var result = num1+num2;
//     return result;
// }
// var myResult = addNumber(16,6);
// console.log(myResult);


function stock(stoke2020,stoke2021){
   var anualStoke = stoke2020-stoke2021;
   return anualStoke;
}
var Stoke20 = 10000;
var Stoke21= 24000;

var totalStoke = stock(Stoke20,Stoke21);
console.log(totalStoke);

