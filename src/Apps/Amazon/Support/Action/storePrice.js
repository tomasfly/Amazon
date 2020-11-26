module.exports = async (element, storeValue, quantity) => {
  const quantityParsed = parseInt(quantity)
  const text = await global.currentPage.getText(element)
  const regex = /[+-]?\d+(\.\d+)?/g
  const price = parseFloat(text.match(regex)).toFixed(2)
  const priceParsed = parseFloat(price)
  global.store.set(storeValue, priceParsed * quantityParsed)
}
