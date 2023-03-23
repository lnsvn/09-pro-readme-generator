// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input

// const data = [

inquirer
    .prompt([
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
        // {
        //     type: 'input',
        //     name: 'table of contents',
        //     message: '',
        // },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'usage',
        },
        {
            type: 'input',
            name: 'license',
            message: 'What license have you chosen for your project? If you have chosen a license for a project.',
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'If you would like for other developers to contribute to your application or package, you can include guidelines for how to do so here.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'If you have ran tests on your application, then provide examples on how to run them here.',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide a way for other developers to get in touch with you if they have questions about your application.',
        },
    ])
    .then((data) => {
        fs.writeFile('README.md', generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log('Success!!')
        );
    });
    

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
