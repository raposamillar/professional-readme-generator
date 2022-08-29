// const fs = require('fs');
// const inquirer = require('inquirer');
// const index = require('index.js');

// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'ISC') {
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'GPL v3.0') {
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ''
  }
  return badge;
}

// const renderLicenseBadge = (license) => {
//   if (license === '') {
//     renderLicenseBadge.license = '';
//   } else {
//     const badges = {
//       MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//       ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
//       GPLv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
//     }
//     return badges[license]
//   }
// } 

// Create a function that returns the license link
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = '[MIT](https://choosealicense.com/licenses/mit/)'
  } else if (license === 'ISC') {
    licenseLink = '[ISC](https://choosealicense.com/licenses/isc/)'
  } else if (license === 'GPL v3.0') {
    licenseLink = '[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
  } else {
    licenseLink = ''
  }
  return licenseLink;
};

// const renderLicenseLink = (license) => {
//   if (license === '') {
//     renderLicenseLink.license = '';
//   } else {
//     const licenseLinks = {
//       MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
//       ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
//       GPLv3: '[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
//     }
//     return licenseLinks[license]
//   }
// }

// Create a function that returns the license section of README
function renderLicenseSection(license) {
  if(license === 'None') {
    licenseSenction = ''
  } else {
    licenseSection =
    `License: $(license)`
  }  
  return licenseSection;
}

// const renderLicenseSection = (license) => {
//   if (license === '') {
//     renderLicenseSection = '';
//   } else {
//     return `Licensed under the ${renderLicenseSection(license)} license`
//   }  
// }


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description 
  ${data.description}
  
  ## Installation 
  ${data.installation}
  
  ## Usage
  ${data.usage}

  ## Contributing 
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions 
  ${data.email}
  ${data.github}

  `;
};

// exports
module.exports = generateMarkdown;
