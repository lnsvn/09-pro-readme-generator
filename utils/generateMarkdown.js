// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({title, description, installation, image, usage, license, contributing, tests, github, email}) => {
  return `# ${title}

  ## Description

  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Installation

  ${installation}

  ## Usage

  ![alt text](.${image})

  ${usage}

  ## Contributing

  ${contributing}

  ## Tests

  ${tests}

  ## License

  ${license}

  ## Questions

  GitHub Profile: https://github.com/${github}

  E-mail: ${email}

`;
}

module.exports = generateMarkdown;
