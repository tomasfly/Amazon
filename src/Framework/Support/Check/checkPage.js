const { expect } = require('chai')

module.exports = async (page) => {
  global.currentPage.loadPage(page)
  const isPage = global.currentPage.checkPage()
  expect(isPage).to.equal(true)
}
