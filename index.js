// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },                                                              
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project/get the development environment running?',
    },
    {
        type: 'input',
        name: 'image',
        message: 'Paste the file path of an image you would like to include to provide an example of use, starting with "/image"',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide some instructions for the use of your applicatiton.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide guidelines for other developers to contribute to your application or package.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'If you have ran tests on your application, then provide examples on how to run them here.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license have you chosen for your project? If you have chosen a license for a project.',
        choices: [
            'MIT', 'Apache', 'BSD', 'Unlicense', 'None'
        ],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?',
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err) : console.log('Success!! Your README.md file has been generated with your inputs. Check it out!')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inputs) => {
        writeToFile("README.md", generateMarkdown(inputs));
    });
};

// Function call to initialize app
init();
