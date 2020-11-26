const Given = require('@cucumber/cucumber').Given
const goToPage = require('../Support/Action/goToPage')

Given(
  /^I am on "([^"]*)?" page$/,
  goToPage
)
