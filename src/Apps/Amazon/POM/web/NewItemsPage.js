const NavigationBar = require('../../../../Apps/Amazon/POM/web/NavigationBar')

class NewItemsPage extends NavigationBar {
  constructor () {
    super()
    this.elements = [{
      name: ['checkout button', 'proceed to checkout button'],
      ref: '#hlb-ptc-btn-native'
    },
    ...this.elements
    ]
    this.checkElements = [{
      name: ['checkout button', 'proceed to checkout button'],
      ref: '#hlb-ptc-btn-native'
    },
    ...this.checkElements
    ]
  }
}

module.exports = NewItemsPage
