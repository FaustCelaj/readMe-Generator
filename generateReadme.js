function renderLicenseBadge(license) {
    switch (license) {
        case 'Apache 2.0':
            badge = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
            break;
        case 'MIT':
            badge = `![License](https://img.shields.io/badge/License-MIT-yellow.svg)`;
            break;
    };
    return badge;
};

function renderLicenseLink(license) {
    switch (license) {
        case 'Apache 2.0':
            url = `[${license}](https://opensource.org/licenses/Apache-2.0)`;
            break;
        case 'MIT':
            url = `Source link for [${license}](https://opensource.org/licenses/MIT)`;
            break;
    }
    return url;
};

function renderLicenseSection(license) {
    if (!license) {
        return '';
    } else {
        return (
`## License
${renderLicenseBadge(license)}
${renderLicenseLink(license)}
`
        )
    };
};

// TODO: Create a function to generate markdown for README
function generateReadMe(data) {
    return `
# ${data.title}

## Description

${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributors

${data.contributors}

## Tests

${data.tests}

## Questions

${data.questions}

## Contact

[GitHub Profile](https://github.com/${data.github})

[Email Me](${data.email})

`
};

module.exports = generateReadMe;