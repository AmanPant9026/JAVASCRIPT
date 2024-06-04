let num=[1,2,3,4,5,6];

const initialvlaue=0;
const sum= num.reduce((res,curr)=>{
    return res+curr;
});
console.log(sum);