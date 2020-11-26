const { expect } = require('chai')

module.exports = async (page) => {
  expect(page).to.equal(global.currentPage.constructor.name)
  const isPage = await global.currentPage.checkPage()
  expect(isPage).to.equal(true)
}
