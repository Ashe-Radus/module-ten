const inquirer = require("inquirer");
//const employeeFile = require("./directories/lib/employee"); dont need the parent file
const managerFile = require("./directories/lib/manager");
const engineerFile = require("./directories/lib/engineer");
const internFile = require("./directories/lib/intern");
const fs = require('fs');

//initialize the questions:
const { writeFile } = require('fs');
//start the questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'Role',
            message: 'What is your role? Please select one.',
            choices: ['manager', 'engineer', 'intern'],
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number? Please type none if you do not have an office number.',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub Username? Please type none if you do not have a GitHub username.',  
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the school you are currently attending? Please put none if you are not an intern.',
        },
    ])
    .then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => 
        err ? console.log(err) : console.log('Success')
        );
    });
}