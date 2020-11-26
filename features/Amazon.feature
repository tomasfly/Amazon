Feature: Amazon - Add products to cart

    Scenario: Add products to cart
        Given I am on "Home" page
        When I input "Hats for men" in "search box"
        And I click on "search button"
        And I click on "search result item"
        And I click on "quantity dropdown"
        Then I expect "two stock items" becomes displayed
        When I click on "two stock items"
        And I inspect price from "item price" and store it with value "first item price" and quantity "2"
        And I click on "add to cart"
        Then I expect "checkout button" becomes displayed
        And I expect to be on "NewItemsPage" page
        And I expect "cart" becomes displayed
        When I click on "cart"
        Then the price of element "subtotal" should be the one stored with value "first item price"
        When I input "Hats for women" in "search box"
        And I click on "search button"
        And I click on "search result item"
        And I inspect price from "item price" and store it with value "second item price" and quantity "1"
        And I click on "add to cart"
        Then I expect "checkout button" becomes displayed
        And I expect to be on "NewItemsPage" page
        And I expect "cart" becomes displayed
        When I click on "cart"
        Then the price of element "subtotal" should match stored values
        And I click on "quantity two item"
        And I click on "one quantity"
        When I modify stored value "first item price" to have "1" item
