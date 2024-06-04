//helps to loop on arrays and strings
let str=prompt("Enter a string to know its size");
 let size=0;
for(let i of str)
    {
        console.log("i=",i);
        size++;
    }
    console.log("String size =", size);