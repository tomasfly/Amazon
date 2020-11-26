const When = require('@cucumber/cucumber').When
const storePrice = require('../../Amazon/Support/Action/storePrice')
const modifyStoredValue = require('../../Amazon/Support/Action/modifyStoredValue')

When(
  /^I inspect price from "([^"]*)?" and store it with value "([^"]*)?" and quantity "([^"]*)?"$/,
  storePrice
)

When(
  /^I modify stored value "([^"]*)?" to have "([^"]*)?" item$/,
  modifyStoredValue
)
