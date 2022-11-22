// this is an extention of the parent class
// must contain the following :  name, id, email, github-github username, getGithub(), getname(), getID(), getemail(), getrole() which will return engineer. 

const employee = require("./employee");

class engineer{
    constructor(engineerClass, GitHubUsername){
        this.engineerClass = engineerClass;
        this.GitHubUsername = GitHubUsername; 
    }
    printInfo(){
        console.log(`engineerClass: ${this.engineerClass}`);
        console.log(`GitHubUsername: ${this.GitHubUsername}`);
    }
}

module.export = engineer;