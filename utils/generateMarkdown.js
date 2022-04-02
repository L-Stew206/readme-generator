// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  console.log ( license )
  if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Apache License 2.0') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license === 'Mozilla Public License 2.0') {
    return `[This application is licensed under Mozilla](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license === 'Apache License 2.0') {
    return `[This application is licensed under Apache]((https://opensource.org/licenses/Apache-2.0))`;
  } else if (license === 'MIT License') {
    return `[This application is licensed under MIT](https://opensource.org/licenses/MIT)`;
  } else if (license === 'Boost Software License 1.0') {
    return `[This application is licensed under Boost](https://www.boost.org/LICENSE_1_0.txt)`;
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ( license == 'none') {
    return ``;
  } else { 
    return `## License `;
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## Contributing 
  ${data.contributing}
  ## Tests 
  ${data.tests}
  ## Questions
  ### GitHub
  [GitHub](https://www.github.com/${data.github}) 
  ### Email
  ${data.email}
  ##
  ${renderLicenseBadge (data.license)}
  ${renderLicenseLink (data.license)}
`;
}

module.exports = generateMarkdown;
