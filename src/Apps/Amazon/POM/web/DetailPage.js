const NavigationBar = require('../../../../Apps/Amazon/POM/web/NavigationBar')

class DetailPage extends NavigationBar {
  constructor () {
    super()
    this.elements = [{
      name: ['quantity', 'quantity dropdown'],
      ref: 'select[name="quantity"]'
    },
    {
      name: ['two stock items', 'two items'],
      ref: '#quantity_1'
    },
    {
      name: ['price', 'item price'],
      ref: '#price_inside_buybox'
    },
    {
      name: ['add to cart', 'add item to cart'],
      ref: '#add-to-cart-button',
      onClick: 'NewItemsPage'
    },
    ...this.elements
    ]
    this.checkElements = [{
      name: ['quantity', 'quantity dropdown'],
      ref: 'select[name="quantity"]'
    },
    ...this.checkElements
    ]
  }
}

module.exports = DetailPage
