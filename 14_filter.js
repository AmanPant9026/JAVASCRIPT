let num=[97,63,99,80,81];

let newArr=num.filter( (val)=>{
    if(val>90)
      return val;
});
console.log(newArr);