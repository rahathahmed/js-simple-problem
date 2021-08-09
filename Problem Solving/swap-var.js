var firstNumber = 15;
var secondNumber = 17 ;

var change = firstNumber;
firstNumber = secondNumber;
secondNumber =change;
console.log(firstNumber,secondNumber);

[firstNumber,secondNumber]=[secondNumber,firstNumber]
console.log(firstNumber,secondNumber);

