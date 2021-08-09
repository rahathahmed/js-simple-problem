var result = prompt();

if (result >= 0 && result <= 32){
    document.write("Failed");
}
else if(result >=33 && result <= 39) {
    document.write("D");
}
else if(result >=40 && result <= 49) {
    document.write("C");
}
else if(result >=50 && result <= 59) {
    document.write("B");
}
else if(result >=60 && result <= 69) {
    document.write("A-");
}
else if(result >=70 && result <= 79) {
    document.write("A");
}
else if(result >=80 && result <= 100) {
    document.write("A+");
}
else{
    document.write("Invalid");
}
