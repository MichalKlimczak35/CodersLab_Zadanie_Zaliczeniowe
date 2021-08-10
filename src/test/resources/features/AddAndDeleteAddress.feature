Feature: AddAndDeleteAddress

  Scenario Outline: User can add and delete his an address
    Given User is on Main site
    When User goes to sign in site
    And User logs in using email and password. <email> , <password>
    And User fill the new address form with the following information: <allias> , <company> , <address> , <zip code> , <city> , <phone> , <country>
    Then User will verify if the address he provided is correct. <allias> , <company> , <address> , <zip code> , <city> , <phone> , <country>
    And User can delete the address

    Examples:
      | email                        | password   | allias | company    | address  | zip code | city     | phone     | country        |
      | utfsitumnkgcnazjnc@tbbyt.net | test125678 | MK     | Coders Lab | Zgoda 13 | 01-805   | Pruszkow | 156984777 | United Kingdom |



