# Test automation solution with Puppeteer and Cucumber

# Instructions

1. Clone this repository
2. Execute ```npm install``` or ```yarn install```
3. To execute unit test: ```yarn test``` or ```npm run test```
4. To execute functional tests: ```yarn start``` or ```npm run start```

# Stack
* Puppeteer
* Nodejs
* Cucumber JS
* Chai
* Jest
* eslint
* data-store

# Things to point out from the exercise
* Report is printed in console but also in JSON format in /reports/ folder which can be then handled as needed.
* POM design pattern was implemented allowing to scale the framework to different platforms and applications.
* There is a logical and a physical navigation through the framework which allows to store in memory each page object.
* Elements can be called with friendly names which can be enumerated in the POMs.
* Bootstrap.js file contains all the necessary objects which need to be instantiated before executing tests
* Configuration is modularized allowing to handle different platforms and applications
* There are two levels of implementations: Generic and application specific
* Unit tests are included in this framework. For now only one function is tested but this will be enlarged in the future
* Steps are well organized having each function in a separate file, which can be later unit tested easily
