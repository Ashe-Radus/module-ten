// this is the parent class

//must contain the following; name, id, email, getname(), getID(), getemail(), getrole() which will return employee. 

class employee{
    constructor(name,id,email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    printinfo(){
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
    }
    getname(){
        return this.name;
    }
    getID(){
    return this.id;
    }
    getemail(){
        return this.email;
    }
    getrole(){
        return "employee";
    }
}

module.exports = employee;

