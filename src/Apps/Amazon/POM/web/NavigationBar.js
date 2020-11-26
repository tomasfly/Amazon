const Page = require('../../../../Framework/POM/Web/Page')

class NavigationBar extends Page {
  constructor () {
    super()
    this.elements = [{
      name: ['cart', 'cart button'],
      ref: '.nav-cart-icon',
      onClick: 'CartPage'
    }

    ]
    this.checkElements = [{
      name: ['cart', 'cart button'],
      ref: '.nav-cart-icon',
      onClick: 'CartPage'
    }
    ]
  }
}

module.exports = NavigationBar
