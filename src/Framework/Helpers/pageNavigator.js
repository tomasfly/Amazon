
class PageNavigator {
  static async navigate (page) {
    const pages = require(`../../../config/App/${global.platform}/${global.app}/pages`)
    if (page in pages) {
      await global.page.goto(pages[page])
      return true
    }
    await global.page.goto(page)
    return true
  }
}

module.exports = PageNavigator
