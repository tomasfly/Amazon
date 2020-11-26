const Then = require('@cucumber/cucumber').Then
const checkPrice = require('../../Amazon/Support/Check/checkPrice')
const checkTotalPrice = require('../../Amazon/Support/Check/checkTotalPrice')

Then(
  /^the price of element "([^"]*)?" should be the one stored with value "([^"]*)?"$/,
  checkPrice
)

Then(
  /^the price of element "([^"]*)?" should match stored values$/,
  checkTotalPrice
)
