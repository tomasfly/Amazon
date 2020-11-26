const { expect } = require('chai')

module.exports = async (element) => {
  const res = await global.currentPage.waitFor(element)
  expect(res).to.equal(true)
}
