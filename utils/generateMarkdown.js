// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    renderLicenseBadge.license = [];
  } else {
    const badges = {
      MIT:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      ISC:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
      GPLv3:'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
    }
    return badges[license]
  }
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}
const renderLicenseLink = (license) => {
  if (!license) {
    renderLicenseLink.license = [];
  } else {
    const licenseLinks = {
      MIT: '[MIT](https://choosealicense.com/licenses/mit/)',
      ISC: '[ISC](https://choosealicense.com/licenses/isc/)',
      GPLv3: '[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)'
    }
    return licenseLinks[license]
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

const generateMarkdown = (data) => {
  return `
  # ${data.title}

  ## Table of Contents
  - [Project description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  - [License](#License)

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

  ## License
  ${this.renderLicenseLink(data.license)}
  `
};


module.exports = generateMarkdown.data;
