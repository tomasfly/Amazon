class PageLoader {
  static loadPage (page) {
    const PagePath = require(`../../Apps/${global.app}/POM/${global.platform}/${page}`)
    global.currentPage = new PagePath()
    global.navigatedPages.push(page)
    return true
  }
}

module.exports = PageLoader
