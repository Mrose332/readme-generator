
function renderLicenseBadge(license) {
  return `![Github license](http://img.shields.io/badge/license-${license}-blue.svg)`
}


function renderLicenseLink(license) {}


function renderLicenseSection(license) {
  return `## License 
  This project is license under ${license}
  ${renderLicenseBadge(license)}
  `
}


function generateMarkdown(data) {
  return `# ${data.title}
   
  ## Description
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


