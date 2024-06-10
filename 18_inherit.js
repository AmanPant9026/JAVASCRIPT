/*
class parent{
    hello()
    {
        console.log("hello");
    }
}
class child extends parent{}

let obj=new child();
*/

class person{

    constructor()
    {
        this.species="homo sapiens"
    }
    eat()
    {
        console.log("eat");
    }
    sleep()
    {
        console.log("sleep");
    }
    work()
    {
        console.log("do nothing");
    }
}

class Engineer extends person{
    constructor(branch)
    {
        super();//to invoke parent class constructor
        this.branch=branch;
    }

    work()
    {
        console.log("solve problems, build something");
    }
}

class Doctor extends person{

    constructor(branch)
    {
        super();//to invoke parent class constructor
        this.branch=branch;
    }
    work()
    {
        console.log("treats patient");
    }
}

let engObj=new Engineer("CSE");

let docObj=new Doctor("Dermat");