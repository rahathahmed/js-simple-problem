// a type of variable declare
var name = "Rahath" ;
var age = 23;
var x =2;
var y =3;
var sum = x + y;
var sub = x - y;
var multiplication = x * y;
var divider = x / y;
var modulas = x % y;
console.log(multiplication);

// array declare
var studentsName= ["kalam","salam","nijam","monu","rahath"];
// var indexNumber =studentsName.indexOf("rahath");
    studentsName[0] = "Raju";
    // console.log(indexNumber);

   var studentsNames = studentsName.length
    console.log(studentsNames);
// data adding in last 
studentsName.push("Raisa");
studentsName.unshift("Nehal");
studentsName.pop();
studentsName.pop();
studentsName.shift();
studentsName.shift();

console.log(studentsName);


// condition 

var  x = 15;
var  y = 1;
var  z = 17;

if ( x > y && x > z){
    console.log("x greter than y & z");
}
else if ( x > y && x < z ){
    console.log("x greter than y but not z")
}
else{
    console.log("x not greter than y & z")
}

var result = 40;

if (result >= 80 && result <= 100 ){
    console.log("A+")
}
else if (result >= 70 && result <= 79 ){
    console.log("A")
}
else if (result >= 60 && result <= 69 ){
    console.log("A-")
}
else if (result >= 50 && result <= 59 ){
    console.log("B")
}
else if (result >= 40 && result <= 49 ){
    console.log("C")
}
else if (result >= 33 && result <= 39 ){
    console.log("D")
}
else{
    console.log("Failed")
}

// loop

var i = 0;
while(i<= 100){
    document.write(i+'<br>');
    // numberCount = numberCount + 1;
    // numberCount += 1;
    i++;
}


