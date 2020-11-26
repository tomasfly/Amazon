const checkElementVisible = require('./Support/Check/checkElementVisible')

class BasePage {
  loadPage (page) {
    const PagePath = require(`../../src/Apps/${global.app}/POM/${global.platform}/${page}`)
    global.currentPage = new PagePath()
    global.navigatedPages.push(page)
    return true
  }

  async getElement (friendlyName) {
    let ref = ''
    this.elements.forEach(element => {
      if (element.name.includes(friendlyName)) {
        ref = element.ref
      }
    })
    return await this.buildElement(ref)
  }

  getElementReference (friendlyName) {
    let ref = ''
    this.elements.forEach(element => {
      if (element.name.includes(friendlyName)) {
        ref = element.ref
      }
    })
    return ref
  }

  getRawElement (friendlyName) {
    let e = ''
    this.elements.forEach(element => {
      if (element.name.includes(friendlyName)) {
        e = element
      }
    })
    return e
  }

  async buildElement (ref) {
    if (ref.includes('//')) {
      return await global.page.$x(ref)
    }
    return await global.page.$(ref)
  }

  async checkPage () {
    let isPage = true
    for (let index = 0; index < this.checkElements.length; index++) {
      const element = await this.buildElement(this.checkElements[index].ref)
      const isVisible = await checkElementVisible(element)
      if (!isVisible) {
        isPage = false
        break
      }
    }
    return isPage
  }
}

module.exports = BasePage
