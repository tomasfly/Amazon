const puppeteer = require('puppeteer')

class Puppeteer {
  constructor (config) {
    this.headless = config.headless
    this.args = config.args
    this.defaultViewport = null
  }

  async init () {
    global.browser = await puppeteer.launch({ headless: this.headless, args: this.args, defaultViewport: this.defaultViewport })
  }
}
module.exports = Puppeteer
