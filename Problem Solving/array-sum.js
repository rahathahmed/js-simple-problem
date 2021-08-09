const arrayTotal = [20,25,10,45,50,40,30];
let sum = 0;
for(let i = 0; i < arrayTotal.length ; i++){
    const element = arrayTotal[i];
    console.log(element);
    
        sum = sum + element;
 }

console.log(sum);

const arrayTotals = [20,25,10,45,50,40,30];
function arrayFunction(arrayTotal){
    let sum = 0;
    for(let i = 0; i < arrayTotal.length ; i++){
    const element = arrayTotal[i];
    sum = sum + element;
 }
 return sum
 }
 console.log(arrayFunction([90,10]));

 
