
// 5! = 5 x 4 x 3 x 2 x 1 =120\

// factorial declare by  loop

var factorial = 1;

for(i=0;i<=5;i++){
    factorial = factorial * i;
    console.log(factorial)
}

// factorial declare by  function 

function getFactorial(number){ 
var factorial = 1;
    for( var i = 1;i <= number; i++){ 
        factorial = factorial * i;
    }
    return factorial
}

var first = getFactorial(7);
console.log(first)





