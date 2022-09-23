// Required packages
const inquirer =require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Question array for user input
const userInput = () => {
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
        type: 'input',
        name: 'usage',
        message: 'Give some instructions for usage of this project'
    },{
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidlines/instructions for this project?'
    }, {
        type: 'input',
        name: 'test',
        message: 'How can someone test your project?'
    },{
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
}

    ])
    .then(input => {return input;
    })
};

// Function that allows inquirer user inputs to be written on README
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) throw err;
        console.log('Your README is completed')
    })
}

// Function that initializes app
async function init() {
    let input = await userInput();
    writeToFile(('../README.md'),(generateMarkdown(input)));
}


init();
