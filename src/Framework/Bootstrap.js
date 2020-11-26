const Puppeteer = require('../../src/Framework/Helpers/Lib/Puppeteer')
const setPlatform = require('../Framework/Support/Action/setPlatform')

class Bootstrap {
  constructor (config) {
    this.config = config
    this.navigatedPages = []
    this.currentPage = ''
  }

  async initFramework (platform, app) {
    const p = new Puppeteer(this.config)
    await p.init()
    await setPlatform(platform)
    global.navigatedPages = this.navigatedPages
    global.currentPage = this.currentPage
    global.app = app
    const PagePath = require('../../src/Framework/BasePage')
    global.currentPage = new PagePath()
  }

  async setPlatform (platform) {
    if (!platform) {
      throw new Error('A platform needs to be defined when calling this function')
    }
    if (platform === 'internet') platform = 'web'
    global.platform = platform
    const configuration = require(`../../config/Framework/${platform}/configuration.js`)
    global.page = await this._buildPage(configuration)
  }

  async _buildPage (configuration) {
    const page = await global.browser.newPage(configuration)
    page.setDefaultNavigationTimeout(15000)
    return page
  }
}

module.exports = Bootstrap
