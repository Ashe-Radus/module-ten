// this is an extention of the parent class
// must contain the following :  name, id, email, school, getschool() getname(), getID(), getemail(), getrole() which will return intern. 

const employee = require("./employee");

class intern{
    constructor(internClass, School){
        this.internClass = internClass;
        this.School = School; 
    }
    printInfo(){
        console.log(`internClass: ${this.internClass}`);
        console.log(`School: ${this.School}`);
    }
}

module.export = intern;