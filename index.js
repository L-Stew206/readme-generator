// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name:'title',
    },
    {
        type: 'input',
        message: "Write a description of your project",
        name: 'description',
    },
    {
        type: 'input',
        message: "Write the steps used to installation"
        name: 'installation'
    },
    {
        type:'input',
        message: "What is the usage for your project?",
        name: 'usage',
    },
    {
        type: 'list',
        message: "Choose a lisence for your project",
        choices: ['None','Mozilla Public License 2.0','Apache License 2.0','MIT License','Boost Software License 1.0','The Unlicense'],
        name: 'lisence',
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
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
]