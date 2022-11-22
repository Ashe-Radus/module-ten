// this is an extention of the parent class
// must contain the following :  name, id, email, github-github username, getGithub(), getname(), getID(), getemail(), getrole() which will return engineer. 

const employee = require("./employee");

class engineer extends employee{
    constructor(name,id,email, GitHubUsername){
        super(name,id,email,)
        this.GitHubUsername = GitHubUsername; 
    }
    printInfo(){
        console.log(`GitHubUsername: ${this.GitHubUsername}`);
    }
    getGithub(){
        return this.GitHubUsername;
    }
    getrole(){
        return "engineer";
    }
}

module.export = engineer;