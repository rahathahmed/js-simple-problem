// varibale declare
var myName = "Rahath Ahmed";
console.log(myName);
var x = 5;
var y = 5;
var total = x + y;
console.log(total);

if (total == 10){
    console.log("Its equal  10");
}
else{
    console.log("Its Not equal  10");
}
// array
var myInfo = ["Rahath",24,"Student","Sylhet","Reading Book"];
    myInfo[1]=36;
   var indexNumber = myInfo.indexOf("Sylhet");
    console.log(indexNumber);
    var lengthCount = myInfo.length;
    console.log(lengthCount);
    myInfo.push("Bangladeshi");
    myInfo.unshift("Name");
    myInfo.pop();
    myInfo.shift();
    console.log(indexNumber);
    console.log(myInfo);


// if else condition 

var x = 10;
var y = 9;
if( x > y){
    console.log('Correct');
}
else{
    console.log('Wrong');
}
// loop 
// while

var i = 0;
while(i<10){
    console.log(i);
    i++;
}

// for
for (var i = 0; i<=100;i++){
    console.log(i);
}



function add(num) {
    
    var y  = 10;
    var total = num + y;
    console.log(total)   
}
add(6);
add(9);

function anualYearlyStoke(samsung,sony){
    var yearlyStoke = samsung + sony;
    return yearlyStoke;
}
var yearlyStokeReport = anualYearlyStoke(1000,5000);
console.log(yearlyStokeReport);

// swith 
var color = "green";
switch(color){
    case "blue":
        console.log("This Is Blue") ;
        break;
    case "red":
        console.log("This Is Red") ;
        break;
    case "green":
        console.log("This Is Green") ;
        break; 
    case "orange":
        console.log("This Is orange") ;
        break;
    case "yellow":
        console.log("This Is yellow") ;
        break;
    default:
        console.log("No Match") ;

}

// object 
var myBioData = {
    name : "Rahath Ahmed",
    age : 23,
    fathername: "Abdul Karim",
    address : "Sylhet",
    Email :"Rahathoffic@mail.com"
}
console.log(myBioData);
// define other filter property

//Cheak object propety
    console.log(myBioData.Email);

    var mail = myBioData.Email;

    console.log(mail);

    // set edit or add object property value
        mail = "Rahathofficial1@yahoo.com";
        console.log(mail);
    // differnt type of set object property value
        // type 1
        mail = "Rahathofficial@yahoo.com";
        console.log(mail);

        // type 2
        myBioData["Email"] = "RahthUpdate@mail.com";
        console.log(myBioData.Email);

        // type 3
       mailProperty = "Email";
       myBioData[mailProperty] = "Ahmed9@gmail.com";
       console.log




var samsungS7 = {
    modelName : "Samsung S7",
    color : "Black",
    ram : "16 GB",
    price : 20000,
}

console.log(samsungS7)
// define other filter property













