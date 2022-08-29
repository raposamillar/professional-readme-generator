// function that returns a license badge based upon which license is passed in
// no license returns an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license === 'ISC') {
    badge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (license === 'GPL v3.0') {
    badge = '[![License: GPL v3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
    badge = ''
  }
  return badge;
}

// function that returns the license link
function renderLicenseLink(license) {
  let licenseLink = '';
  if (license === 'MIT') {
    licenseLink = 'This applicaton is covered under the [MIT](https://choosealicense.com/licenses/mit/) license.'
  } else if (license === 'ISC') {
    licenseLink = 'This application is covered under the [ISC](https://choosealicense.com/licenses/isc/ license.'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'This application is covered under the [GPL v3.0](https://choosealicense.com/licenses/gpl-3.0/) license.'
  } else {
    licenseLink = ''
  }
  return licenseLink;
};

// function that returns the license section of README
function renderLicenseSection(license) {
  if(license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License`
  }  
  return licenseSection;
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ### ${renderLicenseBadge(data.license)} 

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)

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
  GitHub: ${data.github}  </br>
  Email: ${data.email}

  ## ${renderLicenseSection(data.license)}
  ### ${renderLicenseLink(data.license)}
 



  `;
};

// exports
module.exports = generateMarkdown;
