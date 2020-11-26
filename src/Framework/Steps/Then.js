const Then = require('@cucumber/cucumber').Then
const waitForDisplayed = require('../Support/Action/waitForDisplayed')

Then(
  /^I expect "([^"]*)?" becomes displayed$/,
  waitForDisplayed
)
