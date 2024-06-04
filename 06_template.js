let obj={
    item:"pen",
    price:10,
};
//old method
//console.log("the cost of" , obj.item, "is", obj.price,"rupees");

//instead use this new method of using templates
let output=`the cost of ${obj.item} is ${obj.price} rupess`;
console.log(output);