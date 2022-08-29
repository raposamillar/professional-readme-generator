// packages required for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// array of questions
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter the title of your project!');
          return false;
        }
      }
    },
    {
      type: 'input', 
      name: 'description',
      message: 'Enter a project description. (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter a description for your project!');
          return false;
        }
      }
    },
    { 
      type: 'input',
      name: 'installation',
      message: 'Provide installation instructions. (Required)',
      validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the installation instructions for your project!');
          return false;
        }  
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information. (Required)',
      validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter the usage information for your project!');
          return false;
        }  
      }
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Provide guidelines on how other developers can contribute. (Required)',
      validate: contributingInput => {
        if (contributingInput) {
          return true;
        } else {
          console.log('Please provide contribution guidelines for other developers!');
          return false;
        }  
      }
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions. (Required)',
      validate: testsInput => {
        if (testsInput) {
          return true;
        } else {
          console.log('Please enter test instructions for your project!');
          return false;
        }  
      }
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose the license used for your project.',
      choices: ['MIT', 'ISC', 'GPL v3.0'],
      validate: licenseInput = () => {
        if (!licenseInput) {
          return false;
        } else {
          return true;
        }  
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your github username? (Required)',
      validate: githubInput => {
        if (githubInput) {
            return true;
        } else {
          console.log('Please provide your username.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address? (Required)',
      validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
          console.log('Please enter an email address.');
          return false;
        }
      }
    }
  ];

// function to write README file
const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/generatedREADME.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve ({
        ok: true
      });
    });  
  });
};

// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function(data) {
      console.log(data);
    var fileContent = generateMarkdown(data);
    writeToFile(fileContent)  
    });
}

// function call to initialize app
init();

// exports
module.exports = questions;
