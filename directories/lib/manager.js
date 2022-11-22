// this is an extention of the parent class
// must contain the following :  name, id, email, officenumber, getname(), getID(), getemail(), getnumber(), getrole() which will return manager. 

const employee = require("./employee");

class manager {
    constructor(managerClass, officeNumber){
        this.managerClass = managerClass;
        this.officeNumber = officeNumber; 
    }
    printInfo(){
        console.log(`managerClass: ${this.managerClass}`);
        console.log(`officeNumber: ${this.officeNumber}`);
    }
}

module.export = manager;