// Function that returns a license badge based on which license chosen
// If there is no license, then returns an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (license === 'BSD') {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
  } else if (license === 'Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
  } else if (license === 'None'){
    return '';
  };
};

// Function that returns the license link based on which license chosen
// If there is no license, then returns an empty string
function renderLicenseLink(license) { 
  if (license === 'MIT') {
     return `MIT License (https://opensource.org/licenses/MIT)`;
  } else if (license === 'Apache') {
     return `Apache 2.0 License (https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'BSD') {
     return `BSD 2-Clause License (https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license === 'Unlicense') {
     return `The Unlicense (http://unlicense.org/)`;
  } else if (license === 'None'){
     return '';
  };
};

// Function that returns the license section of README
// If there is no license, then returns an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  } else {
    return `## License
    
    ${license}
    `;
  };
};

// Function to generate markdown for README
const generateMarkdown = (data) => {

  const badge = renderLicenseBadge(data.license);
  const link = renderLicenseLink(data.license);

  return `# ${data.title}

  ${badge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ![alt text](.${data.image})

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ${renderLicenseSection(link)} 

  ## Questions

  GitHub Profile: https://github.com/${data.github}

  If you have further questions about this application, I can be reached by e-mail: ${data.email}

`;
}

module.exports = generateMarkdown;
