const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;

//ask the questions
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a short description of the project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the required steps to install the project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license do you want to use?',
            choices: ['MIT', 'Apache 2.0'],
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for the project?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'What questions do you want answered about the project?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What github do you want to use (link your github )?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ]);
  };

const generateReadMe = ({ title, description, installation, usage, license, contributors, tests, questions, github, email }) =>
    `
# ${title}

## Description
${description}

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
${installation}

## Usage
${usage}
${renderLicenseSection(license)}

## Contributors
${contributors}

## Tests
${tests}

## Questions
${questions}

## Contact

[GitHub Profile](https://github.com/${github})
[Email Me](${email})
`;

const init = () => {
    promptUser()
        .then((answers) => writeFile('readme.md', generateReadMe(answers)))
        .then(() => console.log('Successfully wrote readme.md'))
        .catch((err) => console.error(err));
};

init();


// render the licenses
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

