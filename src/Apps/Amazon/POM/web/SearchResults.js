const NavigationBar = require('../../../../Apps/Amazon/POM/web/NavigationBar')

class SearchResults extends NavigationBar {
  constructor () {
    super()
    this.elements = [{
      name: ['item', 'search result item'],
      ref: '.s-result-item.s-asin',
      onClick: 'DetailPage'
    },
    ...this.elements
    ]
    this.checkElements = [{
      name: ['item', 'search result item'],
      ref: '.s-result-item.s-asin',
      onClick: 'DetailPage'
    },
    ...this.checkElements
    ]
  }
}

module.exports = SearchResults
