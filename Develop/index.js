const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter github username');
            return false; 
        }
    } 
}, {

    type: 'input',
    name: 'email',
    message: 'What is your email address?'

}, {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'

}, {
    type: 'input',
    name: 'description',
    message: 'Enter the description of your project?'
}, {
    type: 'list',
    name: 'license',
    choices: ['MIT', 'GPU'],
    message: 'Pick a license for your project?'
}, {
    type: 'input',
    name: 'installation',
    message: 'What are the steps to install your project?'

}, {
    type: 'input',
    name: 'usage',
    message: 'Enter a usage description'

}, {
    type: 'input',
    name: 'contributors',
    message: 'what are the contributing guidelines for the repo?' 

}, {
    type: 'input',
    name: 'test', 
    message: 'What command to use to run tests?',
    default: 'npm test'
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => console.log(err));
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions).then(data => {
        console.log(data);
        const markdown = generateMarkdown(data);
        writeToFile('./Readme.md', markdown)
    })
}

// Function call to initialize app
init();


