const Page = require('../../../../Framework/POM/Web/Page')

class NavigationBar extends Page {
  constructor () {
    super()
    this.elements = [{
      name: ['cart', 'cart button'],
      ref: '.nav-cart-icon',
      onClick: 'CartPage'
    },
    {
      name: ['search box', 'searchField'],
      ref: '#twotabsearchtextbox'
    },
    {
      name: ['submit', 'searchButton', 'search button'],
      ref: '.nav-right input[type="submit"]',
      onClick: 'SearchResults'
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
