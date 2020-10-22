
# what's cookin
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![GitHub top language](https://img.shields.io/github/languages/top/kev-luo/what-s_cookin)

## Description
This application extends the previous employee-tracker application in terms of functionality by interacting with the MySQL database through API requests. Furthermore, this is a MVC application which outlines how a series of route handlers processes user requests and database responses based on a pre-defined model. This application was really just the implementation of the combined concepts we covered in the past two weeks, namely REST APIs and database management systems. Object relational mapping was the only new concept covered, which itself wasn't too difficult to grasp. However by separating route handlers and MySQL queries into separate modules, I had to do some research on asynchronicity since I wanted to use promises and async/await instead of callbacks. While I was able to do this by promisifying the MySQL query, I looked into something called Babel which is able to transpile code and allows Node to utilize ES6 syntax. 

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
    npm install

## Usage
The app has been deployed to Heroku and can be accessed at the link below. The following gif demonstrates the app's functions.

[Deployed App](https://who-is-hungry.herokuapp.com/)

![app demonstration](public/assets/img/You%20Hungry_.gif)

## License
Licensed under the [MIT](https://opensource.org/licenses/MIT) License.

## Contributing
Clone the repo and add additional functions as you see fit.

## Tests
    npm run test


## Questions
* [kvn.luo@gmail.com](kvn.luo@gmail.com)
