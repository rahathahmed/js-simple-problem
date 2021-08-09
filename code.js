//Problem No 1
function seerToMon(seer){
    let Mon = seer / 40;
    return Mon;
 }

//Code Ended

//Problem No 2
function totalSales(totalShirtSale,totalPantSale,totalShoesSale){ 
     let perShirtMRP = 100;
     let perPantMRP = 200;
     let perShoesMRP = 500;

     let totalShirtSalePrice = totalShirtSale * perShirtMRP;
     let totalPantSalePrice = totalPantSale * perPantMRP;
     let totalShoesSalePrice = totalShoesSale * perShoesMRP;
     let totalSalesPrice = totalShirtSale + totalPantSale + totalShoesSale;

    return totalSalesPrice;
 }
 let sold = totalSales(6,7,8);
//  console.log(sold);

//Problem No 3 
function deliveryPrice(shirtDeliverNumber){

    if (shirtDeliverNumber < 1 || typeof shirtDeliverNumber === "string"){
        console.log("Insert Valid input and try again")
    }
    else if (shirtDeliverNumber <= 100){
        const firstDeliveryCharge = shirtDeliverNumber * 100;
        return firstDeliveryCharge;
    }
    else if(shirtDeliverNumber <= 200){
        let secondDeliveryCharge = 100 * 100 + (200 - shirtDeliverNumber) * 80;
        return secondDeliveryCharge;
    }
    else{
        let thirdDeliveryCharge = 100*100 + 100*80 + (shirtDeliverNumber -200) *50;
        return thirdDeliveryCharge;
    }
          
}
const totalCharge = deliveryPrice(100);
console.log(totalCharge);

//code ended

//Problem No 4
function perfectFriend(names) {
    if(typeof(names)!='object' || names== undefined ){
        return 'This function require an array'
    }
   // calculation part
   for(const element of names){
    if(typeof(element)!='string'){
        continue; 
    }
    else if(element.length == 5){
        return element;
    }
}
return 'Friend Not Found';
}
 let friendsName  = ["Porimoni" , "Nusrat" , "Ranumondol" , "Mehelin" , "Efti","Numa"]
let namesArray = perfectFriend(friendsName);
console.log(namesArray);

//code ended