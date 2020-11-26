const NavigationBar = require('../../../../Apps/Amazon/POM/web/NavigationBar')

class CartPage extends NavigationBar {
  constructor () {
    super()
    this.elements = [
      {
        name: ['subtotal', 'subtotal price'],
        ref: '#sc-subtotal-amount-activecart span'
      },
      {
        name: ['two item', 'quantity two item'],
        ref: '// span[text()="2"]'
      },
      {
        name: ['one item', 'one item selection'],
        ref: '//div[contains(@class,"a-popover-inner")]//li//a[contains(.,"1")]'
      },
      ...this.elements
    ]
    this.checkElements = [
      {
        name: ['subtotal', 'subtotal price'],
        ref: '#sc-subtotal-amount-activecart span'
      },
      ...this.checkElements
    ]
  }
}

module.exports = CartPage
