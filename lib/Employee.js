// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

inquirer.prompt([
        {
            type: "input",
            message: "What is your name?",
            name: "name"
        },
        {
            type: "list",
            message: "What is your job position?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            message: "What is your ID number?",
            id: "number"
        },
        {
            type: "input",
            message: "What is your email?",
            name: "email"
        },
        // {
        //     type: "input",
        //     message: "Please provide information based on job position. Manager = Office Number, Engineer = Github Username, Intern = School",
        //     name: "response"
        // }
    ])

    .then(function(response) {
        console.log(response)
        module.exports //export to other js and add the last question as a new property?
    });