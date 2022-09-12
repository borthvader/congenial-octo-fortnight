// TODO: Include packages needed for this application
const inquirer =require('inquirer');
const fs = require('fs');
const {generateMarkdown} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([{
        name: 'license',
        message: 'Select the type of license for this application:',
        type: 'list',
        choices: ['MIT', 'ISC', 'GNU LGPL', 'Unlicense', 'none'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What would you like to title the project? (Required)',
        validate: function(name){
            if (name){
                return true;
            } else {
                console.log('You must have a project title!')
                return false;
            }
            }
        
    },{
        type: 'input',
        name: 'user',
        message: 'What is your username for GitHub? (Required)',
        validate: function(name){
            if (name){
                return true;
            } else{
                console.log('You must enter your username!')
                return false;
            }
        }    
    },{
        type: 'input',
        name: 'description',
        message: 'Give some info about your project'
    },{
        type: 'input',
        name: 'install',
        message: 'Instructions for the installation of this project'
    }, {
        
    }

    ])};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
