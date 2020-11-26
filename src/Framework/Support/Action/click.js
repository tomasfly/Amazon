const { expect } = require('chai')

module.exports = async (element) => {
  const res = await global.currentPage.click(element)
  expect(res).to.equal(true)
}
