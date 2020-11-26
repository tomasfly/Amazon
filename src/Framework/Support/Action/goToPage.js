const pageNavigator = require('../../Helpers/pageNavigator')

module.exports = async (page) => {
  if (!page) throw new Error('Please define a page to navigate to')
  await pageNavigator.navigate(page)
  await global.currentPage.loadPage(page)
  return true
}
