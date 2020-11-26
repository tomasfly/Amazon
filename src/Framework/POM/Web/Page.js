const BasePage = require('../../BasePage')
const logger = require('../../../../src/Framework/Helpers/logger')
class Page extends BasePage {
  async inputText (friendlyName, text) {
    const ref = super.getElementReference(friendlyName)
    await global.page.type(ref, text)
    return true
  }

  async waitFor (selector) {
    const rawElement = super.getRawElement(selector)
    global.page.waitFor(rawElement)
    return true
  }

  async click (friendlyName) {
    const rawElement = super.getRawElement(friendlyName)
    const element = await super.getElement(friendlyName)
    try {
      if (element.constructor === Array) {
        await element[0].click()
      } else {
        await element.click()
      }
    } catch (e) {
      logger.error(`Element ${friendlyName} not found \n ${e}`)
    }
    if (rawElement.onClick) {
      await global.page.waitForNavigation({ waitUntil: 'networkidle2' })
      super.loadPage(rawElement.onClick)
      if (rawElement.waitFor) {
        if (rawElement.waitFor.includes('//')) {
          await global.page.waitForXPath(rawElement.waitFor)
        } else {
          await global.page.waitForSelector(rawElement.waitFor)
        }
      }
    }
    return true
  }

  async getElementCoordenates (element) {
    return element.boundingBox()
  }
}

module.exports = Page
