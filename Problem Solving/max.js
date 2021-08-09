// const number1 = 12200;
// const number2 = 144400;
// const number3 = 600;


// var  exChange = number1;
// var  number1 = number2;
// var number2 = exChange;


// if(number1 > number2 && number1 > number3){ 
//     console.log("number1 is bigger");
// }

// else if(number2 > number1 && number2 > number3){ 
//     console.log("number2 is bigger");
// } 
// else { 
//     console.log("number3 is bigger");
// }
// // second way to find number 
// const findMaxNumber = Math.max(number1,number2,number3);
// console.log(findMaxNumber)

// // find number to function

// function findMaxNum(first,second){ 
//     if(first > second){ 
//         console.log("age",first)
//         return first;
//     }
//     else { 
//         return second;
//     }
// }
//  const findMaxNumWithFunction = findMaxNum(800,300);
//  console.log(findMaxNumWithFunction);


//  function findOlderAge(Rahath,Raju,Robin){ 
//      if(Rahath > Raju && Rahath > Robin){ 
//          console.log("Rahath Age",Rahath)
//          return Rahath;
//      }
//      else if (Raju > Rahath && Raju > Robin ){ 
//         console.log("Raju Age",Raju)
//          return Raju
//      }
//      else { 
//         console.log("Raju Age",Robin)
//          return Robin
//      }

//  }
// const ageComparison = findOlderAge(20,35,40);
// console.log(ageComparison);

const number1 =1100;
const number2 = 200;
const number3 = 600;

if( number1 < number2 && number1 < number3){ 
    console.log("Number 1 is elder ")
}
else if(number2 < number1 && number2 < number3){ 
    console.log("Number 2 is elder ")
}
else{ 
    console.log("Number 3 is elder ")
}

const minFindNumber = Math.min(number1,number2,number3);
console.log(minFindNumber)

