const { expect } = require('chai')

module.exports = async (element) => {
  const text = await global.currentPage.getText(element)
  const regex = /[+-]?\d+(\.\d+)?/g
  const price = parseFloat(text.match(regex)).toFixed(2)
  const priceParsed = parseFloat(price)
  const storedValue = global.store.get()
  const priceArray = Object.values(storedValue)
  let total = 0
  for (let index = 0; index < priceArray.length; index++) {
    const element = priceArray[index]
    total = total + element
  }
  expect(priceParsed).to.equal(total)
}
