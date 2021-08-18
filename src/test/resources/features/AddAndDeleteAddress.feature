Feature: AddAndDeleteAddress

  Scenario Outline: User can add and delete his an address
    Given User is on Main site
    When User goes to sign in site
    And User logs in using email and password. <email> , <password>
    And User fill the new address form with the following information: <alias> , <company> , <address> , <zip code> , <city> , <phone> , <country>
    Then User will verify if the address he provided is correct. <alias> , <company> , <address> , <zip code> , <city> , <phone> , <country>
    And User can delete the address

    Examples:
      | email                        | password   | alias | company    | address   | zip code | city     | phone     | country        |
      | utfsitumnkgcnazjnc@tbbyt.net | test125678 | MK    | Coders Lab | Zgoda 13  | 01-805   | Pruszkow | 156984777 | United Kingdom |
      | yzwsqvwdedjmisdvlw@uivvn.net | 123456789  | MK2   | Coders Lab | Promyka 1 | 02-572   | Pruszkow | 123457954 | United Kingdom |




