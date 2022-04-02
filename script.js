// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require ('./utils/generateMarkdown');
//const generateMarkdown = require('./utils/generateMarkdown');

//array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name:'title',
        default: 'Project Title',
    },
    {
        type: 'input',
        message: "Write a description of your project",
        name: 'description',
        default: 'Project Description',
    },
    {
        type: 'input',
        message: "Write the steps used for installation",
        name: 'installation',
    },
    {
        type:'input',
        message: "What is the usage for your project?",
        name: 'usage',
    },
    {
        type: 'list',
        message: "Choose a lisence for your project",
        choices: ['Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0', 'None'],
        name: 'license',
    },
    {
        type: 'input',
        message: "Write any contributors that were apart of your project",
        name: 'contributing',
    },
    {
        type: 'input',
        message: "Please add any tests written for application",
        name: 'tests',
    },
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'github',
        default: "L-Stew206",
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        default:"luketheforce206@gmail.com",
    },
]
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function writeReadMe( ) {
    inquirer
    .prompt ( questions )
    .then ( function (response) {
        console.log ( response );
        const myMarkdown = markdown( response );
        console.log(myMarkdown);
        fs.writeFile ( "README.md", myMarkdown, function (err) {
            if (err) throw err;
            console.log ("README.md written");
        });
    });
};

// Function call to initialize app
writeReadMe();
