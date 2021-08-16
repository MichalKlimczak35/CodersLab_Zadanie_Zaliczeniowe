Feature: BuyASweater

  Scenario Outline: User can buy a sweater
    Given User is on Main site
    When User goes to sign in site
    And User logs in onto his account using email and password. <email> , <password>
    And User returns to the Main site
    And User can select Hummingbird printed sweater
    And User can see if the product has an discount
    And User can select desired size of the product <size>
    And User can select <amount> of products to order
    And User can proceed to checkout
    And User can place an order filling necessary information. <address> , <zipCode> , <city> , <country>
    Then User makes a screenshot of their order

    Examples:
      | email                        | password   | size | amount | address  | zipCode | city     | country        |
      | utfsitumnkgcnazjnc@tbbyt.net | test125678 | XL   | 4      | Zgoda 13 | 01-007  | Pruszkow | United Kingdom |



