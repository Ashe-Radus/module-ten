// this is an extention of the parent class
// must contain the following :  name, id, email, officenumber, getname(), getID(), getemail(), getnumber(), getrole() which will return manager. 

const employee = require("./employee");

class manager extends employee{
    constructor(name,id,email, officeNumber){
       super(name,id,email);
        this.officeNumber = officeNumber; 
    }
    printInfo(){
        console.log(`officeNumber: ${this.officeNumber}`);
    }
    getofficeNumber(){
        return this.officeNumber;
    }
    getrole(){
        return "manager";
    }
}

module.export = manager;