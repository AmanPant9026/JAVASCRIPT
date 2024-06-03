//used to loop on objects

let student={
    Name:"AMAN",
    age:21,
    college:"IIT",
    isPass:true,
};
for (let key in student)
    {
        console.log("key =",key,"   value", student[key]);
    }