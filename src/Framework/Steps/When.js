const When = require('@cucumber/cucumber').When
const setValue = require('../Support/Action/setValue')
const click = require('../Support/Action/click')

When(
  /^I input "([^"]*)?" in "([^"]*)?"$/,
  setValue
)

When(
  /^I click on "([^"]*)?"$/,
  click
)
