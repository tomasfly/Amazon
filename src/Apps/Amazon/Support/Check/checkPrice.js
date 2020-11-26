const { expect } = require('chai')

module.exports = async (element, storedPrice) => {
  const text = await global.currentPage.getText(element)
  const regex = /[+-]?\d+(\.\d+)?/g
  const price = parseFloat(text.match(regex)).toFixed(2)
  const priceParsed = parseFloat(price)
  const storedValue = global.store.get(storedPrice)
  expect(priceParsed).to.equal(storedValue)
}
