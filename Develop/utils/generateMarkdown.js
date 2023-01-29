// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License 
  This project is license under ${license}
  ${renderLicenseBadge(license)}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${data.description}


    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
       

## Installation
${data.installation} 

## Usage 
${data.usage}

## Contributing 
${data.contributors}

## Tests
${data.test}

## Questions
Reach me for additional questions at: ${data.email}.

To view deployed project at: https://github.com/${data.github}.



    ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
