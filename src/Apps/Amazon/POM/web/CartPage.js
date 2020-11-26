const NavigationBar = require('../../../../Apps/Amazon/POM/web/NavigationBar')

class CartPage extends NavigationBar {
  constructor () {
    super()
    this.elements = [
      ...this.elements
    ]
    this.checkElements = [
      ...this.checkElements
    ]
  }
}

module.exports = CartPage
