const inquirer = require('inquirer');

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
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
