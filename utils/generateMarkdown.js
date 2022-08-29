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
