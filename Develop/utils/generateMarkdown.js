// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contribution](#Contribution)
  * [Testing](#Testing)
  * [Inquiries](#Inquiries)

  ***

  ##Installation

  ${data.install}

  ##Usage

  ${data.usage}

  ${renderLicenseSection(data)}

  ##Contribution

  ${data.contribution}

  ##Testing

  ${data.test}

  ##Inquiries

  >Email: ${data.email}

  >GitHub: [${data.user}](https://github.com/${data.user})
`;
}

module.exports = {generateMarkdown};
