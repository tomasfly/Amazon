Feature: Amazon - Add products to cart

    Scenario: Add products to cart
    Given I am on "Home" page
    When I input "Hats for men" in "search box"
    And I click on "search button"
    And I click on "search result item"
    And I click on "quantity dropdown"
    Then I expect "two stock items" becomes displayed
    When I click on "two stock items"
    And I click on "add to cart"
    And I click on "cart"