const { expect } = require('chai')

module.exports = async (text, element) => {
  const res = await global.currentPage.inputText(element, text)
  expect(res).to.equal(true)
}
