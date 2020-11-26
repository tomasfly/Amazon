const NavigationBar = require('../../../../Apps/Amazon/POM/web/NavigationBar')

class Home extends NavigationBar {
  constructor () {
    super()
    this.elements = [{
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
      name: ['search', 'searchField'],
      ref: '#twotabsearchtextbox'
    },
    {
      name: ['submit', 'searchButton'],
      ref: '.nav-right input[type="submit"]'
    }
    ]
  }
}

module.exports = Home
