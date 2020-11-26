const Then = require('@cucumber/cucumber').Then
const waitForDisplayed = require('../Support/Action/waitForDisplayed')
const checkPage = require('../Support/check/checkPage')

Then(
  /^I expect "([^"]*)?" becomes displayed$/,
  waitForDisplayed
)

Then(
  /^I expect to be on "([^"]*)?" page$/,
  checkPage
)
