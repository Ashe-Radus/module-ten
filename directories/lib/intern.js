// this is an extention of the parent class
// must contain the following :  name, id, email, school, getschool() getname(), getID(), getemail(), getrole() which will return intern. 

const employee = require("./employee");

class intern extends employee{
    constructor(name,id,email, School){
        super(name,id,email);
        this.School = School; 
    }
    printInfo(){
        console.log(`School: ${this.School}`);
    }
    getschool(){
        return this.School;
    }
    getrole(){
        return "intern";
    }
}

module.export = intern;