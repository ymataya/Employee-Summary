//Run the app, import the employee constructor class to compile each employee
//Give arguments to Employee constructor, receive object and push it into employee array
//Call render with the employee array
const inquirer = require("inquirer");
const render = require("./htmlRenderer.js");
const Engineer = require("./Engineer");
const Manager = require("./Manager");
const Intern = require("./Intern");
const fs = require("fs");

//Push objects created with imported Employee constructor class to get object of employee
var employeeArr = []


function start(){
inquirer.prompt(
        
        {
            type: "list",
            message: "Would you like to create a new employee?",
            name:"role",
            choices: ["Manager", "Engineer", "Intern", "Done"]
        }
    )

    .then(function(response) {
        console.log(response)
       if(response.role === "Engineer"){
        console.log("Readying Engineer Profile...");
        createEngineer()
       }else if(response.role === "Done"){
           console.log("rendering")
           render(employeeArr)
            fs.writeFileSync("../index.html", render(employeeArr), "utf-8");
       }
       if(response.role === "Manager"){
        console.log("Readying Manager Profile...");
        createManager()
       }else if(response.role === "Done"){
           console.log("rendering")
           render(employeeArr)
            fs.writeFileSync("../index.html", render(employeeArr), "utf-8");
       }
       if(response.role === "Intern"){
        console.log("Readying Intern Profile...");
        createIntern()
       }else if(response.role === "Done"){
           console.log("rendering")
           render(employeeArr)
            fs.writeFileSync("../index.html", render(employeeArr), "utf-8");
       }
    });
} 

    function createEngineer(){
        inquirer.prompt([
            {
            type: "input",
            message: "What's your name?",
            name:"name" 
            },
            {
            type: "input",
            message: "What's your id?",
            name:"id" 
            },
            {
            type: "input",
            message: "What's your email?",
            name:"email" 
            },
            {
            type: "input",
            message: "What's your username?",
            name:"username" 
            }  
        ]).then(employee=>{
        newEmployee = new Engineer(employee.name, employee.id, employee.email, employee.username);
        console.log("New Employee", newEmployee);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
     
        }).then(()=>{
           start() 
        })
    }

    function createManager(){
        inquirer.prompt([
            {
            type: "input",
            message: "What's your name?",
            name:"name" 
            },
            {
            type: "input",
            message: "What's your id?",
            name:"id" 
            },
            {
            type: "input",
            message: "What's your email?",
            name:"email" 
            },
            {
            type: "input",
            message: "What's your office?",
            name:"office" 
            }
        ]).then(employee=>{
        newEmployee = new Manager(employee.name, employee.id, employee.email, employee.office);
        console.log("New Employee", newEmployee);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
     
        }).then(()=>{
           start() 
        })
    }

    function createIntern(){
        inquirer.prompt([
            {
            type: "input",
            message: "What's your name?",
            name:"name" 
            },
            {
            type: "input",
            message: "What's your id?",
            name:"id" 
            },
            {
            type: "input",
            message: "What's your email?",
            name:"email" 
            },
            {
            type: "input",
            message: "What's your school?",
            name:"school" 
            }
        ]).then(employee=>{
        newEmployee = new Intern(employee.name, employee.id, employee.email, employee.school);
        console.log("New Employee", newEmployee);
        employeeArr.push(newEmployee);
        console.log(employeeArr);
     
        }).then(()=>{
           start() 
        })
    }

    start();